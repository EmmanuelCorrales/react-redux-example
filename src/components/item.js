'use strict'
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateItem, destroyItem } from '../actions/itemsActions';

class Item extends React.Component {

  constructor() {
    super();
    this.state = {
      editMode: false
    }
  }

  editItem() {
    this.setState({ editMode: true });
  }

  updateItem() {
    const item = {
      id: this.props.item.id,
      question: this.refs.question.value,
      answer: this.refs.answer.value
    }
    this.props.updateItem(item);
    this.setState({ editMode: false });
  }

  cancelEdit() {
    this.setState({ editMode: false });
  }

  destroyItem() {
    this.props.destroyItem(this.props.item.id);
  }

  renderEditMode() {
    return(
      <tr>
        <td>
          <input ref='question' defaultValue={ this.props.item.question } />
        </td>
        <td>
          <input ref='answer' defaultValue={ this.props.item.answer } />
        </td>
        <td>
          <button onClick={ this.updateItem.bind(this) } >
            Save
          </button>
        </td>
        <td>
          <button onClick={ this.cancelEdit.bind(this) } >
            Cancel
          </button>
        </td>
      </tr>
    )
  }

  renderViewMode() {
    return(
      <tr>
        <td>{ this.props.item.question }</td>
        <td>{ this.props.item.answer }</td>
        <td>
          <button onClick={ this.editItem.bind(this) } >
            Edit
          </button>
        </td>
        <td>
          <button onClick={ this.destroyItem.bind(this) } >
            Delete
          </button>
        </td>
      </tr>
    )
  }

  render() {
    if(this.state.editMode) {
      return this.renderEditMode();
    } else {
      return this.renderViewMode();
    }
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    updateItem: updateItem,
    destroyItem: destroyItem
  }, dispatch)
}

export default connect(null, mapDispatchToProps) (Item);
