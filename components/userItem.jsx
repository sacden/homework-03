import React from "react";

const UserItem = (props) => {
  return (
    <tr key={props.index}>
      <td>{props.user.name}</td>
      <td>
        {props.user.qualities.map((el, index) => (
          <span className={"m-1 badge bg-" + el.color} key={index}>
            {el.name}
          </span>
        ))}
      </td>
      <td>{props.user.profession.name}</td>
      <td>{props.user.completedMeetings}</td>
      <td>{props.user.rate}/5</td>
      <td>
        {/*  onClick={props.handleDelete.bind(this, props.index)} */}
        <button onClick={() => props.handleDelete(props.index)} key={props.index} type="button" className="btn btn-danger btn-sm">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default UserItem;