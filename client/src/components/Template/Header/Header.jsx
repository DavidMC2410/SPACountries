import React from 'react';
import Nav from '../../Organism/Nav/Nav'
import Image from '../../Atom/Image';
import style from './Header.module.css';

export default function Header(props){

    return(
        <div className={style.container}>

            <Nav />
            
            <Image imageBG={props.headerImg} text={props.text}/>
            
        </div>
    );
}