import React from 'react';
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

export const GAMES = {
    '/games/bible-books-order': {
        title: 'Christian and Reformed - Games: Bible Books Order Challenge',
        name: 'Bible Books Order Challenge'
    },
    '/games/catechism-boys-girls': {
        title: 'Christian and Reformed - Games: Catechism for Boys and Girls Training',
        name: 'Catechism for Boys and Girls Training'
    },
    '/games/catechism-westminster-shorter': {
        title: 'Christian and Reformed - Games: Westminster Shorter Catechism Training',
        name: 'Westminster Shorter Catechism Training'
    },
    '/games/order-salvation': {
        title: 'Christian and Reformed - Games: Order the Order of Salvation',
        name: 'Order the Order of Salvation'
    }
};

export const CONFESSIONS_CREEDS = {
    '/confessions-creeds-explorer/apostles-creed': {
        title: 'The Apostle\'s Creed - Explorer',
        name: 'Apostle\'s Creed (140)',
        data: APOSTLES_CREED
    },
    '/confessions-creeds-explorer/nicene-creed': {
        title: 'The Nicene Creed - Explorer',
        name: 'Nicene Creed (325)',
        data: NICENE_CREED
    },
    '/confessions-creeds-explorer/chalcedonian-creed': {
        title: 'The Chalcedonian Creed - Explorer',
        name: 'Chalcedonian Creed (451)',
        data: CHALCEDONIAN_CREED
    },
    '/confessions-creeds-explorer/athanasian-creed': {
        title: 'The Athanasian Creed - Explorer',
        name: 'Athanasian Creed (late 400s to early 500s)',
        data: ATHANASIAN_CREED
    },
    '/confessions-creeds-explorer/nicene-constantinopolitan-creed': {
        title: 'The Nicene-Constantinopolitan Creed - Explorer',
        name: 'Nicene-Constantinopolitan Creed (381)',
        data: NICENE_CONSTANTINOPOLITAN_CREED
    },
    '/confessions-creeds-explorer/thirty-nine-articles': {
        title: 'The Thirty-Nine Articles - Explorer',
        name: 'Thirty-Nine Articles (1563)',
        data: THIRTY_NINE_ARTICLES
    },
    '/confessions-creeds-explorer/westminster': {
        title: 'Westminster Confession of Faith - Explorer',
        name: 'Westminster Confession of Faith (1646)',
        data: WESTMINSTER
    },
    '/confessions-creeds-explorer/london-baptist': {
        title: '1689 London Baptist Confession of Faith - Explorer',
        name: 'London Baptist Confession of Faith (1689)',
        data: LONDON_BAPTIST
    }
};

export const CORRECT_RESPONSES = ['Yeah!', 'Awesome!', 'Hooray!', 'You got it!', 'Way to go!', 'Excellent!', 'Magnificent!', 'Spectacular!', 'Marvelous!'];

export const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
