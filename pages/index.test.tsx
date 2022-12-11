import { render, screen } from '@testing-library/react';
import Home from './index';

it('should contain a header', () => {
  const { container } = render(<Home />);
  expect(container.querySelector('header')).toBeTruthy();
});
