import React from "react";
//Add data that needs to be passed from TaskList as props
function Task({category,text,handleDelete,getData}) {
  function getData(){
  handleDelete(text)
  }
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={getData}>X</button>
    </div>
  );
}

export default Task;
