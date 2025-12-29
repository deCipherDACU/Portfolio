
export interface VideoProject {
    id: string;
    title: string;
    category: string;
    youtubeId: string; // The 11-character YouTube ID (e.g., dQw4w9WgXcQ)
    thumbnail?: string; // Optional custom thumbnail
}

export interface DesignProject {
    id: string;
    title: string;
    category: string;
    image: string; // URL to image
    description: string;
    details?: {
        colorPalette: string[]; // Hex codes
        theme: string;
        process: string; // Photoshop workflow
    };
}

export const portfolioContent = {
    // Main featured video (Large player)
    featuredVideo: {
        id: "featured-1",
        title: "Showreel 2025",
        category: "Director / Editor",
        youtubeId: "dQw4w9WgXcQ", // REPLACE THIS with your actual Showreel ID
    } as VideoProject,

    // Grid of secondary videos
    recentVideos: [
        {
            id: "vid-1",
            title: "Commercial Work",
            category: "Cinematography",
            youtubeId: "LXb3EKWsInQ", // REPLACE THIS
        },
        {
            id: "vid-2",
            title: "Music Video",
            category: "Direction",
            youtubeId: "9bZkp7q19f0", // REPLACE THIS
        },
        {
            id: "vid-3",
            title: "Documentary Short",
            category: "Editing",
            youtubeId: "M7lc1UVf-VE", // REPLACE THIS
        },
        {
            id: "vid-4",
            title: "Brand Campaign",
            category: "Color Grading",
            youtubeId: "JGwWNGJdvx8", // REPLACE THIS
        },
    ] as VideoProject[],

    // Graphic Design Showcase (Carousel)
    designPortfolio: [
        {
            id: "d-01",
            title: "Berserk",
            category: "Digital Art",
            description: "A gritty, high-contrast tribute to dark fantasy.",
            image: "/Berserk.jpg",
            details: {
                colorPalette: ["#0a0a0a", "#8b0000", "#c0c0c0", "#2b2b2b"],
                theme: "Dark Fantasy / Manga Noir",
                process: "Created by blending high-contrast manga panels with heavy texture overlays. Used 'Threshold' adjustments to flatten values, followed by a 'Gradient Map' for the blood-red accents. Final grunge textures added via screen blending mode to simulate worn paper."
            }
        },
        {
            id: "d-02",
            title: "Duality",
            category: "Abstract",
            description: "Exploration of symmetry and contrasting forces.",
            image: "/Duality.png",
            details: {
                colorPalette: ["#1a1a2e", "#e94560", "#0f3460", "#f8f8f8"],
                theme: "Cyber-Surrealism",
                process: "Started with a mirrored collage technique. Used 'Liquify' filters to distort organic shapes against geometric grids. The chromatic aberration effect was achieved by shifting RGB channels manually, and 'Curves' were used to punch up the neon contrast."
            }
        },
        {
            id: "d-03",
            title: "Grandmaster",
            category: "Editorial",
            description: "Strategic majesty captured in a visual hierarchy.",
            image: "/Grandmaster.png",
            details: {
                colorPalette: ["#ffd700", "#1e1e1e", "#ffffff", "#4a4a4a"],
                theme: "Royal Minimalism",
                process: "Focused on typography interplay. The central figure was masked using the 'Pen Tool' for precision. Background features a custom chessboard pattern with 'Gaussian Blur' for depth. Gold accents created using 'Bevel & Emboss' layer styles mixed with metallic texture clipping masks."
            }
        },
        {
            id: "d-04",
            title: "I am the Universe",
            category: "Cosmic",
            description: "Space-age psychedelia meets modern typography.",
            image: "/I am the Universe.jpg",
            details: {
                colorPalette: ["#240046", "#7b2cbf", "#ff9e00", "#e0aaff"],
                theme: "Retro Futurism",
                process: "Composited NASA nebula imagery with 3D wireframe renders. Used 'Hue/Saturation' layers to unifying the color grade into deep purples and oranges. Noise added via 'Camera Raw Filter' to emulate film grain."
            }
        },
        {
            id: "d-05",
            title: "Me and Who on Mars",
            category: "Sci-Fi",
            description: "A lonely journey across the red planet.",
            image: "/Me and Who on Mars.png",
            details: {
                colorPalette: ["#9d0208", "#faa307", "#03071e", "#ffe6a7"],
                theme: "Martian Solitude",
                process: "Matte painting technique. Blended various desert landscapes using soft brushes. The planet in the sky was enhanced with 'Outer Glow' styles. Color grading done heavily with 'Selective Color' to push the reds and oranges while keeping shadows crushed."
            }
        },
        {
            id: "d-06",
            title: "Surfer Girl",
            category: "Lifestyle",
            description: "Vaporwave aesthetics for the digital wave.",
            image: "/Surfer Girl.png",
            details: {
                colorPalette: ["#ff006e", "#3a86ff", "#8338ec", "#ffbe0b"],
                theme: "Vaporwave / Y2K",
                process: "Heavily utilized 'Gradient Maps' for the sunset vibes. The glitch effects on the water were made by duplicating layers and using the 'Wind' filter. Typography warped using 'Envelope Distort' to match the wave curvature."
            }
        },
        {
            id: "d-07",
            title: "The Bandit",
            category: "Character",
            description: "Wanted dead or alive.",
            image: "/The Bandit.jpg",
            details: {
                colorPalette: ["#3e2723", "#d7ccc8", "#5d4037", "#a1887f"],
                theme: "Western Grunge",
                process: "Simulated a wanted poster aesthetic. Used 'Multiply' blend modes for the paper texture. The portrait was treated with a 'Halftone Pattern' filter to mimic old print press tech. Burnt edges created with a custom brush and 'Color Burn' mode."
            }
        },
        {
            id: "d-08",
            title: "Void Club",
            category: "Event",
            description: "Enter the unknown.",
            image: "/Void Club.jpg",
            details: {
                colorPalette: ["#000000", "#00ff41", "#121212", "#ffffff"],
                theme: "Industrial Techno",
                process: "High-contrast monochrome base with a singular neon green accent. Used 'Displace' maps with a glitch texture to distort the text. The fog effect was painted in with a low-flow soft brush and 'Motion Blur' to create movement."
            }
        }
    ] as DesignProject[]
};
