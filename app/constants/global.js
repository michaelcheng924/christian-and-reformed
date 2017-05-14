import React from 'react';
import PlayCircleFilledIcon from 'material-ui-icons/PlayCircleFilled';
import DirectionsIcon from 'material-ui-icons/Directions';
import LibraryBooksIcon from 'material-ui-icons/LibraryBooks';
import QuestionAnswerIcon from 'material-ui-icons/QuestionAnswer';

export const APP_LIST = [
    {
        title: 'Video/Audio Mini-courses',
        description: 'Video/audio on a variety of topics, with questions to test your understanding',
        url: '/video-audio',
        background: '#EF5350',
        icon: <PlayCircleFilledIcon />
    },
    {
        title: 'Reformed Church Finder',
        description: 'Find solid Reformed churches using Google Maps',
        url: '/reformed-church-finder',
        background: '#43A047',
        icon: <DirectionsIcon />
    },
    {
        title: 'Confessions/Creeds Explorer',
        description: 'Read and study historic confessions and creeds with easy display of Scripture references',
        url: '/confessions-creeds',
        background: '#0097A7',
        icon: <LibraryBooksIcon />
    },
    {
        title: 'Catechism Practice',
        description: 'An app to help you learn the catechism faster',
        url: '/catechism-training',
        background: '#BA68C8',
        icon: <QuestionAnswerIcon />
    },

];

export const CORRECT_RESPONSES = ['Yeah!', 'Awesome!', 'Hooray!', 'You got it!', 'Way to go!', 'Excellent!', 'Magnificent!', 'Spectacular!', 'Marvelous!'];

export const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
