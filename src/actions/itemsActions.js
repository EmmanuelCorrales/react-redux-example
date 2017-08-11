'use strict'
import axios from 'axios';

const host = 'http://localhost:3000/quiz_items/'

export function getItems() {
  return function(dispatch) {
    axios.get(host)
      .then(function(response) {
        dispatch({ type: 'GET_ITEMS', items: response.data });
      })
      .catch(function(err) {
        dispatch({ type: 'GET_ITEMS_FAILED', message: 'Failed to get items.' });
      })
  }
}

export function createItem(item) {
  return function(dispatch) {
    axios.post(host, item)
      .then(function(response) {
        dispatch({ type: 'CREATE_ITEM', item: response.data });
      })
      .catch(function(err) {
        dispatch({ type: 'CREATE_ITEM_FAILED', message: 'Failed to add another item.' });
      })
  }
}

export function updateItem(item) {
  return function(dispatch) {
    axios.put(host + item.id, item)
      .then(function(response) {
        dispatch({ type: 'UPDATE_ITEM', item: response.data });
      })
      .catch(function(err) {
        dispatch({ type: 'UPDATE_ITEM_FAILED', message: 'Failed to edit item.' });
      })
  }
}

export function destroyItem(id) {
  return function(dispatch) {
    axios.delete(host + id)
      .then(function(response) {
        dispatch({ type: 'DESTROY_ITEM', id: id });
      })
      .catch(function(err) {
        dispatch({ type: 'DESTROY_ITEM_FAILED', message: 'Failed to destroy item.' });
      })
  }
}
