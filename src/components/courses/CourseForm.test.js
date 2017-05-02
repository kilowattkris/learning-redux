import React from 'react';
import expect from 'expect'; //the assertion library
import { shallow, mount } from 'enzyme'; //the test framework
// import TestUtils from '../../../node_modules/react-dom/test-utils';
import CourseForm from './CourseForm';

function setup(saving){
    const props = {
        course: {},
        saving: saving,
        errors: {},
        onSave: () => {},
        onChange: () => {}
    };

    return shallow(<CourseForm {...props} />); //returns a shallow DOM render of CourseForm
}

describe('CourseForm UI tests', () => { //describe is a function used by mocha to help organize test feedback
    it('renders form and h1', () => {
        const wrapper = setup(false);
        // Chai syntax
        // expect(wrapper.find('form')).to.have.length(1);
        // expect(wrapper.find('h1').text()).to.equal('Manage Course');
        expect(wrapper.find('form').length).toBe(1);
        expect(wrapper.find('h1').text()).toEqual('Manage Course');
    });

    it('save button is labeled "Save" when not saving', () => {
        const wrapper = setup(false);
        expect(wrapper.find('input').props().value).toBe('Save');
    });

    it('save button is labeled "Saving..." when saving', () => {
        const wrapper = setup(true);
        expect(wrapper.find('input').props().value).toBe('Saving...');
    });
});
