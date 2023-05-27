import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import "./ComponentPrint.css";

const ComponentPrint = ({ dataPayment, onPrint }) => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    onAfterPrint: onPrint,
  });

  console.log(dataPayment);

  return (
    <div className="modals">
      <div className="modals-content">
        <div className="class-to-print" ref={componentRef}>
          <h3>Bukti Pembayaran</h3>
          <hr />
          <p>Telah diterima pembayaran dengan informasi:</p>
          <div className="form-group">
            <label htmlFor="name" className="block col3">
              Nama Siswa
            </label>
            <div className="block col3">: {dataPayment.student[0].name}</div>
          </div>
          <div className="form-group">
            <label htmlFor="name" className="block col3">
              Jumlah
            </label>
            <div className="block col3">: {dataPayment.payment.payment}</div>
          </div>
          <div className="form-group">
            <label htmlFor="name" className="block col3">
              Bank
            </label>
            <div className="block col3">
              : {dataPayment.bank[0].namaBank} {dataPayment.bank[0].nomorRekening}
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="name" className="block col3">
              Tanggal
            </label>
            <div className="block col3">: {dataPayment.payment.date}</div>
          </div>
          <div className="form-group">
            <label htmlFor="name" className="block col3">
              Periode
            </label>
            <div className="block col3">: {dataPayment.payment.period}</div>
          </div>
          <img className="watermark" src="/ipeka.png" alt="IPEKA Christian School" />
        </div>
        <button onClick={handlePrint}>print this</button>
      </div>
    </div>
  );
};

export default ComponentPrint;
