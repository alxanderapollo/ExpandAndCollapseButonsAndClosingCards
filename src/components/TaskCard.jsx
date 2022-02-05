import React from "react";
import PropTypes from "prop-types";
function TaskCard({ id, Task, handleDelete }) {
  return (
    <div className="card">
      Task: {Task}
      <div>
        <button className="close" onClick={() => handleDelete(id)}>
          x
        </button>
        <br />
      </div>
    </div>
  );
}
TaskCard.propTypes = {
  id: PropTypes.number.isRequired,
  Task: PropTypes.string.isRequired,
};

export default TaskCard;
