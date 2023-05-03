import React, { useEffect, useState } from "react";
import validation from './validation';
import Input from '../../Atom/Input';
import Label from '../../Atom/Label';
import Select from '../../Atom/Select';
import Button from '../../Atom/Button';
import { useSelector, useDispatch } from 'react-redux';
import axios from "axios";
import { getAllCountries } from '../../../redux/actions';
import style from './FormActivity.module.css'
import { useNavigate } from "react-router-dom";

export default function FormActivity(){

    const navigate = useNavigate()

    useEffect(()=>{
        dispatch(getAllCountries());
    },[])
    
    const seasons = ['Spring', 'Summer', 'Autumn', 'Winter'];
    let countries = useSelector(state => state.countries);
    let countriesName = countries.map(country=> country.name)
    const dispatch = useDispatch();
    

    const [form, setForm]=useState({
        name:'',
        difficulty:0,
        duration: 0,
        season:'',
        countries:[],
    });

    const [errors, setErrors]=useState({
        name:'',
        difficulty:'',
        duration:'',
        season:'',
        countries:''
    });



    const handleInputChange = (e)=>{
        
        const {name, value}=e.target
        const newInput = {...form, [name] : value}
        setErrors(validation(newInput, name, errors))
        setForm(newInput);
        
    }

    const handleSelectSeasonChange = (e)=>{
        const { name,value }=e.target;
        const newSeason = {...form, [name] : value}
        setErrors(validation(newSeason, name,errors))
        setForm(newSeason)
    }

    function handleSelectCountriesChange(event) {
        const {name,value }=event.target;
        const newCountry = {...form, [name] : [...form.countries, value]}
        setErrors(validation(newCountry, name,errors))
        setForm(newCountry);        
      }

    function handleDeleteCountry(event) {
        const deleteCountry = {...form, countries: form.countries.filter(c=>c!==event.target.value)}
        setErrors(validation(deleteCountry, "countries",errors))
        setForm(deleteCountry);

    }

    const handleInputBlur=(e)=>{
        handleInputChange(e)
    }

    const handleSeasonBlur=(e)=>{
        handleSelectSeasonChange(e)
    }



    const handleSubmit = async (e)=>{
        e.preventDefault();
        if  ((!errors.name)&&(!errors.difficulty)&&(!errors.duration)&&(form.season!=='')&&(form.countries.length!==0)){
            await axios.post('http://localhost:3000/activities',form)
            .then(({data})=>{alert(data.msg);navigate('/home')})
            .catch(error => {alert('404 not found '+error);navigate('/home')})
        }else{
            alert('Please fill in all the fields of the form correctly')
        }
    }

    return(
        <form onSubmit={handleSubmit} className={style.container}>

            <div className={style.dataContainer}>
                <div className={style.sectionContainer}>
                    <Label style={style.label} htmlFor='name' text='Name Activity: '/>
                    <Input blur={handleInputBlur} style={style.input} onChange={handleInputChange} id="name" type="text" value={form.name}/>
                    {errors.name && <p style={{backgroundColor: '#ffffcc', border: '1px solid #ff0000', padding: '10px', color: '#000'}}>{errors.name}</p>}
                </div>

                <div className={style.sectionContainer}>
                    <Label style={style.label} htmlFor='difficulty' text='Difficulty: ' />
                    <Input blur={handleInputBlur} style={style.input} onChange={handleInputChange} id="difficulty" type="number" value={form.difficulty}/>
                    {errors.difficulty && <p style={{backgroundColor: '#ffffcc', border: '1px solid #ff0000', padding: '10px', color: '#000'}}>{errors.difficulty}</p>}
                </div>

                <div className={style.sectionContainer}>
                    <Label style={style.label} htmlFor='duration' text='Duration(hours): '/>
                    <Input blur={handleInputBlur} style={style.input} onChange={handleInputChange} id="duration" type="number" value={form.duration}/>
                    {errors.duration && <p style={{backgroundColor: '#ffffcc', border: '1px solid #ff0000', padding: '10px', color: '#000'}}>{errors.duration}</p>}
                </div>

                <div className={style.sectionContainer}>
                    <Label style={style.label} htmlFor='season' text='Seson: '/>
                    <Select blur={handleSeasonBlur} style={style.select} id="season" select={handleSelectSeasonChange} arrayOptions={seasons} size="1" multiple={false} />
                    <p>Selected option: {form.season}</p>
                    {errors.season && <p style={{backgroundColor: '#ffffcc', border: '1px solid #ff0000', padding: '10px', color: '#000'}}>{errors.season}</p>}
                </div>

                <div className={style.sectionContainer}>
                    <Label style={style.label} htmlFor='countries' text='Country(ies): '/>
                    <Select style={style.select} id='countries' arrayOptions={countriesName} select={handleSelectCountriesChange} size="1"  multiple={false}/>
                    {errors.countries && <p style={{backgroundColor: '#ffffcc', border: '1px solid #ff0000', padding: '10px', color: '#000'}}>{errors.countries}</p>}
                    <p>Selected options: (Click to delete)</p>
                    <Select style={style.select} id='deleteCountry' arrayOptions={form.countries} select={handleDeleteCountry} size="1"  multiple={false}/>
                </div>
            </div>

            <div>
                <Button style={style.button} onClick={handleSubmit} keyValue="Submit" text="Submit"/>
            </div>
            </form>
    )
}