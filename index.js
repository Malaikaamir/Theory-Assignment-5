const express = require("express");
const mongoose = require("mongoose");
const { createRecord, getAllRecords, deleteRecord, updateRecord } = require ("./operations");
const app = express();
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/Web")
    .then(async () => {
        console.log('Connected to the database');

        // Create a new record
        // let newRecord = await createRecord("Malaika", 100, 00);
        // console.log(newRecord);

        // Get all records
        // let allRecords = await getAllRecords();
        // console.log(allRecords);

        // Delete a record by ID
        // let deletedRecord = await deleteRecord("656c84fe6d76ddfe1f0aa5e1");
        // console.log(deletedRecord);

        // Update a record by ID
        // let updatedData = await updateRecord("656c854507218b025cab0105", "candle", "cream and sweets", 000);
        // console.log(updatedData);

    }).catch((error) => {
        console.log(error);
    });

console.log("Server is running on port 6006");
app.listen(6006);
