import React from "react";

import User from "./user";

const Users = ({ handleDelete, users, renderPhrase, changeColorButton }) => {
  return (
    <>
      {users.map((user) => (
        <User user={user} key={user._id} handleDelete={handleDelete} renderPhrase={renderPhrase} changeColorButton={changeColorButton} />
      ))}
    </>
  );
};

export default Users;
