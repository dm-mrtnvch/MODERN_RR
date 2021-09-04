import React, {useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';


// const items = [
//     {
//         title: 'what is react?',
//         content: 'react is a front end javascript library'
//     },
//     {
//         title: 'why use react?',
//         content: 'react is a favorite js library among engineers'
//     },
//     {
//         title: 'why do we use react',
//         content: 'you use react by creating components'
//     },
// ];

const options = [
    {
        label: 'The Color Red',
        value: 'red'
    },
    {
        label: 'The Color Green',
        value: 'green'
    },
    {
        label: 'A Shade of Blue',
        value: 'blue'
    },
]


export default () => {

    const [selected, setSelected] = useState(options[0])


    return (
        <div>
            <Dropdown options={options} selected={selected} onSelectedChange={setSelected}/>
        </div>
    );
};
