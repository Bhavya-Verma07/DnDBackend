const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Tweetschema = new Schema(
  {
    firstcolumn: {
      type: Array,
    
    },
    secondcolumn: {
      type:Array,
    
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("favourite", Tweetschema);