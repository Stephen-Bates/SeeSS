const mongoose = require('mongoose');
const { Schema } = mongoose;

const styleSchema = new Schema({
  styleText: {
    type: String, //I understand we may need to change this 
    required: true,
  },
  creation_Date: {
    type: String,
    // some way to format date. Will more than likely use moment.js
  },
  username: {
    type: String,
    required: true,
  },
  tag: {
    type: String,
  }

});

const Style = mongoose.model('Style', styleSchema);

module.exports = Style;