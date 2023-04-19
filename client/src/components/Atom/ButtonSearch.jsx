import style from './ButtonSearch.module.css';
import React from 'react';
import { SearchIcon } from '../../assets/icons/SearchIcon';

export function ButtonSearch(props){

    return(
        <button className={style}>{SearchIcon}</button>
    )
}