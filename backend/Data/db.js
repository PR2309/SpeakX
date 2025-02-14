const mongoose = require('mongoose');

// const connectDB= async() =>{
//     mongoose.connect('mongodb://localhost:27017');
// connectDB.then((db)=>{
//     console.log('Connected to MongoDB');
// }).catch((err)=>{
//     console.log(err.message);
// });
// }
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("MongoDB Connection Error:", error.message);
        process.exit(1);
    }
};

module.exports = connectDB;