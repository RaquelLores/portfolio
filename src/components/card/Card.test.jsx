import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from './Card';

describe('Card Component', () => {
  const mockProps = {
    imageSrc: 'test-image.jpg',
    description: 'This is a test description that is long enough to be clamped.',
    buttonText: 'Go to Link',
    buttonLink: 'https://example.com',
  };

  test('renders card with provided props', () => {
    render(<Card {...mockProps} />);

    // Check image
    const image = screen.getByAltText('Card');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'test-image.jpg');

    // Check description
    expect(screen.getByText(mockProps.description)).toBeInTheDocument();

    // Check link button
    const linkButton = screen.getByRole('link', { name: mockProps.buttonText });
    expect(linkButton).toBeInTheDocument();
    expect(linkButton).toHaveAttribute('href', mockProps.buttonLink);
  });

  test('toggles description expansion on button click', () => {
    render(<Card {...mockProps} />);

    const description = screen.getByText(mockProps.description);
    const toggleButton = screen.getByRole('button', { name: /read more/i });

    // Initial state: collapsed (line-clamp-3 class present)
    expect(description).toHaveClass('line-clamp-3');
    expect(toggleButton).toHaveTextContent('Read More');

    // Click to expand
    fireEvent.click(toggleButton);

    // Expanded state (line-clamp-3 class removed)
    expect(description).not.toHaveClass('line-clamp-3');
    expect(toggleButton).toHaveTextContent('Read Less');

    // Click to collapse
    fireEvent.click(toggleButton);

    // Collapsed state again
    expect(description).toHaveClass('line-clamp-3');
    expect(toggleButton).toHaveTextContent('Read More');
  });
});