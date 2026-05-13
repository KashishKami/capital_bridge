import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import BentoCard from '../components/BentoCard';
import type { FeatureItem } from '../types/content';

// Mock feature
const mockFeature: FeatureItem = {
  id: 'technology',
  title: 'Technology',
  description: 'API Systems',
};

describe('BentoCard Component', () => {
  it('renders the card and changes hover state on mouse enter/leave', () => {
    const { container } = render(<BentoCard feature={mockFeature} index={0} />);
    
    expect(screen.getByText('Technology')).toBeDefined();
    
    // Simulate hover
    const card = container.firstChild as HTMLElement;
    expect(card).toBeDefined();

    // Fire mouse events to trigger local states (like glowing borders or icon animations)
    fireEvent.mouseEnter(card);
    // Ideally we test if a specific class or data-attribute is set for the GSAP hover effect
    expect(card.getAttribute('data-hovering')).toBe('true');

    fireEvent.mouseLeave(card);
    expect(card.getAttribute('data-hovering')).toBe('false');
  });
});
