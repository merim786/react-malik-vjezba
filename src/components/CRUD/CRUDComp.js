import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Table from "../tables/TableUser";

const CRUDComp = () => {
  return (
    <div>
      <div className="container">
        <h1>CRUD App</h1>
        <div className="row">
          <div className="col">
            <h2>Add user</h2>
          </div>
          <div className="col">
            <h2>View users</h2>
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
};
export default CRUDComp;
