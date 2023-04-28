import React from 'react';
import Input from '../../Atom/Input'
import Button from '../../Atom/Button';
import { useState } from 'react';
import style from './Bar.module.css';

export default function Bar (props){
    const [inputValue, setInputValue] = useState("");

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }
  function handleSearchClick() {
    props.onClick(inputValue);
  }
    return(
    <div className={style.container}>

        <Input onChange={handleInputChange} style={props.styleInput} id="Bar" type="text" value={inputValue}/>
        <Button onClick={handleSearchClick} style={props.styleButton} text='Search' key='Search'/>
        
        
    </div>)
}