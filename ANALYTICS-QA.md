# Analytics QA Checklist

Date: 2026-03-26

## Setup

- Ensure the app is running in development mode.
- Open browser devtools console.
- Confirm analytics debug entries appear with prefix: [analytics].
- Optional: inspect in-memory queue at window.\_\_forteconAnalyticsEvents.

## Event Validation Matrix

### Hero

- Action: click Explore Services CTA in hero.
- Expected event: cta_click
- Expected params:
  - cta_name: hero_explore_services
  - cta_location: hero

- Action: click View Recent Projects in hero.
- Expected event: cta_click
- Expected params:
  - cta_name: hero_view_recent_projects
  - cta_location: hero

### Navbar

- Action: click Request a Quote in desktop nav.
- Expected event: cta_click
- Expected params:
  - cta_name: navbar_request_quote
  - cta_location: navbar_desktop

- Action: open mobile menu and click Request a Quote.
- Expected event: cta_click
- Expected params:
  - cta_name: navbar_request_quote
  - cta_location: navbar_mobile

### CTA Banner

- Action: click Request a Quote button.
- Expected event: cta_click
- Expected params:
  - cta_name: banner_request_quote
  - cta_location: cta_banner

- Action: click Call Now.
- Expected event: contact_click
- Expected params:
  - contact_method: phone
  - source: cta_banner

- Action: submit quick callback form.
- Expected event: lead_intent
- Expected params:
  - source: cta_banner_quick_form
  - action: request_callback

### Contact Section

- Action: click Phone / Email / Head Office card links.
- Expected event: contact_click
- Expected params:
  - contact_method: phone | email | head office
  - source: contact_section

- Action: submit contact form successfully (with valid EmailJS config).
- Expected event: form_submit
- Expected params:
  - form_name: contact_form
  - form_status: success

- Action: force a submit error (invalid EmailJS config or network failure).
- Expected event: form_submit
- Expected params:
  - form_name: contact_form
  - form_status: error

## Production Validation

- Configure VITE_GA_ID in deployment environment.
- Publish and verify events in GA4 Realtime report.
- Validate no JS errors in console during tracked actions.

## Notes

- In development, events are logged even without GA configured.
- In production, events are sent only when VITE_GA_ID is defined.
