const mongoose = require('mongoose');
const { Schema } = mongoose;

const styleSchema = new Schema({
  title: {
    type: String,
    maxlength: 3000,
    required: true,
  },
  style_Text: {
    type: String,  
    required: true,
  },
  creation_Date: {
    type: Date,
    ummatable: true,
    default: () => Date.now(),
  },
  username: {
    type: String,
    required: true,
  },
  tag: [{ type: String }]


});

const Style = mongoose.model('Style', styleSchema);

module.exports = Style;