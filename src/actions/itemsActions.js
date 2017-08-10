'use strict'
export function getItems() {
  return {
    type: 'GET_ITEMS'
  }
}

export function createItem(item) {
  return {
    type: 'CREATE_ITEM',
    item: item
  }
}

export function destroyItem(id) {
  return {
    type: 'DESTROY_ITEM',
    id: id
  }
}
