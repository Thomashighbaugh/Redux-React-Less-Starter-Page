import React, { Component } from 'react';
import { connect } from 'react-redux';


const Title = ({cardsCount}) => {
  return (
    <div className="project-info">
        <div className="jumbotron mt-0 pt-0 bg-dark">
        <h1 className="display-3 text-white">Redux Boilerplate App</h1>
        <p className="lead text-white">This web application exist to function as a boilerplate for Redux Projects using Webpack!</p>
        <h3 className="text-white">There are {cardsCount} tasks on board</h3>
        <span>Type task text and the name of the person who is to do the task in the input boxes below. <br/>
        Clicking on a card to move it over one to the right.</span><br/>
    </div>
    </div>
  )
};

export default Title
