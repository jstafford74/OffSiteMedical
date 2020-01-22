import React from 'react';
import Plx from "react-plx";

const textData = [
    {
        start: '.StickyText-trigger',
        duration: '30vh',
        properties: [
            {
                startValue: 0,
                endValue: -50,
                unit: 'vh',
                property: 'translateY',
            },
            {
                startValue: 0,
                endValue: 1,
                property: 'opacity',
            },
        ],
    },
    {
        start: '.StickyText-trigger',
        startOffset: '60vh',
        duration: '30vh',
        properties: [
            {
                startValue: -50,
                endValue: -100,
                unit: 'vh',
                property: 'translateY',
            },
            {
                startValue: 1,
                endValue: 0,
                property: 'opacity',
            },
        ],
    },
];

export default class StickyText extends React.Component {
    render() {
        return (
            <Plx
                className='StickyText'
                parallaxData={textData}
            >
                <p className="display-4">Uses Modern Imaging and Analytics to Accurately Identify Elements on the Human Body</p>
            </Plx>
        );
    }
}