import React, { useState } from "react";
import Qualitie from "./qualitie";
import BookMark from "./bookmark";

const User = ({ user, handleDelete }) => {
  const [status, setStatus] = useState({ active: false });
  const getStatus = (status) => {
    const newStatus = status.active === false ? { active: true } : { active: false };
    setStatus(newStatus);
  };
  return (
    <tr>
      <td>{user.name}</td>
      <td>
        {user.qualities.map((el) => (
          <Qualitie {...el} key={el._id} />
        ))}
      </td>
      <td>{user.profession.name}</td>
      <td>{user.completedMeetings}</td>
      <td>{user.rate}/5</td>
      <td>
        <BookMark status={status} getStatus={getStatus} user={user} />
      </td>
      <td>
        <button onClick={() => handleDelete(user._id)} key={user._id} type="button" className="btn btn-danger btn-sm">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default User;
