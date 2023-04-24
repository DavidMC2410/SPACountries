import { Link } from 'react-router-dom';
import React from 'react';

export default function Nav (){
    return(
        <nav>
            <Link to="/home"><h1>Home</h1></Link>
            <Link to="/activityCreate"><h1>Create Activity</h1></Link>
        </nav>
    )
}