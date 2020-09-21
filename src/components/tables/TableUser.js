import React from "react";

const TableUser = (props) => {
  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Last name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <td>Name data</td>
          <td>Last name data</td>
          <td>
            <div className="col">
              <button type="button" className="btn btn-warning">
                Edit
              </button>
              <button type="button" className="btn btn-danger">
                Delete
              </button>
            </div>
          </td>
        </tbody>
      </table>
    </div>
  );
};
export default TableUser;
