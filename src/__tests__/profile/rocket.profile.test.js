import React from 'react';
import renderer from 'react-test-renderer';
import RocketProfile from '../../components/profile/rocket.profile';

describe('should render without problems', () => {
  it('should render the calculator', () => {
    const tree = renderer.create(<RocketProfile />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
