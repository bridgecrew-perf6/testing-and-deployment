import { unmountComponentAtNode, render } from 'react-dom';
import { act } from 'react-dom/test-utils';

import GitHubRepo from '../GitHubRepo';

let container;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('correctly renders a repo', () => {
  // Arrange
  const repo = {
    full_name: 'osu-cs499-w22/testing-and-deployment',
    html_url: 'https://github.com/osu-cs499-w22/testing-and-deployment',
    description: 'The description'
  };

  // Act
  act(() => {
    render(<GitHubRepo repo={repo} />, container);
  });

  // Assert
  expect(container.querySelector('h2').textContent).toBe(repo.full_name);
  expect(container.querySelector('p').textContent).toBe(repo.description);
});

it('correctly renders a repo without a description', () => {
  // Arrange
  const repo = {
    full_name: 'osu-cs499-w22/testing-and-deployment',
    html_url: 'https://github.com/osu-cs499-w22/testing-and-deployment'
  };

  // Act
  act(() => {
    render(<GitHubRepo repo={repo} />, container);
  });

  // Assert
  expect(container.querySelector('h2').textContent).toBe(repo.full_name);
  expect(container.querySelector('p')).toBeNull();
});
