import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import SearchForm from '../SearchForm';

it('displays what the user typed', () => {
  const input = 'this is testing input';
  render(<SearchForm />);

  fireEvent.change(
    screen.getByRole('textbox'),
    { target: { value: input } }
  );

  expect(screen.getByRole('textbox')).toHaveValue(input);
});

it('submits user input when button is clicked', () => {
  const input = 'this is testing input';
  const onSubmit = jest.fn();

  render(<SearchForm onSubmit={onSubmit} />);

  fireEvent.change(
    screen.getByRole('textbox'),
    { target: { value: input } }
  );
  fireEvent.click(screen.getByRole('button'))

  expect(onSubmit).toHaveBeenCalledWith(input);
});
