import React from "react";
import _ from "lodash";

const Pagination = ({ onPageChange, itemsCount, pageSize, currentPage }) => {
  const pageCount = Math.ceil(itemsCount / pageSize);
  const pages = _.range(1, pageCount + 1);
  if (pageCount === 1) return null;

  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li className={"page-item " + (page === currentPage ? "active" : "")} key={page}>
            <a onClick={() => onPageChange(page)} className="page-link">
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
