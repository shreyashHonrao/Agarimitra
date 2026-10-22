// ===== AGRIMITRA ADVANCED FEATURES =====

// ===== 1. VOICE ASSISTANT =====
let voiceRecognition = null;
let voiceActive = false;
let voiceSynthesis = window.speechSynthesis;

function initVoiceAssistant() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) return;
  voiceRecognition = new SpeechRecognition();
  voiceRecognition.continuous = false;
  voiceRecognition.interimResults = false;
  voiceRecognition.lang = getVoiceLang();
  voiceRecognition.onresult = (e) => {
    const transcript = e.results[0][0].transcript;
    handleVoiceInput(transcript);
  };
  voiceRecognition.onerror = () => { setVoiceBtnState(false); };
  voiceRecognition.onend = () => { setVoiceBtnState(false); voiceActive = false; };
}

function getVoiceLang() {
  const l = currentLang || 'en';
  if (l === 'hi') return 'hi-IN';
  if (l === 'mr') return 'mr-IN';
  return 'en-IN';
}

function toggleVoice() {
  if (!voiceRecognition) { initVoiceAssistant(); }
  if (!voiceRecognition) { showFdToast('Voice not supported in this browser.'); return; }
  if (voiceActive) {
    voiceRecognition.stop(); voiceActive = false; setVoiceBtnState(false); return;
  }
  voiceRecognition.lang = getVoiceLang();
  voiceRecognition.start();
  voiceActive = true;
  setVoiceBtnState(true);
}

function setVoiceBtnState(active) {
  const btn = document.getElementById('voiceSearchBtn');
  if (!btn) return;
  btn.classList.toggle('voice-active', active);
  btn.title = active ? 'Listening...' : 'Voice Search';
  btn.innerHTML = active ? '<i class="fas fa-microphone-slash"></i>' : '<i class="fas fa-microphone"></i>';
}

function handleVoiceInput(text) {
  const inp = document.getElementById('searchInput');
  if (inp) { inp.value = text; liveSearch(text); }
  // Also route to chatbot if chatbot is open
  const chatInp = document.getElementById('chatInput');
  if (chatInp && document.getElementById('chatbotWindow').classList.contains('open')) {
    chatInp.value = text;
    setTimeout(() => { sendChat(); }, 100);
  }
  speakText('Searching for: ' + text);
}

function speakText(text, lang) {
  if (!voiceSynthesis) return;
  voiceSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = lang || getVoiceLang();
  utter.rate = 0.95;
  voiceSynthesis.speak(utter);
}

function speakSchemeDetails(key) {
  const s = schemes[key]; if (!s) return;
  if (!voiceSynthesis) return;
  voiceSynthesis.cancel();

  // Map scheme key to translation desc key
  const descKey = key === 'soilhealth' ? 'soil_desc' : key + '_desc';
  const enText = `${s.fullName}. ${translations.en[descKey] || s.description.slice(0, 150)}`;
  const hiText = `${s.fullName}. ${translations.hi[descKey] || ''}`;
  const mrText = `${s.fullName}. ${translations.mr[descKey] || ''}`;

  const utterEn = new SpeechSynthesisUtterance(enText);
  utterEn.lang = 'en-IN'; utterEn.rate = 0.92;

  const utterHi = new SpeechSynthesisUtterance(hiText);
  utterHi.lang = 'hi-IN'; utterHi.rate = 0.92;

  const utterMr = new SpeechSynthesisUtterance(mrText);
  utterMr.lang = 'mr-IN'; utterMr.rate = 0.92;

  // Chain: English → Hindi → Marathi
  utterEn.onend = () => voiceSynthesis.speak(utterHi);
  utterHi.onend = () => voiceSynthesis.speak(utterMr);

  voiceSynthesis.speak(utterEn);
}

// ===== 2. CROP PROFIT/LOSS CALCULATOR =====
function calcCropProfit() {
  const area = parseFloat(document.getElementById('cpArea').value);
  const inputCost = parseFloat(document.getElementById('cpInputCost').value);
  const yield_ = parseFloat(document.getElementById('cpYield').value);
  const msp = parseFloat(document.getElementById('cpMSP').value);
  const res = document.getElementById('cpResult');
  if (!area || !inputCost || !yield_ || !msp) {
    res.innerHTML = '<p style="color:#E53935"><i class="fas fa-exclamation-circle"></i> Please fill all fields.</p>';
    res.classList.add('show'); return;
  }
  const totalRevenue = yield_ * msp * area;
  const totalCost = inputCost * area;
  const profit = totalRevenue - totalCost;
  const roi = ((profit / totalCost) * 100).toFixed(1);
  res.innerHTML = `
    <div class="result-title"><i class="fas fa-chart-line"></i> Crop Profit/Loss Analysis</div>
    <div class="result-row"><span>Total Revenue</span><span>₹${Math.round(totalRevenue).toLocaleString('en-IN')}</span></div>
    <div class="result-row"><span>Total Input Cost</span><span>₹${Math.round(totalCost).toLocaleString('en-IN')}</span></div>
    <div class="result-row"><span>Net ${profit >= 0 ? 'Profit' : 'Loss'}</span><span style="color:${profit >= 0 ? 'var(--green)' : '#E53935'}">₹${Math.abs(Math.round(profit)).toLocaleString('en-IN')}</span></div>
    <div class="result-row"><span>Return on Investment</span><span>${roi}%</span></div>`;
  res.classList.add('show');
}

// ===== 3. MSP LOOKUP =====
const mspData = {
  rice: { name: 'Rice (Common)', msp: 2300, season: 'Kharif 2024-25' },
  wheat: { name: 'Wheat', msp: 2275, season: 'Rabi 2024-25' },
  cotton: { name: 'Cotton (Medium Staple)', msp: 7121, season: 'Kharif 2024-25' },
  sugarcane: { name: 'Sugarcane (FRP)', msp: 340, season: '2024-25', unit: 'per quintal' },
  maize: { name: 'Maize', msp: 2090, season: 'Kharif 2024-25' },
  soybean: { name: 'Soybean', msp: 4892, season: 'Kharif 2024-25' },
  tur: { name: 'Tur (Arhar)', msp: 7550, season: 'Kharif 2024-25' },
  moong: { name: 'Moong (Green Gram)', msp: 8682, season: 'Kharif 2024-25' },
  groundnut: { name: 'Groundnut', msp: 6783, season: 'Kharif 2024-25' },
  onion: { name: 'Onion (indicative)', msp: 800, season: '2024-25', note: 'State advisory price' }
};

function lookupMSP() {
  const crop = document.getElementById('mspCrop').value;
  const res = document.getElementById('mspResult');
  const d = mspData[crop];
  if (!d) { res.innerHTML = '<p style="color:#E53935">MSP data not available for this crop.</p>'; res.classList.add('show'); return; }
  res.innerHTML = `
    <div class="result-title"><i class="fas fa-rupee-sign"></i> MSP Information</div>
    <div class="result-row"><span>Crop</span><span>${d.name}</span></div>
    <div class="result-row"><span>MSP</span><span style="color:var(--green);font-size:1.1rem">₹${d.msp.toLocaleString('en-IN')} / quintal</span></div>
    <div class="result-row"><span>Season</span><span>${d.season}</span></div>
    ${d.note ? `<p style="font-size:0.76rem;color:var(--gray-500);margin-top:8px"><i class="fas fa-info-circle"></i> ${d.note}</p>` : ''}
    <p style="font-size:0.76rem;color:var(--gray-500);margin-top:8px"><i class="fas fa-info-circle"></i> Source: CACP, Govt. of India. Verify at <a href="https://cacp.dacnet.nic.in" target="_blank" style="color:var(--blue)">cacp.dacnet.nic.in</a></p>`;
  res.classList.add('show');
}

// ===== 4. FERTILIZER DOSE CALCULATOR =====
function calcFertilizer() {
  const crop = document.getElementById('fertCrop').value;
  const area = parseFloat(document.getElementById('fertArea').value);
  const res = document.getElementById('fertResult');
  if (!area || area <= 0) { res.innerHTML = '<p style="color:#E53935"><i class="fas fa-exclamation-circle"></i> Enter valid area.</p>'; res.classList.add('show'); return; }
  const doses = {
    rice: { N: 120, P: 60, K: 60 }, wheat: { N: 120, P: 60, K: 40 },
    cotton: { N: 150, P: 60, K: 60 }, sugarcane: { N: 250, P: 115, K: 115 },
    maize: { N: 120, P: 60, K: 40 }, soybean: { N: 30, P: 60, K: 40 },
    vegetables: { N: 100, P: 50, K: 50 }, pulses: { N: 20, P: 50, K: 20 }
  };
  const d = doses[crop] || doses.wheat;
  const ha = area * 0.4047;
  const urea = Math.round((d.N / 0.46) * ha);
  const dap = Math.round((d.P / 0.46) * ha);
  const mop = Math.round((d.K / 0.60) * ha);
  res.innerHTML = `
    <div class="result-title"><i class="fas fa-leaf"></i> Recommended Fertilizer Dose</div>
    <div class="result-row"><span>Area</span><span>${area} acres (${ha.toFixed(2)} ha)</span></div>
    <div class="result-row"><span>Urea (N source)</span><span>${urea} kg</span></div>
    <div class="result-row"><span>DAP (P source)</span><span>${dap} kg</span></div>
    <div class="result-row"><span>MOP (K source)</span><span>${mop} kg</span></div>
    <p style="font-size:0.76rem;color:var(--gray-500);margin-top:8px"><i class="fas fa-info-circle"></i> Based on ICAR recommendations. Adjust as per Soil Health Card results.</p>`;
  res.classList.add('show');
}

// ===== 5. LAND AREA CONVERTER =====
function convertArea() {
  const val = parseFloat(document.getElementById('areaVal').value);
  const from = document.getElementById('areaFrom').value;
  const res = document.getElementById('areaResult');
  if (!val || val <= 0) { res.innerHTML = '<p style="color:#E53935">Enter a valid value.</p>'; res.classList.add('show'); return; }
  // All to hectares first
  const toHa = { acres: 0.4047, hectares: 1, guntha: 0.01012, bigha: 0.2529, sqft: 0.0000929 };
  const ha = val * (toHa[from] || 1);
  res.innerHTML = `
    <div class="result-title"><i class="fas fa-ruler-combined"></i> Area Conversion</div>
    <div class="result-row"><span>Acres</span><span>${(ha / 0.4047).toFixed(3)}</span></div>
    <div class="result-row"><span>Hectares</span><span>${ha.toFixed(4)}</span></div>
    <div class="result-row"><span>Guntha</span><span>${(ha / 0.01012).toFixed(2)}</span></div>
    <div class="result-row"><span>Bigha</span><span>${(ha / 0.2529).toFixed(3)}</span></div>
    <div class="result-row"><span>Sq. Feet</span><span>${Math.round(ha / 0.0000929).toLocaleString('en-IN')}</span></div>`;
  res.classList.add('show');
}

// ===== 6. WATER REQUIREMENT CALCULATOR =====
function calcWater() {
  const crop = document.getElementById('waterCrop').value;
  const area = parseFloat(document.getElementById('waterArea').value);
  const season = document.getElementById('waterSeason').value;
  const res = document.getElementById('waterResult');
  if (!area || area <= 0) { res.innerHTML = '<p style="color:#E53935">Enter valid area.</p>'; res.classList.add('show'); return; }
  const waterReq = {
    rice: { kharif: 1200, rabi: 1400 }, wheat: { kharif: 450, rabi: 450 },
    cotton: { kharif: 700, rabi: 700 }, sugarcane: { kharif: 1800, rabi: 1800 },
    maize: { kharif: 500, rabi: 500 }, vegetables: { kharif: 400, rabi: 400 },
    pulses: { kharif: 300, rabi: 300 }
  };
  const mm = (waterReq[crop] || waterReq.wheat)[season] || 500;
  const ha = area * 0.4047;
  const liters = Math.round(mm * ha * 10);
  res.innerHTML = `
    <div class="result-title"><i class="fas fa-tint"></i> Water Requirement</div>
    <div class="result-row"><span>Crop Water Need</span><span>${mm} mm/season</span></div>
    <div class="result-row"><span>Total Water Required</span><span>${(liters / 1000000).toFixed(2)} ML</span></div>
    <div class="result-row"><span>Daily Average</span><span>${Math.round(liters / 120 / 1000)} KL/day</span></div>
    <p style="font-size:0.76rem;color:var(--gray-500);margin-top:8px"><i class="fas fa-info-circle"></i> Drip irrigation can save 40-50% water. Apply for PMKSY subsidy.</p>`;
  res.classList.add('show');
}

// ===== 7. WEATHER ADVISORY =====
async function fetchWeather() {
  const city = document.getElementById('weatherCity').value.trim();
  const res = document.getElementById('weatherResult');
  if (!city) { res.innerHTML = '<p style="color:#E53935">Enter your city/district name.</p>'; res.classList.add('show'); return; }
  res.innerHTML = '<p><i class="fas fa-spinner fa-spin"></i> Fetching weather...</p>'; res.classList.add('show');
  try {
    // Open-Meteo geocoding + weather (free, no key needed)
    const geoRes = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&country=IN`);
    const geoData = await geoRes.json();
    if (!geoData.results || !geoData.results.length) { res.innerHTML = '<p style="color:#E53935">City not found. Try district name.</p>'; return; }
    const { latitude, longitude, name } = geoData.results[0];
    const wRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,precipitation,weather_code&daily=temperature_2m_max,temperature_2m_min,precipitation_sum&timezone=Asia%2FKolkata&forecast_days=3`);
    const w = await wRes.json();
    const c = w.current;
    const wIcon = getWeatherIcon(c.weather_code);
    const advisory = getCropAdvisory(c.temperature_2m, c.relative_humidity_2m, c.precipitation);
    res.innerHTML = `
      <div class="result-title"><i class="fas fa-cloud-sun"></i> Weather for ${name}</div>
      <div style="display:flex;align-items:center;gap:16px;margin-bottom:12px">
        <span style="font-size:2.5rem">${wIcon}</span>
        <div>
          <div style="font-size:1.8rem;font-weight:900;color:#2E7D32">${c.temperature_2m}°C</div>
          <div style="font-size:0.82rem;color:#333333">Humidity: ${c.relative_humidity_2m}% | Wind: ${c.wind_speed_10m} km/h | Rain: ${c.precipitation} mm</div>
        </div>
      </div>
      <div style="background:#d4edda;border-radius:10px;padding:12px;margin-bottom:10px">
        <strong style="font-size:0.82rem;color:#1B5E20"><i class="fas fa-seedling"></i> Crop Advisory</strong>
        <p style="font-size:0.83rem;margin-top:5px;color:#212121">${advisory}</p>
      </div>
      <div style="font-size:0.76rem;color:#555555"><i class="fas fa-info-circle"></i> Source: Open-Meteo. For detailed IMD forecast visit <a href="https://mausam.imd.gov.in" target="_blank" style="color:#1565C0">mausam.imd.gov.in</a></div>`;
  } catch (e) {
    res.innerHTML = '<p style="color:#E53935">Could not fetch weather. Check your connection.</p>';
  }
}

function getWeatherIcon(code) {
  if (code === 0) return '☀️';
  if (code <= 3) return '⛅';
  if (code <= 67) return '🌧️';
  if (code <= 77) return '❄️';
  if (code <= 82) return '🌦️';
  return '⛈️';
}

function getCropAdvisory(temp, humidity, rain) {
  if (rain > 10) return 'Heavy rain expected. Avoid spraying pesticides/fertilizers. Ensure proper field drainage to prevent waterlogging.';
  if (temp > 38) return 'High temperature alert. Irrigate crops in early morning or evening. Avoid field operations during peak heat (11am–3pm).';
  if (humidity > 85) return 'High humidity — risk of fungal diseases. Monitor crops for blight/mildew. Consider preventive fungicide spray.';
  if (temp < 10) return 'Cold wave conditions. Protect nurseries and young seedlings. Light irrigation can help prevent frost damage.';
  return 'Weather conditions are favorable for farming. Good time for field operations, sowing, or fertilizer application.';
}

// ===== 8. SCHEME COMPARISON TOOL =====
function compareSchemes() {
  const s1 = document.getElementById('cmpScheme1').value;
  const s2 = document.getElementById('cmpScheme2').value;
  const res = document.getElementById('cmpResult');
  if (!s1 || !s2 || s1 === s2) { res.innerHTML = '<p style="color:#E53935">Please select two different schemes to compare.</p>'; res.classList.add('show'); return; }
  const a = schemes[s1], b = schemes[s2];
  res.innerHTML = `
    <div class="result-title"><i class="fas fa-balance-scale"></i> Scheme Comparison</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:8px">
      <div style="background:#ffffff;border-radius:10px;padding:14px;border:2px solid #2E7D32">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px">
          <div style="width:32px;height:32px;border-radius:8px;background:${a.color};display:flex;align-items:center;justify-content:center;color:white;font-size:0.9rem"><i class="${a.icon}"></i></div>
          <strong style="font-size:0.92rem;color:#111111;font-weight:800">${a.name}</strong>
        </div>
        <p style="font-size:0.8rem;color:#222222;font-weight:500;margin-bottom:8px;line-height:1.5">${a.description.slice(0,120)}...</p>
        <ul style="font-size:0.78rem;color:#111111;font-weight:600;padding-left:14px;line-height:1.8">${a.benefits.slice(0,3).map(b=>`<li>${b}</li>`).join('')}</ul>
        <a href="${a.url}" target="_blank" style="display:inline-flex;align-items:center;gap:5px;color:#1565C0;font-size:0.78rem;font-weight:700;margin-top:8px"><i class="fas fa-external-link-alt"></i> Apply</a>
      </div>
      <div style="background:#ffffff;border-radius:10px;padding:14px;border:2px solid #1565C0">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px">
          <div style="width:32px;height:32px;border-radius:8px;background:${b.color};display:flex;align-items:center;justify-content:center;color:white;font-size:0.9rem"><i class="${b.icon}"></i></div>
          <strong style="font-size:0.92rem;color:#111111;font-weight:800">${b.name}</strong>
        </div>
        <p style="font-size:0.8rem;color:#222222;font-weight:500;margin-bottom:8px;line-height:1.5">${b.description.slice(0,120)}...</p>
        <ul style="font-size:0.78rem;color:#111111;font-weight:600;padding-left:14px;line-height:1.8">${b.benefits.slice(0,3).map(bx=>`<li>${bx}</li>`).join('')}</ul>
        <a href="${b.url}" target="_blank" style="display:inline-flex;align-items:center;gap:5px;color:#1565C0;font-size:0.78rem;font-weight:700;margin-top:8px"><i class="fas fa-external-link-alt"></i> Apply</a>
      </div>
    </div>`;
  res.classList.add('show');
}

// ===== 10. MANDI PRICE TRENDS =====
const mandiPrices = {
  rice: [{ month: 'Oct', price: 2100 }, { month: 'Nov', price: 2200 }, { month: 'Dec', price: 2350 }, { month: 'Jan', price: 2280 }, { month: 'Feb', price: 2300 }, { month: 'Mar', price: 2400 }],
  wheat: [{ month: 'Oct', price: 2100 }, { month: 'Nov', price: 2150 }, { month: 'Dec', price: 2200 }, { month: 'Jan', price: 2250 }, { month: 'Feb', price: 2275 }, { month: 'Mar', price: 2300 }],
  cotton: [{ month: 'Oct', price: 6800 }, { month: 'Nov', price: 7000 }, { month: 'Dec', price: 7100 }, { month: 'Jan', price: 7050 }, { month: 'Feb', price: 7121 }, { month: 'Mar', price: 7200 }],
  soybean: [{ month: 'Oct', price: 4500 }, { month: 'Nov', price: 4700 }, { month: 'Dec', price: 4800 }, { month: 'Jan', price: 4850 }, { month: 'Feb', price: 4892 }, { month: 'Mar', price: 5000 }],
  onion: [{ month: 'Oct', price: 1200 }, { month: 'Nov', price: 2500 }, { month: 'Dec', price: 3800 }, { month: 'Jan', price: 2200 }, { month: 'Feb', price: 1500 }, { month: 'Mar', price: 900 }]
};

function showMandiTrend() {
  const crop = document.getElementById('mandiCrop').value;
  const res = document.getElementById('mandiResult');
  const data = mandiPrices[crop];
  if (!data) { res.innerHTML = '<p style="color:#E53935">Data not available.</p>'; res.classList.add('show'); return; }
  const max = Math.max(...data.map(d => d.price));
  const bestMonth = data.find(d => d.price === max);
  const bars = data.map(d => {
    const pct = Math.round((d.price / max) * 100);
    return `<div style="display:flex;flex-direction:column;align-items:center;gap:4px;flex:1">
      <span style="font-size:0.7rem;font-weight:700;color:#1B5E20">₹${d.price}</span>
      <div style="width:100%;height:${pct * 0.8}px;background:${d.price===max?'#FF6F00':'#2E7D32'};border-radius:4px 4px 0 0;min-height:8px;transition:height 0.5s"></div>
      <span style="font-size:0.68rem;color:#333333;font-weight:600">${d.month}</span>
    </div>`;
  }).join('');
  res.innerHTML = `
    <div class="result-title"><i class="fas fa-chart-bar"></i> Mandi Price Trend (₹/quintal)</div>
    <div style="display:flex;align-items:flex-end;gap:6px;height:120px;margin:12px 0;padding:0 4px">${bars}</div>
    <div style="background:#FFF8E1;border-radius:8px;padding:10px;font-size:0.82rem;color:#111111">
      <i class="fas fa-lightbulb" style="color:#FF6F00"></i> <strong style="color:#111111;font-weight:800">Best selling month: ${bestMonth.month}</strong><span style="color:#111111;font-weight:700"> — ₹${bestMonth.price}/quintal</span>
    </div>
    <p style="font-size:0.74rem;color:#444444;font-weight:600;margin-top:8px"><i class="fas fa-info-circle"></i> Indicative trend based on historical data. Check live prices at <a href="https://www.enam.gov.in" target="_blank" style="color:#1565C0;font-weight:700">enam.gov.in</a></p>`;
  res.classList.add('show');
}

// ===== 11. LOAN REPAYMENT RISK PREDICTOR =====
function predictLoanRisk() {
  const income = parseFloat(document.getElementById('riskIncome').value);
  const loan = parseFloat(document.getElementById('riskLoan').value);
  const land = parseFloat(document.getElementById('riskLand').value);
  const res = document.getElementById('riskResult');
  if (!income || !loan || !land) { res.innerHTML = '<p style="color:#E53935">Fill all fields.</p>'; res.classList.add('show'); return; }
  const dti = (loan * 0.04 * 12) / income; // debt-to-income ratio
  const loanPerAcre = loan / land;
  let risk = 'Low', color = '#2E7D32', advice = 'Your loan repayment capacity looks good. Proceed with confidence.';
  if (dti > 0.4 || loanPerAcre > 80000) { risk = 'High'; color = '#E53935'; advice = 'High risk. Consider reducing loan amount or increasing income sources before applying.'; }
  else if (dti > 0.25 || loanPerAcre > 50000) { risk = 'Medium'; color = '#FF6F00'; advice = 'Moderate risk. Ensure crop insurance (PMFBY) is active to protect against losses.'; }
  res.innerHTML = `
    <div class="result-title"><i class="fas fa-shield-alt"></i> Loan Risk Assessment</div>
    <div style="text-align:center;padding:12px 0">
      <div style="font-size:2rem;font-weight:900;color:${color}">${risk} Risk</div>
      <div style="font-size:0.82rem;color:#111111;font-weight:700;margin-top:4px">Debt-to-Income Ratio: ${(dti * 100).toFixed(1)}%</div>
    </div>
    <div style="background:#ffffff;border-radius:8px;padding:12px;font-size:0.85rem;color:#111111;font-weight:700;border:1.5px solid #e0e0e0">
      <i class="fas fa-info-circle" style="color:${color}"></i> ${advice}
    </div>`;
  res.classList.add('show');
}

// ===== 12. CROP YIELD PREDICTION =====
function predictYield() {
  const crop = document.getElementById('yieldCrop').value;
  const area = parseFloat(document.getElementById('yieldArea').value);
  const soil = document.getElementById('yieldSoil').value;
  const irrigation = document.getElementById('yieldIrrigation').value;
  const res = document.getElementById('yieldResult');
  if (!area || area <= 0) { res.innerHTML = '<p style="color:#E53935">Enter valid area.</p>'; res.classList.add('show'); return; }
  const baseYield = { rice: 25, wheat: 30, cotton: 8, sugarcane: 400, maize: 28, soybean: 12, vegetables: 80, pulses: 8 };
  const soilMult = { black: 1.15, red: 0.95, alluvial: 1.1, sandy: 0.8, loamy: 1.05 };
  const irrMult = { drip: 1.2, sprinkler: 1.1, flood: 1.0, rainfed: 0.75 };
  const base = baseYield[crop] || 20;
  const predicted = base * (soilMult[soil] || 1) * (irrMult[irrigation] || 1) * area;
  const msp = mspData[crop] ? mspData[crop].msp : 2000;
  const revenue = Math.round(predicted * msp / 10); // quintal = 100kg
  res.innerHTML = `
    <div class="result-title"><i class="fas fa-seedling"></i> Yield Prediction</div>
    <div class="result-row"><span>Predicted Yield</span><span style="color:var(--green);font-weight:800">${predicted.toFixed(1)} quintals</span></div>
    <div class="result-row"><span>Estimated Revenue (at MSP)</span><span>₹${revenue.toLocaleString('en-IN')}</span></div>
    <div class="result-row"><span>Yield per Acre</span><span>${(predicted / area).toFixed(1)} quintals</span></div>
    <p style="font-size:0.76rem;color:var(--gray-500);margin-top:8px"><i class="fas fa-robot"></i> AI-based estimate. Actual yield depends on weather, seed variety, and farm management.</p>`;
  res.classList.add('show');
}

// ===== 13. FRAUD ALERT CHECKER =====
const trustedDomains = ['pmkisan.gov.in','pmfby.gov.in','myscheme.gov.in','soilhealth.dac.gov.in','pmksy.gov.in','enam.gov.in','nabard.org','agriinfra.dac.gov.in','mahadbt.maharashtra.gov.in','krishi.maharashtra.gov.in','india.gov.in','agrimachinery.nic.in','cacp.dacnet.nic.in','mausam.imd.gov.in'];

function checkFraudLink() {
  const url = document.getElementById('fraudUrl').value.trim();
  const res = document.getElementById('fraudResult');
  if (!url) { res.innerHTML = '<p style="color:#E53935">Enter a URL to check.</p>'; res.classList.add('show'); return; }
  let domain = '';
  try { domain = new URL(url.startsWith('http') ? url : 'https://' + url).hostname.replace('www.', ''); } catch (e) { domain = url.toLowerCase(); }
  const isTrusted = trustedDomains.some(d => domain === d || domain.endsWith('.' + d));
  const isSuspicious = /free|money|instant|guaranteed|click|prize|win|lottery|earn|cash|reward/i.test(url);
  let status, color, icon, msg;
  if (isTrusted) { status = 'SAFE'; color = 'var(--green)'; icon = 'fas fa-check-circle'; msg = 'This is a verified official government portal. Safe to use.'; }
  else if (isSuspicious) { status = 'SUSPICIOUS'; color = '#E53935'; icon = 'fas fa-exclamation-triangle'; msg = 'This URL contains suspicious keywords. Do NOT share personal details or pay money on this site.'; }
  else { status = 'UNVERIFIED'; color = 'var(--saffron)'; icon = 'fas fa-question-circle'; msg = 'This URL is not in our verified list. Verify before sharing personal information. Always look for .gov.in domains.'; }
  res.innerHTML = `
    <div style="text-align:center;padding:12px 0">
      <i class="${icon}" style="font-size:2rem;color:${color}"></i>
      <div style="font-size:1.3rem;font-weight:900;color:${color};margin-top:6px">${status}</div>
    </div>
    <p style="font-size:0.85rem;color:var(--gray-700);text-align:center">${msg}</p>
    <p style="font-size:0.74rem;color:var(--gray-500);margin-top:8px;text-align:center"><i class="fas fa-shield-alt"></i> Always use official .gov.in portals for government schemes.</p>`;
  res.classList.add('show');
}

// ===== 14. SCHEME BOOKMARK FOLDERS =====
function getBookmarkFolders() {
  return JSON.parse(localStorage.getItem('agrimitra_folders') || '{"Income Support":[],"Insurance":[],"Loans":[],"Irrigation":[]}');
}
function saveBookmarkFolders(folders) {
  localStorage.setItem('agrimitra_folders', JSON.stringify(folders));
}
function addToFolder(schemeKey, folderName) {
  const folders = getBookmarkFolders();
  if (!folders[folderName]) folders[folderName] = [];
  if (!folders[folderName].includes(schemeKey)) folders[folderName].push(schemeKey);
  saveBookmarkFolders(folders);
  showFdToast(`Added to "${folderName}" folder ✅`);
}
function renderBookmarkFolders() {
  const el = document.getElementById('bookmarkFolders'); if (!el) return;
  const folders = getBookmarkFolders();
  el.innerHTML = Object.entries(folders).map(([name, keys]) => `
    <div style="background:white;border-radius:10px;padding:12px;margin-bottom:10px;border:1px solid var(--gray-200)">
      <div style="font-weight:700;font-size:0.88rem;color:var(--green-dark);margin-bottom:8px"><i class="fas fa-folder"></i> ${name} (${keys.length})</div>
      ${keys.length ? keys.map(k => { const s = schemes[k]; return s ? `<div style="font-size:0.8rem;padding:4px 0;color:var(--gray-700)"><i class="${s.icon}" style="color:var(--green);width:16px"></i> ${s.name}</div>` : ''; }).join('') : '<div style="font-size:0.78rem;color:var(--gray-400)">No schemes saved here.</div>'}
    </div>`).join('');
}

// ===== 15. PWA / SERVICE WORKER REGISTRATION =====
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  });
}

// ===== 16. VOICE CHATBOT INTEGRATION =====
function startVoiceChat() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) { showFdToast('Voice not supported in this browser.'); return; }
  const rec = new SpeechRecognition();
  rec.lang = getVoiceLang();
  rec.onresult = (e) => {
    const text = e.results[0][0].transcript;
    // Open chatbot if not already open
    const chatWindow = document.getElementById('chatbotWindow');
    if (chatWindow && !chatWindow.classList.contains('open')) {
      toggleChatbot();
    }
    // Set text in input and trigger send
    const chatInp = document.getElementById('chatInput');
    if (chatInp) {
      chatInp.value = text;
      chatInp.dispatchEvent(new Event('input'));
      // Small delay to ensure DOM is ready
      setTimeout(() => { sendChat(); }, 100);
    }
  };
  rec.onerror = (e) => showFdToast('Could not hear. Please try again. (' + e.error + ')');
  rec.onend = () => {
    const btn = document.getElementById('voiceChatBtn');
    if (btn) btn.style.background = 'rgba(255,255,255,0.15)';
  };
  rec.start();
  showFdToast('🎤 Listening... Speak now');
  const btn = document.getElementById('voiceChatBtn');
  if (btn) btn.style.background = 'rgba(255,0,0,0.4)';
}

// ===== 17. PROFILE COMPLETION NUDGE =====
function checkProfileNudge() {
  if (!currentUser) return;
  const pct = getProfileCompletion ? getProfileCompletion() : 0;
  if (pct < 50) {
    setTimeout(() => {
      const nudge = document.getElementById('profileNudge');
      if (nudge) nudge.style.display = 'flex';
    }, 3000);
  }
}

// ===== 18. DOCUMENT OCR AUTO-FILL (Simulated) =====
function triggerOCRUpload() {
  document.getElementById('ocrFileInput').click();
}
function processOCRDocument(e) {
  const file = e.target.files[0]; if (!file) return;
  showFdToast('📄 Reading document...');
  setTimeout(() => {
    // Simulated OCR extraction
    showFdToast('✅ Document scanned! Please verify and fill details manually.');
    e.target.value = '';
  }, 2000);
}

// ===== 19. NOTIFICATION SYSTEM =====
function requestNotificationPermission() {
  if (!('Notification' in window)) return;
  Notification.requestPermission().then(perm => {
    if (perm === 'granted') {
      showFdToast('Notifications enabled! You will get scheme alerts. ✅');
      scheduleSchemeReminders();
    }
  });
}
function scheduleSchemeReminders() {
  const alerts = [
    { title: 'PM-KISAN Reminder', body: 'Check your PM-KISAN installment status at pmkisan.gov.in' },
    { title: 'PMFBY Enrollment', body: 'Kharif crop insurance enrollment is open. Apply at pmfby.gov.in' }
  ];
  alerts.forEach((a, i) => {
    setTimeout(() => {
      if (Notification.permission === 'granted') {
        new Notification(a.title, { body: a.body, icon: 'logo.svg' });
      }
    }, (i + 1) * 5000);
  });
}

// ===== 20. INIT ALL FEATURES ON DOM READY =====
document.addEventListener('DOMContentLoaded', () => {
  initVoiceAssistant();
  checkProfileNudge();
  // Add voice button to search box
  const searchBox = document.querySelector('.search-box');
  if (searchBox && !document.getElementById('voiceSearchBtn')) {
    const vBtn = document.createElement('button');
    vBtn.id = 'voiceSearchBtn';
    vBtn.title = 'Voice Search';
    vBtn.innerHTML = '<i class="fas fa-microphone"></i>';
    vBtn.onclick = toggleVoice;
    vBtn.style.cssText = 'background:none;border:none;color:var(--green);font-size:1.1rem;cursor:pointer;padding:4px 8px;border-radius:8px;transition:all 0.2s';
    searchBox.insertBefore(vBtn, searchBox.querySelector('button'));
  }
  // Add voice button to chatbot
  const chatHeader = document.querySelector('.chatbot-header');
  if (chatHeader && !document.getElementById('voiceChatBtn')) {
    const vcBtn = document.createElement('button');
    vcBtn.id = 'voiceChatBtn';
    vcBtn.title = 'Voice Input';
    vcBtn.innerHTML = '<i class="fas fa-microphone"></i>';
    vcBtn.onclick = startVoiceChat;
    vcBtn.style.cssText = 'background:rgba(255,255,255,0.15);border:none;color:white;width:32px;height:32px;border-radius:50%;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:0.9rem;margin-right:4px';
    const closeBtn = chatHeader.querySelector('button');
    if (closeBtn) chatHeader.insertBefore(vcBtn, closeBtn);
  }
});
