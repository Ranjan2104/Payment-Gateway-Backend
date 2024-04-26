const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://ranjanamresh100:${process.env.MONGO_PASSWORD}@cluster0.d1bejwz.mongodb.net/PaymentGateway`,
      {
        useNewUrlParser: true,
      }
    );
    console.log(`Database Connected Successfully`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;