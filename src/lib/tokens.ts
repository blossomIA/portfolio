export const sections = [
  { id: "work", num: "01", label: "Selected Work" },
  { id: "about", num: "02", label: "About" },
  { id: "experience", num: "03", label: "Experience" },
  { id: "capabilities", num: "04", label: "Capabilities" },
  { id: "testimonials", num: "05", label: "Testimonials" },
  { id: "contact", num: "06", label: "Contact" },
] as const;

export const type = {
  h1: {
    fontFamily: "var(--font-display)",
    size: "84px",
    leading: "94.676px",
    tracking: "-1.8207px",
    weight: 500,
  },
  h2Lg: {
    fontFamily: "var(--font-sans)",
    size: "69.615px",
    leading: "72.4px",
    tracking: "-1.5859px",
    weight: 500,
  },
  h2: {
    fontFamily: "var(--font-sans)",
    size: "44px",
    leading: "48.4px",
    tracking: "-0.7348px",
    weight: 500,
  },
  bodyLg: {
    fontFamily: "var(--font-sans)",
    size: "20px",
    leading: "33px",
    tracking: "-0.4492px",
  },
  body: {
    fontFamily: "var(--font-sans)",
    size: "15px",
    leading: "26.7px",
    tracking: "-0.2344px",
  },
  bodySm: {
    fontFamily: "var(--font-sans)",
    size: "14px",
    leading: "20px",
    tracking: "-0.1504px",
  },
  labelLg: {
    fontFamily: "var(--font-mono)",
    size: "10px",
    leading: "15px",
    tracking: "1.8px",
    uppercase: true,
  },
  labelSm: {
    fontFamily: "var(--font-mono)",
    size: "11px",
    leading: "16.5px",
    tracking: "0.55px",
    uppercase: true,
  },
  stat: {
    fontFamily: "var(--font-sans)",
    size: "32px",
    leading: "32px",
    tracking: "-0.3938px",
    weight: 500,
  },
} as const;
