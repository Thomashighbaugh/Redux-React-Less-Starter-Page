import React from 'react';
import { connect } from 'react-redux';
import List from './List.js';

const Board = ({tasks, onChangeClick, onRemoveClick}) => {
  return (
    <div className="project-board col-12">
      <List status="TODO" tasks={tasks}
        onChangeClick={onChangeClick}
        onRemoveClick={onRemoveClick}>
          Not Done
      </List>
      <List status="DOING" tasks={tasks}
        onChangeClick={onChangeClick}
        onRemoveClick={onRemoveClick}>
          In Progress
      </List>
      <List status="DONE" tasks={tasks}
        onChangeClick={onChangeClick}
        onRemoveClick={onRemoveClick}>
          Completed
      </List>
    </div>
  )
}

export default Board
