const express = require("express");
const path = require("path");

// import all the models
const student = require("./models/student");
const bank = require("./models/bank");
const payment = require("./models/payment");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/student", (req, res) => {
  res.send(JSON.stringify(student.getStudent()));
});

app.get("/student/:id", (req, res) => {
  res.send(JSON.stringify(student.filterStudent(req.params.id)));
});

app.get("/student/get/:name", (req, res) => {
  res.send(JSON.stringify(student.getStudentByName(req.params.name)));
});

app.get("/bank", (req, res) => {
  res.send(JSON.stringify(bank.getBank()));
});

app.get("/bank/:id", (req, res) => {
  res.send(JSON.stringify(bank.filterBank(req.params.id)));
});

app.get("/payment", (req, res) => {
  res.send(JSON.stringify(payment.getPayment()));
});

app.get("/payment/:studentid", (req, res) => {
  res.send(JSON.stringify(payment.filterByStudentID(req.param.studentid)));
});

app.post("/payment/create", (req, res) => {
  const reqData = req.body;
  console.log(reqData);
  res.send(JSON.stringify(payment.setPayment(reqData.id, reqData.period, reqData.date, reqData.bank, reqData.amount)));
});

// Set Static File Location
app.use(express.static(path.join(__dirname, "frontend/build")));

// Set POST and make server listen
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`));
