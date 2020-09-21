import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "bootstrap/dist/css/bootstrap.css";
export class Datepic extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: "",
    };
  }
  Changedate = (e) => {
    this.setState({
      date: e,
    });
  };

  render() {
    return (
      <div class="row justify-content-center" style={{ marginTop: "10px" }}>
        <div class="col-sm-6 ">
          <DatePicker
            className="form-control"
            selected={this.state.date}
            placeholderText="Select Date"
            showPopperArrow={false}
            onChange={this.Changedate}
            required
          />
        </div>
      </div>
    );
  }
}

export default Datepic;
