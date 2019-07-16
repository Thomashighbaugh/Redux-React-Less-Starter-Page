import React, { Component } from 'react';
import { connect } from 'react-redux';


const Title = ({cardsCount}) => {
  return (
    <div className="project-info">
        <h1>Redux-React-Less-Starter-Page</h1>
        <h4>This site and its featured application exist to function as a boilerplate for React-Redux-Less-Webpack Projects!</h4>
        <p>There are {cardsCount} tasks on board</p>
        <span>Type task text and executor name. Click on card to move to another list.</span><br/>
    </div>
  )
};

export default Title
