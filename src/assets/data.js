import p1 from './images/project-1.png';
import p2 from './images/project-2.png';
import p3 from './images/project-3.png';
import p4 from './images/project-4.png';
import p5 from './images/project-5.png';
import p6 from './images/project-6.png';

export const filters = [
    {
        name: 'All',
        id: 'all',
    },
    {
        name: 'Dashboard',
        id: 'dashboard',
    },
    {
        name: 'Mobile App',
        id: 'mobile-app',
    },
    {
        name: 'Website',
        id: 'website',
    },
];

export const projects = [
    {
        name: 'Join the Innovative Car Wash Service',
        image: p1,
        tags: ['dashboard', 'mobile-app'],
    },
    {
        name: 'Your Luggage is in Safe Hands',
        image: p2,
        tags: ['dashboard', 'website'],
    },
    {
        name: 'The Art of Hiring',
        image: p3,
        tags: ['mobile-app'],
    },
    {
        name: 'We Are Solving Global Problems',
        image: p4,
        tags: ['mobile-app'],
    },
    {
        name: 'The English Tea Ceremony',
        image: p5,
        tags: ['website', 'dashboard'],
    },
    {
        name: 'Saving Photo Memories',
        image: p6,
        tags: ['website'],
    },
];

export const achievements = [
    {
        id: 1,
        year: 80,
        description: 'SUCCESSFULLY<br />COMPLETED<br />PROJECTS',
    },
    {
        id: 2,
        year: 15,
        description: 'YEARS OF<br />EXPERIENCE',
    },
    {
        id: 3,
        year: 25,
        description: 'TECHNOLOGIES',
    },
    {
        id: 4,
        year: 70,
        description: 'COMMUNITY<br />POSTS',
    },
];
