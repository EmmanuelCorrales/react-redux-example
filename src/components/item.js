'use strict'
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { destroyItem } from '../actions/itemsActions';

class Item extends React.Component {

  destroyItem() {
    this.props.destroyItem(this.props.item.id);
  }

  render() {
    return(
      <tr>
        <td>{ this.props.item.question }</td>
        <td>{ this.props.item.answer }</td>
        <td>
          <button onClick={ this.destroyItem.bind(this) } >
            Delete
          </button>
        </td>
      </tr>
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
    destroyItem: destroyItem
  }, dispatch)
}

export default connect(null, mapDispatchToProps) (Item);
