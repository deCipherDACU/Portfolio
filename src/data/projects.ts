import type { Project } from './types';

export const projects: Record<string, Project[]> = {
    'ch-01': [
        {
            id: 'p-01-01',
            title: 'Neural Dreams',
            brief: 'A journey into the subconscious mind using generative adversarial networks.',
            typeTags: ['Experimental', 'Short Film'],
            softwareTags: ['After Effects', 'Premiere'],
            aiToolTags: ['Midjourney', 'Topaz Video AI'],
            duration: '02:15',
            year: 2024,
            thumbUrl: 'https://placehold.co/600x400/purple/white?text=Neural+Dreams',
            role: 'Director & Editor',
            deliverables: ['Concept Video', 'Social cuts'],
            notes: 'Explored the latent space of dreams.'
        },
        {
            id: 'p-01-02',
            title: 'Neon Tokyo',
            brief: 'Cyberpunk aesthetic exploration with AI-enhanced environmental design.',
            typeTags: ['Music Video', 'Visualizer'],
            softwareTags: ['Blender', 'DaVinci Resolve'],
            aiToolTags: ['Stable Diffusion', 'ControlNet'],
            duration: '03:45',
            year: 2023,
            thumbUrl: 'https://placehold.co/600x400/cyan/black?text=Neon+Tokyo',
            role: 'VFX Artist',
            deliverables: ['Music Video', 'Live Visuals']
        }
    ],
    'ch-02': [
        {
            id: 'p-02-01',
            title: 'Kinetic Typography',
            brief: 'Dynamic text animation synced to high-tempo rhythmic beats.',
            typeTags: ['Motion Graphics', 'Branding'],
            softwareTags: ['After Effects', 'Illustrator'],
            aiToolTags: [],
            duration: '00:30',
            year: 2024,
            thumbUrl: 'https://placehold.co/600x400/orange/white?text=Kinetic+Type',
            role: 'Motion Designer',
            deliverables: ['Brand Reel', 'Stings']
        }
    ],
    'ch-03': [
        {
            id: 'p-03-01',
            title: 'Deep Blue',
            brief: 'Underwater documentary style footage generated and enhanced with AI.',
            typeTags: ['Documentary', 'Nature'],
            softwareTags: ['Premiere'],
            aiToolTags: ['Runway Gen-2', 'Topaz Video AI'],
            duration: '05:00',
            year: 2024,
            thumbUrl: 'https://placehold.co/600x400/blue/white?text=Deep+Blue',
            role: 'Editor',
            deliverables: ['Short Film']
        }
    ],
    'ch-04': [
        {
            id: 'p-04-01',
            title: 'Forest Whispers',
            brief: 'Ambient nature visuals designed for relaxation and meditation apps.',
            typeTags: ['Ambient', 'App Content'],
            softwareTags: ['Unreal Engine'],
            aiToolTags: ['Midjourney', 'Pika'],
            duration: '10:00',
            year: 2023,
            thumbUrl: 'https://placehold.co/600x400/green/white?text=Forest',
            role: '3D Artist',
            deliverables: ['Looping Backgrounds']
        }
    ],
    'ch-05': [
        {
            id: 'p-05-01',
            title: 'Solar Flare',
            brief: 'High-energy sports intro with stylized particle effects.',
            typeTags: ['Broadcast', 'Intro'],
            softwareTags: ['Cinema 4D', 'Redshift'],
            aiToolTags: [],
            duration: '00:15',
            year: 2024,
            thumbUrl: 'https://placehold.co/600x400/yellow/black?text=Solar+Flare',
            role: 'Motion Designer',
            deliverables: ['Broadcast Package']
        }
    ],
    'ch-06': [
        {
            id: 'p-06-01',
            title: 'Void Shift',
            brief: 'Abstract 3D structures morphing in sync with experimental audio.',
            typeTags: ['Abstract', '3D'],
            softwareTags: ['Houdini', 'Nuke'],
            aiToolTags: [],
            duration: '01:00',
            year: 2024,
            thumbUrl: 'https://placehold.co/600x400/indigo/white?text=Void+Shift',
            role: 'Technical Director',
            deliverables: ['Simulations']
        }
    ],
    'ch-07': [
        // Tool Lab usually doesn't need projects, but adding one just in case
        {
            id: 'p-07-01',
            title: 'Workflow Demo',
            brief: 'Demonstration of the AI toolchain used in production.',
            typeTags: ['Tutorial'],
            softwareTags: ['OBS'],
            aiToolTags: ['Antigravity', 'ChatGPT'],
            duration: '12:00',
            year: 2024,
            thumbUrl: 'https://placehold.co/600x400/pink/white?text=Workflow',
            role: 'Instructor',
            deliverables: ['Video Tutorial']
        }
    ],
    'ch-08': [
        {
            id: 'p-08-01',
            title: 'Red Heat',
            brief: 'Stylized fashion film with heavy color grading and AI overlays.',
            typeTags: ['Fashion', 'Commercial'],
            softwareTags: ['DaVinci Resolve'],
            aiToolTags: ['Runway Gen-1'],
            duration: '01:30',
            year: 2024,
            thumbUrl: 'https://placehold.co/600x400/red/white?text=Red+Heat',
            role: 'Colorist',
            deliverables: ['Campaign Video']
        }
    ],
    'ch-09': [
        {
            id: 'p-09-01',
            title: 'Interface 2099',
            brief: 'Futuristic UI design for a sci-fi feature film.',
            typeTags: ['FUI', 'UI/UX'],
            softwareTags: ['Illustrator', 'After Effects'],
            aiToolTags: [],
            duration: '02:00',
            year: 2023,
            thumbUrl: 'https://placehold.co/600x400/cyan/black?text=FUI+2099',
            role: 'UI Designer',
            deliverables: ['Screen Graphics']
        }
    ],
    'ch-10': [
        {
            id: 'p-10-01',
            title: 'Eco Future',
            brief: 'Visualization of sustainable cities using architectural AI models.',
            typeTags: ['Archviz', 'Concept'],
            softwareTags: ['Twinmotion'],
            aiToolTags: ['Veras'],
            duration: '03:00',
            year: 2024,
            thumbUrl: 'https://placehold.co/600x400/teal/white?text=Eco+Future',
            role: 'Viz Artist',
            deliverables: ['Renders', 'Walkthrough']
        }
    ],
    'ch-11': [
        {
            id: 'p-11-01',
            title: 'Amber Glow',
            brief: 'Warm, nostalgic video essay about the golden hour.',
            typeTags: ['Video Essay'],
            softwareTags: ['Final Cut Pro'],
            aiToolTags: [],
            duration: '08:45',
            year: 2022,
            thumbUrl: 'https://placehold.co/600x400/amber/black?text=Amber+Glow',
            role: 'Creator',
            deliverables: ['YouTube Video']
        }
    ],
    'ch-12': [],
};
