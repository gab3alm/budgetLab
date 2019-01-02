import React from 'react';

const InfoField = (props)=>{
  return(
    <div className="info-field">
      <span className="label">{`${props.name}: `}</span>
      <span className="content">{props.value}</span>
    </div>
  );
};

export default InfoField;