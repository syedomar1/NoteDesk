const mongoose = require('mongoose');
const mongoURI = "mongodb://0.0.0.0:27017/notedesk"
const connectToMongo=()=>{
    mongoose.connect(mongoURI);
    console.log("Connected to mongoose successfully");
}

module.exports = connectToMongo;