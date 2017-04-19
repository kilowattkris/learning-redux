import * as types from '../actions/actionTypes';

export default function courseReducer(state = [], action) { //ES6 handles defaults like python
  switch (action.type) {
    case types.CREATE_COURSE:
      return [...state,
        Object.assign({}, action.course)
      ]; //ES6 spread, goes through all the states and expands it out into its elements in place, these expanded values are deep copies

      case types.LOAD_COURSES_SUCCESS:
        return action.courses;

    default:
      return state;
  }
}
