const mongoose = require("mongoose");

const recordSchema = mongoose.Schema({
   fullName: String, 
   registrationNumber: Number,
   marks: Number 
});

const Record = mongoose.model("Record", recordSchema);

module.exports = Record;
