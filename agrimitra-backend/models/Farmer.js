const mongoose = require('mongoose');

const FarmerSchema = new mongoose.Schema({
  mobile:         { type: String, required: true, unique: true },
  name:           { type: String, default: '' },
  email:          { type: String, default: '' },
  address:        { type: String, default: '' },
  state:          { type: String, default: '' },
  land:           { type: String, default: '' },
  crop:           { type: String, default: '' },
  photo:          { type: String, default: '' },  // base64 string
  joinDate:       { type: String, default: '' },
  appliedSchemes: { type: Array,  default: [] },
  schemeHistory:  { type: Array,  default: [] },
  savedSchemes:   { type: Array,  default: [] },
  trackingItems:  { type: Array,  default: [] },
  docFiles:       { type: Object, default: {} },  // uploaded documents (base64)
  docs:           { type: Object, default: {} },  // document checklist toggles
}, { timestamps: true });

module.exports = mongoose.model('Farmer', FarmerSchema);
