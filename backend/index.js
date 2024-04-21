//import express
const express = require("express");
const userRouter = require("./routers/userRouter");
const companyRouter = require("./routers/companyRouter");
const feedbackRouter = require("./routers/feedbackRouter");
const interviewRouter = require("./routers/interviewRouter");
const contactRouter = require("./routers/contactRouter");
const utilRouter = require("./routers/util");



const cors = require("cors");

//initalize express
const app = express();
const port = 5000;

//middleware

//middleware

//parse json data
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
  })
);

app.use("/user", userRouter);
app.use("/company", companyRouter);
app.use("/feedback", feedbackRouter);
app.use("/interview", interviewRouter);
app.use("/Contact", contactRouter);
app.use("/util", utilRouter);

app.use(express.static('./static/uploads'));

//middleware
// app.use("/room", roomRouter);
// app.use("/util", utilRouter);
// app.use(express.static("./uploads"));

app.get("/", (req, res) => {
  res.send("response from express");
});

app.get("/add", (req, res) => {
  res.send("response from add");
});

app.get("/getall", (req, res) => {
  res.send("response from getall");
});

app.get("/update", (req, res) => {
  res.send("response from update");
});

//getall
//update

//starting the server
app.listen(port, () => {
  console.log("server started");
});
