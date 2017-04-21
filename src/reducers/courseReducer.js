import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function courseReducer(state = initialState.courses, action) { //ES6 handles defaults like python
  // use initialState file to hold all the reducers initial states, this helps understand the object graph that is being held in the store (this is what our store looks like)
  switch (action.type) {
    case types.CREATE_COURSE:
      return [...state,
        Object.assign({}, action.course)
      ]; //ES6 spread, goes through all the states and expands it out into its elements in place, these expanded values are deep copies

      case types.LOAD_COURSES_SUCCESS:
        return action.courses;

      case types.CREATE_COURSE_SUCCESS:
        return [
            ...state,
            Object.assign({}, action.course)
          ]

      case types.UPDATE_COURSE_SUCCESS:
        return [
          ...state.filer(course => course.id !== action.course.id),
          Object.assign({}, action.course)
        ]; //need to use spread to create an immutible copy

    default:
      return state;
  }
}
