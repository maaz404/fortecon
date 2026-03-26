const isProd = import.meta.env.PROD;

if (!window.__forteconAnalyticsEvents) {
  window.__forteconAnalyticsEvents = [];
}

export function initAnalytics() {
  const gaId = import.meta.env.VITE_GA_ID;

  if (!isProd || !gaId) {
    return;
  }

  const existingScript = document.querySelector(`script[data-ga-id="${gaId}"]`);
  if (!existingScript) {
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
    script.setAttribute("data-ga-id", gaId);
    document.head.appendChild(script);
  }

  if (!window.dataLayer) {
    window.dataLayer = [];
  }

  if (!window.gtag) {
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };
  }

  window.gtag("js", new Date());
  window.gtag("config", gaId, { send_page_view: true });
}

export function trackEvent(eventName, params = {}) {
  const payload = {
    event: eventName,
    ...params,
    ts: new Date().toISOString(),
  };

  if (!isProd) {
    window.__forteconAnalyticsEvents.push(payload);
    console.debug("[analytics]", payload);
  }

  if (!window.gtag) {
    return;
  }

  window.gtag("event", eventName, params);
}
