import React from "react";
import Header from '../../Template/Header/Header';
import FormActivity from '../../Template/FormActivity/FormActivity';
import imageCreateActivity from '../../../assets/imageHeader/imgCAHeader.jpg';

export default function CreatedActivity(){
    return(
        <div>
            <Header headerImg={imageCreateActivity} text={'Img Create Activity Header'}/>
            <FormActivity/>
        </div>
    )
}