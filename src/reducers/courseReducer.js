export default function courseReducer(state = [], action) { //ES6 handles defaults like python
  debugger;
  switch (action.type) {
    case 'CREATE_COURSE' :
      return [...state,
        Object.assign({}, action.course)
      ]; //ES6 spread, goes through all the states and expands it out into its elements in place, these expanded values are deep copies

    default :
      return state;
  }
}
