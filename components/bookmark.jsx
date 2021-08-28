import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
const BookMark = ({ status, getStatus, user, ...rest }) => {
  return <button onClick={() => getStatus(status)}> {status.active === false ? <i className="bi bi-bookmark"></i> : <i className="bi bi-bookmark-fill"></i>}</button>;
};

export default BookMark;
