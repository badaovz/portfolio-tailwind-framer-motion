import p1 from './images/project-1.png';
import p2 from './images/project-2.png';
import p3 from './images/project-3.png';
import p4 from './images/project-4.png';
import p5 from './images/project-5.png';
import p6 from './images/project-6.png';
import p1pre from './images/project-1.jpg';
import p2pre from './images/project-2.jpg';
import p3pre from './images/project-3.jpg';
import p4pre from './images/project-4.jpg';
import p5pre from './images/project-5.jpg';
import p6pre from './images/project-6.jpg';

import sk1 from './images/sk-1.png';
import sk2 from './images/sk-2.png';
import sk3 from './images/sk-3.png';
import sk4 from './images/sk-4.png';
import sk5 from './images/sk-5.png';
import sk6 from './images/sk-6.png';
import sk7 from './images/sk-7.png';
import sk8 from './images/sk-8.png';

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
        name: 'Furniture Website',
        image: p1,
        imagePre: p1pre,
        tags: ['dashboard', 'mobile-app'],
        link: 'https://furniture-shop-vite.vercel.app/',
    },
    {
        name: 'Admin dashboard',
        image: p2,
        imagePre: p2pre,
        tags: ['dashboard', 'website'],
        link: 'https://github.com/badaovz/admin-react-jwt-mongodb',
    },
    {
        name: 'Chat app',
        image: p3,
        imagePre: p3pre,
        tags: ['mobile-app'],
        link: 'https://github.com/badaovz/chat-app',
    },
    {
        name: 'Tiktok UI',
        image: p4,
        imagePre: p4pre,
        tags: ['mobile-app'],
        link: 'https://github.com/badaovz/tiktok-ui',
    },
    {
        name: 'Portfolio website',
        image: p5,
        imagePre: p5pre,
        tags: ['website', 'dashboard'],
        link: 'https://github.com/badaovz/portfolio-web',
    },
    {
        name: 'Sport website',
        image: p6,
        imagePre: p6pre,
        tags: ['website'],
        link: 'https://github.com/badaovz/DnSport',
    },
];

export const achievements = [
    {
        id: 1,
        count: 30,
        text: 'SUCCESSFULLY<br />COMPLETED<br />PROJECTS',
    },
    {
        id: 2,
        count: 5,
        text: 'YEARS OF<br />EXPERIENCE',
    },
    {
        id: 3,
        count: 15,
        text: 'TECHNOLOGIES',
    },
    {
        id: 4,
        count: 20,
        text: 'COMMUNITY<br />POSTS',
    },
];

export const navs = [
    {
        id: 'about',
        title: 'About',
    },
    {
        id: 'skills',
        title: 'Skills',
    },
    {
        id: 'work',
        title: 'Work',
    },
    {
        id: 'contact',
        title: 'Contact',
    },
];

export const icons = [
    {
        id: 1,
        icon: sk1,
    },
    {
        id: 2,
        icon: sk2,
    },
    {
        id: 3,
        icon: sk3,
    },
    {
        id: 4,
        icon: sk4,
    },
    {
        id: 5,
        icon: sk5,
    },
    {
        id: 6,
        icon: sk6,
    },
    {
        id: 7,
        icon: sk7,
    },
    {
        id: 8,
        icon: sk8,
    },
];

export const skills = [
    {
        id: 1,
        title: 'UI/UX DESIGN',
        list: ['Prototype', 'Wireframe', 'User Experience', 'Prototype'],
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it",
    },
    {
        id: 2,
        title: 'GRAPHIC DESIGNING',
        list: ['Prototype', 'Wireframe', 'User Experience', 'Prototype'],
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it",
    },
    {
        id: 3,
        title: 'FRONTEND DEVELOPMENT',
        list: ['Prototype', 'Wireframe', 'User Experience', 'Prototype'],
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it",
    },
];

export const slices = [
    {
        id: 1,
        img: 'https://i.pravatar.cc/300',
        name: 'John Doy',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
    {
        id: 2,
        img: 'https://i.pravatar.cc/300',
        name: 'Jecky Chan',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
    {
        id: 3,
        img: 'https://i.pravatar.cc/300',
        name: 'Jana Amy',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
];
