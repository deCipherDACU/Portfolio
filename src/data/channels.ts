import video1 from '../assets/videos/1.mp4';
import video2 from '../assets/videos/2.mp4';
import video4 from '../assets/videos/4.mp4';
import video5 from '../assets/videos/5.mp4';
import video6 from '../assets/videos/6.mp4';
import video7 from '../assets/videos/7.mp4';
import video9 from '../assets/videos/9.mp4';
import video10 from '../assets/videos/10.mp4';
import video11 from '../assets/videos/11.mp4';
import video13 from '../assets/videos/13.mp4';
import type { Channel } from './types';

export const channels: Channel[] = [
    {
        id: 'ch-01',
        number: '01',
        name: 'Showcase 01',
        accentColor: 'from-purple-500 to-pink-500',
        description: 'Visual showcase featuring 1.mp4',
        identMedia: video1,
        icon: 'Play',
    },
    {
        id: 'ch-02',
        number: '02',
        name: 'Showcase 02',
        accentColor: 'from-orange-500 to-red-500',
        description: 'Visual showcase featuring 2.mp4',
        identMedia: video2,
        icon: 'Play',
    },
    {
        id: 'ch-03',
        number: '03',
        name: 'Showcase 03',
        accentColor: 'from-blue-500 to-cyan-500',
        description: 'Visual showcase featuring 4.mp4',
        identMedia: video4,
        icon: 'Play',
    },
    {
        id: 'ch-04',
        number: '04',
        name: 'Showcase 04',
        accentColor: 'from-green-500 to-teal-500',
        description: 'Visual showcase featuring 5(1).mp4',
        identMedia: video5,
        icon: 'Play',
    },
    {
        id: 'ch-05',
        number: '05',
        name: 'Showcase 05',
        accentColor: 'from-yellow-500 to-amber-500',
        description: 'Visual showcase featuring 5(2).mp4',
        identMedia: video5, // Reusing 5.mp4 as fallback/replacement
        icon: 'Play',
    },
    {
        id: 'ch-06',
        number: '06',
        name: 'Showcase 06',
        accentColor: 'from-indigo-500 to-violet-500',
        description: 'Visual showcase featuring 5.mp4',
        identMedia: video5,
        icon: 'Play',
    },
    {
        id: 'ch-07',
        number: '07',
        name: 'Showcase 07',
        accentColor: 'from-pink-500 to-rose-500',
        description: 'Visual showcase featuring 6.mp4',
        identMedia: video6,
        icon: 'Play',
    },
    {
        id: 'ch-08',
        number: '08',
        name: 'Showcase 08',
        accentColor: 'from-red-500 to-orange-500',
        description: 'Visual showcase featuring 7.mp4',
        identMedia: video7,
        icon: 'Play',
    },
    {
        id: 'ch-09',
        number: '09',
        name: 'Showcase 09',
        accentColor: 'from-cyan-500 to-blue-500',
        description: 'Visual showcase featuring 9.mp4',
        identMedia: video9,
        icon: 'Play',
    },
    {
        id: 'ch-10',
        number: '10',
        name: 'Showcase 10',
        accentColor: 'from-teal-500 to-green-500',
        description: 'Visual showcase featuring 10.mp4',
        identMedia: video10,
        icon: 'Play',
    },
    {
        id: 'ch-11',
        number: '11',
        name: 'Showcase 11',
        accentColor: 'from-amber-500 to-yellow-500',
        description: 'Visual showcase featuring 11.mp4',
        identMedia: video11,
        icon: 'Play',
    },
    {
        id: 'ch-12',
        number: '12',
        name: 'Showcase 12',
        accentColor: 'from-violet-500 to-purple-500',
        description: 'Visual showcase featuring 13.mp4',
        identMedia: video13,
        icon: 'Play',
    },
];
