import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessForm from './guess-form';

describe('<GuessForm />', () => {

    it('Renders without crashing', () => {
        shallow(<GuessForm />);
    });

    it('Should fire the onMakeGuess callback when the form is submitted', () => {
    const callback = jest.fn();
    const value = 0;
    const wrapper = mount(<GuessForm onMakeGuess={callback} />);
    wrapper.find('input[type="number"]').instance().value = value;
    wrapper.simulate('submit');
    expect(callback).toHaveBeenCalledWith(value.toString());
});

it('Should empty out input on submit', () => {
    const wrapper = mount(<GuessForm />);
    const value = wrapper.find('input[type="number"]').instance().value;
    wrapper.simulate('submit');
    expect(value).toEqual('');
    });
});


