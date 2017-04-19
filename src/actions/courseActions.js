import * as types from './actionTypes';

export function createCourse(course) {
  return { type: types.CREATE_COURSE, course }; //course is equivalent to {course: course} in ES6
}
