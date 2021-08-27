import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
const BookMark = (status, ...rest) => {
  const [statusOfButton, setStatus] = useState({ active: false });

  const getStatus = (statusOfButton) => {
    const newStatus = statusOfButton.active === false ? { active: true } : { active: false };
    setStatus(newStatus);
  };

  return <button onClick={() => getStatus(statusOfButton)}> {statusOfButton.active === false ? <i class="bi bi-bookmark"></i> : <i class="bi bi-bookmark-fill"></i>}</button>;
};

export default BookMark;
