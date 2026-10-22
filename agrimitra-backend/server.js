require('dotenv').config();
const express  = require('express');
const mongoose = require('mongoose');
const cors     = require('cors');
const Farmer   = require('./models/Farmer');

const app = express();

// ── Middleware ──────────────────────────────────────────────────────────────
app.use(cors({
  origin: ['http://127.0.0.1:5500','http://localhost:5500','http://127.0.0.1:5501','http://localhost:5501','null','*'],
  methods: ['GET','POST','DELETE','OPTIONS'],
  allowedHeaders: ['Content-Type']
}));
app.options('*', cors());
app.use(express.json({ limit: '20mb' }));

// ── MongoDB Connection ──────────────────────────────────────────────────────
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => { console.error('❌ MongoDB error:', err); process.exit(1); });

// ── Routes ──────────────────────────────────────────────────────────────────

// Health check
app.get('/', (req, res) => res.json({ status: 'AgriMitra API running' }));

// GET farmer by mobile
app.get('/api/farmer/:mobile', async (req, res) => {
  try {
    const farmer = await Farmer.findOne({ mobile: req.params.mobile });
    if (!farmer) return res.json({ found: false });
    res.json({ found: true, data: farmer });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// CREATE or UPDATE farmer (upsert)
app.post('/api/farmer', async (req, res) => {
  try {
    const { mobile, ...data } = req.body;
    if (!mobile) return res.status(400).json({ error: 'Mobile is required' });

    // Build update — explicitly set every field including arrays
    const updateData = {
      mobile,
      name:           data.name          || '',
      email:          data.email         || '',
      address:        data.address       || '',
      state:          data.state         || '',
      land:           data.land          || '',
      crop:           data.crop          || '',
      photo:          data.photo         || '',
      joinDate:       data.joinDate      || '',
      appliedSchemes: Array.isArray(data.appliedSchemes) ? data.appliedSchemes : [],
      schemeHistory:  Array.isArray(data.schemeHistory)  ? data.schemeHistory  : [],
      savedSchemes:   Array.isArray(data.savedSchemes)   ? data.savedSchemes   : [],
      trackingItems:  Array.isArray(data.trackingItems)  ? data.trackingItems  : [],
      docFiles:       data.docFiles || {},
      docs:           data.docs    || {},
    };

    const farmer = await Farmer.findOneAndUpdate(
      { mobile },
      { $set: updateData },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );
    res.json({ success: true, data: farmer });
  } catch (e) {
    console.error('POST /api/farmer error:', e.message);
    res.status(500).json({ error: e.message });
  }
});

// DELETE farmer account
app.delete('/api/farmer/:mobile', async (req, res) => {
  try {
    await Farmer.findOneAndDelete({ mobile: req.params.mobile });
    res.json({ success: true });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// ── Start Server ────────────────────────────────────────────────────────────
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
