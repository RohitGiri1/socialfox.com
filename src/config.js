/**
 * Social Fox Landing Page Configuration
 * 
 * Central configuration file for all dynamic content and links.
 * Edit these values before publishing.
 */

export const config = {
  // Direct download link to the APK file
  // TODO: Replace with your actual APK download URL (e.g. GitHub Releases direct asset URL or hosted /social_fox.apk)
  apkUrl: "/social_fox.apk",

  // Current production version
  // TODO: Verify current app release version
  version: "1.0.0",

  // Download size of the APK
  // TODO: Verify actual APK file size
  size: "18 MB",

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

  // TODO: Verify support contact email
  supportEmail: "support@socialfox.app",

  // Canonical page URL used for QR code generation and "Copy link" on desktop/iOS
  // TODO: Replace with your live custom domain
  pageUrl: "https://socialfox.app"
};

// Console warning in development for unverified prices
if (typeof window !== "undefined" && import.meta.env?.DEV) {
  console.warn(
    "[Social Fox Config Warning] TODO: Verify real rates in src/config.js before production release. Current rates are placeholder rates."
  );
}
