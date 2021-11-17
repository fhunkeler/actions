// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders hello from api', () => {
//   const component = render(<App />);

//   const hello = screen.getByText(/"world"/i);
//   expect(hello).toBeInTheDocument();
// });

import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

it('renders welcome message', () => {
  render(<App />);
  expect(screen.getByText('hello')).toBeInTheDocument();
});
