const mongoose = require('mongoose');

const ConnectDB = async (req, res) => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Mongodb Successfully Connected");
    } catch (error) {
        console.log("Mongodb Failed:", error);
        process.exit(1);
    }

}
module.exports = ConnectDB;