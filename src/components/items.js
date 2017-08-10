'use strict'
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getItems } from '../actions/itemsActions';
import Item from './item';

class Items extends React.Component {

  componentDidMount() {
    this.props.getItems();
  }

  render() {
    const items = this.props.items.map(function(item) {
      return (
        <Item key={ item.id } item = { item } />
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
    items: state.itemsReducers.items
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getItems: getItems
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps) (Items);
