import React from 'react';
import { render, screen } from '@testing-library/react';
import TestCode from '@src/pages/TestCode';

test('Renders a element', () => {
  render(<TestCode />);
  const mainElement = screen.getByRole('link');
  expect(mainElement).toBeInTheDocument();
});
