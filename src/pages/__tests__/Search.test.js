import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import '@testing-library/jest-dom';

import Search from '../Search';

const mockItems = [
  {
    id: 12345,
    full_name: 'osu-cs499-w22/testing-and-deployment',
    html_url: 'https://github.com/osu-cs499-w22/testing-and-deployment',
    description: 'The description'
  }
];

const server = setupServer(
  rest.get('https://api.github.com/search/repositories', (req, res, ctx) => {
    return res(ctx.json({ items: mockItems }))
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

it('executes a search and displays the results', async () => {
  render(<Search />);

  fireEvent.change(
    screen.getByRole('textbox'),
    { target: { value: 'test search query' } }
  );
  fireEvent.click(screen.getByRole('button'));

  await waitFor(() => screen.getByRole('list'));
  expect(screen.getByRole('list')).toHaveTextContent(mockItems[0].full_name);
});
