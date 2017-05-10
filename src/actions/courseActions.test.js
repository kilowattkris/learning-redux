import expect from 'expect';
import * as actions from './courseActions';
import * as types from './actionTypes';

describe('Course Action ', () => {
  it('gets type CREATE_COURSE when creating a course', () => {
    const expectedAction = {type: types.CREATE_COURSE, course: {id: 0, title: 'A new course'}};

    const newCourse = {id: 0, title: 'A new course'};

    const newAction = actions.createCourse(newCourse);

    expect(newAction).toEqual(expectedAction);
  })
});
