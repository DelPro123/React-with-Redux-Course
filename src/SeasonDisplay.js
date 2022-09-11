//Determining season
import React from "react";

const seasonConfig={
    summer:{
        text:"let hit the beach",
        iconName:"sun"

    },
    winter:{
        text:"it is cold",
        iconName:"snowflake"

    }
}

const getSeason=(lat,month)=>{
    if (month>2 && month<9){
           return lat > 0 ? 'summer':'winter';
    }else{
        return lat > 0 ? 'winter':'summer';
    }
}
const getHours=(hrs,hours)=>{
    if (hours>12){
        return hrs > 0 ? 'am':'pm';
 }else{
     return hrs > 0 ? 'pm':'am';
 }
   
}

const SeasonDisplay =(props)=>{
    const season= getSeason(props.lat, new Date().getMonth());
    const hours= getHours(props.hrs, new Date().getHours());
    console.log(season);
    console.log(hours);
    console.log(new Date().getHours());
    //const textSeason = season ==='winter' ? 'Del was cold' :'Del was hot';
    const texthrs =hours===  'am' ? 'GM':'GA';
    //const icon = season === 'winter' ? 'snowflake':'sun';
    const {text,iconName}=seasonConfig[season];
    return(
    <div>
        <i className={`massive ${iconName} icon`}/>
        <h1>{text}</h1>
        <h2>{texthrs}</h2>
        <i className={`massive ${iconName} icon`}/>
   </div>
    
    );

};

export default SeasonDisplay;

