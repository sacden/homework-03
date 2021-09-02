import React, { useState } from "react";
import Pagination from "./pagination";
import { paginate } from "../utils/paginate";
import User from "./user";

const Users = ({ handleDelete, users }) => {
  const count = users.length;
  const pageSize = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (pageIndex) => {
    console.log("page:", pageIndex);
    setCurrentPage(pageIndex);
  };
  const userCrop = paginate(users, currentPage, pageSize);
  return (
    <>
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
            {userCrop.map((user) => (
              <User user={user} key={user._id} handleDelete={handleDelete} {...user} />
            ))}
            <Pagination itemsCount={count} pageSize={pageSize} onPageChange={handlePageChange} currentPage={currentPage} />
          </tbody>
        </table>
      ) : (
        ""
      )}
    </>
  );
};

export default Users;
