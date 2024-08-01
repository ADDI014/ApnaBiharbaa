const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const clothingSchema = new Schema({
  name: { 
    type: String, 
    required: true 
},
  description: { 
    type: String, 
    required: true 
},
  category: { 
    type: String, 
    required: true 
}, // e.g., Traditional, Modern, etc.
  price: Number,
  images: [{ 
    url: String, 
    filename: String }],
}, { timestamps: true });

const Clothing = mongoose.model("Clothing", clothingSchema);
module.exports = Clothing;
