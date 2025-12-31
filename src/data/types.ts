export interface Project {
    id: string;
    title: string;
    brief: string;
    typeTags: string[];
    softwareTags: string[];
    aiToolTags: string[];
    duration: string;
    year: number;
    thumbUrl: string;
    videoUrl?: string;
    caseStudyUrl?: string;
    role: string;
    deliverables: string[];
    notes?: string;
}

export interface Channel {
    id: string;
    number: string;
    name: string;
    accentColor: string;
    description: string;
    identMedia: string; // Video URL or animated placeholder
    mediaType?: 'video' | 'image';
    icon: string;
    projects?: Project[];
}

export interface Tool {
    id: string;
    name: string;
    logoUrl: string;
    description: string;
    workflow: string;
    useCases: string[];
    exampleThumbs: string[];
    links: { label: string; url: string }[];
}
