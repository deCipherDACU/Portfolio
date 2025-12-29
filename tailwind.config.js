/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#FAC638",       // Vivid Signal Yellow
                "background-light": "#ffffff",
                "background-dark": "#050505", // Pitch Black Void
                "surface-dark": "#000000",    // Pure Black for surfaces
                "tv-bezel": "#FAC638",        // Vivid Yellow Casing
                "tv-bezel-highlight": "#FBD46D", // Lighter Yellow Highlight
                "border-dark": "#1a1a1a",
                // Legacy support (mapped to new theme where possible)
                brand: '#FAC638',
                secondary: '#FFFFFF',
                accent: '#FAC638',
                'neutral-light': '#FFFFFF',
                'neutral-dark': '#050505',
            },
            fontFamily: {
                display: ["Space Grotesk", "sans-serif"],
                sans: ["Inter", "sans-serif"],
            },
            backgroundImage: {
                scanlines: "linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))",
                "glass-reflection": "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0) 60%, rgba(255, 255, 255, 0.02) 100%)",
            },
            boxShadow: {
                "tv-glow": "0 0 40px -10px rgba(250, 198, 56, 0.3)",
                "card-hover": "0 10px 30px -5px rgba(0, 0, 0, 0.5)",
            },
            animation: {
                'spin-slow': 'spin 3s linear infinite',
                'pulse-subtle': 'pulse 4s ease-in-out infinite',
            },
        },
    },
    plugins: [],
}
