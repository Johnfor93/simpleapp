const http = require("http");
const url = require("url");

// import all the models
const student = require("./models/student");
const bank = require("./models/bank");
const payment = require("./models/payment");

const server = http.createServer((req, res) => {
  let data;
  let url_part = url.parse(req.url, true);
  let query = url_part.query;
  console.log(url_part.pathname);

  switch (url_part.pathname) {
    case "/":
      res.write("Hello world");
      res.end();
      break;

    // Get All Data from Student
    case "/student":
      data = JSON.stringify(student.getStudent());
      res.write(data);
      res.end();
      break;

    // Get Data from Student with Specific ID
    case "/student/get":
      data = JSON.stringify(student.filterStudent(query.id));
      res.write(data);
      res.end();
      break;

    // Get All Data from Bank
    case "/bank":
      data = JSON.stringify(bank.getBank());
      res.write(data);
      res.end();
      break;

    // Get Data from Bank with Specific ID
    case "/bank/get":
      data = JSON.stringify(bank.filterBank(query.id));
      res.write(data);
      res.end();
      break;

    // Get All Data from Payment
    case "/payment":
      data = JSON.stringify(payment.getPayment());
      res.write(data);
      res.end();
      break;

    // Get Data from Payment with Specific ID
    case "/payment/get":
      data = JSON.stringify(payment.filterPayment(query.id));
      res.write(data);
      res.end();
      break;

    // Get All Data Payment with Name of Student
    case "/payment/getPaymentByStudent":
      data = JSON.stringify(payment.filterByStudentID(query.studentID));
      res.write(data);
      res.end();
      break;

    // Set New Payment
    case "/payment/create":
      data = JSON.stringify(payment.setPayment(10, "Agt 2023", "2 Jul 2023", "BCA1", "400000"));

      res.write(data);
      res.end();
      break;

    default:
      res.write(JSON.stringify("Doesn't Exist!"));
      res.end();
  }
});

server.listen(3000);
console.log("Server is listening on port 3000...");
console.log("Go to: http://localhost:3000");
