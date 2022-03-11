import { render, screen } from '@testing-library/react';
import Heading from './Heading';

test('render heading', () => {
  render(<Heading />);
  expect(screen.getByText(/hello react/i)).toBeInTheDocument();
});

test('render heading with props', () => {
  render(<Heading name={'World'} />);
  expect(screen.getByText(/hello world/i)).toBeInTheDocument();
});
