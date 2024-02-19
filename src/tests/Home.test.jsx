// Home.test.js
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from './Home';

test('renders homepage with correct text', () => {
  const { getByText } = render(<Home />);
  const homeText = getByText('Welcome to My Portfolio'); 
  expect(homeText).toBeInTheDocument();
});

