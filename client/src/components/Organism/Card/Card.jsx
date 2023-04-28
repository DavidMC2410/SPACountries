import React from "react";
import { Link } from 'react-router-dom';
import style from './Card.module.css';

export default function Card(props){
    
    return (
        <div className={style.container}>
            <Link style={{ textDecoration: 'none'}} to={`/detail/${props.id}`}>
                <div>
                    <h3 className={style.tittle}>{props.name}</h3>
                    <img src={props.img} className={style.image} alt="flag_img" />
                    <h3 className={style.continent}>{props.continent}</h3>
                </div>
            </Link>
        </div>
    )
}