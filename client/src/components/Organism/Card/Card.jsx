import React from "react";
import { Link } from 'react-router-dom';

export default function Card(props){
    
    return (
        <div>
            <Link to={`/detail/${props.id}`}>
                <div>
                    <h2>{props.name}</h2>
                    <img src={props.flag} alt="flag_img" />
                    <h3>{props.continent}</h3>
                </div>
            </Link>
        </div>
    )
}