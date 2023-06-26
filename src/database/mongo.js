import mongoose from "mongoose";

const connect = () => {
  const url = process.env.MONGO_URL;
  mongoose
    .connect(url)
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((error) => {
      console.log("MongoDB connection error:", error);
    });
};

export default connect;
