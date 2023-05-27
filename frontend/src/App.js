import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Form from "./components/Form";
import Table from "./components/Table";
import ComponentPrint from "./components/ComponentPrint";

import "./App.css";
import { useEffect, useState } from "react";
import Alert from "./components/Alert";

function App() {
  const [activeContent, setActiveContent] = useState(false);
  const [dataPayment, setDataPayment] = useState([]);
  const [entryDataPayment, setEntryDataPayment] = useState();
  const [messageAlert, setMessageAlert] = useState("");

  const getData = async () => {
    const dataFormServer = await fetchData();
    setDataPayment(dataFormServer);
  };

  const onPrint = () => {
    setEntryDataPayment();
  };

  useEffect(() => {
    getData();
  }, []);

  const fetchData = async () => {
    const res = await fetch("/payment", {});
    const data = await res.json();
    return data;
  };

  const changeStateActive = () => {
    setActiveContent(!activeContent);
    console.log("Clicked");
  };

  const closeAlert = () => {
    setMessageAlert("");
  };

  const setData = async (payment) => {
    const res = await fetch("/payment/create", {
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
      },
      method: "POST",
      body: JSON.stringify(payment),
    });

    const data = await res.json();

    if (data.error) {
      setMessageAlert(data.message);
    } else {
      setEntryDataPayment(data.data);
    }
    getData();
  };

  return (
    <div className="App">
      <Header></Header>
      <Navigation onClickEvent={changeStateActive}></Navigation>

      <div className="content">
        <Alert message={messageAlert} closeAlert={closeAlert}></Alert>
        <Form activeContent={activeContent} onSubmitEvent={setData}></Form>
        <Table dataPayment={dataPayment}></Table>
      </div>

      {entryDataPayment ? <ComponentPrint dataPayment={entryDataPayment} onPrint={onPrint} /> : ""}
    </div>
  );
}

export default App;
