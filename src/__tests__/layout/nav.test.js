import React from 'react';
import renderer from 'react-test-renderer';
import Nav from '../../components/layout/Nav';

describe('should render without problems', () => {
  it('should render the calculator', () => {
    const tree = renderer.create(<Nav />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
