import React from "react";
import PropTypes from "prop-types";
const SearchStatus = ({ length, changeColorButton, renderPhrase }) => {
    return (
        <button
            type="button"
            className={"btn btn-" + changeColorButton(length)}
        >
            <strong>
                {length} {renderPhrase(length)} с тобой сегодня{" "}
            </strong>
        </button>
    );
};
SearchStatus.propTypes = {
    length: PropTypes.number.isRequired,
    changeColorButton: PropTypes.func,
    renderPhrase: PropTypes.func
};

export default SearchStatus;
