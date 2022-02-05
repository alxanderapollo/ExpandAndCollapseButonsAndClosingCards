import React from "react";
import PropTypes from "prop-types";
function Card({ name, id, description, isExpanded, onExpand }) {
  return (
    <div className="card">
      Name: {name}
      <div>
        <button
          className="btn btn-primary"
          style={{ paddingLeft: "10px" }}
          onClick={() => onExpand(id)}
        >
          click
        </button>
        <br />
        {isExpanded && `description: ${description}`}
      </div>
    </div>
  );
}

Card.propTypes = {
    name: PropTypes.string,
    id: PropTypes.number,
    description: PropTypes.string,
    isExpanded: PropTypes.bool
  };
  

export default Card;
