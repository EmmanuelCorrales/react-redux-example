'use strict'
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createItem } from '../actions/itemsActions';

class NewItem extends React.Component {

  createItem() {
    var item = {
      id: 100,
      question: this.refs.question.value,
      answer: this.refs.answer.value
    };
    this.props.createItem(item);
  }

  render() {
    return(
      <div>
        <h3>New Question</h3>
        <input ref='question' placeholder="Question"/>
        <input ref='answer' placeholder="Answer"/>
        <button onClick={ this.createItem.bind(this) }>Add</button>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    createItem: createItem
  }, dispatch)
}

export default connect(null, mapDispatchToProps) (NewItem);
