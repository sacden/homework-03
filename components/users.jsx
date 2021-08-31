import React from "react";
import Pagination from "./pagination";
import User from "./user";

const Users = ({ handleDelete, users }) => {
  const count = users.length;
  const pageSize = 4;
  const handlePageChange = (pageIndex) => {
    console.log("page:", pageIndex);
  };
  return (
    <>
      {users.map((user) => (
        <User user={user} key={user._id} handleDelete={handleDelete} {...user} />
      ))}
      <Pagination itemsCount={count} pageSize={pageSize} onPageChange={handlePageChange} />
    </>
  );
};

export default Users;
