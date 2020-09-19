import './SeasonDisplay.css';
import React from 'react';
import Snowfall from 'react-snowfall';
import FallingLeaves from './FallingLeaves';

const seasonConfig = {
  spring: {
    title:"It's Spring",
    text: "Bright yellow flowers and buzzing bees!"
  },
  fall: {
    title:"It's Fall",
    text: "Life starts all over!"
  },
  autumn: {
    title:"It's Autumn",
    text: "Life starts all over!"
  },

  summer: {
    title:"It's Summer",
    text: "Let's hit the beach!"
  },

  winter: {
    title:"It's Winter",
    text: 'So cold and snowy'
  }
};

const getSeason = (lat, month) => {
  
  if (month == 11 || month < 3) {
    return lat > 0 ? 'winter': 'summer'
  } 
  if (month > 2 && month < 6) {
    return lat > 0 ? 'spring' : 'autumn';
  } 
  if (month > 5 && month < 8) {
    return lat > 0 ? 'summer' : 'winter';
  } 
  if (month > 7 && month < 11) {
    return lat > 0 ? 'fall' : 'spring';
  } 
};


const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { title, text } = seasonConfig[season];


  return (
    <div>
        <div>{season === 'winter' ? <Snowfall snowflakeCount={400} color="white" />: ''}</div> 
        <div>{season === 'autumn' || 'fall' ? <FallingLeaves/> : ''}</div> 
         <h1>{title}</h1>
         <p>{text}</p>
        <div className={`season-display ${season}`} />
              
      
    </div>
  );
};

export default SeasonDisplay;
