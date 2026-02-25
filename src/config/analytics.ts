import { env } from "@/config/env";

export function initAnalytics() {
  if (!env.enableAnalytics || !env.gaMeasurementId) return;
  // Placeholder para futura integracion (GA4 / Plausible / etc.)
}
