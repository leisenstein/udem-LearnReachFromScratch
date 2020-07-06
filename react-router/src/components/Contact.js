import React from 'react';
import {Link} from 'react-router-dom';


const Contact = (props) => {
    
    return(
        <div>
            <div className="ui raised very padded text container segment" style={{marginTop:'80px'}} >
                <Link to='/alex' className="ui header">Alex</Link>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div className="ui raised very padded text container segment" style={{marginTop:'80px'}} >
                <Link to='/willma' className="ui header">Willma</Link>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
           
        </div>
        
    )
}


export default Contact;