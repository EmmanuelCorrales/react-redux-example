'use strict'
const initialState = { items:[]};

export function itemsReducers(state = initialState, action) {
  switch(action.type) {
    case "GET_ITEMS":
      return { items: action.items };

    case 'CREATE_ITEM':
      return { items: [...state.items, action.item] };

    case 'DESTROY_ITEM':
      console.log(action.id);
      const items = state.items;
      const index = items.findIndex(
        function(item) {
          return item.id == action.id;
        }
      );
      return { items: [...items.slice(0, index), ...items.slice(index + 1) ] };

    case 'UPDATE_ITEM':
      const indexToUpdate = state.items.findIndex(
        function(item) {
          return item.id == action.item.id;
        }
      );

      return { items: [
          ...state.items.slice(0, indexToUpdate).concat(action.item),
          ...state.items.slice(indexToUpdate + 1)
        ]
      };

    default:
      return state;
  }
}
