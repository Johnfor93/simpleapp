const http = require("http");
const url = require("url");

const fs = require("fs");

// import all the models
const student = require("./models/student");
const bank = require("./models/bank");
const payment = require("./models/payment");

const server = http.createServer((req, res) => {
  let data;
  let url_part = url.parse(req.url, true);
  let query = url_part.query;
  // console.log(url_part);

  const headers = {
    "Access-Control-Allow-Origin": "*" /* @dev First, read about security */,
    "Access-Control-Allow-Methods": "*",
    "Access-Control-Max-Age": 2592000, // 30 days
    /** add other headers as per requirement */
    "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers",
  };

  switch (url_part.pathname) {
    case "/":
      res.writeHead(200, headers);
      fs.readFile("./build/index.html", (err, data) => {
        res.write(data);
        res.end();
      });

      break;

    // Get All Data from Student
    case "/student":
      res.writeHead(200, headers);
      data = JSON.stringify(student.getStudent());
      res.write(data);
      res.end();

      break;

    // Get Data from Student with Specific ID
    case "/student/get":
      res.writeHead(200, headers);
      data = JSON.stringify(student.filterStudent(query.id));
      res.write(data);
      res.end();

      break;

    case "/student/getByName":
      res.writeHead(200, headers);
      data = JSON.stringify(student.getStudentByName(query.name));
      res.write(data);
      res.end();
      break;

    // Get All Data from Bank
    case "/bank":
      res.writeHead(200, headers);
      data = JSON.stringify(bank.getBank());
      res.write(data);
      res.end();

      break;

    // Get Data from Bank with Specific ID
    case "/bank/get":
      res.writeHead(200, headers);
      data = JSON.stringify(bank.filterBank(query.id));
      res.write(data);
      res.end();

      break;

    // Get All Data from Payment
    case "/payment":
      res.writeHead(200, headers);
      data = JSON.stringify(payment.getPayment());
      res.write(data);
      res.end();

      break;

    // Get Data from Payment with Specific ID
    case "/payment/get":
      res.writeHead(200, headers);
      data = JSON.stringify(payment.filterPayment(query.id));
      res.write(data);
      res.end();

      break;

    // Get All Data Payment with Name of Student
    case "/payment/getPaymentByStudent":
      res.writeHead(200, headers);
      data = JSON.stringify(payment.filterByStudentID(query.studentID));
      res.write(data);
      res.end();

      break;

    // Set New Payment
    case "/payment/create":
      let inputData;
      res.writeHead(200, headers);
      req.on("data", (buffer) => {
        inputData = JSON.parse(buffer);
        console.log(inputData);
        data = JSON.stringify(payment.setPayment(inputData.id, inputData.period, inputData.date, inputData.bank, inputData.amount));
        res.write(data);
        res.end();
      });
      break;

    default:
      res.write(JSON.stringify("Doesn't Exist!"));
      res.end();
  }
});

server.listen(3000);
console.log("API Server is listening on port 3000...");
console.log("Go to: http://localhost:3000");
