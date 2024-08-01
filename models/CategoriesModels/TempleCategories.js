const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const templeCategorySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  images: [
    {
      path: { type: String, required: true }
    }
  ],

});

const TempleCategory = mongoose.model('TempleCategory', templeCategorySchema);

module.exports = TempleCategory;