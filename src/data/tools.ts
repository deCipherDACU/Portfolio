import type { Tool } from './types';

export const tools: Tool[] = [
    {
        id: 't-01',
        name: 'Midjourney',
        logoUrl: 'https://placehold.co/100x100/blue/white?text=MJ',
        description: 'An advanced AI image generation tool known for its artistic quality and high-fidelity results.',
        workflow: 'I use Midjourney for concept art, storyboarding, and texture generation for 3D environments.',
        useCases: ['Concept Art', 'Backgrounds', 'Reference'],
        exampleThumbs: [
            'https://placehold.co/300x200/blue/white?text=Exam+1',
            'https://placehold.co/300x200/blue/white?text=Exam+2',
            'https://placehold.co/300x200/blue/white?text=Exam+3',
        ],
        links: [
            { label: 'Official Site', url: 'https://midjourney.com' },
            { label: 'My Prompt Guide', url: '#' },
        ],
    },
    {
        id: 't-02',
        name: 'Runway Gen-2',
        logoUrl: 'https://placehold.co/100x100/black/white?text=RW',
        description: 'A multi-modal AI tool primarily used for video generation and advanced video editing features.',
        workflow: 'Gen-2 is my primary tool for generating cinematic B-roll and extending existing shots.',
        useCases: ['Video Gen', 'Inpainting', 'Coloring'],
        exampleThumbs: [
            'https://placehold.co/300x200/black/white?text=Exam+1',
            'https://placehold.co/300x200/black/white?text=Exam+2',
            'https://placehold.co/300x200/black/white?text=Exam+3',
        ],
        links: [
            { label: 'Official Site', url: 'https://runwayml.com' },
        ],
    },
    {
        id: 't-03',
        name: 'Nano Banana',
        logoUrl: 'https://placehold.co/100x100/yellow/black?text=NB',
        description: 'Experimental suite for rapid prototyping and noise generation.',
        workflow: 'Used for texture synthesis and creating organic noise patterns for 3D shaders.',
        useCases: ['Texture Gen', 'Noise'],
        exampleThumbs: [
            'https://placehold.co/300x200/yellow/black?text=Noise+1',
            'https://placehold.co/300x200/yellow/black?text=Noise+2',
            'https://placehold.co/300x200/yellow/black?text=Noise+3',
        ],
        links: [
            { label: 'GitHub', url: '#' },
        ],
    },
    {
        id: 't-04',
        name: 'Higgsfield',
        logoUrl: 'https://placehold.co/100x100/indigo/white?text=HF',
        description: 'Next-gen video model specialized for complex motion integrity.',
        workflow: 'Primary tool for generating character movement reference and fluid dynamics.',
        useCases: ['Motion Ref', 'Fluid Sim'],
        exampleThumbs: [
            'https://placehold.co/300x200/indigo/white?text=Motion+1',
            'https://placehold.co/300x200/indigo/white?text=Motion+2',
            'https://placehold.co/300x200/indigo/white?text=Motion+3',
        ],
        links: [
            { label: 'Official Site', url: 'https://higgsfield.ai' },
        ],
    },
    {
        id: 't-05',
        name: 'Stable Diffusion',
        logoUrl: 'https://placehold.co/100x100/orange/white?text=SD',
        description: 'Open-source image generation model running locally with ControlNet.',
        workflow: 'The workhorse for precise composition control using depth maps and canny edges.',
        useCases: ['ControlNet', 'Img2Img', 'Inpainting'],
        exampleThumbs: [
            'https://placehold.co/300x200/orange/white?text=CN+Depth',
            'https://placehold.co/300x200/orange/white?text=CN+Canny',
            'https://placehold.co/300x200/orange/white?text=SD+XL',
        ],
        links: [
            { label: 'Stability AI', url: 'https://stability.ai' },
            { label: 'Civitai', url: 'https://civitai.com' },
        ],
    },
    {
        id: 't-06',
        name: 'Sora',
        logoUrl: 'https://placehold.co/100x100/black/white?text=Sora',
        description: 'OpenAI’s text-to-video model capable of highly detailed scenes.',
        workflow: 'Best for establishing shots and photorealistic environments.',
        useCases: ['Establishing Shots', 'Environments'],
        exampleThumbs: [
            'https://placehold.co/300x200/black/white?text=Sora+City',
            'https://placehold.co/300x200/black/white?text=Sora+Nature',
            'https://placehold.co/300x200/black/white?text=Sora+Space',
        ],
        links: [
            { label: 'OpenAI', url: 'https://openai.com/sora' },
        ],
    },
    {
        id: 't-07',
        name: 'Pika',
        logoUrl: 'https://placehold.co/100x100/pink/white?text=Pika',
        description: 'Animation-focused video generation tool with lip-sync capabilities.',
        workflow: 'Used for animating static illustrations and adding lip-sync to characters.',
        useCases: ['Animation', 'Lip Sync'],
        exampleThumbs: [
            'https://placehold.co/300x200/pink/white?text=Anim+1',
            'https://placehold.co/300x200/pink/white?text=Anim+2',
            'https://placehold.co/300x200/pink/white?text=Anim+3',
        ],
        links: [
            { label: 'Pika.art', url: 'https://pika.art' },
        ],
    },
    {
        id: 't-08',
        name: 'Kling',
        logoUrl: 'https://placehold.co/100x100/red/white?text=Kling',
        description: 'High-fidelity video generation model pushing temporal consistency.',
        workflow: 'Experimental usage for long-form temporal coherence tests.',
        useCases: ['Temporal Test', 'Surrealism'],
        exampleThumbs: [
            'https://placehold.co/300x200/red/white?text=Kling+1',
            'https://placehold.co/300x200/red/white?text=Kling+2',
            'https://placehold.co/300x200/red/white?text=Kling+3',
        ],
        links: [
            { label: 'Kling AI', url: '#' },
        ],
    },
    {
        id: 't-09',
        name: 'Veo',
        logoUrl: 'https://placehold.co/100x100/blue/white?text=Veo',
        description: 'Google’s generative video model integrated with Workspace.',
        workflow: 'Rapid storyboarding integration with Google Slides and Docs.',
        useCases: ['Corporate', 'Storyboards'],
        exampleThumbs: [
            'https://placehold.co/300x200/blue/white?text=Veo+1',
            'https://placehold.co/300x200/blue/white?text=Veo+2',
            'https://placehold.co/300x200/blue/white?text=Veo+3',
        ],
        links: [
            { label: 'Google DeepMind', url: '#' },
        ],
    },
    {
        id: 't-10',
        name: 'Topaz Video AI',
        logoUrl: 'https://placehold.co/100x100/gray/white?text=Topaz',
        description: 'Industry standard for video upscaling, interpolation, and stabilization.',
        workflow: 'Final polish step. Upscaling AI generations to 4K and smoothing frame rates.',
        useCases: ['Upscaling', 'Interpolation', 'Denoise'],
        exampleThumbs: [
            'https://placehold.co/300x200/gray/white?text=Before',
            'https://placehold.co/300x200/gray/white?text=After',
            'https://placehold.co/300x200/gray/white?text=UI',
        ],
        links: [
            { label: 'Topaz Labs', url: 'https://www.topazlabs.com' },
        ],
    },
    {
        id: 't-11',
        name: 'DaVinci Resolve',
        logoUrl: 'https://placehold.co/100x100/green/white?text=DVR',
        description: 'Professional color grading and editing software.',
        workflow: 'The finishing room. Color grading, final assembly, and mastering.',
        useCases: ['Color Grading', 'Editing', 'Mastering'],
        exampleThumbs: [
            'https://placehold.co/300x200/green/white?text=Timeline',
            'https://placehold.co/300x200/green/white?text=Color+Page',
            'https://placehold.co/300x200/green/white?text=Fusion',
        ],
        links: [
            { label: 'Blackmagic Design', url: 'https://www.blackmagicdesign.com' },
        ],
    },
    {
        id: 't-12',
        name: 'Antigravity',
        logoUrl: 'https://placehold.co/100x100/purple/white?text=AG',
        description: 'AI-powered project management and automation agent.',
        workflow: 'My co-pilot for coding, organizing tasks, and keeping the creative flow uninterrupted.',
        useCases: ['Project Mgmt', 'Coding', 'Automation'],
        exampleThumbs: [
            'https://placehold.co/300x200/purple/white?text=Dashboard',
            'https://placehold.co/300x200/purple/white?text=Chat',
            'https://placehold.co/300x200/purple/white?text=Plan',
        ],
        links: [
            { label: 'Official Site', url: '#' },
        ],
    },
    {
        id: 't-13',
        name: 'n8n',
        logoUrl: 'https://placehold.co/100x100/red/white?text=n8n',
        description: 'Workflow automation tool for integrating AI and varied services.',
        workflow: 'Connecting APIs, automating social posts, and syncing data between apps.',
        useCases: ['Automation', 'Integrations', 'Workflows'],
        exampleThumbs: [
            'https://placehold.co/300x200/red/white?text=Workflow',
            'https://placehold.co/300x200/red/white?text=Nodes',
            'https://placehold.co/300x200/red/white?text=Logs',
        ],
        links: [
            { label: 'n8n.io', url: 'https://n8n.io' },
        ],
    },
];
