import React from 'react';
import { keyBy } from 'lodash';
import PlayCircleFilledIcon from 'material-ui-icons/PlayCircleFilled';
import DirectionsIcon from 'material-ui-icons/Directions';
import LibraryBooksIcon from 'material-ui-icons/LibraryBooks';

import { LONDON_BAPTIST } from 'app/constants/confession-1689.js';
import { WESTMINSTER } from 'app/constants/confession-westminster.js';
import {
    APOSTLES_CREED,
    ATHANASIAN_CREED,
    CHALCEDONIAN_CREED,
    NICENE_CREED,
    NICENE_CONSTANTINOPOLITAN_CREED,
    THIRTY_NINE_ARTICLES
} from 'app/constants/creeds';
import VideoAudio from 'app/components/VideoAudio';
import ChurchFinder from 'app/components/ChurchFinder';
import ConfessionsCreeds from 'app/components/ConfessionsCreeds';
import Games from 'app/components/Games';

export const DEFAULT_TITLE = 'Christian and Reformed: Technology Serving Historic Truth';

export const APP_LIST = [
    {
        windowTitle: 'Video/Audio Mini-Courses: Build a Biblical Worldview',
        title: 'Video/Audio Mini-Courses',
        description: 'Build a Biblical Worldview',
        url: '/video-audio',
        headerBackground: '#EF5350',
        background: '#FFCDD2',
        icon: <PlayCircleFilledIcon />,
        component: VideoAudio
    },
    {
        windowTitle: 'Reformed Church Finder: Find solid Reformed churches across the world',
        title: 'Reformed Church Finder',
        description: 'Find solid Reformed churches across the world',
        url: '/reformed-church-finder',
        headerBackground: '#43A047',
        background: '#455A64',
        icon: <DirectionsIcon />,
        component: ChurchFinder
    },
    {
        windowTitle: 'Creeds and Confessions Explorer: Tools to help you learn and study the historic creeds and confessions',
        title: 'Creeds and Confessions Explorer',
        description: 'Tools to help you learn and study the historic creeds and confessions',
        url: '/creeds-confessions-explorer',
        headerBackground: '#0097A7',
        background: '#B2EBF2',
        icon: <LibraryBooksIcon />,
        component: ConfessionsCreeds
    },
    {
        windowTitle: 'Reformed Games: Fun for children, a challenge for adults',
        title: 'Reformed Games',
        description: 'Fun for children, a challenge for adults',
        url: '/games',
        headerBackground: '#EF6C00',
        background: '#FFF3E0',
        icon: <i className="fa fa-puzzle-piece" aria-hidden="true" />,
        component: Games
    }
];

export const CONFESSIONS_CREEDS = [
    {
        url: '/creeds-confessions-explorer/apostles-creed',
        windowTitle: 'The Apostle\'s Creed - Creeds and Confessions Explorer',
        name: 'Apostle\'s Creed (140)',
        data: APOSTLES_CREED
    },
    {
        url: '/creeds-confessions-explorer/nicene-creed',
        windowTitle: 'The Nicene Creed - Creeds and Confessions Explorer',
        name: 'Nicene Creed (325)',
        data: NICENE_CREED
    },
    {
        url: '/creeds-confessions-explorer/chalcedonian-creed',
        windowTitle: 'The Chalcedonian Creed - Creeds and Confessions Explorer',
        name: 'Chalcedonian Creed (451)',
        data: CHALCEDONIAN_CREED
    },
    {
        url: '/creeds-confessions-explorer/athanasian-creed',
        windowTitle: 'The Athanasian Creed - Creeds and Confessions Explorer',
        name: 'Athanasian Creed (late 400s to early 500s)',
        data: ATHANASIAN_CREED
    },
    {
        url: '/creeds-confessions-explorer/nicene-constantinopolitan-creed',
        windowTitle: 'The Nicene-Constantinopolitan Creed - Creeds and Confessions Explorer',
        name: 'Nicene-Constantinopolitan Creed (381)',
        data: NICENE_CONSTANTINOPOLITAN_CREED
    },
    {
        url: '/creeds-confessions-explorer/thirty-nine-articles',
        windowTitle: 'The Thirty-Nine Articles - Creeds and Confessions Explorer',
        name: 'Thirty-Nine Articles (1563)',
        data: THIRTY_NINE_ARTICLES
    },
    {
        url: '/creeds-confessions-explorer/westminster',
        windowTitle: 'Westminster Confession of Faith - Creeds and Confessions Explorer',
        name: 'Westminster Confession of Faith (1646)',
        data: WESTMINSTER
    },
    {
        url: '/creeds-confessions-explorer/london-baptist',
        windowTitle: '1689 London Baptist Confession of Faith - Creeds and Confessions Explorer',
        name: 'London Baptist Confession of Faith (1689)',
        data: LONDON_BAPTIST
    }

];

export const ROUTES = {
    ...keyBy(APP_LIST, 'url'),
    ...keyBy(CONFESSIONS_CREEDS, 'url')
};
