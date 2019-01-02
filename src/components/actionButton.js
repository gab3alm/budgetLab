import React from 'react';

const ActionButton = (props)=>{
  return(
    <div className="action">
      <input className="input" type="text"/>
      <button className="btn btn-success btn-action">{props.name}</button>
    </div>
  );
};

export default ActionButton;