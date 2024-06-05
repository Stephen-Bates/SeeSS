const mongoose = require('mongoose');
const { Schema } = mongoose;

const styleSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  style_Text: {
    type: String, //I understand we may need to change this 
    required: true,
  },
  creation_Date: {
    type: DATE,
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