import { useEffect } from 'react';

const PARENT_ORIGIN = '*';

export function useIframeAutoHeight() {
  useEffect(() => {
    if (window.parent === window) {
      return;
    }

    const sendHeight = () => {
      const height = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight,
      );

      window.parent.postMessage(
        {
          type: 'echegoyen:iframe-resize',
          height,
        },
        PARENT_ORIGIN,
      );
    };

    sendHeight();

    const observer = new ResizeObserver(() => {
      sendHeight();
    });

    observer.observe(document.documentElement);
    observer.observe(document.body);

    window.addEventListener('load', sendHeight);
    window.addEventListener('resize', sendHeight);

    return () => {
      observer.disconnect();

      window.removeEventListener('load', sendHeight);
      window.removeEventListener('resize', sendHeight);
    };
  }, []);
}