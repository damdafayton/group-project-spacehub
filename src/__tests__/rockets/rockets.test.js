import { render, screen } from '@testing-library/react';

import Rockets from '../../components/rockets/Rockets'

import rockets from './_rockets'

// replace api property with redux prop`erty name
const mockRockets = rockets.map(rocket => ({ ...rocket, flickrImages: rocket.flickr_images, name: rocket.rocket_name }))

jest.mock('react-redux', () => ({
  __esModule: true,
  Provider: ({ children }) => children,
  useDispatch: () => { },
  useSelector: (fn) => fn({ rockets: mockRockets })
}))

test('loads Rockets page and displays Falcon 1 rocket', () => {
  render(<Rockets />)
  const headings = screen.getAllByRole('heading', { children: 'Falcon 1' })
  console.log('add here user interaction tests')
})
