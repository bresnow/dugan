import React from "react";

const BlockTitle = ({ tagLine, title }) => {
  return (
    <div className="block-title">
      <p>
        {tagLine}
      </p>
      <h3>{title}</h3>
    </div>
  );
};

export default BlockTitle;
