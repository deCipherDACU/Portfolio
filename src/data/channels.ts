import video1 from '../assets/videos/1.webm';
import video2 from '../assets/videos/2.webm';
import video3 from '../assets/videos/3.webm';
import video4 from '../assets/videos/4.webm';
import video5 from '../assets/videos/5.webm';
import video6 from '../assets/videos/6.webm';
import video7 from '../assets/videos/7.webm';
// video8 is missing, reusing video1 as placeholder
import video9 from '../assets/videos/9.webm';
import video10 from '../assets/videos/10.webm';
import video11 from '../assets/videos/11.webm';

import type { Channel } from './types';

export const channels: Channel[] = [
    {
        id: 'ch-01',
        number: '01',
        name: 'Showcase 01',
        accentColor: 'from-purple-500 to-pink-500',
        description: 'Visual showcase featuring 1.webm',
        identMedia: video1,
        mediaType: 'video',
        icon: 'Play',
    },
    {
        id: 'ch-02',
        number: '02',
        name: 'Showcase 02',
        accentColor: 'from-orange-500 to-red-500',
        description: 'Visual showcase featuring 2.webm',
        identMedia: video2,
        mediaType: 'video',
        icon: 'Play',
    },
    {
        id: 'ch-03',
        number: '03',
        name: 'Showcase 03',
        accentColor: 'from-blue-500 to-cyan-500',
        description: 'Visual showcase featuring 3.webm',
        identMedia: video3,
        mediaType: 'video',
        icon: 'Play',
    },
    {
        id: 'ch-04',
        number: '04',
        name: 'Showcase 04',
        accentColor: 'from-green-500 to-teal-500',
        description: 'Visual showcase featuring 4.webm',
        identMedia: video4,
        mediaType: 'video',
        icon: 'Play',
    },
    {
        id: 'ch-05',
        number: '05',
        name: 'Showcase 05',
        accentColor: 'from-yellow-500 to-amber-500',
        description: 'Visual showcase featuring 5.webm',
        identMedia: video5,
        mediaType: 'video',
        icon: 'Play',
    },
    {
        id: 'ch-06',
        number: '06',
        name: 'Showcase 06',
        accentColor: 'from-indigo-500 to-violet-500',
        description: 'Visual showcase featuring 6.webm',
        identMedia: video6,
        mediaType: 'video',
        icon: 'Play',
    },
    {
        id: 'ch-07',
        number: '07',
        name: 'Showcase 07',
        accentColor: 'from-pink-500 to-rose-500',
        description: 'Visual showcase featuring 7.webm',
        identMedia: video7,
        mediaType: 'video',
        icon: 'Play',
    },
    {
        id: 'ch-08',
        number: '08',
        name: 'Showcase 08',
        accentColor: 'from-red-500 to-orange-500',
        description: 'Visual showcase featuring 7.webm (Reused)',
        identMedia: video7, // Reusing 7 as 8 is missing
        mediaType: 'video',
        icon: 'Play',
    },
    {
        id: 'ch-09',
        number: '09',
        name: 'Showcase 09',
        accentColor: 'from-cyan-500 to-blue-500',
        description: 'Visual showcase featuring 9.webm',
        identMedia: video9,
        mediaType: 'video',
        icon: 'Play',
    },
    {
        id: 'ch-10',
        number: '10',
        name: 'Showcase 10',
        accentColor: 'from-teal-500 to-green-500',
        description: 'Visual showcase featuring 10.webm',
        identMedia: video10,
        mediaType: 'video',
        icon: 'Play',
    },
    {
        id: 'ch-11',
        number: '11',
        name: 'Showcase 11',
        accentColor: 'from-amber-500 to-yellow-500',
        description: 'Visual showcase featuring 11.webm',
        identMedia: video11,
        mediaType: 'video',
        icon: 'Play',
    },
];
