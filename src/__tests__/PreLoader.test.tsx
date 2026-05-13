
import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import PreLoader from '../components/PreLoader';

describe('PreLoader Component', () => {
  it('renders the preloader and calls onComplete after GSAP animation', async () => {
    const onCompleteMock = vi.fn();
    
    render(<PreLoader onComplete={onCompleteMock} />);
    
    // Should be in the DOM initially
    expect(screen.getByTestId('preloader')).toBeDefined();
    
    // We expect the GSAP animation to run and eventually call onComplete
    // Since GSAP animations take real time, we wait for the callback.
    await waitFor(() => {
      expect(onCompleteMock).toHaveBeenCalledTimes(1);
    }, { timeout: 2000 }); // Preloader animation is ~1.5s
  });
});
