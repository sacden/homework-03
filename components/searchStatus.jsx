import React from "react";

const SearchStatus = ({ length, changeColorButton, renderPhrase }) => {
  return (
    <button type="button" className={"btn btn-" + changeColorButton(length)}>
      <strong>
        {length} {renderPhrase(length)} с тобой сегодня{" "}
      </strong>
    </button>
  );
};

export default SearchStatus;
