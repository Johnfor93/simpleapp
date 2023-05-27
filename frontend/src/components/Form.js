import React, { useEffect, useState } from "react";
import "./Form.css";

const Form = ({ activeContent, onSubmitEvent }) => {
  const [dataStudent, setDataStudent] = useState([]);
  const [dataBank, setDataBank] = useState([]);

  const getDataBank = async () => {
    const dataFormServer = await fetchDataBank();

    setDataBank(dataFormServer);
  };

  useEffect(() => {
    getDataBank();
    fetchDataStudent();
  }, []);

  const fetchDataStudent = async () => {
    const res = await fetch("/student", {});
    const data = await res.json();
    setDataStudent(data);
  };

  const fetchDataBank = async () => {
    const res = await fetch("/bank", {});
    const data = await res.json();
    console.log(data);
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

  const filterFunction = async () => {
    let id = document.getElementById("id").value;
    console.log(id);
    if (id === "") {
      setDataStudent();
      return;
    }
    const res = await fetch(
      "/student/getByName?" +
        new URLSearchParams({
          name: id,
        })
    );
    const data = await res.json();
    console.log(data);
    setDataStudent(data);
  };

  return (
    <div className={`form ${activeContent ? "active" : ""}`}>
      <div className="form-group">
        <label htmlFor="name" className="block col3">
          Nama Siswa
        </label>
        <div className="block col3 dropdown-content">
          <select id="id" className="col12 block block-input">
            {dataStudent.map((item) => (
              <option value={item.id}>{item.name}</option>
            ))}
          </select>
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
          <select id="bank" className="col12 block block-input">
            {dataBank.map((item) => (
              <option value={item.kodeBank}>
                {item.namaBank} - {item.nomorRekening}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="name" className="block col3">
          Periode
        </label>
        <div className="block col3">
          <select id="period" className="col12 block block-input">
            <option value="Jun 2023">Juni 2023</option>
            <option value="Jul 2023">Juli 2023</option>
            <option value="Agt 2023">Agustus 2023</option>
            <option value="Sep 2023">September 2023</option>
            <option value="OKt 2023">Oktober 2023</option>
            <option value="Nov 2023">November 2023</option>
            <option value="Sep 2023">Desember 2023</option>
          </select>
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
