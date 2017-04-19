import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';

export function createCourse(course) {
  return { type: types.CREATE_COURSE, course }; //course is equivalent to {course: course} in ES6
}

export function loadCoursesSuccess(courses) {
  return { type: types.LOAD_COURSES_SUCCESS, courses };
}

//generally create a loadCoursesFailed action to go alongside that gets called if an error is thrown

export function loadCourse() {
  return function(dispatch) { //all thunks have this return function(dispatch setup)
    return courseApi.getAllCourses().then(courses => { //gettAllCourses returns a promise
      dispatch(loadCoursesSuccess(courses)).catch(error => {
        throw error;
      });
    });
  };
}
