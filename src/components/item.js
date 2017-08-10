'use strict'
import React from 'react';

class Item extends React.Component {
  render() {
    return(
      <tr>
        <td>{ this.props.item.question }</td>
        <td>{ this.props.item.answer }</td>
      </tr>
    )
  }
}

export default Item;
