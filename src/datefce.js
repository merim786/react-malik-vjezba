import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "bootstrap/dist/css/bootstrap.css";
import "react-datepicker/dist/react-datepicker.css";

function Datefce() {
  const [data, setData] = useState(new Date());
  return (
    <div className="container">
      <DatePicker
        className={"form-control"}
        showPopperArrow={false}
        placeholderText="Select Date"
        selected={data}
        onChange={(date) => setData(date)}
      />
    </div>
  );
}

export default Datefce;
