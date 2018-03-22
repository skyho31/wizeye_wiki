import React from 'react';

const InnerImg = (props) => {
    
  return (
    <span className="horizontal-imgbox" style={props.style}>
      <img className={props.border && "border"} src={props.src} height={props.height ? props.height : 200} alt={props.text} width={props.width ? props.width : null} />
      <p className="img_description"> {props.text}</p>
    </span>
  );
};

export default InnerImg;
