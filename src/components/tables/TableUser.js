import React from "react";

const TableUser = (props) => (
  <table className="table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Last name</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>
              <button className="btn btn-warning">Edit</button>
              <button className="btn btn-danger">Delete</button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={4}>No users</td>
        </tr>
      )}
    </tbody>
  </table>
);
export default TableUser;
