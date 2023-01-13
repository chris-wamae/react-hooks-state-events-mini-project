import React from "react";
//Add data that needs to be passed from TaskList as props
function Task({category,text}) {

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete">X</button>
    </div>
  );
}

export default Task;
