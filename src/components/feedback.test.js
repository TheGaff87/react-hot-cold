import React from 'react';
import {shallow} from 'enzyme';

import Feedback from './feedback';

describe('<Feedback />', () => {
    it('Renders without crashing', () => {
        shallow(<Feedback />);
    });

    it('Renders feedback text correctly', () => {
        const text = "Your guess was hot!";
        const wrapper = shallow(<Feedback feedback={text} />);
        expect(wrapper.contains(text)).toEqual(true);
    });
});