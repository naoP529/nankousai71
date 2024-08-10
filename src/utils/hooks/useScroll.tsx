import { useCallback } from 'react';
import { useLocation } from 'react-router-dom';

type ScrollToAnchorProps = {
  smooth?: boolean;
};

export const useScrollToAnchor = ({
  smooth,
}: ScrollToAnchorProps): { scrollToAnchor: () => void } => {
  const location = useLocation();

  const scrollToAnchor = useCallback<() => void>(() => {
    const hash = location.hash.slice(1);
    const target = document.getElementById(hash);

    if (target) {
      setTimeout(() => {
        target.scrollIntoView({ behavior: smooth ? 'smooth' : 'auto', block: 'start' });
      }, 100);
    }
  }, [location, smooth]);

  return { scrollToAnchor };
};