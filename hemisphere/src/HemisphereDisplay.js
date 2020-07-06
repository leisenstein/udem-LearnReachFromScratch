import React from 'react';
import './hemisphere.css'
import northernPic from './image/NorthernHemisphere.jpg';
import southernPic from './image/SouthernHemisphere.jpg';

const hemisphereConfig = {
    Northern: {
        text: 'it is Northern hemisphere',
        picture: northernPic
    },
    Southern: {
        text: 'it is Southern hemisphere',
        picture: southernPic
    }       
}
const HemisphereDisplay = ({latitude}) => {
    const hemisphere = latitude > 0 ? 'Northern' : 'Southern';
    const {text, picture} = hemisphereConfig[hemisphere];
    return(
        
        <div className={hemisphere}>
            <div className="ui raised text container segment">
                <div className="image">
                    <img src={picture} alt="" />
                </div>
                <div className="ui teal bottom attached label">
                    {text}
                </div>
            </div>
        </div>
    )
}

export default HemisphereDisplay