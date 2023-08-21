import mongoose from "mongoose";

const dbConnection = async () => {
  const url =
    "mongodb+srv://walihaider:RizDevWali6969@clone-whatsapp.hikuasa.mongodb.net/?retryWrites=true&w=majority";
  try {
    await mongoose.connect(url, { useUnifiedTopology: true });
    console.log("connected");
  } catch {
    console.log("Error");
  }
};

export default dbConnection;
