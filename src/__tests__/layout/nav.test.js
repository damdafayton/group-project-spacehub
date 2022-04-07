import { render } from '@testing-library/react';
import { Nav } from 'react-bootstrap';

it('should render without crash', () => {
    render(<Nav/>)
});