import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('App', () => {
  it('renders the correct main heading', () => {
    render(<App />);
    expect(screen.getByText(/justin samuel/i)).toBeInTheDocument();
  });

  it('renders all subheadings', () => {
    render(<App />);
    expect(screen.getByText(/vulnerability analyst/i)).toBeInTheDocument();
    expect(screen.getByText(/aspiring devsecops/i)).toBeInTheDocument();
    expect(screen.getByText(/based in newcastle/i)).toBeInTheDocument();
  });
});
