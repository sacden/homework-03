import React from "react";
import Qualitie from "./qualitie";
import BookMark from "./bookmark";

const User = (props) => {
  return (
    <tr key={props._id}>
      <td>{props.user.name}</td>
      <td>
        {props.user.qualities.map((el) => (
          <Qualitie color={el.color} name={el.name} _id={el._id} />
        ))}
      </td>
      <td>{props.user.profession.name}</td>
      <td>{props.user.completedMeetings}</td>
      <td>{props.user.rate}/5</td>
      <td>
        <BookMark />
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
