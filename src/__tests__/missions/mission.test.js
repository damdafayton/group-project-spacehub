import React from 'react';
import renderer from 'react-test-renderer';
import Mission from '../../components/missions/mission';

describe('should render without problems', () => {
  it('should render the calculator', () => {
    const tree = renderer.create(<Mission />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
