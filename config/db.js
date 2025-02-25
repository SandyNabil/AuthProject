//this file is to connect to mongoDB 
//(mongoose is to link between the server and database)

const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("MongoDB is Successfully Connected.");
    } catch (error) {
        console.log("Failed to Connect MongoDB ", error);
    }
};
module.exports = connectDB;