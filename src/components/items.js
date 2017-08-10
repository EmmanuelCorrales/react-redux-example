'use strict'
import React from 'react';

class Items extends React.Component {

  render() {
    const items = this.props.items.map(function(item) {
      return (
        <tr key={item.id}>
          <td>{ item.question }</td>
          <td>{ item.answer }</td>
        </tr>
      )
    });

    return (
      <div>
        <h1>Quiz Management</h1>
        <table>
          <tbody>
          <tr>
            <th>Question</th>
            <th>Answer</th>
          </tr>
          { items }
          </tbody>
        </table>
      </div>
    )
  }
}

export default Items;
