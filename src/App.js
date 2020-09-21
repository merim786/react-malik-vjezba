import React from "react";
import TableUser from "./components/tables/TableUser";

const App = () => {
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
            <TableUser />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
