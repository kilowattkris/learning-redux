import expect from 'expect';
import {authorsFormattedForDropdown} from './selectors';

describe('Author Selectors', () => {
    describe('authorsFormattedForDropdown', () => {
        it('should return properly formatted data', () => {
            const test_authors = [{
                id: 'cory-house',
                firstName: 'Cory',
                lastName: 'House'
            }];

            const correct_return_value = [{
                value: 'cory-house',
                text: 'Cory House'
            }];

            expect(authorsFormattedForDropdown(test_authors)).toEqual(correct_return_value);
        });
    });
});