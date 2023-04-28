import { useNavigate } from 'react-router-dom'
import Button from '../../Atom/Button';
import React from 'react';

import style from './Landing.module.css'

export default function Landing(){
    let navigate = useNavigate();
    return (
    <div className={style.container}>

        <div className={style.template}>

            <h1 className={style.h1}>Hervels</h1>

            <p className={style.text}>Welcome to Hervels, your go-to destination for unforgettable travel experiences. Discover amazing destinations, find the best deals, and plan your dream vacation today.</p>

            <Button style={style.button} key='Enter Now!!' text='Enter Now!!' onClick={() => navigate('/home')} />

        </div>
    </div>)
}