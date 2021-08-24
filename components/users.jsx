import React, { useState } from "react";
import api from "../api";
import UserItem from "./userItem";

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());
  const handleDelete = (userId) => {
    setUsers(users.filter((item, index) => item._id != userId));
    // users.length === 1 && document.querySelector(".table").remove();
    // [...document.querySelectorAll("#user tr")].map((x, index) => Number(index) === Number(userId) && x.remove());
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
        <button type="button" className={"btn btn-" + changeColorButton(users.length)}>
          <strong>
            {users.length} {renderPhrase(users.length)} с тобой сегодня{" "}
          </strong>
        </button>
        {users.length >= 1 ? (
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Имя</th>
                <th scope="col">Качества</th>
                <th scope="col">Профессия</th>
                <th scope="col">Количество встреч</th>
                <th scope="col">Оценка</th>
                <th></th>
              </tr>
            </thead>
            <tbody id="user">
              {users.map((user, index) => (
                <UserItem user={user} index={index} key={index} handleDelete={handleDelete} />
              ))}
            </tbody>
          </table>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Users;
