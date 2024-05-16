const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const userRouter = require("./router/userRouter");
const adminRouter =require("./router/adminRouter");

const mongoose = require("mongoose");
const db = require("./config/db");

mongoose
  .connect(db.url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

const corsOptions = {
  origin: "http://localhost:3000",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};


app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", userRouter);
app.use("/admin",adminRouter);
app.use("/deleteButton",adminRouter)

app.use((req, res, next) => {
  res.header(
    "Cache-Control",
    "private,store,no-cache,must-revalidate,max-age=0"
  );
  next();
});

const PORT = 9999;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
