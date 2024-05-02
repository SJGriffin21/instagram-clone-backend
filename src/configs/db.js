const mongoose = require("mongoose");

const URI = "mongodb+srv://sjgriffin:<password>@cluster0.o5gttlb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectDB = async () => {
  try {
    // const con = await mongoose.connect(URI);
    await mongoose.connect(URI);
    console.log("DB Connected Successfully ✅");
  } catch (e) {
    console.log(`Authentication to database failed ❗`);
    process.exit(1);
  }
};

module.exports = connectDB;
