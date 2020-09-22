import React, { useState } from "react";
import TableUser from "./components/tables/TableUser";

const App = () => {
  /*Some user data*/
  const usersData = [
    { id: 1, name: "Malik", username: "Lemes" },
    { id: 2, name: "Merim", username: "Bungur" },
    { id: 3, name: "Mahir", username: "Mahirovic" },
    { id: 4, name: "Amar", username: "Alijagic" },
  ];

  const [users, setUsers] = useState(usersData);

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
            <TableUser users={users} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
