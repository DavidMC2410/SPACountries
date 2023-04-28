import React from 'react';
import Header from '../../Template/Header/Header';
import MiddleBar from '../../Template/MiddleBar/MiddleBar';
import ContentCards from '../../Template/ContentCards/ContentCards';
import style from './Home.module.css';
import imageHome from '../../../assets/imageHeader/imageHomeNew.jpg';

export default function Home (){

    

    return(
    <div className={style.container}>
        <Header headerImg={imageHome} text={'Img Home Header'}/>
        <MiddleBar style={style.middleBar}/>
        <ContentCards style={style.contentCards}/>
    </div>
    );
}