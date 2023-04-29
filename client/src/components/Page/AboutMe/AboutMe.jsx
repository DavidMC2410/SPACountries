import React from 'react';
import Header from '../../Template/Header/Header';
import DetailMe from '../../Template/DetailMe/DetailMe';
import imageDetailMe from '../../../assets/imageHeader/imgDetailMe.jpg';

export default function AboutMe (){
    return(
        <div>
            <Header headerImg={imageDetailMe} text={'Img Detail Header'}/>
            <DetailMe />
        </div>
    )
}