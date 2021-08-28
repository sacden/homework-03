import React, { useState } from "react";
import Qualitie from "./qualitie";
import BookMark from "./bookmark";

const User = (props) => {
  const [status, setStatus] = useState({ active: false });
  const getStatus = (status) => {
    const newStatus = status.active === false ? { active: true } : { active: false };
    setStatus(newStatus);
  };
  return (
    <tr>
      <td>{props.user.name}</td>
      <td>
        {props.user.qualities.map((el) => (
          <Qualitie {...el} key={el._id} />
        ))}
      </td>
      <td>{props.user.profession.name}</td>
      <td>{props.user.completedMeetings}</td>
      <td>{props.user.rate}/5</td>
      <td>
        <BookMark status={status} getStatus={getStatus} user={props.user} />
      </td>
      <td>
        <button onClick={() => props.handleDelete(props.user._id)} key={props.user._id} type="button" className="btn btn-danger btn-sm">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default User;
