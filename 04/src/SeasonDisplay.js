import React from 'react';


const seasonConfig = {
    summer: {
        text: 'lets hit the beach',
        iconName: 'sun'
    },
    winter: {
        text: 'brrr its chilly',
        iconName: 'snowflake'
    }
}

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat ? 'summer' : 'winter';
    } else {
        return lat ? 'winter' : 'summer';
    }
};


const SeasonDisplay = (props) => {

    const season = getSeason(props.lat, new Date().getMonth());
    const {text, iconName} = seasonConfig[season];
    // const text = season === 'winter' ? seasonConfig.winter.text : seasonConfig.summer.text;
    // const iconName = season === 'winter' ? seasonConfig.winter.iconName : seasonConfig.winter.iconName


    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`}/>
            <h1>{text}</h1>
            <i className={`icon-right massive ${iconName} icon`}/>
        </div>
    );
};
export default SeasonDisplay;