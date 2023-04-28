import { Link } from 'react-router-dom';
import React from 'react';
import style from './Nav.module.css';


export default function Nav (){
    return(
        <nav className={style.container}>
            <Link to="/home" style={{ textDecoration: 'none'}}><h2 className={style.h2}>Home</h2></Link>
            <Link to="/activityCreate" style={{ textDecoration: 'none'}}><h2 className={style.h2} >Create Activity</h2></Link>
            <h1 className={style.h1} >Hervels</h1>
            <h2 className={style.h2} >About me</h2>
            <h2 className={style.h2} >About the Project</h2>
        </nav>
    )
}