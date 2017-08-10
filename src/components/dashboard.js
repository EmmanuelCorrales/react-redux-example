'use strict'
import React from 'react';
import Items from './items';
import NewItem from './newItem';

class Dashboard extends React.Component {

  render() {
    return (
      <div>
        <NewItem/>
        <Items/>
      </div>
    )
  }
}

export default Dashboard;
