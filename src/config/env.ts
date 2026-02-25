export const env = {
  siteUrl: import.meta.env.VITE_SITE_URL || "http://localhost:5173",
  gaMeasurementId: import.meta.env.VITE_GA_MEASUREMENT_ID || "",
  enableAnalytics: import.meta.env.VITE_ENABLE_ANALYTICS === "true",
};
