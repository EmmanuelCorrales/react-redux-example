'use strict'
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getItems } from '../actions/itemsActions';

class Items extends React.Component {

  componentDidMount() {
    this.props.getItems();
  }

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

function mapStateToProps(state) {
  return {
    items: state.management.items
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getItems: getItems
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps) (Items);
