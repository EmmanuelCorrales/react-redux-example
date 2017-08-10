'use strict'
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getItems } from '../actions/itemsActions';
import Items from './items';
import NewItem from './newItem';

class Dashboard extends React.Component {

  componentDidMount() {
    this.props.getItems();
  }

  render() {
    return (
      <div>
        <NewItem/>
        <Items items={this.props.items} />
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

export default connect(mapStateToProps, mapDispatchToProps) (Dashboard);
