import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
    const app = shallow(<App />);

    it('Renders correctly', () => {
        expect(app).toMatchSnapshot();
    });

    it('Initializes the `state` with an empty list of gifts', () => {
        expect(app.state().gifts).toEqual([]);
    });

    describe('When clicking the `add gift` button', () => {
        const id = 1;

        beforeEach(() => {
            app.find('.btn-add').simulate('click');
        });

        afterEach(() => {
            app.setState({ gifts: [] });
        });
        
        it('Adds a new gift to `state`', () => {
            expect(app.state().gifts).toEqual([{ id }]);
        });
    
        it('Adds a new gift to the rendered list', () => {
            expect(app.find('.gift-list').children().length).toEqual(id);
        });

        it('Creates a gift component', () => {
            expect(app.find('Gift').exists()).toBe(true);
        });

        describe('And the users wants to remove the added gift', () => {
            beforeEach(() => {
                app.instance().removeGift(id);
            });

            it('Removes the gift from `state`', () => {
                expect(app.state().gifts).toEqual([]);
            });
        });
    });
});