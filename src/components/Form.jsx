import React from "react";

const Form = (props) => {
  return (
    <form onSubmit={props.handelSubmit}>
      <input type="text" name="City" placeholder="City" />
      <input type="text" name="Country" placeholder="Country" />
      <button> get weather</button>
    </form>
  );
};

export default Form;
