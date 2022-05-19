import React from "react";

const ViewBudget = (props) => {
  return (
    <>
      <span>Budzet: {props.budget} RSD</span>
      <button
        type="button"
        class="btn btn-primary"
        onClick={props.handleEditClick}
      >
        Izmeni
      </button>
    </>
  );
};

export default ViewBudget;
