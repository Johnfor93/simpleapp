import React, { useEffect, useState } from "react";
import "./Form.css";

const Form = ({ activeContent, onSubmitEvent }) => {
  const [dataBank, setDataBank] = useState([]);
  const defaultOption = "Select an Option";
  let option;

  const getDataBank = async () => {
    const dataFormServer = await fetchDataBank();

    setDataBank(dataFormServer);
  };

  useEffect(() => {
    getDataBank();
  }, []);

  const fetchDataBank = async () => {
    const res = await fetch("/bank", {});
    const data = await res.json();
    console.log(data);
    option = data.map((item) => {
      return `${item.namaBank}-${item.nomorRekening}`;
    });
    return data;
  };

  const onClickEvent = () => {
    let id = document.getElementById("id").value;
    let amount = document.getElementById("amount").value;
    let bank = document.getElementById("bank").value;
    let period = document.getElementById("period").value;
    let datetime = new Date();
    let month = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"];
    let date = `${datetime.getDate()} ${month[datetime.getMonth()]} ${datetime.getFullYear()} `;
    let payment = {
      id,
      amount,
      bank,
      period,
      date,
    };
    document.getElementById("id").value = "";
    document.getElementById("amount").value = "";
    document.getElementById("bank").value = "";
    document.getElementById("period").value = "";
    onSubmitEvent(payment);
  };
  return (
    <div className={`form ${activeContent ? "active" : ""}`}>
      <div className="form-group">
        <label htmlFor="name" className="block col3">
          No ID Siswa
        </label>
        <div className="block col3">
          <input type="text" name="name" id="id" className="block col12 block-input" placeholder="Rangga" />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="name" className="block col3">
          Jumlah
        </label>
        <div className="block col3">
          <input type="text" name="name" id="amount" className="block col12 block-input" placeholder="0.00" />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="name" className="block col3">
          Bank
        </label>
        <div className="block col3">
          <input type="text" name="name" id="bank" className="block col12 block-input" placeholder="BCA" />
        </div>
      </div>
      <div className="form-group form-note">
        <small>BCA1-0231421412</small>
        <small>BCA2-335325233</small>
      </div>
      <div className="form-group">
        <label htmlFor="name" className="block col3">
          Periode
        </label>
        <div className="block col3">
          <input type="text" id="period" placeholder="Jun 23" className="block col12 block-input" />
        </div>
      </div>
      <div className="form-group">
        <div className="btn-submit" onClick={onClickEvent}>
          Submit
        </div>
      </div>
    </div>
  );
};

export default Form;
