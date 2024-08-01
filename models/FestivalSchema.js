const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const festivalSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  history: {
    type: String,
    required: true
  },
  significance: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  rituals: {
    type: String,
    required: true
  },
  images: [
    {
      path: { type: String, required: true }
    }
  ],
}, { timestamps: true });

const Festival = mongoose.model("Festival", festivalSchema);
module.exports = Festival;
