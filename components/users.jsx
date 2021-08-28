import React from "react";

import User from "./user";

const Users = ({ handleDelete, users }) => {
  return (
    <>
      {users.map((user) => (
        <User user={user} key={user._id} handleDelete={handleDelete} {...user} />
      ))}
    </>
  );
};

export default Users;
