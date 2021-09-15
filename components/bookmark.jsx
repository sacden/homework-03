import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import PropTypes from "prop-types";
const BookMark = ({ status, getStatus }) => {
    return (
        <button onClick={() => getStatus(status)}>
            {" "}
            {status.active === false ? (
                <i className="bi bi-bookmark"></i>
            ) : (
                <i className="bi bi-bookmark-fill"></i>
            )}
        </button>
    );
};
BookMark.propTypes = {
    status: PropTypes.object,
    getStatus: PropTypes.func.isRequired
};
export default BookMark;
