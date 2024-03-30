import React from 'react'

function Spinner() {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div
        className="spinner-border text-info m-5"
        style={{ width: "3rem", height: "3rem" }}
        role="status"
      >
        <span className="sr-only"></span>
      </div>
    </div>
  );
}

export default Spinner
