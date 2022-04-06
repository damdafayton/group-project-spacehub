import React from 'react';
import renderer from 'react-test-renderer';
import MissionsContainer from '../../components/missions/missions.container';
jest.mock('react-redux', () => ({
  __esModule: true,
  Provider: ({ children }) => children,
  useDispatch: () => { },
  useSelector: (fn) => fn({ rockets: mockRockets }),
}));
describe('should render without problems', () => {
  it('should render the calculator', () => {
    const tree = renderer.create(<MissionsContainer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
