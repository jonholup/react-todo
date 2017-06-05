import React, { Component } from 'react';
import './List.css';

class List extends Component {
  render() {
    return (
      <div className="list">
        <table>
          <thead>
            <tr>
              <th>Complete</th>
              <th>Task</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody className="taskData" />
        </table>
      </div>
    );
  }
}

export default List;
