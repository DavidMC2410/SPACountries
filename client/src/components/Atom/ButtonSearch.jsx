import style from './ButtonSearch.module.css';
import Search from '../../assets/icons/Search';
import React from 'react';

export function ButtonSearch(props){

    return(
        <button className={style}><Search/></button>
    )
}