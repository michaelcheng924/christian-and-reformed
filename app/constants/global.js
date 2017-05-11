import React from 'react';
import PlayCircleFilledIcon from 'material-ui-icons/PlayCircleFilled';
import DirectionsIcon from 'material-ui-icons/Directions';
import LibraryBooksIcon from 'material-ui-icons/LibraryBooks';
import QuestionAnswerIcon from 'material-ui-icons/QuestionAnswer';

export const APP_LIST = [
    {
        title: 'Reformed Video and Audio',
        description: 'Watch and listen to solid teaching from a Reformed theological perspective.',
        url: '/reformed-video-audio',
        background: '#F44336',
        icon: <PlayCircleFilledIcon />,
        underConstruction: true
    },
    {
        title: 'Reformed Church Finder',
        description: 'Easily find Reformed Baptist churches using Google Maps.',
        url: '/reformed-church-finder',
        background: '#43A047',
        icon: <DirectionsIcon />
    },
    {
        title: 'Confessions and Creeds',
        description: 'Tools to help you read and compare the historic confessions and creeds more effectively.',
        url: '/confessions-creeds',
        background: '#0097A7',
        icon: <LibraryBooksIcon />
    },
    {
        title: 'Catechism Practice',
        description: 'An app to help you and your children learn the catechism faster.',
        url: '/catechism-practice',
        background: '#BA68C8',
        icon: <QuestionAnswerIcon />
    },

];

export const CORRECT_RESPONSES = ['Yeah!', 'Awesome!', 'Hooray!', 'You got it!', 'Way to go!', 'Excellent!', 'Magnificent!', 'Spectacular!', 'Marvelous!'];
