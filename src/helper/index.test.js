import { max_number } from './index';

describe('Max number', () => {
    describe('Given an empty array', () => {
        it('Returns 0', () => {
            expect(max_number([])).toEqual(0);
        });
    });

    describe('Given an array of numbers', () => {
        it('Returns the max number', () => {
            expect(max_number([1, 2, 3])).toEqual(3);
        });
    })
});