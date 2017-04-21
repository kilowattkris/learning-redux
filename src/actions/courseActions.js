import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';

export function createCourse(course) {
  return { type: types.CREATE_COURSE, course }; //course is equivalent to {course: course} in ES6
}

export function loadCoursesSuccess(courses) {
  return { type: types.LOAD_COURSES_SUCCESS, courses };
}

export function createCourseSuccess(course) {
  return { type: types.CREATE_COURSE_SUCCESS, course };
}

export function updateCourseSuccess(course) {
  return { type: types.UPDATE_COURSE_SUCCESS, course };
}

//generally create a loadCoursesFailed action to go alongside that gets called if an error is thrown

export function loadCourses() {
  return function(dispatch) { //all thunks have this return function(dispatch setup)
    return courseApi.getAllCourses().then(courses => { //gettAllCourses returns a promise
      dispatch(loadCoursesSuccess(courses));
    }).catch(error => {
        throw error;
      });
  };
}

export function saveCourse(course) {
  return function(dispatch, getState) { //getState is used to access the redux store and get pieces of info from it, without having to pass that info in as a param
    return courseApi.saveCourse(course).then(savedCourse => { //if an id is passed, we'll either update or create a course
      course.id ? dispatch(updateCourseSuccess(savedCourse)) : dispatch(createCourseSuccess(savedCourse));
    }).catch(error => {
        throw error;
      });
  };
}
