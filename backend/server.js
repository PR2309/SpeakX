const express = require("express");
const dotenv=require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose"); 

const app = express();
dotenv.config();

const connectDB = require("./Data/db");
connectDB();

app.use(cors({
    origin: "http://localhost:5731",
    methods: ["GET", "POST"]
}));

app.use(express.json());

app.get("/",(req,res)=>{
        res.send("Welcome");
}
);

app.get("/data", async (req, res) => {
    try {
        const collection = mongoose.connection.collection("Questions");
        const data = await collection.find({}).toArray();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: "Error fetching data", error: error.message });
    }
});

const PORT= process.env.PORT || 8000;
app.listen(PORT,()=>{
    console.log("Server is runnint at http://localhost:8000");
});

