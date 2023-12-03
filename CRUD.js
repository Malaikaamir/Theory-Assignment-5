const Record = require("./record");

const createRecord = async (customName, customDetails, customAmount) => {
    console.log("Record created");
    let record = new Record();
    record.name = customName;
    record.details = customDetails;
    record.amount = customAmount;
    await record.save();
    return record;
}

const getAllRecords = async () => {
    console.log("Get all records");
    let recordList = await Record.find();
    return recordList;
}

const deleteRecord = async (id) => {
    console.log("Delete record");
    let deletedRecord = await Record.findByIdAndDelete(id);
    return deletedRecord;
}

const updateRecord = async (id, customName, customDetails, customAmount) => {
    let record = await Record.findByIdAndUpdate(id, {
        name: customName,
        details: customDetails,
        amount: customAmount
    }, { new: true });
    return record;
}

module.exports.createRecord = createRecord;
module.exports.getAllRecords = getAllRecords;
module.exports.deleteRecord = deleteRecord;
module.exports.updateRecord = updateRecord;
