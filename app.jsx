import React, { useState } from "react";
import SearchStatus from "./components/searchStatus";
import Users from "./components/users";
import api from "./api";

const App = () => {
  const [users, setUsers] = useState(api.users.fetchAll());
  const handleDelete = (userId) => {
    setUsers(users.filter((item, index) => item._id != userId));
  };
  const renderPhrase = (number) => {
    return number > 1 && number < 5 ? "человека тусанут" : "человек тусанет";
  };

  const changeColorButton = (number) => {
    return number > 0 ? "primary" : "danger";
  };
  return (
    <>
      <div className="container-sm">
        <SearchStatus length={users.length} changeColorButton={changeColorButton} renderPhrase={renderPhrase} />
        {users.length >= 1 ? (
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Имя</th>
                <th scope="col">Качества</th>
                <th scope="col">Профессия</th>
                <th scope="col">Количество встреч</th>
                <th scope="col">Оценка</th>
                <th scope="col">Избранное</th>
                <th></th>
              </tr>
            </thead>
            <tbody id="user">
              <Users users={users} handleDelete={handleDelete} renderPhrase={renderPhrase} changeColorButton={changeColorButton} />
            </tbody>
          </table>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default App;
