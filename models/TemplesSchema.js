
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const templesSchema = new Schema({
  name: { 
    type: String,
    required: true 
},
  description: { 
    type: String,
    required: true
 },
  location: { 
    type: String, 
    required: true 
  },
  history : {
    type : String,
  },
  significance : {
    type : String,
  },

  ritualsAndPractices : [{
    type : String,
  }],
  images: [
    {
      path: { type: String, required: true }
    }
  ],
  timing: [{
    type :String,
  }],
  conclusion : {
    type : String,
  },
}, { 
    timestamps: true 
});

const bihartemples = mongoose.model("bihartemples", templesSchema);
module.exports = bihartemples;
