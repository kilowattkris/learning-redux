import expect from 'expect';
import { createStore } from 'redux';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';
import * as actions from '../actions/courseActions';

//Integration test to make sure everything is working correctly
describe('Store', () => {
    it('should handle creating courses', () => {
        const store = createStore(rootReducer, initialState);
        const course = {
            title: "Clean Code"
        };

        store.dispatch(actions.createCourseSuccess(course));

        const actual = store.getState().courses[0];

        expect(actual).toEqual(course);
    });
});