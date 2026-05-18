import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('./components/Banner', () => () => <div data-testid="banner" />);
jest.mock('./components/Footer', () => () => <div data-testid="footer" />);
jest.mock('./components/Genre', () => () => <div data-testid="genre" />);
jest.mock('./components/Language', () => () => <div data-testid="language" />);
jest.mock('./components/Nav', () => () => <div data-testid="nav" />);
jest.mock('./components/NavBar', () => () => <div data-testid="navbar" />);
jest.mock('./components/Platforms', () => () => <div data-testid="platforms" />);
jest.mock('./components/Row', () => () => <div data-testid="row" />);
jest.mock('./request', () => ({}));

describe('App', () => {
  it('renders the main landing content', () => {
    render(<App />);

    expect(screen.getByTestId('nav')).toBeInTheDocument();
    expect(screen.getByTestId('navbar')).toBeInTheDocument();
    expect(screen.getByTestId('banner')).toBeInTheDocument();
    expect(screen.getByText('Subscribe to Watch')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });
});