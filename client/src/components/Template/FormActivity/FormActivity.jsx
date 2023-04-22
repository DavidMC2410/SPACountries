import React, { useState } from "react";
import validation from './validation';
import Input from '../../Atom/Input';
import Label from '../../Atom/Label';
import Select from '../../Atom/Select';
import Button from '../../Atom/Button';
import {useDispatch, useSelector} from 'react-redux'

export default function FormActivity(){

    const seasons=['Spring', 'Summer', 'Autumn', 'Winter'];
    let {name, id} = useSelector(state => state.countries);

    const [form, setForm]=useState({
        name:'',
        difficulty:0,
        duration: 0,
        season:[],
        countries:[],
    });

    const [errors, setErrors]=useState({
        name:'',
        difficulty:'',
        duration:''
    });

    const handleChange = (e)=>{
        setForm({...form, name:e.target.value});
        setErrors(validation('name', {...form, [e.target.name]:e.target.value}))
        
    }

    return(
        <div>

            <form>

                <Label htmlFor='name' text='Name Activity: '/>
                <Input />

                <Label/>
                <Input/>

                <Label/>
                <Input/>

                <Select/>

                <Select/>

                <Button />

            </form>

        </div>
    )
}