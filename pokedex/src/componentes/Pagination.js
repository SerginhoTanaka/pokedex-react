import React from "react";

const Pagination = (props) => {
  const { page, totalPages, onLeftClick, onRightClick } = props;
  return (
    <div className="pagination-container">
      <button className="pagination-btn" onClick={onLeftClick}>
        ◀
      </button>
      <div className="pagination-text">
        {page} de {totalPages}
      </div>
      <button className="pagination-btn" onClick={onRightClick}>
        ▶
      </button>
    </div>
  );
};

export default Pagination;
