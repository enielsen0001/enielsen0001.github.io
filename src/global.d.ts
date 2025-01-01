declare global {
    interface Window {
      grecaptcha: {
        ready: (callback: () => void) => void;
        render: (container: string | HTMLElement, params: { sitekey: string; callback?: (token: string) => void; 'expired-callback'?: () => void }) => number;
        reset: (widgetId?: number) => void;
        getResponse: (widgetId?: number) => string;
      };
    }
  }