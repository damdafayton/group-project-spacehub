import React from 'react';
import renderer from 'react-test-renderer';
import Profile from '../../components/profile/profile';

describe('should render without problems', () => {
  it('should render the calculator', () => {
    const tree = renderer.create(<Profile />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
