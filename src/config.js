/**
 * Social Fox Landing Page Configuration
 * 
 * Central configuration file for all dynamic content and links.
 * Edit these values before publishing.
 */

export const config = {
  // Direct download link to the APK file
  apkUrl: "https://github.com/RohitGiri1/socialfox.apk/releases/download/v1.0.0/socialfox.apk",

  // Current production version
  version: "1.0.0",

  // Download size of the APK
  size: "54.2 MB",

  // Joining bonus incentive text.
  // Set to "" (empty string) to hide every bonus mention across the entire page automatically.
  bonusText: "up to ₹100 joining bonus",

  // Example price strip shown on the landing page (3-4 rows).
  // TODO: VERIFY REAL RATES BEFORE PRODUCTION RELEASE!
  // These are placeholder example rates and must be verified against current in-app provider catalog.
  prices: [
    { name: "Instagram Followers", qty: "1,000", price: "₹89" },
    { name: "Instagram Likes", qty: "1,000", price: "₹29" },
    { name: "YouTube Views", qty: "1,000", price: "₹149" },
    { name: "Telegram Members", qty: "1,000", price: "₹99" }
  ],

  // Legal and support links
  // TODO: Replace with your published Terms page URL or leave as placeholder
  termsUrl: "/terms",

  // TODO: Replace with your published Privacy page URL or leave as placeholder
  privacyUrl: "/privacy",

  // Support contact email
  supportEmail: "support.socialfox@gmail.com",

  // Canonical page URL
  pageUrl: "https://socialfox.app",

  // App Screenshots Showcase (5 screens)
  // Edit captions or re-order here
  screenshots: [
    {
      id: "screen-1",
      src: "/screenshots/screen-1-720w.webp",
      srcSet: "/screenshots/screen-1-360w.webp 360w, /screenshots/screen-1-720w.webp 720w",
      alt: "Social Fox Wallet and Dashboard",
      caption: "Your wallet at a glance"
    },
    {
      id: "screen-2",
      src: "/screenshots/screen-2-720w.webp",
      srcSet: "/screenshots/screen-2-360w.webp 360w, /screenshots/screen-2-720w.webp 720w",
      alt: "Social Fox Services Catalog with live API rates",
      caption: "Browse services & live rates"
    },
    {
      id: "screen-3",
      src: "/screenshots/screen-3-720w.webp",
      srcSet: "/screenshots/screen-3-360w.webp 360w, /screenshots/screen-3-720w.webp 720w",
      alt: "Social Fox Multi-platform transparent per-1k rates",
      caption: "Transparent per-1k pricing"
    },
    {
      id: "screen-4",
      src: "/screenshots/screen-4-720w.webp",
      srcSet: "/screenshots/screen-4-360w.webp 360w, /screenshots/screen-4-720w.webp 720w",
      alt: "Social Fox Instant order placement",
      caption: "Place an order in seconds"
    },
    {
      id: "screen-5",
      src: "/screenshots/screen-5-720w.webp",
      srcSet: "/screenshots/screen-5-360w.webp 360w, /screenshots/screen-5-720w.webp 720w",
      alt: "Social Fox Automated delivery engine",
      caption: "Fast, automated processing"
    }
  ]
};

// Console warning in development for unverified prices
if (typeof window !== "undefined" && import.meta.env?.DEV) {
  console.warn(
    "[Social Fox Config Warning] TODO: Verify real rates in src/config.js before production release. Current rates are placeholder rates."
  );
}
