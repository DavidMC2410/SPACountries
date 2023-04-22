import React from 'react';
import Header from '../../Template/Header/Header';
import { useParams } from 'react-router-dom';
import ContentDetail from '../../Template/ContentDetail/ContentDetail';

export default function DetailCard (){
    const {detailId} = useParams(); 
    console.log('Estoy en DetailCard, y deberia aparecer un id aqui: ',detailId);
    return(
    <div>
        <Header/>
        <ContentDetail countryId={detailId}/>
    </div>
    );
}