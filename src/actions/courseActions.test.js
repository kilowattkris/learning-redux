import expect from 'expect';
import * as actions from './courseActions';
import * as types from './actionTypes';

import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

describe('Course Action ', () => {
  it('gets type CREATE_COURSE when creating a course', () => {
    const expectedAction = {type: types.CREATE_COURSE, course: {id: 0, title: 'A new course'}};

    const newCourse = {id: 0, title: 'A new course'};

    const newAction = actions.createCourse(newCourse);

    expect(newAction).toEqual(expectedAction);
  })
});

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Async Actions', () => {
  afterEach(() => { //performs a clean up after each test is run
    nock.cleanAll();
  });

  it('should create BEGIN_AJAX_CALL and LOAD_COURSES_SUCCESS when loading courses', (done) => {
    //Here's an example call to nock
    //nock('http://example.com/')
    //  .get('/courses')
    //  .reply(200, {body: {course: [{id: 1, firstName: 'Kristine', lastName: 'Tomlinson'}]}})
    const expectedActions = [
      {type: types.BEGIN_AJAX_CALL},
      {type: types.LOAD_COURSES_SUCCESS, body: {courses: [{id: 'clean-code', title: 'CleanCode'}]}}
    ];
    const store = mockStore({courses: []}, expectedActions);
    store.dispatch(actions.loadCourses()).then(() => {
      const store_actions = store.getActions();
      expect(store_actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
      expect(store_actions[1].type).toEqual(types.LOAD_AUTHORS_SUCCESS);
    });
    done();
  });
})
