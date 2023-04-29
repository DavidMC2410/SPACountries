import React from 'react';
import Header from '../../Template/Header/Header';
import { useParams } from 'react-router-dom';
import ContentDetail from '../../Template/ContentDetail/ContentDetail';
import imageDetail from '../../../assets/imageHeader/imgDeatilHeader.jpg';

export default function DetailCard (){
    const {detailId} = useParams(); 
    return(
    <div>
        <Header headerImg={imageDetail} text={'Img Detail Header'}/>
        <ContentDetail countryId={detailId}/>
    </div>
    );
}