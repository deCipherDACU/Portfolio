
export interface VideoProject {
    id: string;
    title: string;
    category: string;
    youtubeId?: string; // Optional if using direct URL
    thumbnail?: string; // Optional custom thumbnail
    platform?: 'youtube' | 'instagram';
    url?: string; // Direct link for Instagram/other platforms
    description?: string; // Optional description
    videoSrc?: string; // Direct video file source
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
        title: "Coca Cola AI Ad",
        category: "AI Advertisement",
        description: "Coca Cola AI ad made with Veo 3 and ElevenLabs",
        youtubeId: "vBQaIdvtsEA",
    } as VideoProject,

    // Grid of secondary videos
    horizontalVideos: [
        {
            id: "vid-h1",
            title: "Zara Documentary",
            category: "Business Breakdown",
            description: "A cinematic journey through style and elegance.",
            youtubeId: "fWGKXRecelU",
            thumbnail: "/Zara.png",
        },
        {
            id: "vid-h2",
            title: "Indian Militant",
            category: "Podcast Hook",
            description: "Engaging podcast highlights.",
            youtubeId: "B93gFxR1DIk",
            thumbnail: "/Podcast.png",
        },
        {
            id: "vid-h3",
            title: "Gulab Jamun AI",
            category: "AI Storytelling",
            description: "AI documentary short",
            youtubeId: "VvMv0XYo9B8",
        },
        {
            id: "vid-h4",
            title: "End to end AI Advertisement | IIT Roorkee",
            category: "AI Advertisement",
            description: "End to end AI Advertisement created for IIT Roorkee.",
            youtubeId: "3LsoPczCe3Y",
        },
    ] as VideoProject[],

    // Grid of secondary videos - Vertical (9:16)
    // Grid of secondary videos - Vertical (9:16)
    verticalVideos: [
        {
            id: "vid-v1",
            title: "Instagram Reel 1",
            category: "Social Media",
            platform: 'instagram',
            url: "https://www.instagram.com/reel/DLJv55WSuK3/",
            thumbnail: "/1.jpg",
        },
        {
            id: "vid-v2",
            title: "Instagram Reel 2",
            category: "Social Media",
            platform: 'instagram',
            url: "https://www.instagram.com/reel/DLPrCChSnBd/",
            thumbnail: "/2.jpg",
        },
        {
            id: "vid-v3",
            title: "Instagram Reel 3",
            category: "Social Media",
            platform: 'instagram',
            url: "https://www.instagram.com/reel/DL9PftNSbFY/",
            thumbnail: "/3.jpg",
        },
        {
            id: "vid-v4",
            title: "Hidden Gem in Maharashtra",
            category: "Travel",
            platform: 'instagram',
            url: "https://www.instagram.com/reel/DPdTeeFEykM/?igsh=MXFmcDdzMGg5MDdjZg==",
            thumbnail: "/maharashtra.jpg",
        },
        {
            id: "vid-v5",
            title: "Winter Escape 2025",
            category: "Travel",
            platform: 'instagram',
            url: "https://www.instagram.com/reel/DSuy_k2iYJT/?igsh=OWF0YTd4MHVscXg2",
            thumbnail: "/winter_escape.jpg",
        },
        {
            id: "vid-v6",
            title: "Experience Switzerland",
            category: "Travel",
            platform: 'instagram',
            url: "https://www.instagram.com/reel/DSMayn_jAOQ/?igsh=MTk4M2thYm1pd3N2Yw==",
            thumbnail: "/switzerland.jpg",
        },
    ] as VideoProject[],

    // Graphic Design Showcase (Carousel)
    designPortfolio: [
        {
            id: "d-01",
            title: "Berserk",
            category: "Digital Art",
            description: "A gritty, high-contrast tribute to dark fantasy.",
            image: "/Berserk.webp",
            details: {
                colorPalette: ["#442a28", "#c84644", "#782d2c", "#5c1817", "#a43937", "#2a1716"],
                theme: "Dark Fantasy / Manga Noir",
                process: "Manga art pushed into a gritty red/black print look; heavy distress; bold title lockup like a film poster."
            }
        },
        {
            id: "d-02",
            title: "Duality",
            category: "Abstract",
            description: "Exploration of symmetry and contrasting forces.",
            image: "/Duality.webp",
            details: {
                colorPalette: ["#4763cd", "#f7f9fc", "#384a89", "#c6d1ec", "#8b9dd7", "#24293c"],
                theme: "Cyber-Surrealism",
                process: "Editorial cover grid; blue field; ribbon/scroll graphic as the focal symbol; restrained, clean spacing with print texture."
            }
        },
        {
            id: "d-03",
            title: "Grandmaster",
            category: "Editorial",
            description: "Strategic majesty captured in a visual hierarchy.",
            image: "/Grandmaster.webp",
            details: {
                colorPalette: ["#f9f7f2", "#323030", "#fa2c2c", "#d3d0ce", "#656362", "#a29c9b"],
                theme: "Royal Minimalism",
                process: "B/W portrait cut-out centered; red starburst 'impact' shape; mixed collage elements (hand/rope/chess) + notation text for narrative density."
            }
        },
        {
            id: "d-04",
            title: "I am the Universe",
            category: "Cosmic",
            description: "Space-age psychedelia meets modern typography.",
            image: "/I am the Universe.webp",
            details: {
                colorPalette: ["#49538d", "#ece6d4", "#666e9b", "#898eac", "#cfcecc", "#aeb0bd"],
                theme: "Retro Futurism",
                process: "Two-ink feel: blue + warm off-white; explosive radial streaks + tiny figure for scale contrast; large serif headline like a manifesto poster."
            }
        },
        {
            id: "d-05",
            title: "Me and Who on Mars",
            category: "Sci-Fi",
            description: "A lonely journey across the red planet.",
            image: "/Me and Who on Mars.webp",
            details: {
                colorPalette: ["#eaeaeb", "#232323", "#0b0b0b", "#434343", "#727273", "#ababac"],
                theme: "Martian Solitude",
                process: "Monochrome frame with manga/anime still inside a border system; lots of side typography blocks (Japanese + metadata) like a ticket/postcard layout."
            }
        },
        {
            id: "d-06",
            title: "Surfer Girl",
            category: "Lifestyle",
            description: "Vaporwave aesthetics for the digital wave.",
            image: "/Surfer Girl.webp",
            details: {
                colorPalette: ["#7c796c", "#c6a2e2", "#efe8d5", "#a49a92", "#cac6b1", "#181516"],
                theme: "Vaporwave / Y2K",
                process: "B/W action photo with strong grain; lavender field + sharp cream starbursts; small 'label' elements to sell a zine/print aesthetic."
            }
        },
        {
            id: "d-07",
            title: "The Bandit",
            category: "Character",
            description: "Wanted dead or alive.",
            image: "/The Bandit.webp",
            details: {
                colorPalette: ["#c8bdc3", "#361524", "#5960a3", "#a08b97", "#705362", "#f8f6f8"],
                theme: "Western Grunge",
                process: "Duotone halftone portrait; splatter overlays; big condensed type + date/info blocks—classic gig-poster language."
            }
        },
        {
            id: "d-08",
            title: "Void Club",
            category: "Event",
            description: "Enter the unknown.",
            image: "/Void Club.webp",
            details: {
                colorPalette: ["#ef5a5f", "#ed5256", "#f06367", "#59565b", "#f2ebe1", "#cda4a2"],
                theme: "Industrial Techno",
                process: "Minimal layout: flat red paper texture, small stacked type, falling cut-out figure; logo as a secondary accent."
            }
        }
    ] as DesignProject[]
};
