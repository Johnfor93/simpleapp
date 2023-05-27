import React from "react";
import "./Table.css";

export const Table = ({ dataPayment }) => {
  return (
    <div className="table">
      <div className="t-head">
        <div className="t-data col3">Nama</div>
        <div className="t-data col3">Jumlah</div>
        <div className="t-data col3">Periode</div>
        <div className="t-data col3">Bank</div>
      </div>
      {dataPayment.map((item) => {
        return (
          <div className="t-row" key={item.pembayaran.id}>
            <div className="t-data col3">{item.student[0].name}</div>
            <div className="t-data col3">{item.pembayaran.payment}</div>
            <div className="t-data col3">{item.pembayaran.period}</div>
            <div className="t-data col3">
              {item.bank[0].namaBank} {item.bank[0].nomorRekening}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Table;
