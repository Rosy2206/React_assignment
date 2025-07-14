import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Spreadsheet = () => {
  return (
    <div
      className="d-flex align-items-center justify-content-between bg-light border p-2"
      style={{ width: "100%", height: "80px" }}
    >
    
      <div
        className="fw-bold px-3"
        style={{ fontSize: "14px" }}
      >
        Q3 Financial Overview
      </div>

    
      <div className="d-flex align-items-center gap-3">
        <div
          className="d-flex justify-content-center align-items-center text-white"
          style={{
            backgroundColor: "#A3C9A8",
            width: "100px",
            height: "50px",
            borderRadius: "8px",
            fontSize: "12px",
          }}
        >
          ABC
        </div>
        <div
          className="d-flex justify-content-center align-items-center text-white"
          style={{
            backgroundColor: "#C3AED6",
            width: "150px",
            height: "50px",
            borderRadius: "8px",
            fontSize: "12px",
          }}
        >
          Answer a question
        </div>
        <div
          className="d-flex justify-content-center align-items-center text-white"
          style={{
            backgroundColor: "#F4A261",
            width: "120px",
            height: "50px",
            borderRadius: "8px",
            fontSize: "12px",
          }}
        >
          Extract…
        </div>
      </div>

      <div
        className="d-flex justify-content-center align-items-center text-dark fw-bold border"
        style={{
          backgroundColor: "#F0F0F0",
          width: "150px",
          height: "50px",
          fontSize: "20px",
          cursor: "pointer",
        }}
      >
        +
      </div>
    </div>
  );
};

export default Spreadsheet;