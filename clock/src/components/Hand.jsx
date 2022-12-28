import React from 'react'

const Hand = ({type,time}) => {
    const divStyle = {transform: `rotate(${time}deg)`};
    const divClass = `${type}`;        
    return <div className={divClass} style={divStyle}></div>;
}

export default Hand;