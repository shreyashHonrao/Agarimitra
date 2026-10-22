// ===== AGRIMITRA - COMPLETE JAVASCRIPT =====

// ===== TRANSLATIONS =====
const translations = {
  en: {
    banner:"This is NOT an official government website. We only provide information and redirect to official government portals.",
    tagline:"Farmer's Digital Bridge By E-Kisan", nav_schemes:"Schemes", nav_subsidies:"Subsidies",
    nav_loans:"Loans", nav_tools:"Tools", nav_dashboard:"Dashboard", login:"Login",
    hero_badge:"Official Government Schemes Only",
    hero_title:"India's Smart Platform for Farmers & Government Schemes",
    hero_sub:"Find schemes, subsidies & loans — all in one place. Only verified official government links.",
    explore_schemes:"Explore Schemes", check_eligibility:"Check Eligibility",
    stat1:"Govt Schemes", stat2:"States Covered", stat3:"Official Links", stat4:"PM Kisan/Year",
    schemes_badge:"Government Schemes", schemes_title:"Central Government Agricultural Schemes",
    schemes_sub:"All schemes redirect to official .gov.in portals only", view_details:"View Details",
    pmkisan_desc:"₹6,000/year direct income support to small & marginal farmers in 3 installments of ₹2,000.",
    pmfby_desc:"Crop insurance against drought, floods, pests & natural calamities at minimal premium.",
    kcc_desc:"Short-term credit for crop cultivation, post-harvest expenses & allied activities at low interest.",
    soil_desc:"Free soil testing & health card with crop-wise fertilizer recommendations for better yield.",
    pmksy_desc:"Har Khet Ko Pani — ensuring irrigation access to every farm with micro-irrigation support.",
    enam_desc:"National Agriculture Market — online trading platform for better price discovery for farmers.",
    sub_badge:"Subsidies", sub_title:"Government Subsidies for Farmers",
    sub_sub:"State-wise officially announced subsidies. Maharashtra farmers — check MahaDBT portal.",
    loan_badge:"Government-Backed Loans", loan_title:"Agricultural Loan Schemes",
    loan_sub:"Only government-backed loan frameworks. No private bank direct links.",
    loan_disclaimer:"AgriMitra does not provide loans. All applications are processed through official government portals and authorized banks only.",
    tools_badge:"Smart Tools", tools_title:"Farmer Smart Tools",
    tools_sub:"Guidance tools only — not official approvals",
    dash_badge:"My Dashboard", dash_title:"Farmer Dashboard",
    dash_sub:"Save schemes, track applications, get alerts",
    no_saved:"No saved schemes yet. Browse and save schemes."
  },
  hi: {
    banner:"यह एक आधिकारिक सरकारी वेबसाइट नहीं है। हम केवल जानकारी प्रदान करते हैं।",
    tagline:"किसान का डिजिटल सेतु — E-Kisan", nav_schemes:"योजनाएं", nav_subsidies:"सब्सिडी",
    nav_loans:"ऋण", nav_tools:"उपकरण", nav_dashboard:"डैशबोर्ड", login:"लॉगिन",
    hero_badge:"केवल आधिकारिक सरकारी योजनाएं",
    hero_title:"किसानों और सरकारी योजनाओं के लिए भारत का स्मार्ट प्लेटफॉर्म",
    hero_sub:"योजनाएं, सब्सिडी और ऋण — सब एक जगह। केवल सत्यापित आधिकारिक सरकारी लिंक।",
    explore_schemes:"योजनाएं देखें", check_eligibility:"पात्रता जांचें",
    stat1:"सरकारी योजनाएं", stat2:"राज्य", stat3:"आधिकारिक लिंक", stat4:"PM किसान/वर्ष",
    schemes_badge:"सरकारी योजनाएं", schemes_title:"केंद्र सरकार की कृषि योजनाएं",
    schemes_sub:"सभी योजनाएं केवल आधिकारिक .gov.in पोर्टल पर रीडायरेक्ट करती हैं",
    view_details:"विवरण देखें",
    pmkisan_desc:"छोटे और सीमांत किसानों को ₹2,000 की 3 किस्तों में ₹6,000/वर्ष की प्रत्यक्ष आय सहायता।",
    pmfby_desc:"न्यूनतम प्रीमियम पर सूखा, बाढ़, कीट और प्राकृतिक आपदाओं के खिलाफ फसल बीमा।",
    kcc_desc:"कम ब्याज पर फसल उत्पादन, कटाई के बाद के खर्च के लिए अल्पकालिक ऋण।",
    soil_desc:"बेहतर उपज के लिए फसल-वार उर्वरक सिफारिशों के साथ मुफ्त मिट्टी परीक्षण।",
    pmksy_desc:"हर खेत को पानी — सूक्ष्म सिंचाई सहायता के साथ हर खेत तक सिंचाई।",
    enam_desc:"राष्ट्रीय कृषि बाजार — किसानों के लिए बेहतर मूल्य खोज के लिए ऑनलाइन प्लेटफॉर्म।",
    sub_badge:"सब्सिडी", sub_title:"किसानों के लिए सरकारी सब्सिडी",
    sub_sub:"राज्यवार आधिकारिक सब्सिडी। महाराष्ट्र किसान — MahaDBT पोर्टल देखें।",
    loan_badge:"सरकार समर्थित ऋण", loan_title:"कृषि ऋण योजनाएं",
    loan_sub:"केवल सरकार समर्थित ऋण ढांचे। कोई निजी बैंक प्रत्यक्ष लिंक नहीं।",
    loan_disclaimer:"AgriMitra ऋण प्रदान नहीं करता। सभी आवेदन केवल आधिकारिक सरकारी पोर्टल के माध्यम से।",
    tools_badge:"स्मार्ट उपकरण", tools_title:"किसान स्मार्ट उपकरण",
    tools_sub:"केवल मार्गदर्शन उपकरण — आधिकारिक अनुमोदन नहीं",
    dash_badge:"मेरा डैशबोर्ड", dash_title:"किसान डैशबोर्ड",
    dash_sub:"योजनाएं सहेजें, आवेदन ट्रैक करें, अलर्ट प्राप्त करें",
    no_saved:"अभी तक कोई सहेजी गई योजना नहीं।"
  },
  mr: {
    banner:"ही अधिकृत सरकारी वेबसाइट नाही. आम्ही केवळ माहिती देतो आणि अधिकृत पोर्टलवर पुनर्निर्देशित करतो.",
    tagline:"शेतकऱ्याचा डिजिटल सेतू — E-Kisan", nav_schemes:"योजना", nav_subsidies:"अनुदान",
    nav_loans:"कर्ज", nav_tools:"साधने", nav_dashboard:"डॅशबोर्ड", login:"लॉगिन",
    hero_badge:"केवळ अधिकृत सरकारी योजना",
    hero_title:"शेतकरी आणि सरकारी योजनांसाठी भारताचे स्मार्ट व्यासपीठ",
    hero_sub:"योजना, अनुदान आणि कर्ज — सर्व एकाच ठिकाणी. केवळ सत्यापित अधिकृत सरकारी दुवे.",
    explore_schemes:"योजना पहा", check_eligibility:"पात्रता तपासा",
    stat1:"सरकारी योजना", stat2:"राज्ये", stat3:"अधिकृत दुवे", stat4:"PM किसान/वर्ष",
    schemes_badge:"सरकारी योजना", schemes_title:"केंद्र सरकारच्या कृषी योजना",
    schemes_sub:"सर्व योजना केवळ अधिकृत .gov.in पोर्टलवर पुनर्निर्देशित करतात",
    view_details:"तपशील पहा",
    pmkisan_desc:"लहान शेतकऱ्यांना ₹2,000 च्या 3 हप्त्यांमध्ये ₹6,000/वर्ष थेट उत्पन्न सहाय्य.",
    pmfby_desc:"किमान प्रीमियमवर दुष्काळ, पूर, कीड आणि नैसर्गिक आपत्तींविरुद्ध पीक विमा.",
    kcc_desc:"कमी व्याजावर पीक लागवड आणि काढणीनंतरच्या खर्चासाठी अल्पकालीन कर्ज.",
    soil_desc:"चांगल्या उत्पादनासाठी पीक-निहाय खत शिफारशींसह मोफत माती परीक्षण.",
    pmksy_desc:"हर खेत को पानी — सूक्ष्म सिंचाई सहाय्यासह प्रत्येक शेतापर्यंत सिंचाई.",
    enam_desc:"राष्ट्रीय कृषी बाजार — शेतकऱ्यांसाठी चांगल्या किंमत शोधासाठी ऑनलाइन व्यापार.",
    sub_badge:"अनुदान", sub_title:"शेतकऱ्यांसाठी सरकारी अनुदान",
    sub_sub:"राज्यनिहाय अधिकृत अनुदान. महाराष्ट्र शेतकरी — MahaDBT पोर्टल पहा.",
    loan_badge:"सरकार समर्थित कर्ज", loan_title:"कृषी कर्ज योजना",
    loan_sub:"केवळ सरकार समर्थित कर्ज फ्रेमवर्क. कोणतेही खाजगी बँक थेट दुवे नाहीत.",
    loan_disclaimer:"AgriMitra कर्ज देत नाही. सर्व अर्ज केवळ अधिकृत सरकारी पोर्टलद्वारे.",
    tools_badge:"स्मार्ट साधने", tools_title:"शेतकरी स्मार्ट साधने",
    tools_sub:"केवळ मार्गदर्शन साधने — अधिकृत मंजुरी नाही",
    dash_badge:"माझा डॅशबोर्ड", dash_title:"शेतकरी डॅशबोर्ड",
    dash_sub:"योजना जतन करा, अर्ज ट्रॅक करा, सूचना मिळवा",
    no_saved:"अद्याप कोणत्याही योजना जतन केल्या नाहीत."
  }
};

// ===== SCHEME DATA =====
const schemes = {
  pmkisan:{name:"PM-KISAN",fullName:"Pradhan Mantri Kisan Samman Nidhi",tag:"Income Support",icon:"fas fa-rupee-sign",color:"linear-gradient(135deg,#2E7D32,#66BB6A)",url:"https://pmkisan.gov.in",description:"PM-KISAN provides income support of ₹6,000 per year to all landholding farmer families across India. The amount is paid in three equal installments of ₹2,000 directly to the bank accounts of farmers through Direct Benefit Transfer (DBT).",benefits:["₹6,000 per year direct income support","3 installments of ₹2,000 each","Direct Bank Transfer (DBT)","No middlemen involved","Covers all small & marginal farmers"],eligibility:["All landholding farmer families","Land records must be in farmer's name","Aadhaar card mandatory","Excludes institutional landholders","Excludes government employees (except Class IV)"],documents:["Aadhaar Card","Land ownership documents (7/12 extract)","Bank account details (linked to Aadhaar)","Mobile number"],steps:["Visit pmkisan.gov.in","Click 'Farmer Corner'","Select 'New Farmer Registration'","Enter Aadhaar number and state","Fill in land and bank details","Submit and note registration number"]},
  pmfby:{name:"PMFBY",fullName:"Pradhan Mantri Fasal Bima Yojana",tag:"Crop Insurance",icon:"fas fa-umbrella",color:"linear-gradient(135deg,#1565C0,#42A5F5)",url:"https://pmfby.gov.in",description:"PMFBY provides comprehensive crop insurance coverage against crop loss due to natural calamities, pests, and diseases. Farmers pay very low premiums — 2% for Kharif, 1.5% for Rabi, and 5% for commercial/horticultural crops.",benefits:["Low premium rates (1.5% to 5%)","Coverage for all stages of crop cycle","Post-harvest losses covered","Localized calamity coverage","Technology-based quick claim settlement"],eligibility:["All farmers growing notified crops","Loanee farmers: compulsory enrollment","Non-loanee farmers: voluntary","Sharecroppers and tenant farmers eligible"],documents:["Aadhaar Card","Land records / lease agreement","Bank account details","Sowing certificate","Mobile number"],steps:["Visit pmfby.gov.in","Click 'Farmer Application'","Select your state and crop season","Enter land and crop details","Pay premium online","Download insurance certificate"]},
  kcc:{name:"Kisan Credit Card",fullName:"Kisan Credit Card Scheme",tag:"Credit Card",icon:"fas fa-credit-card",color:"linear-gradient(135deg,#E65100,#FFA726)",url:"https://www.myscheme.gov.in",description:"KCC provides farmers with affordable credit for agricultural needs including crop cultivation, post-harvest expenses, produce marketing, consumption requirements, and maintenance of farm assets. Interest subvention makes it available at ~4% p.a.",benefits:["Credit up to ₹3 lakh at ~4% interest","Flexible repayment linked to harvest","Covers crop, post-harvest & allied activities","Personal accident insurance included","Valid for 5 years with annual renewal"],eligibility:["All farmers — individual/joint borrowers","Tenant farmers, sharecroppers, SHGs","Fishermen and animal husbandry farmers","Must have land records or lease agreement"],documents:["Aadhaar Card","PAN Card","Land records (7/12 extract)","Passport size photo","Bank account details"],steps:["Visit myscheme.gov.in or nearest bank branch","Fill KCC application form","Submit land and identity documents","Bank verifies and sanctions credit limit","Receive KCC card within 15 days"]},
  soilhealth:{name:"Soil Health Card",fullName:"Soil Health Card Scheme",tag:"Soil Testing",icon:"fas fa-flask",color:"linear-gradient(135deg,#6D4C41,#A1887F)",url:"https://soilhealth.dac.gov.in",description:"The Soil Health Card Scheme provides farmers with a card showing soil nutrient status and recommendations for appropriate dosage of nutrients to improve soil health and fertility. Cards are issued every 2 years.",benefits:["Free soil testing","Crop-wise fertilizer recommendations","Reduces input costs by 8-10%","Improves crop yield","Issued every 2 years"],eligibility:["All farmers across India","No land size restriction","Both irrigated and rain-fed farmers"],documents:["Aadhaar Card","Land details (survey number)","Mobile number for SMS alerts"],steps:["Contact local Krishi Vigyan Kendra or Agriculture Department","Provide soil sample from your field","Sample tested at government lab","Receive Soil Health Card with recommendations","Check online at soilhealth.dac.gov.in"]},
  pmksy:{name:"PM Krishi Sinchai",fullName:"Pradhan Mantri Krishi Sinchayee Yojana",tag:"Irrigation",icon:"fas fa-tint",color:"linear-gradient(135deg,#00695C,#26A69A)",url:"https://pmksy.gov.in",description:"PMKSY aims to achieve convergence of investments in irrigation at the field level, expand cultivable area under assured irrigation, improve on-farm water use efficiency, and introduce sustainable water conservation practices.",benefits:["Up to 55% subsidy on drip/sprinkler systems","Har Khet Ko Pani initiative","More Crop Per Drop approach","Watershed development support","Groundwater development assistance"],eligibility:["All farmers with agricultural land","Priority to small & marginal farmers","Water User Associations eligible","Cooperatives and SHGs eligible"],documents:["Aadhaar Card","Land records","Bank account details","Quotation from registered vendor"],steps:["Visit pmksy.gov.in","Select your state portal","Apply for micro-irrigation subsidy","Get field inspection done","Purchase from empanelled vendor","Claim subsidy after installation"]},
  enam:{name:"e-NAM",fullName:"National Agriculture Market (e-NAM)",tag:"Market Access",icon:"fas fa-store",color:"linear-gradient(135deg,#4527A0,#7E57C2)",url:"https://www.enam.gov.in",description:"e-NAM is a pan-India electronic trading portal which networks the existing APMC mandis to create a unified national market for agricultural commodities. It enables farmers to get better prices through transparent online bidding.",benefits:["Better price discovery through online bidding","Transparent trading process","Reduced transaction costs","Access to buyers across India","Online payment directly to farmer account"],eligibility:["All farmers registered with local APMC mandi","Aadhaar and bank account required","Available in 1000+ mandis across India"],documents:["Aadhaar Card","Bank account details","APMC mandi registration"],steps:["Visit enam.gov.in","Register as a farmer","Link with nearest e-NAM mandi","Upload produce details","Receive bids from buyers","Accept best bid and get payment"]}
};

const searchData=[
  {name:"PM-KISAN",desc:"₹6000/year income support",key:"pmkisan",icon:"fas fa-rupee-sign"},
  {name:"PM Fasal Bima Yojana",desc:"Crop insurance scheme",key:"pmfby",icon:"fas fa-umbrella"},
  {name:"Kisan Credit Card",desc:"Low interest farm credit",key:"kcc",icon:"fas fa-credit-card"},
  {name:"Soil Health Card",desc:"Free soil testing",key:"soilhealth",icon:"fas fa-flask"},
  {name:"PM Krishi Sinchai",desc:"Irrigation subsidy",key:"pmksy",icon:"fas fa-tint"},
  {name:"e-NAM",desc:"Online agriculture market",key:"enam",icon:"fas fa-store"},
  {name:"NABARD",desc:"Rural finance authority",url:"https://www.nabard.org",icon:"fas fa-building"},
  {name:"MahaDBT",desc:"Maharashtra subsidies",url:"https://mahadbt.maharashtra.gov.in",icon:"fas fa-star"},
  {name:"Agri Infra Fund",desc:"Infrastructure loan",url:"https://agriinfra.dac.gov.in",icon:"fas fa-warehouse"},
  {name:"Maharashtra Krishi",desc:"Maharashtra agriculture dept",url:"https://krishi.maharashtra.gov.in",icon:"fas fa-leaf"}
];

// ===== API CONFIG =====
const API_BASE='http://localhost:5000/api';

// Helper: save full currentUser to MongoDB
async function syncToMongo(){
  if(!currentUser||!currentUser.mobile)return;
  try{
    const res=await fetch(`${API_BASE}/farmer`,{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(currentUser)
    });
    const data=await res.json();
    if(data.success)console.log('✅ Synced to MongoDB');
    else console.warn('⚠️ MongoDB sync issue:',data);
  }catch(e){
    console.warn('⚠️ MongoDB unreachable, using localStorage:',e.message);
    localStorage.setItem('agrimitra_user',JSON.stringify(currentUser));
  }
}

// ===== STATE =====
let currentLang='en';
let savedSchemes=JSON.parse(localStorage.getItem('agrimitra_saved')||'[]');
let trackingItems=JSON.parse(localStorage.getItem('agrimitra_tracking')||'[]');
let otpSent=false;
let timerInterval=null;

// ===== INIT =====
document.addEventListener('DOMContentLoaded',()=>{
  renderSaved();
  renderTracking();
  animateCounters();
  createParticles();
  applyTranslations();
  if(currentUser)updateNavForLoggedIn();
});

// ===== PARTICLES =====
function createParticles(){
  const container=document.getElementById('heroParticles');
  if(!container)return;
  for(let i=0;i<30;i++){
    const p=document.createElement('div');
    p.className='particle';
    p.style.cssText=`left:${Math.random()*100}%;animation-duration:${6+Math.random()*10}s;animation-delay:${Math.random()*8}s;width:${2+Math.random()*3}px;height:${2+Math.random()*3}px;opacity:${0.2+Math.random()*0.5}`;
    container.appendChild(p);
  }
}

// ===== COUNTER ANIMATION =====
function animateCounters(){
  document.querySelectorAll('.stat-num[data-count]').forEach(el=>{
    const target=parseInt(el.getAttribute('data-count'));
    let current=0;
    const step=Math.ceil(target/30);
    const timer=setInterval(()=>{
      current=Math.min(current+step,target);
      el.textContent=current+(el.getAttribute('data-count')==='28'?'+':'+');
      if(current>=target)clearInterval(timer);
    },50);
  });
}

// ===== LANGUAGE =====
function setLang(lang){
  currentLang=lang;
  document.documentElement.setAttribute('data-lang',lang);
  document.querySelectorAll('.lang-btn').forEach(b=>b.classList.remove('active'));
  document.querySelector(`.lang-btn[onclick="setLang('${lang}')"]`).classList.add('active');
  applyTranslations();
}
function applyTranslations(){
  const t=translations[currentLang];
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key=el.getAttribute('data-i18n');
    if(t[key])el.textContent=t[key];
  });
}

// ===== NAVBAR =====
function toggleMenu(){document.getElementById('navLinks').classList.toggle('open')}
window.addEventListener('scroll',()=>{
  document.getElementById('navbar').classList.toggle('scrolled',window.scrollY>20);
  const st=document.getElementById('scrollTop');
  if(st)st.classList.toggle('show',window.scrollY>400);
});
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>document.getElementById('navLinks').classList.remove('open')));

// ===== SEARCH =====
function liveSearch(val){
  const box=document.getElementById('searchResults');
  if(!val.trim()){box.classList.remove('show');return}
  const q=val.toLowerCase();
  const results=searchData.filter(s=>s.name.toLowerCase().includes(q)||s.desc.toLowerCase().includes(q));
  if(!results.length){box.classList.remove('show');return}
  box.innerHTML=results.map(r=>`
    <div class="search-result-item" onclick="${r.key?`openScheme('${r.key}');document.getElementById('searchResults').classList.remove('show')`:`window.open('${r.url}','_blank')`}">
      <i class="${r.icon}"></i>
      <div><strong>${r.name}</strong><br/><small style="color:#757575">${r.desc}</small></div>
    </div>`).join('');
  box.classList.add('show');
}
function doSearch(){liveSearch(document.getElementById('searchInput').value)}
document.addEventListener('click',e=>{if(!e.target.closest('.hero-search'))document.getElementById('searchResults').classList.remove('show')});

// ===== SCHEME MODAL =====
function openScheme(key){
  const s=schemes[key];if(!s)return;
  const saved=savedSchemes.includes(key);
  document.getElementById('modalContent').innerHTML=`
    <div class="modal-scheme-header">
      <div class="modal-scheme-icon" style="background:${s.color}"><i class="${s.icon}"></i></div>
      <div><h2>${s.fullName}</h2><p>${s.tag} • Official Government Scheme</p></div>
    </div>
    <div class="modal-section"><h4>About This Scheme</h4><p>${s.description}</p></div>
    <div class="modal-section"><h4>Benefits</h4><ul>${s.benefits.map(b=>`<li>${b}</li>`).join('')}</ul></div>
    <div class="modal-section"><h4>Eligibility</h4><ul>${s.eligibility.map(e=>`<li>${e}</li>`).join('')}</ul></div>
    <div class="modal-section"><h4>Required Documents</h4><ul>${s.documents.map(d=>`<li>${d}</li>`).join('')}</ul></div>
    <div class="modal-section"><h4>How to Apply — Step by Step</h4><ul>${s.steps.map((st,i)=>`<li><strong>Step ${i+1}:</strong> ${st}</li>`).join('')}</ul></div>
    <div style="display:flex;gap:12px;flex-wrap:wrap;margin-top:24px">
      <a href="${s.url}" target="_blank" rel="noopener" class="modal-apply-btn" style="flex:1;min-width:200px">
        <i class="fas fa-external-link-alt"></i> Apply Now on Official Portal
      </a>
      <button onclick="toggleSave('${key}')" id="saveBtn_${key}" class="modal-apply-btn" style="flex:0 0 auto;background:${saved?'#E53935':'#1565C0'};box-shadow:none">
        <i class="fas fa-bookmark"></i> ${saved?'Unsave':'Save Scheme'}
      </button>
      <button onclick="speakSchemeDetails('${key}')" class="modal-apply-btn" style="flex:0 0 auto;background:#4527A0;box-shadow:none" title="Listen to scheme details">
        <i class="fas fa-volume-up"></i> Listen
      </button>
    </div>
    <p style="font-size:0.74rem;color:#9E9E9E;margin-top:12px;text-align:center"><i class="fas fa-info-circle"></i> Redirects to official government portal. AgriMitra is not affiliated with any government body.</p>`;
  document.getElementById('schemeModal').classList.add('open');
  document.body.style.overflow='hidden';
}
function closeSchemeModal(){document.getElementById('schemeModal').classList.remove('open');document.body.style.overflow=''}
function closeModalOutside(e,id){if(e.target===document.getElementById(id)){document.getElementById(id).classList.remove('open');document.body.style.overflow=''}}

// ===== SAVE SCHEMES =====
function toggleSave(key){
  const idx=savedSchemes.indexOf(key);
  if(idx>-1)savedSchemes.splice(idx,1);else savedSchemes.push(key);
  localStorage.setItem('agrimitra_saved',JSON.stringify(savedSchemes));
  if(currentUser){
    currentUser.savedSchemes=savedSchemes;
    syncToMongo().then(()=>console.log('✅ savedSchemes synced'));
  }
  renderSaved();
  renderFdSavedSchemes();
  const btn=document.getElementById(`saveBtn_${key}`);
  if(btn){const isSaved=savedSchemes.includes(key);btn.style.background=isSaved?'#E53935':'#1565C0';btn.innerHTML=`<i class="fas fa-bookmark"></i> ${isSaved?'Unsave':'Save Scheme'}`}
}
function renderSaved(){
  const list=document.getElementById('savedList');
  const count=document.getElementById('savedCount');
  if(count)count.textContent=savedSchemes.length;
  if(!list)return;
  if(!savedSchemes.length){list.innerHTML=`<div class="empty-state"><i class="fas fa-bookmark"></i><p>${translations[currentLang].no_saved||'No saved schemes yet.'}</p></div>`;return}
  list.innerHTML=savedSchemes.map(k=>{
    const s=schemes[k];
    return s?`<div class="saved-scheme-item"><span><i class="${s.icon}"></i>${s.name}</span><button onclick="toggleSave('${k}')"><i class="fas fa-times"></i></button></div>`:''
  }).join('');
}

// ===== SUBSIDY FILTER =====
function filterSubsidy(cat,btn){
  document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
  if(btn)btn.classList.add('active');
  document.querySelectorAll('.subsidy-card').forEach(card=>{
    if(cat==='all'){card.classList.remove('hidden')}
    else{const cats=card.getAttribute('data-cat')||'';card.classList.toggle('hidden',!cats.includes(cat))}
  });
}

// ===== TOOL TABS =====
function switchTool(id,btn){
  document.querySelectorAll('.tool-panel').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.tool-tab').forEach(t=>t.classList.remove('active'));
  document.getElementById('tool-'+id).classList.add('active');
  if(btn)btn.classList.add('active');
}

// ===== ADVANCED TOOL TABS =====
function switchAdvTab(id,btn){
  document.querySelectorAll('.adv-panel').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.adv-tab').forEach(t=>t.classList.remove('active'));
  const panel=document.getElementById(id);if(panel)panel.classList.add('active');
  if(btn)btn.classList.add('active');
}

// ===== EMI CALCULATOR =====
function calcEMI(){
  const P=parseFloat(document.getElementById('loanAmount').value);
  const annualRate=parseFloat(document.getElementById('interestRate').value);
  const n=parseInt(document.getElementById('tenure').value);
  const result=document.getElementById('emiResult');
  if(!P||!annualRate||!n||P<=0||annualRate<=0||n<=0){
    result.innerHTML='<p style="color:#E53935;font-weight:600"><i class="fas fa-exclamation-circle"></i> Please fill all fields with valid values.</p>';
    result.classList.add('show');return;
  }
  const r=annualRate/(12*100);
  const emi=r===0?P/n:(P*r*Math.pow(1+r,n))/(Math.pow(1+r,n)-1);
  const totalPayment=emi*n;
  const totalInterest=totalPayment-P;
  result.innerHTML=`
    <div class="result-title"><i class="fas fa-calculator"></i> EMI Calculation Result</div>
    <div class="result-row"><span>Loan Amount</span><span>₹${P.toLocaleString('en-IN')}</span></div>
    <div class="result-row"><span>Interest Rate</span><span>${annualRate}% per annum</span></div>
    <div class="result-row"><span>Tenure</span><span>${n} months</span></div>
    <div class="result-row"><span>Total Interest</span><span>₹${Math.round(totalInterest).toLocaleString('en-IN')}</span></div>
    <div class="result-row"><span>Total Payment</span><span>₹${Math.round(totalPayment).toLocaleString('en-IN')}</span></div>
    <div class="result-row"><span>Monthly EMI</span><span>₹${Math.round(emi).toLocaleString('en-IN')}</span></div>`;
  result.classList.add('show');
}

// ===== ELIGIBILITY CHECKER =====
function checkEligibility(){
  const land=parseFloat(document.getElementById('landHolding').value);
  const state=document.getElementById('stateSelect').value;
  const type=document.getElementById('farmerType').value;
  const result=document.getElementById('eligResult');
  if(isNaN(land)||!state){
    result.innerHTML='<p style="color:#E53935;font-weight:600"><i class="fas fa-exclamation-circle"></i> Please fill all fields.</p>';
    result.classList.add('show');return;
  }
  const eligible=[];
  // PM-KISAN: all landholding farmers
  eligible.push({name:'PM-KISAN',desc:'₹6,000/year income support — you are eligible',url:'https://pmkisan.gov.in',key:'pmkisan'});
  // PMFBY: all farmers
  eligible.push({name:'PM Fasal Bima Yojana',desc:'Crop insurance at low premium — you are eligible',url:'https://pmfby.gov.in',key:'pmfby'});
  // KCC: all farmers
  eligible.push({name:'Kisan Credit Card',desc:'Credit up to ₹3 lakh at ~4% interest — you are eligible',url:'https://www.myscheme.gov.in',key:'kcc'});
  // Soil Health: all
  eligible.push({name:'Soil Health Card',desc:'Free soil testing — you are eligible',url:'https://soilhealth.dac.gov.in',key:'soilhealth'});
  // PMKSY: all
  eligible.push({name:'PM Krishi Sinchai Yojana',desc:'Up to 55% irrigation subsidy — you are eligible',url:'https://pmksy.gov.in',key:'pmksy'});
  // Maharashtra specific
  if(state==='maharashtra'){
    eligible.push({name:'MahaDBT Subsidies',desc:'Maharashtra state subsidies — check MahaDBT portal',url:'https://mahadbt.maharashtra.gov.in',key:null});
  }
  result.innerHTML=`
    <div class="result-title"><i class="fas fa-check-circle"></i> ${eligible.length} Schemes You May Qualify For</div>
    ${eligible.map(s=>`
      <div class="elig-scheme">
        <i class="fas fa-check-circle"></i>
        <div style="flex:1">
          <strong>${s.name}</strong>
          <small>${s.desc}</small>
        </div>
        <a href="${s.url}" target="_blank" rel="noopener" style="color:var(--blue);font-size:0.78rem;font-weight:700;white-space:nowrap"><i class="fas fa-external-link-alt"></i> Apply</a>
      </div>`).join('')}
    <p style="font-size:0.76rem;color:var(--gray-500);margin-top:12px"><i class="fas fa-info-circle"></i> Eligibility is indicative. Verify on official portals.</p>`;
  result.classList.add('show');
}

// ===== SCHEME RECOMMENDER =====
function recommendScheme(){
  const crop=document.getElementById('cropType').value;
  const need=document.getElementById('farmerNeed').value;
  const result=document.getElementById('recResult');
  const recommendations=[];
  const needMap={
    income:{name:'PM-KISAN',desc:'₹6,000/year direct income support for all farmers',url:'https://pmkisan.gov.in'},
    insurance:{name:'PM Fasal Bima Yojana',desc:'Crop insurance at 1.5–5% premium against all natural risks',url:'https://pmfby.gov.in'},
    credit:{name:'Kisan Credit Card (KCC)',desc:'Credit up to ₹3 lakh at ~4% interest for farm needs',url:'https://www.myscheme.gov.in'},
    irrigation:{name:'PM Krishi Sinchai Yojana',desc:'Up to 55% subsidy on drip & sprinkler irrigation systems',url:'https://pmksy.gov.in'},
    market:{name:'e-NAM',desc:'Online market for better price discovery across India',url:'https://www.enam.gov.in'},
    soil:{name:'Soil Health Card',desc:'Free soil testing with crop-wise fertilizer recommendations',url:'https://soilhealth.dac.gov.in'}
  };
  if(needMap[need])recommendations.push(needMap[need]);
  // Always add PM-KISAN if not already
  if(need!=='income')recommendations.push({name:'PM-KISAN',desc:'₹6,000/year income support — recommended for all farmers',url:'https://pmkisan.gov.in'});
  // Crop-specific
  if(['cotton','sugarcane','rice','wheat'].includes(crop)&&need!=='insurance')
    recommendations.push({name:'PM Fasal Bima Yojana',desc:`Crop insurance specifically covers ${crop} crops`,url:'https://pmfby.gov.in'});
  if(need!=='credit')recommendations.push({name:'Kisan Credit Card',desc:'Low-interest credit for all farming activities',url:'https://www.myscheme.gov.in'});
  // NABARD for all
  recommendations.push({name:'NABARD Schemes',desc:'Rural finance and development schemes via NABARD',url:'https://www.nabard.org'});
  const unique=recommendations.filter((v,i,a)=>a.findIndex(t=>t.name===v.name)===i).slice(0,4);
  result.innerHTML=`
    <div class="result-title"><i class="fas fa-magic"></i> Recommended Schemes for You</div>
    ${unique.map((r,i)=>`
      <div class="rec-card">
        <h5>${i+1}. ${r.name}</h5>
        <p>${r.desc}</p>
        <a href="${r.url}" target="_blank" rel="noopener"><i class="fas fa-external-link-alt"></i> Visit Official Portal</a>
      </div>`).join('')}
    <p style="font-size:0.76rem;color:var(--gray-500);margin-top:8px"><i class="fas fa-robot"></i> AI-based guidance only. Verify eligibility on official portals.</p>`;
  result.classList.add('show');
}

// ===== LOGIN MODAL =====
let generatedOTP='';
let currentUser=JSON.parse(localStorage.getItem('agrimitra_user')||'null');

function openLoginModal(){
  if(currentUser){openFarmerDashboard();return;}
  document.getElementById('loginModal').classList.add('open');
  document.body.style.overflow='hidden';
  otpSent=false;generatedOTP='';
  document.getElementById('loginForm').style.display='block';
  document.getElementById('loginSuccess').style.display='none';
  document.getElementById('otpSection').style.display='none';
  document.getElementById('loginMobile').value='';
  document.getElementById('loginBtn').innerHTML='<i class="fas fa-paper-plane"></i> Send OTP';
  const old=document.getElementById('otpSentMsg');if(old)old.remove();
  if(timerInterval)clearInterval(timerInterval);
  // Start electric border animation
  requestAnimationFrame(()=>initElectricBorder());
}
function closeLoginModal(){
  document.getElementById('loginModal').classList.remove('open');
  document.body.style.overflow='';
  if(timerInterval)clearInterval(timerInterval);
}
async function handleLogin(){
  const mobile=document.getElementById('loginMobile').value.trim();
  if(!otpSent){
    if(mobile.length!==10||!/^\d{10}$/.test(mobile)){showLoginError('Please enter a valid 10-digit mobile number.');return;}
    sendRealOTP(mobile);
  } else {
    const otp=Array.from(document.querySelectorAll('.otp-box')).map(b=>b.value).join('');
    if(otp.length!==6){showLoginError('Please enter the complete 6-digit OTP.');return;}
    if(otp===generatedOTP){
      if(timerInterval)clearInterval(timerInterval);
      const mobile=document.getElementById('loginMobile').value.trim();
      // Load farmer data from MongoDB
      try{
        const res=await fetch(`${API_BASE}/farmer/${mobile}`);
        const result=await res.json();
        if(result.found){
          currentUser=result.data;
        } else {
          currentUser={mobile,name:'',email:'',address:'',photo:'',state:'',land:'',crop:'',
            joinDate:new Date().toLocaleDateString('en-IN'),
            appliedSchemes:[],schemeHistory:[],savedSchemes:[],trackingItems:[],docFiles:{},docs:{}};
          await syncToMongo();
        }
      }catch(e){
        // API unreachable — fallback to localStorage
        const permanent=JSON.parse(localStorage.getItem('agrimitra_data_'+mobile)||'null');
        const session=JSON.parse(localStorage.getItem('agrimitra_user')||'null');
        currentUser=permanent||session||{mobile,name:'',email:'',address:'',photo:'',
          joinDate:new Date().toLocaleDateString('en-IN'),appliedSchemes:[],schemeHistory:[]};
      }
      currentUser.mobile=mobile;
      // Sync savedSchemes and trackingItems from user data
      if(currentUser.savedSchemes&&currentUser.savedSchemes.length){
        savedSchemes=currentUser.savedSchemes;
        localStorage.setItem('agrimitra_saved',JSON.stringify(savedSchemes));
      }
      if(currentUser.trackingItems&&currentUser.trackingItems.length){
        trackingItems=currentUser.trackingItems;
      }
      localStorage.setItem('agrimitra_user',JSON.stringify(currentUser));
      updateNavForLoggedIn();
      document.getElementById('loginForm').style.display='none';
      document.getElementById('loginSuccess').style.display='block';
      setTimeout(()=>{closeLoginModal();openFarmerDashboard();},1800);
    } else {
      showLoginError('Invalid OTP. Please check and try again.');
    }
  }
}

async function sendRealOTP(mobile){
  const btn=document.getElementById('loginBtn');
  btn.innerHTML='<i class="fas fa-spinner fa-spin"></i> Sending...';
  btn.disabled=true;
  generatedOTP=String(Math.floor(100000+Math.random()*900000));
  let smsSent=false;

  // Fast2SMS — free tier, works for Indian numbers, CORS-friendly
  // Get your FREE API key at https://www.fast2sms.com (takes 2 mins, no cost)
  const FAST2SMS_KEY='YOUR_FAST2SMS_API_KEY'; // <-- paste your key here

  if(FAST2SMS_KEY!=='YOUR_FAST2SMS_API_KEY'){
    try{
      const res=await fetch(`https://www.fast2sms.com/dev/bulkV2?authorization=${FAST2SMS_KEY}&variables_values=${generatedOTP}&route=otp&numbers=${mobile}`,{
        method:'GET',headers:{'cache-control':'no-cache'}
      });
      if(res.ok){const d=await res.json();if(d.return===true)smsSent=true;}
    }catch(e){}
  }

  // Fallback: TextBelt (1 free/day per IP)
  if(!smsSent){
    try{
      const form=new FormData();
      form.append('phone','+91'+mobile);
      form.append('message','Your AgriMitra OTP is: '+generatedOTP+'. Valid for 5 minutes. Do not share with anyone.');
      form.append('key','textbelt');
      const res=await fetch('https://textbelt.com/text',{method:'POST',body:form});
      if(res.ok){const d=await res.json();if(d.success)smsSent=true;}
    }catch(e){}
  }

  document.getElementById('otpSection').style.display='block';
  btn.innerHTML='<i class="fas fa-check"></i> Verify OTP';
  btn.disabled=false;
  otpSent=true;
  startOTPTimer();
  document.querySelectorAll('.otp-box').forEach(b=>b.value='');
  document.querySelector('.otp-box').focus();

  if(smsSent){
    showLoginSuccess('✅ OTP sent to +91'+mobile+' successfully!');
  } else {
    showOTPOnScreen(generatedOTP,mobile);
  }
}

function showLoginSuccess(msg){
  let el=document.getElementById('otpSentMsg');
  if(!el){el=document.createElement('p');el.id='otpSentMsg';el.style.cssText='color:#2E7D32;font-size:0.82rem;font-weight:600;margin-top:8px;text-align:center;background:#E8F5E9;padding:8px 12px;border-radius:8px';document.getElementById('otpSection').before(el);}
  el.innerHTML=msg;
}
function showOTPOnScreen(otp,mobile){
  let el=document.getElementById('otpSentMsg');
  if(!el){el=document.createElement('div');el.id='otpSentMsg';el.style.cssText='margin-top:10px;text-align:center';document.getElementById('otpSection').before(el);}
  el.innerHTML=`<div style="background:#FFF8E1;border:1.5px solid #FFD54F;border-radius:10px;padding:12px 16px;margin-bottom:4px">
    <p style="font-size:0.78rem;color:#E65100;font-weight:700;margin-bottom:6px"><i class="fas fa-exclamation-triangle"></i> SMS unavailable — use this OTP:</p>
    <div style="font-size:2rem;font-weight:900;letter-spacing:10px;color:#1B5E20;font-family:monospace">${otp}</div>
    <p style="font-size:0.72rem;color:#757575;margin-top:4px">Enter this code in the boxes above</p>
  </div>`;
  const boxes=document.querySelectorAll('.otp-box');
  otp.split('').forEach((d,i)=>{if(boxes[i])boxes[i].value=d;});
}
function showLoginError(msg){
  let err=document.getElementById('loginError');
  if(!err){err=document.createElement('p');err.id='loginError';err.style.cssText='color:#E53935;font-size:0.82rem;font-weight:600;margin-top:8px;text-align:center';document.getElementById('loginForm').appendChild(err)}
  err.innerHTML=`<i class="fas fa-exclamation-circle"></i> ${msg}`;
  setTimeout(()=>{if(err)err.textContent=''},3000);
}
function startOTPTimer(){
  let count=30;
  document.getElementById('timerCount').textContent=count;
  document.getElementById('otpTimer').style.display='block';
  timerInterval=setInterval(()=>{
    count--;
    document.getElementById('timerCount').textContent=count;
    if(count<=0){clearInterval(timerInterval);document.getElementById('otpTimer').innerHTML='<a href="#" onclick="resendOTP()" style="color:var(--green);font-weight:700">Resend OTP</a>'}
  },1000);
}
function resendOTP(){
  startOTPTimer();
  document.querySelectorAll('.otp-box').forEach(b=>b.value='');
  document.querySelector('.otp-box').focus();
  return false;
}
function otpMove(el,pos){
  el.value=el.value.replace(/\D/g,'');
  if(el.value&&pos<6){const next=document.querySelectorAll('.otp-box')[pos];if(next)next.focus()}
}

// ===== TRACKING =====
function addTracking(){
  document.getElementById('trackModal').classList.add('open');
  document.body.style.overflow='hidden';
  document.getElementById('trackSchemeName').value='';
}
function closeTrackModal(){
  document.getElementById('trackModal').classList.remove('open');
  document.body.style.overflow='';
}
function saveTracking(){
  const name=document.getElementById('trackSchemeName').value.trim();
  const status=document.getElementById('trackStatus').value;
  if(!name){alert('Please enter a scheme name.');return}
  trackingItems.push({name,status,date:new Date().toLocaleDateString()});
  localStorage.setItem('agrimitra_tracking',JSON.stringify(trackingItems));
  if(currentUser){currentUser.trackingItems=trackingItems;syncToMongo();}
  renderTracking();
  closeTrackModal();
}
function renderTracking(){
  const list=document.getElementById('trackingList');
  if(!list)return;
  const defaultItems=[
    {name:'PM-KISAN Registration',status:'pending',icon:'fas fa-rupee-sign'},
    {name:'KCC Application',status:'inprogress',icon:'fas fa-credit-card'},
    {name:'PMFBY Enrollment',status:'done',icon:'fas fa-umbrella'}
  ];
  const allItems=[...defaultItems,...trackingItems];
  list.innerHTML=allItems.map(item=>`
    <div class="track-item">
      <div class="track-info"><i class="${item.icon||'fas fa-tasks'}"></i><span>${item.name}</span></div>
      <span class="track-status ${item.status}">${item.status==='pending'?'Pending':item.status==='inprogress'?'In Progress':'Completed'}</span>
    </div>`).join('');
}

// ===== EMERGENCY HELP =====
function toggleEmergencyHelp(){
  document.getElementById('emergencyModal').classList.toggle('open');
  document.getElementById('emergencyOverlay').classList.toggle('open');
}

// ===== CHATBOT =====
let chatbotOpen=false;

// AgriMitra context for the AI
const SYSTEM_CONTEXT=`You are AgriBot, the official AI assistant for AgriMitra — India's trusted farmer information platform built by E-Kisan team.

ABOUT AGRIMITRA:
- India's trusted farmer platform with ONLY official .gov.in government links
- Built by E-Kisan team: Sanket Patu (leader), Sakshi Shitole, Kishor Zende, Samir Galate
- Support: agrimitrasupport@gmail.com
- Features: Dark/Light mode, EN/Hindi/Marathi language, PWA offline support, Voice search

GOVERNMENT SCHEMES (6):
1. PM-KISAN: ₹6,000/year in 3 installments of ₹2,000. Apply: pmkisan.gov.in
2. PM Fasal Bima Yojana (PMFBY): Crop insurance at 1.5-2% premium. Apply: pmfby.gov.in
3. Kisan Credit Card (KCC): Credit up to ₹3 lakh at ~4% interest. Apply: myscheme.gov.in
4. Soil Health Card: Free soil testing + fertilizer recommendations. Check: soilhealth.dac.gov.in
5. PM Krishi Sinchai Yojana (PMKSY): 55% subsidy on drip/sprinkler irrigation. Apply: pmksy.gov.in
6. e-NAM: Online agriculture market for better price discovery. Register: enam.gov.in

SUBSIDIES: Irrigation (55% PMKSY), Fertilizer (Urea/DAP MRP), Seeds, Equipment (SMAM), Maharashtra (MahaDBT: mahadbt.maharashtra.gov.in)

LOANS: KCC (~4%), NABARD (nabard.org), Agri Infrastructure Fund ₹2L-₹2Cr at 3% (agriinfra.dac.gov.in)

SMART TOOLS: EMI Calculator, Eligibility Checker, AI Scheme Recommender

ADVANCED TOOLS (11): Crop Profit/Loss Calculator, MSP Lookup (2024-25), Fertilizer Dose Calculator, Land Area Converter, Water Requirement Calculator, Weather & Crop Advisory, Scheme Comparison Tool, Mandi Price Trend, Crop Yield Prediction, Loan Risk Predictor, Fraud Link Checker

FARMER DASHBOARD: Login via OTP, My Profile, Applied Schemes tracker, Scheme History, Saved Schemes, Document Vault (Aadhaar/7-12/PAN/Bank), Scheme Alerts, Farmer Certificate download

MSP 2024-25: Rice ₹2300, Wheat ₹2275, Cotton ₹7121, Soybean ₹4892, Tur ₹7550, Moong ₹8682, Groundnut ₹6783

Always give complete, helpful answers. For scheme applications always direct to official .gov.in portals. Be friendly and practical.`;


function toggleChatbot(){
  chatbotOpen=!chatbotOpen;
  document.getElementById('chatbotWindow').classList.toggle('open',chatbotOpen);
  if(chatbotOpen)document.getElementById('chatInput').focus();
}

const WELCOME_MSGS={
  english:`🌾 Namaste! I'm <strong>AgriBot</strong>, your AI farming assistant.<br/><br/>I can help you with:<br/>• Government schemes &amp; subsidies<br/>• Loan information<br/>• General farming questions<br/>• Any other queries!<br/><br/>What would you like to know?`,
  hindi:`🌾 नमस्ते! मैं <strong>AgriBot</strong> हूँ, आपका AI कृषि सहायक।<br/><br/>मैं इनमें मदद कर सकता हूँ:<br/>• सरकारी योजनाएं और सब्सिडी<br/>• लोन की जानकारी<br/>• सामान्य खेती के सवाल<br/>• कोई भी अन्य प्रश्न!<br/><br/>आप क्या जानना चाहते हैं?`,
  marathi:`🌾 नमस्कार! मी <strong>AgriBot</strong> आहे, तुमचा AI शेती सहाय्यक।<br/><br/>मी यामध्ये मदत करू शकतो:<br/>• सरकारी योजना आणि अनुदान<br/>• कर्जाची माहिती<br/>• सामान्य शेतीचे प्रश्न<br/>• इतर कोणतेही प्रश्न!<br/><br/>तुम्हाला काय जाणून घ्यायचे आहे?`
};
const PLACEHOLDERS={english:'Ask anything...',hindi:'कुछ भी पूछें...',marathi:'काहीही विचारा...'};

function changeChatLang(lang){
  // Update welcome message
  const msgs=document.getElementById('chatMessages');
  const firstMsg=msgs.querySelector('.bot-msg');
  if(firstMsg)firstMsg.innerHTML=WELCOME_MSGS[lang]||WELCOME_MSGS.english;
  // Update placeholder
  document.getElementById('chatInput').placeholder=PLACEHOLDERS[lang]||PLACEHOLDERS.english;
}
function chatEnter(e){if(e.key==='Enter')sendChat()}
function quickChat(msg){document.getElementById('chatInput').value=msg;sendChat()}

async function sendChat(){
  const input=document.getElementById('chatInput');
  const msg=input.value.trim();
  if(!msg)return;
  input.value='';
  appendMessage(msg,'user');
  const lang=(document.getElementById('chatLang')?.value)||'english';
  const typingId='typing_'+Date.now();
  appendTyping(typingId);
  setTimeout(()=>{
    removeTyping(typingId);
    appendMessage(getFallbackResponse(msg,lang),'bot');
  },600);
}

async function fetchAIResponse(userMsg,lang='english'){
  const langInstruction=lang==='marathi'
    ?'IMPORTANT: You MUST reply ONLY in Marathi language. Do not use English at all. Every word of your response must be in Marathi.'
    :lang==='hindi'
    ?'IMPORTANT: You MUST reply ONLY in Hindi language. Do not use English at all. Every word of your response must be in Hindi.'
    :'Reply in English.';
  const controller=new AbortController();
  const timeout=setTimeout(()=>controller.abort(),20000);
  try{
    // Pollinations.ai anonymous chat endpoint — no key needed
    const res=await fetch('https://text.pollinations.ai/openai',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      signal:controller.signal,
      body:JSON.stringify({
        model:'openai-large',
        messages:[
          {role:'system',content:SYSTEM_CONTEXT+'\n\n'+langInstruction},
          {role:'user',content:userMsg},
          {role:'system',content:langInstruction}
        ],
        private:true
      })
    });
    clearTimeout(timeout);
    if(!res.ok)throw new Error('API error '+res.status);
    const data=await res.json();
    const reply=(data?.choices?.[0]?.message?.content||'').trim();
    // Only fall back if reply is empty or contains API deprecation notices
    if(!reply||reply.toLowerCase().includes('important notice')||reply.toLowerCase().includes('being deprecated')){
      return getFallbackResponse(userMsg,lang);
    }
    return reply;
  }catch(e){
    clearTimeout(timeout);
    return getFallbackResponse(userMsg,lang);
  }
}


function getFallbackResponse(msg,lang='english'){
  // Normalize common typos and voice-input errors
  let q=msg.toLowerCase().trim()
    .replace(/agree\s*mitra/g,'agrimitra')
    .replace(/agri\s*mitra/g,'agrimitra')
    .replace(/agrimiter/g,'agrimitra')
    .replace(/pm\s*kisan/g,'pmkisan')
    .replace(/pm\s*kisan/g,'pmkisan')
    .replace(/fasal\s*bima/g,'fasalbima')
    .replace(/kisan\s*credit/g,'kisancredit')
    .replace(/advance\s*tool/g,'advancedtool')
    .replace(/advanced\s*tool/g,'advancedtool')
    .replace(/smart\s*tool/g,'smarttool')
    .replace(/maha\s*dbt/g,'mahadbt')
    .replace(/e\s*nam/g,'enam')
    .replace(/what\s+is\s+/g,'whatis ')
    .replace(/tell\s+me\s+about\s+/g,'about ')
    .replace(/explain\s+/g,'about ')
    .replace(/describe\s+/g,'about ')
    .replace(/in\s+one\s+line/g,'')
    .replace(/briefly/g,'')
    .replace(/shortly/g,'')
    .trim();
  const H=lang==='hindi', M=lang==='marathi';

  // Greetings
  if(/^(hi|hello|hey|hii|namaste|namaskar|good morning|good evening)/.test(q)){
    if(M)return'नमस्कार! 👋 मी AgriBot आहे — AgriMitra चा AI सहाय्यक. PM-KISAN, पीक विमा, अनुदान, कर्ज, EMI कॅल्क्युलेटर, हवामान सल्ला किंवा इतर कोणत्याही गोष्टीबद्दल विचारा!';
    if(H)return'नमस्ते! 👋 मैं AgriBot हूँ — AgriMitra का AI सहायक. PM-KISAN, फसल बीमा, सब्सिडी, लोन, EMI कैलकुलेटर, मौसम सलाह या किसी भी चीज़ के बारे में पूछें!';
    return'Hello! 👋 I\'m AgriBot — AgriMitra\'s AI assistant. Ask me about PM-KISAN, crop insurance, subsidies, loans, EMI calculator, weather advisory, MSP, mandi trends, or anything about AgriMitra!';
  }
  if(/thank|thanks|shukriya|dhanyawad/.test(q)){
    if(M)return'धन्यवाद! 😊 AgriMitra वर आल्याबद्दल आभारी आहे. कधीही मदतीसाठी विचारा!';
    if(H)return'धन्यवाद! 😊 AgriMitra पर आने के लिए शुक्रिया. कभी भी मदद के लिए पूछें!';
    return'You\'re welcome! 😊 Thank you for using AgriMitra!';
  }
  if(/^(ok|okay|alright|sure|got it|fine|accha|haan|yes|yep|hmm|nahi|no)$/.test(q)){
    if(M)return'ठीक आहे! 👍 आणखी काही प्रश्न असल्यास नक्की विचारा.';
    if(H)return'ठीक है! 👍 कोई और सवाल हो तो जरूर पूछें.';
    return'Alright! 👍 Let me know if you need anything else.';
  }
  if(/bye|goodbye|see you|alvida/.test(q)){
    if(M)return'निरोप! 🌾 AgriMitra वर पुन्हा या. खुश राहा!';
    if(H)return'अलविदा! 🌾 AgriMitra पर फिर आएं!';
    return'Goodbye! 🌾 Visit AgriMitra again anytime. Happy farming!';
  }
  if(/how are you|kaisa hai|kaise ho/.test(q)){
    if(M)return'मी ठीक आहे! 😊 AgriMitra वर तुमचे स्वागत आहे. काय मदत करू?';
    if(H)return'मैं ठीक हूँ! 😊 AgriMitra पर आपका स्वागत है. क्या मदद करूं?';
    return'Doing great! 😊 Welcome to AgriMitra. What can I help you with?';
  }
  if(/who are you|what is your name|aap kaun|tumhi kon|agribot/.test(q)){
    if(M)return'मी AgriBot 🤖 आहे — AgriMitra चा AI सहाय्यक. मी शेतकऱ्यांना सरकारी योजना, अनुदान, कर्ज आणि शेतीशी संबंधित सर्व माहिती देतो. English, Hindi आणि Marathi मध्ये बोलतो!';
    if(H)return'मैं AgriBot 🤖 हूँ — AgriMitra का AI सहायक. मैं किसानों को सरकारी योजनाएं, सब्सिडी, लोन और खेती की जानकारी देता हूँ. English, Hindi और Marathi में बात करता हूँ!';
    return'I\'m AgriBot 🤖 — AgriMitra\'s AI assistant! I help farmers with government schemes, subsidies, loans, advanced tools, and all AgriMitra features. I speak English, Hindi & Marathi!';
  }

  // About AgriMitra
  if(/agrimitra|agri mitra|agree mitra|agri-mitra|agrimiter|agrimitra kya|about agrimitra|this website|this platform|this app|this site|what is this|ye kya hai|he kay ahe|platform kya|website kya|app kya/.test(q)){
    return'🌾 AgriMitra — India\'s Trusted Farmer Platform by E-Kisan\n\n✅ 6 Central Govt Schemes (PM-KISAN, PMFBY, KCC, Soil Health, PMKSY, e-NAM)\n✅ State subsidies — seeds, fertilizer, irrigation, equipment\n✅ 3 Govt-backed loan schemes (KCC, NABARD, Agri Infra Fund)\n✅ Smart Tools — EMI calculator, eligibility checker, scheme recommender\n✅ Advanced Tools — profit/loss, MSP lookup, fertilizer dose, weather, mandi trends, yield prediction, fraud checker & more\n✅ AI Chatbot (AgriBot) in English, Hindi & Marathi\n✅ Farmer Dashboard — save schemes, track applications, upload documents\n✅ Only official .gov.in links — no middlemen, no fraud\n✅ Dark/Light mode + multilingual (EN/HI/MR)\n✅ PWA — works offline too!';
  }
  if(/who made|who built|who created|developer|team|ekisan|e-kisan|sanket|sakshi|kishor|samir/.test(q)){
    return'AgriMitra was built by the E-Kisan team:\n\n👨‍💻 Sanket Shivshankar Patu (Team Leader) — Keshegaon — 9552254259\n👩‍💻 Sakshi Swaminath Shitole — Akkalkot — 7741014269\n👨‍💻 Kishor Tanaji Zende — Latur — 8767698132\n👨‍💻 Samir Maula Galate — Solapur — 7666584076\n\nSupport email: agrimitrasupport@gmail.com\nClick the 🎧 Emergency Help button on the website for instant contact!';
  }
  if(/contact|support|help desk|email|phone|helpline|emergency|mail id|email id|gmail/.test(q)){
    return'📞 AgriMitra Support:\n\nEmail: agrimitrasupport@gmail.com\nTeam Leader: Sanket Patu — 9552254259\nSakshi Shitole — 7741014269\nKishor Zende — 8767698132\nSamir Galate — 7666584076\n\nClick the 🎧 orange Emergency Help button (bottom right of website) for instant team contact!';
  }
  if(/official|government website|gov\.in|safe|secure|trusted|not official/.test(q)){
    return'⚠️ AgriMitra is NOT an official government website. We are an information platform that only redirects to official .gov.in portals.\n\n🔒 Your data is 100% secure & encrypted. We never share personal info with any third party.\n\nUse the Fraud Checker in Advanced Tools to verify any suspicious URL!';
  }

  // Schemes
  if(/pmkisan|pm kisan|kisan samman|pm-kisan|6000|installment|kist/.test(q)){
    return'💰 PM-KISAN (Pradhan Mantri Kisan Samman Nidhi):\n\n• ₹6,000/year in 3 installments of ₹2,000 each\n• Direct Bank Transfer — no middlemen\n• For all landholding farmer families\n• Need: Aadhaar + land records (7/12) + bank account\n• Apply: pmkisan.gov.in → Farmer Corner → New Registration\n\nClick the PM-KISAN card on AgriMitra homepage for full details!';
  }
  if(/pmfby|fasal bima|crop insurance|pik vima|bima/.test(q)){
    return'🌧️ PM Fasal Bima Yojana (PMFBY):\n\n• Crop insurance against drought, floods, pests & calamities\n• Premium: only 2% Kharif, 1.5% Rabi, 5% horticulture\n• Covers all stages including post-harvest losses\n• Loanee farmers: compulsory | Non-loanee: voluntary\n• Apply: pmfby.gov.in before enrollment deadline\n\nUse AgriMitra\'s Eligibility Checker to confirm your eligibility!';
  }
  if(/\bkcc\b|kisan credit card/.test(q)){
    return'💳 Kisan Credit Card (KCC):\n\n• Credit up to ₹3 lakh at ~4% interest per annum\n• Covers crop cultivation, post-harvest & allied activities\n• Personal accident insurance included\n• Valid 5 years with annual renewal\n• Apply: nearest bank branch or myscheme.gov.in\n\nUse AgriMitra\'s EMI Calculator to plan your repayment!';
  }
  if(/soil health|soil card|mitti|soil test/.test(q)){
    return'🧪 Soil Health Card Scheme:\n\n• Free soil testing for all farmers\n• Crop-wise fertilizer recommendations\n• Reduces input costs by 8–10%\n• Card issued every 2 years\n• Contact local KVK or Agriculture Dept for soil sample\n• Check: soilhealth.dac.gov.in\n\nAlso try AgriMitra\'s Fertilizer Dose Calculator in Advanced Tools!';
  }
  if(/pmksy|sinchai|drip|sprinkler|water subsidy|irrigation/.test(q)){
    return'💧 PM Krishi Sinchai Yojana (PMKSY):\n\n• "Har Khet Ko Pani" — irrigation for every farm\n• Up to 55% subsidy on drip & sprinkler systems\n• For all farmers, priority to small & marginal\n• Apply: pmksy.gov.in → select your state portal\n\nUse AgriMitra\'s Water Requirement Calculator in Advanced Tools!';
  }
  if(/enam|e-nam|mandi market|online trading|apmc/.test(q)){
    return'🏪 e-NAM (National Agriculture Market):\n\n• Pan-India online trading for agricultural commodities\n• Better price discovery through transparent online bidding\n• Available in 1000+ mandis across India\n• Online payment directly to farmer account\n• Register: enam.gov.in\n\nCheck AgriMitra\'s Mandi Price Trend tool in Advanced Tools!';
  }

  // Subsidies & Loans
  if(/subsidy|anudan|seeds|beej|fertilizer|khad|equipment|tractor|machinery/.test(q)){
    return'🏷️ Government Subsidies on AgriMitra:\n\n💧 Irrigation: Up to 55% on drip/sprinkler (PMKSY)\n🌱 Seeds: Subsidized certified seeds via state agri depts\n🌿 Fertilizer: Govt-controlled MRP on Urea & DAP\n🚜 Equipment: Subsidy on tractors & machinery (SMAM)\n⭐ Maharashtra: All state subsidies via MahaDBT\n\nFilter by category in the Subsidies section on AgriMitra!';
  }
  if(/maharashtra|mahadbt|maha dbt|krishi maharashtra/.test(q)){
    return'🟠 Maharashtra Farmers:\n\n• MahaDBT Portal: mahadbt.maharashtra.gov.in — all state subsidies\n• Maharashtra Krishi Dept: krishi.maharashtra.gov.in\n• Includes: seeds, equipment, irrigation, crop support\n• 7/12 Extract: digitalsatbara.mahabhumi.gov.in/dslr\n\nAgriMitra has a dedicated Maharashtra filter in the Subsidies section!';
  }
  if(/\bloan\b|karj|nabard|agri infra|rural finance/.test(q)){
    return'🏦 Agricultural Loan Schemes on AgriMitra:\n\n💳 KCC: Up to ₹3 lakh @ ~4% interest\n🏢 NABARD Rural Finance: For farmers, FPOs, cooperatives — nabard.org\n🏗️ Agri Infrastructure Fund: ₹2L–₹2Cr @ 3% subvention — agriinfra.dac.gov.in\n\n⚠️ AgriMitra does NOT provide loans. All applications go through official govt portals only.\n\nUse our EMI Calculator & Loan Risk Predictor in Advanced Tools!';
  }

  // Smart Tools — general
  if(/smart tool|all smart|tool section|tools section|what is tools|tools me kya/.test(q)){
    return'🛠️ Smart Tools in AgriMitra (Tools section):\n\n1. 🧮 EMI Calculator — calculate monthly loan installment\n2. ✅ Eligibility Checker — find schemes you qualify for\n3. 🤖 AI Scheme Recommender — personalized scheme suggestions\n\nFind them: Click "Tools" in the navbar!';
  }

  // All schemes list
  if(/all scheme|list of scheme|kitni yojana|konti yojana|scheme list|how many scheme/.test(q)){
    return'📋 All Government Schemes on AgriMitra:\n\n1. 💰 PM-KISAN — ₹6,000/year income support\n2. 🌧️ PM Fasal Bima Yojana — crop insurance\n3. 💳 Kisan Credit Card — credit up to ₹3 lakh @ 4%\n4. 🧪 Soil Health Card — free soil testing\n5. 💧 PM Krishi Sinchai Yojana — 55% irrigation subsidy\n6. 🏪 e-NAM — online agriculture market\n\nClick any scheme card on the homepage for full details!';
  }

  // Smart Tools
  if(/emi|emi calculator|loan calculator|monthly installment/.test(q)){
    return'🧮 EMI Calculator (Smart Tools):\n\nEnter: Loan Amount + Interest Rate + Tenure (months)\nGet: Monthly EMI, Total Interest, Total Payment\n\nHow to use: Tools section → EMI Calculator tab → fill details → Calculate.\n\nExample: ₹1,00,000 @ 4% for 12 months = ₹8,516/month EMI';
  }
  if(/eligib|qualify|patra|patrata/.test(q)){
    return'✅ Eligibility Checker (Smart Tools):\n\nEnter: Land holding + State + Farmer category\nGet: All schemes you qualify for with direct apply links\n\nHow to use: Tools section → Eligibility Checker tab.\n\nMost farmers qualify for PM-KISAN, PMFBY, KCC, Soil Health Card & PMKSY!';
  }
  if(/recommend|which scheme|best scheme|konti yojana/.test(q)){
    return'🤖 AI Scheme Recommender (Smart Tools):\n\nSelect: Primary Crop + Primary Need\nGet: Top 4 personalized scheme recommendations\n\nHow to use: Tools section → Scheme Recommender tab.\n\nExample: Cotton farmer needing insurance → recommends PMFBY + PM-KISAN + KCC!';
  }

  // Advanced Tools — general question
  if(/advancedtool|advance tool|advanced tool|all tool|all feature|what tool|which tool|tool list|tools in agrimitra|agrimitra tool|agrimitra me kya|agrimitra madhe|features in advance|advance section/.test(q)){
    return'🔧 Advanced Tools in AgriMitra:\n\n1. 📊 Profit/Loss Calculator — crop revenue vs cost\n2. 💰 MSP Lookup — 2024-25 support prices for 10 crops\n3. 🌿 Fertilizer Dose Calculator — ICAR-based NPK recommendations\n4. 📐 Land Area Converter — acres ↔ hectares ↔ guntha ↔ bigha\n5. 💧 Water Requirement Calculator — seasonal water needs\n6. 🌤️ Weather & Crop Advisory — real-time weather + farming tips\n7. ⚖️ Scheme Comparison Tool — compare 2 schemes side by side\n8. 📈 Mandi Price Trend — best month to sell your crop\n9. 🌱 Crop Yield Prediction — AI-based yield estimate\n10. 🛡️ Loan Risk Predictor — repayment capacity assessment\n11. 🚫 Fraud Link Checker — verify if a URL is official govt portal\n\nFind all tools: Click "Advanced" in the navbar!';
  }

  // Advanced Tools — individual
  if(/profit|loss|crop profit|income calculator|revenue/.test(q)){
    return'📊 Crop Profit/Loss Calculator (Advanced Tools):\n\nEnter: Land area + Input cost/acre + Expected yield + Selling price/MSP\nGet: Total revenue, total cost, net profit/loss, ROI%\n\nFind it: Advanced section → Profit/Loss tab';
  }
  if(/msp|minimum support price|support price/.test(q)){
    return'💰 MSP Lookup (Advanced Tools) — 2024-25 rates:\n\nRice: ₹2,300 | Wheat: ₹2,275 | Cotton: ₹7,121\nSoybean: ₹4,892 | Tur: ₹7,550 | Moong: ₹8,682\nGroundnut: ₹6,783 | Maize: ₹2,090\n\nFind it: Advanced section → MSP Lookup tab\nOfficial source: cacp.dacnet.nic.in';
  }
  if(/fertilizer dose|fertilizer calculator|urea|dap|mop|npk/.test(q)){
    return'🌿 Fertilizer Dose Calculator (Advanced Tools):\n\nSelect crop + Enter area → Get ICAR-recommended Urea, DAP & MOP quantities in kg.\n\nExample: 2 acres Rice → Urea: 105kg, DAP: 53kg, MOP: 51kg\n\nFind it: Advanced section → Fertilizer tab';
  }
  if(/area convert|land convert|acre|hectare|guntha|bigha|sqft/.test(q)){
    return'📐 Land Area Converter (Advanced Tools):\n\nConvert: Acres ↔ Hectares ↔ Guntha ↔ Bigha ↔ Sq. Feet\n\nExample: 2.5 acres = 1.01 hectares = 100.2 guntha\n\nFind it: Advanced section → Area Convert tab';
  }
  if(/water requirement|water calculator|pani kitna|irrigation need/.test(q)){
    return'💧 Water Requirement Calculator (Advanced Tools):\n\nSelect crop + area + season → Get total water needed in ML and daily average.\n\nTip: Drip irrigation saves 40–50% water. Apply for PMKSY subsidy!\n\nFind it: Advanced section → Water Req. tab';
  }
  if(/weather|mausam|climate|rain|temperature|forecast|crop advisory/.test(q)){
    return'🌤️ Weather & Crop Advisory (Advanced Tools):\n\nEnter your city/district → Get real-time temperature, humidity, wind, rainfall + farming advisory.\n\nPowered by Open-Meteo (free, no API key needed).\nFor detailed IMD forecast: mausam.imd.gov.in\n\nFind it: Advanced section → Weather tab';
  }
  if(/compare scheme|comparison|scheme vs/.test(q)){
    return'⚖️ Scheme Comparison Tool (Advanced Tools):\n\nSelect any 2 schemes → See side-by-side comparison of benefits, description & apply links.\n\nExample: Compare PM-KISAN vs PMFBY!\n\nFind it: Advanced section → Compare tab';
  }
  if(/mandi|mandi price|market price|sell crop|best time sell|price trend/.test(q)){
    return'📈 Mandi Price Trend (Advanced Tools):\n\n6-month historical price trends for Rice, Wheat, Cotton, Soybean, Onion.\nHighlights the best month to sell for maximum profit!\n\nFor live prices: enam.gov.in\n\nFind it: Advanced section → Mandi Trend tab';
  }
  if(/yield predict|yield estimation|production estimate|utpadan/.test(q)){
    return'🌱 Crop Yield Prediction (Advanced Tools):\n\nSelect crop + area + soil type + irrigation → Get predicted yield in quintals + estimated revenue at MSP.\n\nFind it: Advanced section → Yield Predict tab';
  }
  if(/loan risk|risk predictor|repayment capacity|debt/.test(q)){
    return'🛡️ Loan Repayment Risk Predictor (Advanced Tools):\n\nEnter annual income + loan amount + land holding → Get Low/Medium/High risk assessment with advice.\n\nFind it: Advanced section → Loan Risk tab';
  }
  if(/fraud|fake website|scam|verify url|check link|suspicious/.test(q)){
    return'🚫 Fraud Link Checker (Advanced Tools):\n\nPaste any URL → AgriBot checks if it\'s a verified official government portal.\n\n15+ trusted domains verified including pmkisan.gov.in, pmfby.gov.in, mahadbt.maharashtra.gov.in.\n\n⚠️ Always use .gov.in portals. Never pay money to middlemen!\n\nFind it: Advanced section → Fraud Check tab';
  }

  // Dashboard & Login
  if(/dashboard|login|otp|account|profile|my account|farmer dashboard/.test(q)){
    return'👤 Farmer Dashboard (AgriMitra):\n\nLogin with mobile number — OTP-based, no password needed!\n\nDashboard features:\n📋 My Profile — name, address, state, land, crop\n📌 Applied Schemes — track your applications\n📚 Scheme History\n🔖 Saved Schemes\n📄 My Documents — upload Aadhaar, 7/12, PAN, bank passbook\n🔔 Alerts — scheme deadlines & notifications\n📜 Download Farmer Certificate\n\nClick Login button (top right) to get started!';
  }
  if(/document|upload|aadhaar|7\/12|pan card|bank passbook|certificate/.test(q)){
    return'📄 Document Vault (Farmer Dashboard):\n\nUpload once, use anytime:\n• Aadhaar Card | Land Records (7/12) | Bank Passbook\n• PAN Card | Passport Photo | Income Certificate\n• Residence Proof | Farmer Certificate\n\nAll files saved securely on your device (max 5MB each).\nAlso generate & download your Farmer Self-Declaration Certificate!\n\nLogin → Dashboard → My Documents tab';
  }
  if(/save scheme|bookmark|saved scheme/.test(q)){
    return'🔖 Save Schemes:\n\nClick any scheme card → View Details → click "Save Scheme".\nAll saved schemes appear in Dashboard → Saved Schemes tab.\n\nYou can also organize them in bookmark folders: Income Support, Insurance, Loans, Irrigation!';
  }
  if(/track|application status|applied|tracking/.test(q)){
    return'📌 Application Tracker (Dashboard):\n\nTrack scheme applications with status:\n🟡 Pending | 🔵 In Progress | 🟢 Completed\n\nLogin → Dashboard → Applied Schemes tab → click + Add';
  }
  if(/alert|notification|reminder|deadline/.test(q)){
    return'🔔 Scheme Alerts (Dashboard):\n\nGet alerts for PM-KISAN installments, PMFBY enrollment deadlines, MahaDBT new subsidies & more.\n\nLogin → Dashboard → Alerts tab → Enable Push Notifications!';
  }

  // Features
  if(/7\/12|satbara|land record|bhumi|mahabhumi/.test(q)){
    return'📋 7/12 Extract (Satbara Utara):\n\nGet your official land record online:\n🔗 digitalsatbara.mahabhumi.gov.in/dslr\n\nAgriMitra has a direct "7/12" link in the navbar for quick access!\n\nYou need 7/12 for: PM-KISAN, KCC, PMFBY and most scheme applications.';
  }
  if(/voice|microphone|speak|listen|audio|speech/.test(q)){
    return'🎤 Voice Features (AgriMitra):\n\n• Voice Search — click 🎤 mic in search bar to search by speaking\n• Voice Chat — click 🎤 mic in AgriBot to ask questions by voice\n• Listen Button — on every scheme popup, click "Listen" to hear details read aloud\n\nSupports English, Hindi & Marathi voice input!';
  }
  if(/dark mode|light mode|theme|night mode/.test(q)){
    return'🌙 Dark/Light Mode:\n\nClick the ☀️/🌙 icon in the navbar to toggle.\nAgriMitra saves your preference automatically!';
  }
  if(/language|hindi|marathi|english|bhasha|translate/.test(q)){
    return'🌐 Language Support:\n\nAgriMitra supports 3 languages:\n🇬🇧 EN — English | 🇮🇳 हि — Hindi | 🟠 म — Marathi\n\nClick EN/हि/म buttons in the navbar to switch.\nAgriBot also responds in your selected language!';
  }
  if(/pwa|offline|install app|download app/.test(q)){
    return'📱 AgriMitra PWA (Progressive Web App):\n\nInstall AgriMitra as an app on your phone:\n1. Open in Chrome browser\n2. Tap "Add to Home Screen"\n3. Works like a native app — even offline!\n\nAll saved data, schemes & documents available offline.';
  }
  if(/search|find scheme|khoj/.test(q)){
    return'🔍 Search on AgriMitra:\n\nUse the search bar on the homepage to find any scheme instantly.\nSearch by name (PM-KISAN), category (subsidy, loan), or state.\n\nAlso supports 🎤 voice search — click the mic button!';
  }
  if(/kharif|rabi|season|crop season/.test(q)){
    return'🌾 Crop Seasons in India:\n\n☀️ Kharif (June–Oct): Rice, Cotton, Soybean, Maize, Tur, Groundnut\n❄️ Rabi (Nov–Apr): Wheat, Gram, Mustard, Onion\n🌸 Zaid (Mar–Jun): Watermelon, Cucumber, Vegetables\n\nPMFBY premium: 2% for Kharif, 1.5% for Rabi crops.';
  }
  if(/nabard/.test(q)){
    return'🏢 NABARD (National Bank for Agriculture & Rural Development):\n\n• Rural finance for farmers, FPOs & cooperatives\n• Interest rate varies by scheme & bank\n• Visit: nabard.org\n\nAgriMitra links directly to NABARD in the Loans section!';
  }

  // Generic fallback
  if(M)return'मला नक्की माहित नाही, पण मी मदत करण्यासाठी इथे आहे! 😊\n\nतुम्ही विचारू शकता:\n• PM-KISAN, PMFBY, KCC, PMKSY, e-NAM बद्दल\n• अनुदान, कर्ज, महाराष्ट्र योजना\n• EMI कॅल्क्युलेटर, हवामान, MSP, मंडी ट्रेंड\n• AgriMitra वैशिष्ट्ये, लॉगिन, डॅशबोर्ड, व्हॉइस सर्च';
  if(H)return'मुझे यकीन नहीं है, लेकिन मैं मदद के लिए यहाँ हूँ! 😊\n\nआप पूछ सकते हैं:\n• PM-KISAN, PMFBY, KCC, PMKSY, e-NAM के बारे में\n• सब्सिडी, लोन, महाराष्ट्र योजनाएं\n• EMI कैलकुलेटर, मौसम, MSP, मंडी ट्रेंड\n• AgriMitra फीचर्स, लॉगिन, डैशबोर्ड, वॉइस सर्च';
  return'I\'m not sure about that, but I\'m here to help! 😊\n\nYou can ask me about:\n• PM-KISAN, PMFBY, KCC, PMKSY, e-NAM, Soil Health Card\n• Subsidies, loans, Maharashtra schemes, 7/12 extract\n• EMI calculator, weather advisory, MSP lookup, mandi trends\n• Yield prediction, loan risk, fraud checker, area converter\n• AgriMitra features, login, dashboard, documents, voice search\n• Dark mode, language support, PWA offline mode';
}

function appendMessage(text,type){
  const msgs=document.getElementById('chatMessages');
  const div=document.createElement('div');
  div.className=type==='bot'?'bot-msg':'user-msg';
  div.innerHTML=text.replace(/\n/g,'<br/>');
  msgs.appendChild(div);
  msgs.scrollTop=msgs.scrollHeight;
}
function appendTyping(id){
  const msgs=document.getElementById('chatMessages');
  const div=document.createElement('div');
  div.className='bot-typing';div.id=id;
  div.innerHTML='<span></span><span></span><span></span>';
  msgs.appendChild(div);msgs.scrollTop=msgs.scrollHeight;
}
function removeTyping(id){const el=document.getElementById(id);if(el)el.remove()}


// ===== NAVBAR UPDATE AFTER LOGIN =====
function updateNavForLoggedIn(){
  const btn=document.querySelector('.btn-login');
  if(!btn||!currentUser)return;
  const name=currentUser.name||('Farmer +91'+currentUser.mobile.slice(-4));
  btn.innerHTML=`<i class="fas fa-user-circle"></i> ${name.split(' ')[0]||'My Account'}`;
  btn.onclick=openFarmerDashboard;
}

// ===== FARMER DASHBOARD SIDEBAR =====
function openFarmerDashboard(){
  if(!currentUser){openLoginModal();return;}
  // Remove existing if any
  const old=document.getElementById('farmerSidebar');if(old)old.remove();
  const old2=document.getElementById('sidebarOverlay');if(old2)old2.remove();

  // Overlay
  const overlay=document.createElement('div');
  overlay.id='sidebarOverlay';
  overlay.style.cssText='position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:3000;backdrop-filter:blur(4px)';
  overlay.onclick=closeFarmerDashboard;
  document.body.appendChild(overlay);

  // Sidebar
  const sb=document.createElement('div');
  sb.id='farmerSidebar';
  sb.innerHTML=buildSidebarHTML();
  document.body.appendChild(sb);
  document.body.style.overflow='hidden';

  // Animate in
  requestAnimationFrame(()=>sb.classList.add('sidebar-open'));
  renderProfilePhoto();
  renderAppliedSchemes();
  renderSchemeHistory();
}

function closeFarmerDashboard(){
  const sb=document.getElementById('farmerSidebar');
  const ov=document.getElementById('sidebarOverlay');
  if(sb){sb.classList.remove('sidebar-open');setTimeout(()=>{sb.remove();if(ov)ov.remove();document.body.style.overflow='';},320);}
  else{if(ov)ov.remove();document.body.style.overflow='';}
}

function buildSidebarHTML(){
  const u=currentUser;
  const initials=u.name?u.name.split(' ').map(w=>w[0]).join('').toUpperCase().slice(0,2):'F';
  const tabs=[
    {id:'tab-profile',icon:'fas fa-user',label:'My Profile'},
    {id:'tab-schemes',icon:'fas fa-th-large',label:'Applied Schemes'},
    {id:'tab-history',icon:'fas fa-history',label:'Scheme History'},
    {id:'tab-saved',icon:'fas fa-bookmark',label:'Saved Schemes'},
    {id:'tab-docs',icon:'fas fa-file-alt',label:'My Documents'},
    {id:'tab-alerts',icon:'fas fa-bell',label:'Alerts'},
  ];
  return `
  <div class="fd-header">
    <div class="fd-header-top">
      <div class="fd-logo"><img src="logo.svg" alt="AgriMitra"/></div>
      <span class="fd-title">Farmer Dashboard</span>
      <button class="fd-close" onclick="closeFarmerDashboard()"><i class="fas fa-times"></i></button>
    </div>
    <div class="fd-profile-banner">
      <div class="fd-avatar" id="fdAvatar" onclick="document.getElementById('photoUpload').click()">
        ${u.photo?`<img src="${u.photo}" alt="Profile"/>`:`<span>${initials||'F'}</span>`}
        <div class="fd-avatar-edit"><i class="fas fa-camera"></i></div>
      </div>
      <input type="file" id="photoUpload" accept="image/*" style="display:none" onchange="uploadPhoto(event)"/>
      <div class="fd-profile-info">
        <h3>${u.name||'Complete Your Profile'}</h3>
        <p><i class="fas fa-mobile-alt"></i> +91 ${u.mobile}</p>
        <p><i class="fas fa-calendar-alt"></i> Member since ${u.joinDate}</p>
      </div>
      <div class="fd-profile-complete">
        <div class="fd-progress-bar"><div class="fd-progress-fill" style="width:${getProfileCompletion()}%"></div></div>
        <small>${getProfileCompletion()}% Profile Complete</small>
      </div>
    </div>
    <div class="fd-tabs">
      ${tabs.map((t,i)=>`<button class="fd-tab${i===0?' active':''}" onclick="switchFdTab('${t.id}',this)"><i class="${t.icon}"></i><span>${t.label}</span></button>`).join('')}
    </div>
  </div>
  <div class="fd-body">

    <!-- PROFILE TAB -->
    <div class="fd-panel active" id="tab-profile">
      <h4 class="fd-section-title"><i class="fas fa-user-edit"></i> Complete Your Profile</h4>
      <div class="fd-form">
        <div class="fd-form-group"><label>Full Name</label><input type="text" id="fd-name" placeholder="Enter your full name" value="${u.name||''}" /></div>
        <div class="fd-form-group"><label>Email Address</label><input type="email" id="fd-email" placeholder="Enter your email" value="${u.email||''}" /></div>
        <div class="fd-form-group"><label>Village / Address</label><input type="text" id="fd-address" placeholder="Village, Taluka, District" value="${u.address||''}" /></div>
        <div class="fd-form-group"><label>State</label>
          <select id="fd-state">
            <option value="">Select State</option>
            <option value="Maharashtra" ${u.state==='Maharashtra'?'selected':''}>Maharashtra</option>
            <option value="Uttar Pradesh" ${u.state==='Uttar Pradesh'?'selected':''}>Uttar Pradesh</option>
            <option value="Punjab" ${u.state==='Punjab'?'selected':''}>Punjab</option>
            <option value="Madhya Pradesh" ${u.state==='Madhya Pradesh'?'selected':''}>Madhya Pradesh</option>
            <option value="Rajasthan" ${u.state==='Rajasthan'?'selected':''}>Rajasthan</option>
            <option value="Other" ${u.state==='Other'?'selected':''}>Other</option>
          </select>
        </div>
        <div class="fd-form-group"><label>Land Holding (acres)</label><input type="number" id="fd-land" placeholder="e.g. 2.5" value="${u.land||''}" step="0.1" min="0"/></div>
        <div class="fd-form-group"><label>Primary Crop</label>
          <select id="fd-crop">
            <option value="">Select Crop</option>
            ${['Rice/Paddy','Wheat','Cotton','Sugarcane','Vegetables','Fruits','Pulses'].map(c=>`<option value="${c}" ${u.crop===c?'selected':''}>${c}</option>`).join('')}
          </select>
        </div>
        <button class="fd-save-btn" onclick="saveProfile()"><i class="fas fa-save"></i> Save Profile</button>
      </div>
    </div>

    <!-- APPLIED SCHEMES TAB -->
    <div class="fd-panel" id="tab-schemes">
      <div class="fd-section-header">
        <h4 class="fd-section-title"><i class="fas fa-th-large"></i> My Applied Schemes</h4>
        <button class="fd-add-btn" onclick="addAppliedScheme()"><i class="fas fa-plus"></i> Add</button>
      </div>
      <div id="fd-applied-list"></div>
    </div>

    <!-- HISTORY TAB -->
    <div class="fd-panel" id="tab-history">
      <h4 class="fd-section-title"><i class="fas fa-history"></i> Scheme History</h4>
      <div id="fd-history-list"></div>
    </div>

    <!-- SAVED SCHEMES TAB -->
    <div class="fd-panel" id="tab-saved">
      <h4 class="fd-section-title"><i class="fas fa-bookmark"></i> Saved Schemes</h4>
      <div id="fd-saved-list">
        ${savedSchemes.length?savedSchemes.map(k=>{const s=schemes[k];return s?`
          <div class="fd-scheme-item" id="fdsaved_${k}">
            <div class="fd-scheme-icon" style="background:${s.color}"><i class="${s.icon}"></i></div>
            <div class="fd-scheme-info"><strong>${s.name}</strong><span>${s.tag}</span></div>
            <a href="${s.url}" target="_blank" class="fd-scheme-link" title="Visit Official Portal"><i class="fas fa-external-link-alt"></i></a>
            <button onclick="removeSavedScheme('${k}')" class="fd-doc-btn delete" title="Remove" style="margin-left:4px"><i class="fas fa-trash"></i></button>
          </div>`:''}).join(''):`<div class="fd-empty"><i class="fas fa-bookmark"></i><p>No saved schemes yet.<br/>Browse schemes and save them.</p></div>`}
      </div>
    </div>

    <!-- DOCUMENTS TAB -->
    <div class="fd-panel" id="tab-docs">
      <div class="fd-section-header">
        <h4 class="fd-section-title"><i class="fas fa-file-alt"></i> My Documents</h4>
      </div>
      <input type="file" id="docUploadInput" accept=".pdf,.jpg,.jpeg,.png,.doc,.docx" style="display:none" onchange="uploadDocument(event)" />
      <p style="font-size:0.78rem;color:var(--gray-600);margin-bottom:14px;line-height:1.5"><i class="fas fa-info-circle" style="color:var(--saffron)"></i> Upload your documents once — use them anytime when applying for schemes. All files saved securely on your device.</p>

      <!-- Predefined document slots -->
      <div class="fd-docs-list" id="fdDocsList">
        ${[
          {icon:'fas fa-id-card',name:'Aadhaar Card',key:'aadhaar',accept:'.pdf,.jpg,.jpeg,.png'},
          {icon:'fas fa-map',name:'Land Records (7/12)',key:'land',accept:'.pdf,.jpg,.jpeg,.png'},
          {icon:'fas fa-university',name:'Bank Passbook',key:'bank',accept:'.pdf,.jpg,.jpeg,.png'},
          {icon:'fas fa-id-badge',name:'PAN Card',key:'pan',accept:'.pdf,.jpg,.jpeg,.png'},
          {icon:'fas fa-camera',name:'Passport Photo',key:'photo',accept:'.jpg,.jpeg,.png'},
          {icon:'fas fa-file-alt',name:'Income Certificate',key:'income',accept:'.pdf,.jpg,.jpeg,.png'},
          {icon:'fas fa-home',name:'Residence Proof',key:'residence',accept:'.pdf,.jpg,.jpeg,.png'},
          {icon:'fas fa-tractor',name:'Farmer Certificate',key:'farmer',accept:'.pdf,.jpg,.jpeg,.png'}
        ].map(d=>{
          const saved=(currentUser.docFiles||{})[d.key];
          return `<div class="fd-doc-item" id="fdDoc_${d.key}">
            <div class="fd-doc-icon"><i class="${d.icon}"></i></div>
            <div class="fd-doc-info">
              <span class="fd-doc-name">${d.name}</span>
              ${saved?`<small class="fd-doc-saved"><i class="fas fa-check-circle" style="color:var(--green)"></i> ${saved.name} (${saved.size})</small>`:`<small class="fd-doc-empty">Not uploaded</small>`}
            </div>
            <div class="fd-doc-actions">
              ${saved?`
                <button class="fd-doc-btn view" onclick="viewDocument('${d.key}')" title="View"><i class="fas fa-eye"></i></button>
                <button class="fd-doc-btn download" onclick="downloadDocument('${d.key}')" title="Download"><i class="fas fa-download"></i></button>
                <button class="fd-doc-btn delete" onclick="deleteDocument('${d.key}')" title="Remove"><i class="fas fa-trash"></i></button>
              `:`<button class="fd-doc-btn upload" onclick="triggerDocUpload('${d.key}','${d.accept}')" title="Upload"><i class="fas fa-upload"></i></button>`}
            </div>
          </div>`;
        }).join('')}
      </div>

      <!-- Download Farmer Self-Declaration Certificate -->
      <div class="fd-cert-box">
        <div class="fd-cert-header">
          <div class="fd-cert-icon"><i class="fas fa-certificate"></i></div>
          <div>
            <strong>Download Your Farmer Certificate</strong>
            <small>Self-Declaration Form as per Government Rules</small>
          </div>
        </div>
        <p class="fd-cert-desc">Generate your official Farmer Self-Declaration Certificate with your profile details. This certificate can be used while applying for PM-KISAN, KCC, PMFBY and other government schemes.</p>
        <button class="fd-cert-btn" onclick="generateFarmerCertificate()"><i class="fas fa-download"></i> Generate &amp; Download Certificate</button>
      </div>

      <!-- Extra uploaded documents -->
      <div id="fdExtraDocs"></div>
    </div>

    <!-- ALERTS TAB -->
    <div class="fd-panel" id="tab-alerts">
      <h4 class="fd-section-title"><i class="fas fa-bell"></i> Scheme Alerts</h4>
      <button onclick="requestNotificationPermission()" style="background:var(--green);color:white;border:none;padding:9px 16px;border-radius:9px;font-size:0.82rem;font-weight:700;cursor:pointer;display:flex;align-items:center;gap:7px;margin-bottom:14px"><i class="fas fa-bell"></i> Enable Push Notifications</button>
      <div class="fd-alerts-list">
        <div class="fd-alert-item new"><div class="fd-alert-dot"></div><div><strong>PM-KISAN 19th Installment</strong><p>₹2,000 released to eligible farmers</p><small>Today, 10:00 AM</small></div></div>
        <div class="fd-alert-item new"><div class="fd-alert-dot"></div><div><strong>PMFBY Kharif 2025 Open</strong><p>Enrollment deadline: 31 July 2025</p><small>Yesterday</small></div></div>
        <div class="fd-alert-item"><div class="fd-alert-dot inactive"></div><div><strong>MahaDBT New Subsidy</strong><p>Equipment subsidy applications open</p><small>3 days ago</small></div></div>
        <div class="fd-alert-item"><div class="fd-alert-dot inactive"></div><div><strong>Soil Health Card Camp</strong><p>Free testing at your local KVK</p><small>1 week ago</small></div></div>
      </div>
    </div>

  </div>
  <div class="fd-footer">
    <button class="fd-logout-btn" onclick="logoutUser()"><i class="fas fa-sign-out-alt"></i> Logout</button>
  </div>`;
}

function getProfileCompletion(){
  if(!currentUser)return 0;
  const fields=['name','email','address','state','land','crop','photo'];
  const filled=fields.filter(f=>currentUser[f]&&currentUser[f]!=='').length;
  return Math.round((filled/fields.length)*100);
}

function switchFdTab(id,btn){
  document.querySelectorAll('.fd-tab').forEach(t=>t.classList.remove('active'));
  document.querySelectorAll('.fd-panel').forEach(p=>p.classList.remove('active'));
  if(btn)btn.classList.add('active');
  const panel=document.getElementById(id);if(panel)panel.classList.add('active');
}

async function saveProfile(){
  currentUser.name=document.getElementById('fd-name').value.trim();
  currentUser.email=document.getElementById('fd-email').value.trim();
  currentUser.address=document.getElementById('fd-address').value.trim();
  currentUser.state=document.getElementById('fd-state').value;
  currentUser.land=document.getElementById('fd-land').value;
  currentUser.crop=document.getElementById('fd-crop').value;
  localStorage.setItem('agrimitra_user',JSON.stringify(currentUser));
  if(currentUser.mobile)localStorage.setItem('agrimitra_data_'+currentUser.mobile,JSON.stringify(currentUser));
  await syncToMongo();
  updateNavForLoggedIn();
  // Update progress bar
  const bar=document.querySelector('.fd-progress-fill');
  if(bar)bar.style.width=getProfileCompletion()+'%';
  const pct=document.querySelector('.fd-profile-complete small');
  if(pct)pct.textContent=getProfileCompletion()+'% Profile Complete';
  // Update name display
  const nameEl=document.querySelector('.fd-profile-info h3');
  if(nameEl)nameEl.textContent=currentUser.name||'Complete Your Profile';
  showFdToast('Profile saved successfully! ✅');
}

function uploadPhoto(e){
  const file=e.target.files[0];if(!file)return;
  const reader=new FileReader();
  reader.onload=function(ev){
    currentUser.photo=ev.target.result;
    localStorage.setItem('agrimitra_user',JSON.stringify(currentUser));
    syncToMongo();
    renderProfilePhoto();
    showFdToast('Profile photo updated! ✅');
  };
  reader.readAsDataURL(file);
}

function renderProfilePhoto(){
  const av=document.getElementById('fdAvatar');if(!av)return;
  const initials=currentUser.name?currentUser.name.split(' ').map(w=>w[0]).join('').toUpperCase().slice(0,2):'F';
  av.innerHTML=currentUser.photo
    ?`<img src="${currentUser.photo}" alt="Profile"/><div class="fd-avatar-edit"><i class="fas fa-camera"></i></div>`
    :`<span>${initials}</span><div class="fd-avatar-edit"><i class="fas fa-camera"></i></div>`;
}

function addAppliedScheme(){
  const name=prompt('Enter scheme name (e.g. PM-KISAN):');
  if(!name)return;
  const status=prompt('Status? (pending / inprogress / completed):','pending')||'pending';
  if(!currentUser.appliedSchemes)currentUser.appliedSchemes=[];
  currentUser.appliedSchemes.push({name,status,date:new Date().toLocaleDateString('en-IN'),id:Date.now()});
  localStorage.setItem('agrimitra_user',JSON.stringify(currentUser));
  syncToMongo().then(()=>showFdToast('Scheme added & saved! ✅'));
  renderAppliedSchemes();
}

function renderAppliedSchemes(){
  const el=document.getElementById('fd-applied-list');if(!el)return;
  const list=currentUser.appliedSchemes||[];
  if(!list.length){el.innerHTML=`<div class="fd-empty"><i class="fas fa-th-large"></i><p>No applied schemes yet.<br/>Click + Add to track your applications.</p></div>`;return;}
  el.innerHTML=list.map(s=>`
    <div class="fd-applied-item">
      <div class="fd-applied-info">
        <strong>${s.name}</strong>
        <small><i class="fas fa-calendar"></i> Applied: ${s.date}</small>
      </div>
      <span class="track-status ${s.status}">${s.status==='pending'?'Pending':s.status==='inprogress'?'In Progress':'Completed'}</span>
      <button onclick="removeApplied(${s.id})" style="background:none;border:none;color:#BDBDBD;cursor:pointer;padding:4px"><i class="fas fa-trash"></i></button>
    </div>`).join('');
}

function removeApplied(id){
  currentUser.appliedSchemes=(currentUser.appliedSchemes||[]).filter(s=>s.id!==id);
  localStorage.setItem('agrimitra_user',JSON.stringify(currentUser));
  syncToMongo().then(()=>showFdToast('Removed & saved! ✅'));
  renderAppliedSchemes();
}

function removeSavedScheme(key){
  const idx=savedSchemes.indexOf(key);
  if(idx>-1)savedSchemes.splice(idx,1);
  localStorage.setItem('agrimitra_saved',JSON.stringify(savedSchemes));
  if(currentUser){
    currentUser.savedSchemes=savedSchemes;
    syncToMongo().then(()=>showFdToast('Scheme removed! ✅'));
  }
  renderFdSavedSchemes();
  renderSaved();
}

function renderFdSavedSchemes(){
  const el=document.getElementById('fd-saved-list');if(!el)return;
  if(!savedSchemes.length){
    el.innerHTML=`<div class="fd-empty"><i class="fas fa-bookmark"></i><p>No saved schemes yet.<br/>Browse schemes and save them.</p></div>`;
    return;
  }
  el.innerHTML=savedSchemes.map(k=>{
    const s=schemes[k];
    return s?`<div class="fd-scheme-item" id="fdsaved_${k}">
      <div class="fd-scheme-icon" style="background:${s.color}"><i class="${s.icon}"></i></div>
      <div class="fd-scheme-info"><strong>${s.name}</strong><span>${s.tag}</span></div>
      <a href="${s.url}" target="_blank" class="fd-scheme-link" title="Visit Official Portal"><i class="fas fa-external-link-alt"></i></a>
      <button onclick="removeSavedScheme('${k}')" class="fd-doc-btn delete" title="Remove" style="margin-left:4px"><i class="fas fa-trash"></i></button>
    </div>`:''
  }).join('');
}

function renderSchemeHistory(){
  const el=document.getElementById('fd-history-list');if(!el)return;
  const history=currentUser.schemeHistory||[];
  // Add auto-history from saved schemes
  const autoHistory=savedSchemes.map(k=>{const s=schemes[k];return s?{name:s.name,action:'Saved',date:currentUser.joinDate,icon:s.icon,color:s.color}:null}).filter(Boolean);
  const all=[...history,...autoHistory];
  if(!all.length){el.innerHTML=`<div class="fd-empty"><i class="fas fa-history"></i><p>No history yet.<br/>Your scheme activity will appear here.</p></div>`;return;}
  el.innerHTML=all.map(h=>`
    <div class="fd-history-item">
      <div class="fd-history-icon" style="background:${h.color||'var(--green-bg)'}"><i class="${h.icon||'fas fa-check'}" style="color:${h.color?'white':'var(--green)'}"></i></div>
      <div class="fd-history-info"><strong>${h.name}</strong><small>${h.action} • ${h.date}</small></div>
    </div>`).join('');
}

// ===== DOCUMENT MANAGEMENT =====
let pendingDocKey='';

function triggerDocUpload(key, accept){
  pendingDocKey=key;
  const inp=document.getElementById('docUploadInput');
  inp.accept=accept||'.pdf,.jpg,.jpeg,.png';
  inp.click();
}

function uploadDocument(e){
  const file=e.target.files[0];
  if(!file)return;
  // 5MB limit
  if(file.size>5*1024*1024){showFdToast('File too large. Max 5MB allowed.');e.target.value='';return;}
  const reader=new FileReader();
  reader.onload=function(ev){
    if(!currentUser.docFiles)currentUser.docFiles={};
    const key=pendingDocKey||('extra_'+Date.now());
    const sizeKB=Math.round(file.size/1024);
    const sizeStr=sizeKB>1024?(sizeKB/1024).toFixed(1)+'MB':sizeKB+'KB';
    currentUser.docFiles[key]={
      name:file.name,
      type:file.type,
      size:sizeStr,
      data:ev.target.result,
      uploadedAt:new Date().toLocaleDateString('en-IN')
    };
    localStorage.setItem('agrimitra_user',JSON.stringify(currentUser));
    syncToMongo();
    pendingDocKey='';
    e.target.value='';
    refreshDocItem(key);
    showFdToast('Document uploaded & saved! ✅');
  };
  reader.readAsDataURL(file);
}

function refreshDocItem(key){
  const saved=(currentUser.docFiles||{})[key];
  const el=document.getElementById('fdDoc_'+key);
  if(el&&saved){
    el.querySelector('.fd-doc-info').innerHTML=`
      <span class="fd-doc-name">${el.querySelector('.fd-doc-name').textContent}</span>
      <small class="fd-doc-saved"><i class="fas fa-check-circle" style="color:var(--green)"></i> ${saved.name} (${saved.size})</small>`;
    el.querySelector('.fd-doc-actions').innerHTML=`
      <button class="fd-doc-btn view" onclick="viewDocument('${key}')" title="View"><i class="fas fa-eye"></i></button>
      <button class="fd-doc-btn download" onclick="downloadDocument('${key}')" title="Download"><i class="fas fa-download"></i></button>
      <button class="fd-doc-btn delete" onclick="deleteDocument('${key}')" title="Remove"><i class="fas fa-trash"></i></button>`;
  }
}

function viewDocument(key){
  const doc=(currentUser.docFiles||{})[key];
  if(!doc){showFdToast('Document not found.');return;}
  // Open in new tab
  const win=window.open();
  if(doc.type&&doc.type.startsWith('image/')){
    win.document.write(`<html><body style="margin:0;background:#111;display:flex;align-items:center;justify-content:center;min-height:100vh">
      <img src="${doc.data}" style="max-width:100%;max-height:100vh;object-fit:contain" />
    </body></html>`);
  } else {
    // PDF or other — embed
    win.document.write(`<html><body style="margin:0"><embed src="${doc.data}" width="100%" height="100%" style="position:fixed;inset:0" /></body></html>`);
  }
  win.document.title=doc.name;
}

function downloadDocument(key){
  const doc=(currentUser.docFiles||{})[key];
  if(!doc){showFdToast('Document not found.');return;}
  const a=document.createElement('a');
  a.href=doc.data;
  a.download=doc.name;
  a.click();
  showFdToast('Downloading '+doc.name+' ⬇️');
}

function deleteDocument(key){
  if(!confirm('Remove this document? It will be deleted permanently.'))return;
  if(currentUser.docFiles)delete currentUser.docFiles[key];
  localStorage.setItem('agrimitra_user',JSON.stringify(currentUser));
  syncToMongo();
  const el=document.getElementById('fdDoc_'+key);
  if(el){
    el.querySelector('.fd-doc-info small').outerHTML='<small class="fd-doc-empty">Not uploaded</small>';
    el.querySelector('.fd-doc-actions').innerHTML=`<button class="fd-doc-btn upload" onclick="triggerDocUpload('${key}','.pdf,.jpg,.jpeg,.png')" title="Upload"><i class="fas fa-upload"></i></button>`;
  }
  showFdToast('Document removed.');
}

// ===== FARMER SELF-DECLARATION CERTIFICATE =====
function getAgriLogoURL(){
  const base=window.location.href.replace(/\/[^\/]*$/,'/');
  return base+'mahaagri-logo.png';
}

function generateFarmerCertificate(){
  const u=currentUser;
  if(!u.name||!u.address||!u.state){
    showFdToast('Please complete your profile (Name, Address, State) first.');
    return;
  }
  const today=new Date();
  const dateStr=today.toLocaleDateString('en-IN',{day:'2-digit',month:'long',year:'numeric'});
  const certNo='AGM/'+u.mobile.slice(-4)+'/'+today.getFullYear()+'/'+String(today.getMonth()+1).padStart(2,'0');

  const html=`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<title>Farmer Self-Declaration Certificate - AgriMitra</title>
<style>
  *{margin:0;padding:0;box-sizing:border-box}
  body{font-family:'Times New Roman',serif;background:#fff;color:#000;padding:40px}
  .page{max-width:750px;margin:0 auto;border:3px double #1B5E20;padding:36px 44px;position:relative}
  .watermark{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%) rotate(-30deg);font-size:80px;color:rgba(46,125,50,0.06);font-weight:900;white-space:nowrap;pointer-events:none;z-index:0}
  .content{position:relative;z-index:1}
  .header{text-align:center;border-bottom:2px solid #1B5E20;padding-bottom:18px;margin-bottom:20px}
  .emblem{text-align:center;margin-bottom:10px}
  .emblem img{width:100px;height:100px;object-fit:contain}
  .gov-line{font-size:11px;color:#555;letter-spacing:1px;text-transform:uppercase;margin-bottom:4px}
  .title{font-size:20px;font-weight:bold;color:#1B5E20;text-transform:uppercase;letter-spacing:2px;margin:8px 0 4px}
  .subtitle{font-size:13px;color:#333;font-style:italic}
  .cert-no{text-align:right;font-size:11px;color:#555;margin-bottom:16px}
  .cert-no span{font-weight:bold;color:#000}
  .body-text{font-size:13.5px;line-height:2;text-align:justify;margin-bottom:18px}
  .body-text strong{color:#000}
  .details-table{width:100%;border-collapse:collapse;margin:18px 0;font-size:13px}
  .details-table td{padding:7px 12px;border:1px solid #ccc;vertical-align:top}
  .details-table td:first-child{font-weight:bold;background:#f5faf5;width:38%;color:#1B5E20}
  .declaration{background:#f9f9f9;border:1px solid #ddd;border-left:4px solid #1B5E20;padding:14px 16px;margin:18px 0;font-size:12.5px;line-height:1.8}
  .declaration h4{font-size:13px;color:#1B5E20;margin-bottom:8px;text-transform:uppercase;letter-spacing:1px}
  .declaration ol{padding-left:18px}
  .declaration li{margin-bottom:4px}
  .signature-section{display:flex;justify-content:space-between;margin-top:36px;font-size:12px}
  .sig-box{text-align:center;width:45%}
  .sig-line{border-top:1px solid #000;margin-bottom:5px;margin-top:40px}
  .footer-note{margin-top:24px;padding-top:14px;border-top:1px solid #ccc;font-size:10.5px;color:#666;text-align:center;line-height:1.7}
  .seal{text-align:center;margin:20px 0 10px}
  .seal-circle{display:inline-block;width:90px;height:90px;border:3px solid #1B5E20;border-radius:50%;line-height:84px;font-size:11px;font-weight:bold;color:#1B5E20;text-align:center;letter-spacing:1px}
  @media print{body{padding:0}.page{border:3px double #1B5E20;padding:28px 36px}}
</style>
</head>
<body>
<div class="page">
  <div class="watermark">AGRIMITRA</div>
  <div class="content">
    <div class="header">
      <div class="emblem"><img src="${getAgriLogoURL()}" alt="Maharashtra Department of Agriculture" style="width:110px;height:110px;object-fit:contain;border-radius:50%" crossorigin="anonymous" onerror="this.onerror=null;this.outerHTML='<span style=font-size:48px>🌾</span>'"/></div>
      <div class="gov-line">Government of India — Ministry of Agriculture &amp; Farmers Welfare</div>
      <div class="title">Farmer Self-Declaration Certificate</div>
      <div class="subtitle">स्व-घोषणा प्रमाण पत्र — किसान / Swayam Ghoshana Praman Patra</div>
    </div>

    <div class="cert-no">Certificate No: <span>${certNo}</span> &nbsp;|&nbsp; Date: <span>${dateStr}</span></div>

    <div class="body-text">
      This is to certify that <strong>${u.name}</strong>, resident of <strong>${u.address}, ${u.state}</strong>, bearing Mobile No. <strong>+91 ${u.mobile}</strong>, is a bonafide farmer and hereby submits this Self-Declaration Certificate for the purpose of availing benefits under various Central and State Government Agricultural Schemes including but not limited to PM-KISAN, PM Fasal Bima Yojana, Kisan Credit Card, PM Krishi Sinchai Yojana, and other allied schemes.
    </div>

    <table class="details-table">
      <tr><td>Full Name</td><td>${u.name}</td></tr>
      <tr><td>Mobile Number</td><td>+91 ${u.mobile}</td></tr>
      <tr><td>Address</td><td>${u.address}</td></tr>
      <tr><td>State</td><td>${u.state||'—'}</td></tr>
      <tr><td>Land Holding</td><td>${u.land?u.land+' Acres':'—'}</td></tr>
      <tr><td>Primary Crop</td><td>${u.crop||'—'}</td></tr>
      <tr><td>Email</td><td>${u.email||'—'}</td></tr>
      <tr><td>AgriMitra Member Since</td><td>${u.joinDate}</td></tr>
    </table>

    <div class="declaration">
      <h4>Self-Declaration / स्व-घोषणा</h4>
      <p>I, <strong>${u.name}</strong>, do hereby solemnly declare and affirm that:</p>
      <ol>
        <li>I am a citizen of India and a bonafide farmer/agriculturist.</li>
        <li>The land mentioned above is used for agricultural purposes and is in my name or in the name of my family members.</li>
        <li>I am not a government employee (other than Class IV / Multi-Tasking Staff) or an income tax payee.</li>
        <li>I have not concealed any material fact and all information provided is true and correct to the best of my knowledge.</li>
        <li>I understand that any false declaration will make me liable for legal action and recovery of benefits under applicable laws.</li>
        <li>I give my consent for verification of the above details by the concerned government authorities.</li>
        <li>I am aware that this self-declaration is subject to verification by the Agriculture Department and other competent authorities.</li>
        <li>I undertake to inform the concerned authority of any change in the above particulars within 30 days.</li>
      </ol>
    </div>

    <div class="seal">
      <div class="seal-circle">AgriMitra<br/>Verified</div>
    </div>

    <div class="signature-section">
      <div class="sig-box">
        <div class="sig-line"></div>
        <div><strong>Signature of Farmer</strong></div>
        <div>${u.name}</div>
        <div style="font-size:11px;color:#555">Date: ${dateStr}</div>
      </div>
      <div class="sig-box">
        <div class="sig-line"></div>
        <div><strong>Signature of Witness / Countersign</strong></div>
        <div style="font-size:11px;color:#555">(Village Sarpanch / Patwari / Agriculture Officer)</div>
      </div>
    </div>

    <div class="footer-note">
      <strong>Note:</strong> This certificate is generated via AgriMitra (agrimitra.in) for informational and self-declaration purposes only. It is NOT an official government document. For official certification, please contact your local Agriculture Department, Gram Panchayat, or Tehsil Office. | This document is valid only when countersigned by a competent authority.
      <br/><br/>
      <strong>AgriMitra</strong> — India's Trusted Farmer Information Platform | Only Official Government Links | No Middlemen
    </div>
  </div>
</div>
<script>window.onload=function(){window.print();}</script>
</body>
</html>`;

  const blob=new Blob([html],{type:'text/html'});
  const url=URL.createObjectURL(blob);
  const win=window.open(url,'_blank');
  if(win){
    win.onload=()=>{
      setTimeout(()=>URL.revokeObjectURL(url),10000);
    };
  }
  showFdToast('Certificate generated! Use Print → Save as PDF to download. 📄');
}

async function logoutUser(){
  if(!confirm('Are you sure you want to logout?'))return;
  if(currentUser&&currentUser.mobile){
    await syncToMongo();
    localStorage.setItem('agrimitra_data_'+currentUser.mobile,JSON.stringify(currentUser));
  }
  currentUser=null;
  localStorage.removeItem('agrimitra_user');
  closeFarmerDashboard();
  const btn=document.querySelector('.btn-login');
  if(btn){btn.innerHTML='<i class="fas fa-user"></i> <span data-i18n="login">Login</span>';btn.onclick=openLoginModal;}
  showFdToast('Logged out successfully.');
}

function showFdToast(msg){
  let t=document.getElementById('fdToast');
  if(!t){t=document.createElement('div');t.id='fdToast';t.style.cssText='position:fixed;bottom:32px;left:50%;transform:translateX(-50%);background:#1B5E20;color:white;padding:12px 24px;border-radius:50px;font-size:0.88rem;font-weight:600;z-index:9999;box-shadow:0 8px 24px rgba(0,0,0,0.2);transition:opacity 0.3s';document.body.appendChild(t);}
  t.textContent=msg;t.style.opacity='1';
  clearTimeout(t._timer);t._timer=setTimeout(()=>{t.style.opacity='0';},2500);
}



// ===== CONTACT US =====
const EMAILJS_SERVICE='service_xw54w1k';
const EMAILJS_TEMPLATE='template_bmlazus';
const EMAILJS_KEY='ktzhlT28F1MaShXr-';

function openContactModal(){
  document.getElementById('contactModal').classList.add('open');
  document.body.style.overflow='hidden';
  document.getElementById('contactFormWrap').style.display='block';
  document.getElementById('contactSuccess').style.display='none';
  if(currentUser){
    if(currentUser.name)document.getElementById('ct-name').value=currentUser.name;
    if(currentUser.mobile)document.getElementById('ct-mobile').value=currentUser.mobile;
    if(currentUser.email)document.getElementById('ct-email').value=currentUser.email;
  }
}
function closeContactModal(){
  document.getElementById('contactModal').classList.remove('open');
  document.body.style.overflow='';
}
async function submitContact(){
  const name=document.getElementById('ct-name').value.trim();
  const email=document.getElementById('ct-email').value.trim();
  const mobile=document.getElementById('ct-mobile').value.trim();
  const queries=Array.from(document.getElementById('ct-query').querySelectorAll('input[type=checkbox]:checked')).map(o=>o.value);
  const message=document.getElementById('ct-message').value.trim();
  if(!name){showContactError('Please enter your name.');return;}
  if(!email||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){showContactError('Please enter a valid email address.');return;}
  if(!mobile||mobile.length!==10){showContactError('Please enter a valid 10-digit mobile number.');return;}
  if(!queries.length){showContactError('Please select at least one query type.');return;}
  if(!message){showContactError('Please enter your message.');return;}

  const ticket='AGM-'+Date.now().toString().slice(-6)+'-'+Math.floor(Math.random()*900+100);
  const submitBtn=document.querySelector('.contact-form .btn-calc');
  submitBtn.innerHTML='<i class="fas fa-spinner fa-spin"></i> Sending...';
  submitBtn.disabled=true;

  // Send email via EmailJS
  try{
    emailjs.init(EMAILJS_KEY);
    await emailjs.send(EMAILJS_SERVICE, EMAILJS_TEMPLATE,{
      to_email:'ekisansupport@gmail.com',
      from_name:name,
      from_email:email,
      mobile:mobile,
      query_type:queries.join(', '),
      message:message,
      ticket_number:ticket,
      reply_to:email
    });
  }catch(e){
    console.warn('EmailJS error:',e);
    // Still show success — submission saved locally
  }

  // Save locally
  const submissions=JSON.parse(localStorage.getItem('agrimitra_contacts')||'[]');
  submissions.push({ticket,name,email,mobile,queries,message,date:new Date().toLocaleString('en-IN')});
  localStorage.setItem('agrimitra_contacts',JSON.stringify(submissions));

  submitBtn.innerHTML='<i class="fas fa-paper-plane"></i> Submit Query';
  submitBtn.disabled=false;

  document.getElementById('ticketNumber').textContent=ticket;
  document.getElementById('contactFormWrap').style.display='none';
  document.getElementById('contactSuccess').style.display='block';
}
function showContactError(msg){
  let el=document.getElementById('contactError');
  if(!el){el=document.createElement('p');el.id='contactError';el.style.cssText='color:#E53935;font-size:0.82rem;font-weight:600;margin-top:8px;text-align:center;background:#FFEBEE;padding:8px 12px;border-radius:8px';document.querySelector('.contact-form').appendChild(el);}
  el.innerHTML=`<i class="fas fa-exclamation-circle"></i> ${msg}`;
  setTimeout(()=>{if(el)el.textContent='';},3000);
}

// ===== THEME TOGGLE =====
function toggleTheme(){
  const isDark=document.body.classList.toggle('dark-theme');
  const icon=document.getElementById('themeIcon');
  if(icon){
    icon.className=isDark?'fas fa-sun':'fas fa-moon';
  }
  localStorage.setItem('agrimitra_theme',isDark?'dark':'light');
}

// Apply saved theme on load
(function(){
  const saved=localStorage.getItem('agrimitra_theme');
  if(saved==='dark'){
    document.body.classList.add('dark-theme');
    // Icon will be set after DOM loads
    document.addEventListener('DOMContentLoaded',()=>{
      const icon=document.getElementById('themeIcon');
      if(icon)icon.className='fas fa-sun';
    });
  }
})();
