import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';


const items = [
    {
        title: 'what is react?',
        content: 'react is a front end javascript library'
    },
    {
        title: 'why use react?',
        content: 'react is a favorite js library among engineers'
    },
    {
        title: 'why do we use react',
        content: 'you use react by creating components'
    },
];


export default () => {

    const getIndexFromAccordion = () => {

    }
    return (
        <div>
            <Search/>
        </div>
    );
};
