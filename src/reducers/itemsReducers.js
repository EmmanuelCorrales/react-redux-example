'use strict'
var initialState = { items:
  [
    {
      id: 1,
      question: 'Who are you?',
      answer: 'Emmanuel Corrales'
    },
    {
      id: 2,
      question: 'What country are you from?',
      answer: 'Philippines'
    },
    {
      id: 3,
      question: 'What is the color of the White House?',
      answer: 'White'
    }
  ]
};

export function itemsReducers(state = initialState, action) {
  switch(action.type) {
    case "GET_ITEMS":
      return state;

    case 'CREATE_ITEM':
      return { items: [...state.items, action.item] };

    case 'DESTROY_ITEM':
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
