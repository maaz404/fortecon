# GA4 Dashboard Specification

Date: 2026-03-26

## Objective

Provide a conversion-focused reporting setup for Fortecon so marketing and sales can monitor funnel health from first CTA interaction to form outcomes.

## 1) GA4 Property Setup

1. Set VITE_GA_ID in production environment.
2. Deploy and verify the base page_view stream is active.
3. In GA4 Admin, create custom dimensions for event parameters:

- cta_name
- cta_location
- source
- contact_method
- form_name
- form_status
- action

Reference schema: analytics/ga4-events-reference.json

## 2) Core Funnel KPIs

1. Hero CTA CTR

- Definition: cta_click where cta_name = hero_explore_services / Sessions

2. Quote Intent Rate

- Definition: cta_click where cta_name in (navbar_request_quote, banner_request_quote) / Sessions

3. Contact Interaction Rate

- Definition: contact_click / Sessions

4. Callback Intent Rate

- Definition: lead_intent where action = request_callback / Sessions

5. Form Success Rate

- Definition: form_submit where form_status = success / form_submit total

6. Form Error Rate

- Definition: form_submit where form_status = error / form_submit total

## 3) Recommended GA4 Explorations

### Exploration A: CTA Performance (Free Form)

Dimensions:

- cta_name
- cta_location
- Device category
- Session source/medium

Metrics:

- Event count
- Sessions
- Users

Filter:

- event_name exactly matches cta_click

Visualization:

- Table (rows: cta_name, cta_location)
- Secondary breakdown by device category

### Exploration B: Lead and Contact Funnel

Dimensions:

- event_name
- source
- contact_method
- form_status

Metrics:

- Event count
- Users

Filters:

- event_name matches regex: cta_click|lead_intent|contact_click|form_submit

Visualization:

- Funnel or step table in this order:
  1. cta_click
  2. lead_intent OR contact_click
  3. form_submit success

### Exploration C: Error Diagnosis

Dimensions:

- form_status
- Device category
- Browser
- Country

Metrics:

- Event count

Filter:

- event_name = form_submit

Visualization:

- Table + trend line by date

## 4) Looker Studio Dashboard Layout

Page 1: Executive Summary

- KPI cards: Hero CTA CTR, Quote Intent Rate, Contact Interaction Rate, Form Success Rate
- 30-day trend chart for cta_click, contact_click, form_submit

Page 2: CTA Breakdown

- Heatmap/table by cta_name x cta_location
- Device split and source/medium split

Page 3: Contact and Lead Outcomes

- contact_click by method
- lead_intent (request_callback) trend
- form_submit success vs error

Page 4: Quality Monitoring

- Form error rate over time
- Browser/device segments for form errors

## 5) Naming and Governance Rules

1. Keep event names stable once dashboards are in use.
2. Add new parameters only with schema updates in analytics/ga4-events-reference.json.
3. Review analytics logs in development before release using:

- window.\_\_forteconAnalyticsEvents
- Browser console prefix: [analytics]

## 6) Verification Checklist

Use ANALYTICS-QA.md before each release and after major CTA or form UI changes.
