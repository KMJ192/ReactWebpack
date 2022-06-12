import React from 'react';
import { render } from '@testing-library/react';

import TestCode from '../pages/TestCode';

describe('', () => {
  const component = render(<TestCode />);
  expect(component.container).toMatchSnapshot();
});
