import React from 'react';
import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter, useLocation } from 'react-router-dom';
import Home from './Home';

// Mock dependencies
jest.mock('@splinetool/react-spline', () => {
  return function DummySpline({ onLoad }) {
    React.useEffect(() => {
      if (onLoad) onLoad();
    }, [onLoad]);
    return <div data-testid="spline-scene">Spline Scene</div>;
  };
});

jest.mock('../form/ContactForm', () => () => <div data-testid="contact-form">Contact Form</div>);

// Mock Card to avoid testing its internal logic here, but we can check if it receives correct props
jest.mock('../card/Card', () => ({ description, buttonText }) => (
  <div data-testid="project-card">
    <p>{description}</p>
    <button>{buttonText}</button>
  </div>
));

// Mock useLocation from react-router-dom
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: jest.fn(),
}));

describe('Home Component', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
    jest.clearAllMocks();
  });

  test('renders Home content on root path "/"', async () => {
    // Mock location for root path (considering the replace logic in Home.jsx)
    useLocation.mockReturnValue({ pathname: '/portfolio/' });

    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    // Initially loading
    expect(screen.getByText('Loading content...')).toBeInTheDocument();

    // Fast-forward time to trigger useEffect
    act(() => {
      jest.advanceTimersByTime(500);
    });

    // Check content after loading
    expect(screen.getByText('Raquel Lores Casalinas')).toBeInTheDocument();
    expect(screen.getByText('I create things for the web.')).toBeInTheDocument();
    expect(screen.getByTestId('spline-scene')).toBeInTheDocument();
  });

  test('renders About content on "/about" path', () => {
    useLocation.mockReturnValue({ pathname: '/portfolio/about' });

    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    expect(screen.getByText(/Raquel Lores Casalinas\./)).toBeInTheDocument();
    expect(screen.getByText(/I'm a problem solver/i)).toBeInTheDocument();
    
    // Check for CV links
    expect(screen.getByText('English CV')).toBeInTheDocument();
    expect(screen.getByText('Spanish CV')).toBeInTheDocument();
  });

  test('renders Projects content on "/projects" path', () => {
    useLocation.mockReturnValue({ pathname: '/portfolio/projects' });

    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    expect(screen.getByText('Recent Projects')).toBeInTheDocument();
    
    // Check if cards are rendered
    const cards = screen.getAllByTestId('project-card');
    expect(cards.length).toBeGreaterThan(0);
    
    // Check for specific project content
    expect(screen.getByText(/Analysts' Platform Home Page/i)).toBeInTheDocument();
    expect(screen.getByText(/News Management Application/i)).toBeInTheDocument();
  });

  test('renders Contact content on "/contact" path', () => {
    useLocation.mockReturnValue({ pathname: '/portfolio/contact' });

    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    expect(screen.getByText('Drop me a line:')).toBeInTheDocument();
    expect(screen.getByTestId('contact-form')).toBeInTheDocument();
  });
});