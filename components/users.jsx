import React from "react";

import User from "./user";

const Users = ({ handleDelete, users, renderPhrase, changeColorButton }) => {
  return (
    <>
      {users.map((user, index) => (
        <User user={user} index={index} key={index} handleDelete={handleDelete} renderPhrase={renderPhrase} changeColorButton={changeColorButton} />
      ))}
    </>
  );
};

export default Users;
