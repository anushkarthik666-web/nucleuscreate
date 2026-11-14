// Single source of truth for contact details and external links used across the site.

export const SITE_URL = "https://nucleuscreate.in";
export const SITE_NAME = "Nucleus";

export const CALENDLY_URL = "https://calendly.com/nucleuscreates/30min";
export const EMAIL = "hello@nucleuscreate.in";

// TODO(linkedin): paste the LinkedIn company page URL. The footer link stays hidden until this is set.
export const LINKEDIN_URL = "";

// Google Apps Script webhook that writes form submissions to the leads sheet.
// Override with VITE_LEAD_WEBHOOK_URL in .env if the deployment changes.
export const LEAD_WEBHOOK_URL =
  import.meta.env.VITE_LEAD_WEBHOOK_URL ||
  "https://script.google.com/macros/s/AKfycbzLsjoZsyU4uFJ_92d14NckreYVdpWOCv7Y1tpObr4uXIGsw3fs2DvoNWMZ5sMZaXYO5g/exec";

export const STUDIO_LINE = "Studio based in Bangalore, working US and UK hours.";

export const DEFAULT_TITLE = "Nucleus | Podcast and Video Post-Production Studio";
export const DEFAULT_DESCRIPTION =
  "Full episodes, teasers and Shorts for podcasts, and white-label editing for agencies. 48-hour turnaround.";
