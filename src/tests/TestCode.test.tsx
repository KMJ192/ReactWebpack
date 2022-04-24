import React from 'react';
import { render } from '@testing-library/react';

import TestCode from '@src/pages/TestCode';

// describe('first', () => {
//   const a = 1;
//   const b = 2;
//   test('a + b는 3', () => {
//     expect(a + b).toEqual(3);
//   });
// });

describe('', () => {
  const component = render(<TestCode />);
  expect(component.container).toMatchSnapshot();
});
