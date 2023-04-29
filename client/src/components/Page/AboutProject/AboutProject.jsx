import React from 'react';
import Header from '../../Template/Header/Header';
import DetailProject from '../../Template/DetailProject/DetailProject';
import imageDetailProject from '../../../assets/imageHeader/imgDetailProject.jpg';

export default function AboutProject (){
    return(
        <div>
            <Header headerImg={imageDetailProject} text={'Img Detail Header'}/>
            <DetailProject />
        </div>
    )
}