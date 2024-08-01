const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const culturalProductSchema = new Schema({
  name: { 
    type: String, 
    required: true 
},
  description: { 
    type: String, 
    required: true 
},
HistoryandOrigin: { 
    type: String, 
    required: true 
},
StylesandTechniques:[ {
  type : String,
}],
MaterialsUsed:{
  type : String,
},
ThemesandMotifs:[{
  type : String,
}],
CulturalSignificance:{
  type : String,
},
images: [
  {
    path: { type: String, required: true }
  }
],
conclusion:{
type : String,
},
}, { timestamps: true });

const CulturalProduct = mongoose.model("CulturalProduct", culturalProductSchema);
module.exports = CulturalProduct;
