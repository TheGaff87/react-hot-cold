import React from 'react';
import { shallow } from 'enzyme';

import Game from './game';

describe('<Game />', () => {
  it('Renders without crashing', () => {
    shallow(<Game />);
  });

  it('Can starts a new game', () => {
    const wrapper = shallow(<Game />);
    wrapper.setState({
      guesses: [1, 10, 20, 30],
      feedback: 'Terrible',
      correctAnswer: -1
    });
    wrapper.instance().restartGame();
    expect(wrapper.state('guesses')).toEqual([]);
    expect(wrapper.state('feedback')).toEqual('Make your guess!');
    expect(wrapper.state('correctAnswer')).toBeGreaterThanOrEqual(0);
    expect(wrapper.state('correctAnswer')).toBeLessThanOrEqual(100);
  });

  it('Can make guesses', () => {
    const wrapper = shallow(<Game />);
    wrapper.setState({
      correctAnswer: 75
    });

    wrapper.instance().makeGuess(1);
    expect(wrapper.state('guesses')).toEqual([1]);
    expect(wrapper.state('feedback')).toEqual('You\'re Ice Cold...');

    wrapper.instance().makeGuess(30);
    expect(wrapper.state('guesses')).toEqual([1, 30]);
    expect(wrapper.state('feedback')).toEqual('You\'re Cold...');

    wrapper.instance().makeGuess(60);
    expect(wrapper.state('guesses')).toEqual([1, 30, 60]);
    expect(wrapper.state('feedback')).toEqual('You\'re Warm.');

    wrapper.instance().makeGuess(76);
    expect(wrapper.state('guesses')).toEqual([1, 30, 60, 76]);
    expect(wrapper.state('feedback')).toEqual('You\'re Hot!');

    wrapper.instance().makeGuess(75);
    expect(wrapper.state('guesses')).toEqual([1, 30, 60, 76, 75]);
    expect(wrapper.state('feedback')).toEqual('You got it!');
  });
});