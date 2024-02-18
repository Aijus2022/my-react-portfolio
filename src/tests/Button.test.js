// Button.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Button from './Button';

test('renders button with correct text', () => {
  const buttonText = 'Click me';
  const onClickMock = jest.fn();
  const { getByText } = render(<Button onClick={onClickMock}>{buttonText}</Button>);
  const button = getByText(buttonText);
  expect(button).toBeInTheDocument();
});

test('calls onClick handler when button is clicked', () => {
  const onClickMock = jest.fn();
  const { getByText } = render(<Button onClick={onClickMock}>Click me</Button>);
  const button = getByText('Click me');
  fireEvent.click(button);
  expect(onClickMock).toHaveBeenCalledTimes(1);
});
