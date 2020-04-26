import React from "react";
import { connect } from "react-redux";

const Card = (props) => {
  return (
    <div
      className="project-card card"
      onClick={(e) => {
        props.onChangeClick(props.id);
      }}
    >
      <p className="card-title">{props.text}</p>
      <span className="card-text">{props.executor}</span>
      <span
        className="card-remove"
        onClick={(e) => {
          props.onRemoveClick(props.id);
        }}
      >
        -
      </span>
    </div>
  );
};

export default Card;
