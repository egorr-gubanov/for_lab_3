import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/test/i);
  expect(linkElement).toBeInTheDocument();
});

jest.mock('ethr-did', () => ({
    EthrDID: jest.fn(() => ({
        createDid: jest.fn(),
    })),
}));
