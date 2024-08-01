const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cuisineSchema = new Schema({
  name: { 
    type: String, 
    required: true 
},
  description: { 
    type: String, 
    required: true 
},
HistoryandOrigin : {
  type : String,
},
IngredientsAndPreparation:[ {
  type: String,
}],
StylesandTechniques: {
  type: String,
},
MaterialsUsed: {
  type: String,
},
ThemesandMotifs: {
  type: String,
},
CulturalSignificance: {
  type: String,
},
images: [
  {
    path: { type: String, required: true }
  }
],
conclusion: {
  type: String,
},
}, { timestamps: true });

const Cuisine = mongoose.model("Cuisine", cuisineSchema);
module.exports = Cuisine;
