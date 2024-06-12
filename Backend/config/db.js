const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    const MONGO_URI = `mongodb+srv://kennataddese6:${process.env.DB_PASS}@cluster0.qyepiio.mongodb.net/`;
    const conn = await mongoose.connect(MONGO_URI, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
      family: 4,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
module.exports = connectDB;
