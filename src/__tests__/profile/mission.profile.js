import React from 'react';
import renderer from 'react-test-renderer';
import MissionProfile from '../../components/profile/mission.profile';

describe('should render without problems', () => {
  it('should render the calculator', () => {
    const tree = renderer.create(<MissionProfile />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
