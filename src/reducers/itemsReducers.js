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
      return { items: state.items };

    default:
      return state;
  }
}
