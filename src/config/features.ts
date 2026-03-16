/**
 * Feature Flags Configuration
 * Use this file to enable or disable specific features/links without removing code.
 */
export const FEATURES = {
    // Hero Actions
    showHeroStoryButton: false,
    showHeroVisitButton: false,

    // Restaurant Actions
    showMenuButton: true,

    // Language School Actions
    showSchoolMoreInfo: false,

    // Experience Actions
    showEventsCalendar: false,

    // Community Actions
    showCommunityECOSLink: true,
    showCommunityRestaurantLink: true,

    // Footer Deep Links
    showFooterEcosDetails: false, // For courses, enrollment, etc.
    showFooterRestaurantDetails: false, // For reservations, catering, etc.
    showFooterSocialLinks: true,
    showFooterLegalLinks: false,
} as const;

export type FeatureFlag = keyof typeof FEATURES;
