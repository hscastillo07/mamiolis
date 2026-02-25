export default {
    content: ["./index.html", "./src/**/*.{ts,tsx}"],
    theme: {
        extend: {
            colors: {
                cream: "var(--color-cream)",
                ink: "var(--color-ink)",
                ember: "var(--color-ember)",
                moss: "var(--color-moss)",
                wood: "var(--color-wood)",
                panel: "var(--color-panel)",
            },
            boxShadow: {
                soft: "var(--shadow-soft)",
                glow: "var(--shadow-glow)",
            },
            fontFamily: {
                serifDisplay: ["Cormorant Garamond", "serif"],
                ui: ["Manrope", "system-ui", "sans-serif"],
            },
            backgroundImage: {
                "warm-grid": "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)",
            },
            animation: {
                marquee: "marquee 22s linear infinite",
            },
            keyframes: {
                marquee: {
                    "0%": { transform: "translateX(0)" },
                    "100%": { transform: "translateX(-50%)" },
                },
            },
        },
    },
    plugins: [],
};
