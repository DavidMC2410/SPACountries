import React from 'react';
import Input from '../../Atom/Input'
import Button from '../../Atom/Button';
import { useState } from 'react';

export default function Bar (props){
    const [inputValue, setInputValue] = useState("");

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }
  function handleSearchClick() {
    props.onClick(inputValue);
  }
    return(
    <div>

        <Input onChange={handleInputChange} id="Bar" type="text" value={inputValue}/>
        <Button onClick={handleSearchClick} text='Search' key='Search'/>
        
        
    </div>)
}