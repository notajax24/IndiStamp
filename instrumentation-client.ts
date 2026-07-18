/**
 * This file is used for client-side instrumentation.
 * It runs once on the client before the app becomes interactive.
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/instrumentation-client
 */

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
  const GA_MEASUREMENT_ID = 'G-FT383NS7T7';

  // Dynamically load the Google Analytics script.
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  // Initialize the dataLayer and the gtag function.
  window.dataLayer = window.dataLayer || [];

  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(arguments);
  };

  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID);
}

/**
 * This function is exported and will be called by Next.js on every client-side navigation.
 * @param url The URL being navigated to.
 */
export function onRouterTransitionStart(url: string) {
  if (process.env.NODE_ENV === 'production' && typeof window.gtag === 'function') {
    window.gtag('event', 'page_view', { page_path: url });
  }
}