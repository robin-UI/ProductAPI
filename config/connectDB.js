const mongoose = require('mongoose');


mongoose.set('strictQuery', false);
const dbConnect = () => {
    try {
        const conn = mongoose.connect('mongodb://localhost:27017/LeEYET')
        console.log("Connect to mongo Successfuly");
    } catch (error) {
        console.log(error);
    }
}

module.exports = dbConnect;