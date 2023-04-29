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

    let arrayCountries=[];
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
        duration:''
    });

    const handleInputChange = (e)=>{
        
        const {name, value}=e.target
        const newForm = {...form, [name] : value}
        setErrors(validation(newForm, name, errors))
        setForm(newForm);
        
    }

    const handleSelectSeasonChange = (e)=>{
        setForm({...form, season: e.target.value})
    }

    function handleSelectCountriesChange(event) {
        //const selectedValues = Array.from(event.target.selectedOptions, option => option.value);
        const selectedValues=[...arrayCountries, event.target.value]
        console.log(event.target.value);
        const filterCountry = form.countries.find(country=>country===selectedValues[0]);
        if (filterCountry===undefined){
            setForm({...form, countries: [...form.countries, selectedValues[0]]});
        }else{
            setForm({...form, countries: form.countries.filter(c=>c!==selectedValues[0])});
        }
      }

    const handleSubmit = async (e)=>{
        e.preventDefault();
        if  ((!errors.name)&&(!errors.difficulty)&&(!errors.duration)&&(form.season!=='')&&(form.countries.length!==0)){
            await axios.post('http://localhost:3001/activities',form)
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
                    <Input style={style.input} onChange={handleInputChange} id="name" type="text" value={form.name}/>
                    {errors.name && <p style={{backgroundColor: '#ffffcc', border: '1px solid #ff0000', padding: '10px', color: '#000'}}>{errors.name}</p>}
                </div>

                <div className={style.sectionContainer}>
                    <Label style={style.label} htmlFor='difficulty' text='Difficulty: ' />
                    <Input style={style.input} onChange={handleInputChange} id="difficulty" type="number" value={form.difficulty}/>
                    {errors.difficulty && <p style={{backgroundColor: '#ffffcc', border: '1px solid #ff0000', padding: '10px', color: '#000'}}>{errors.difficulty}</p>}
                </div>

                <div className={style.sectionContainer}>
                    <Label style={style.label} htmlFor='duration' text='Duration(hours): '/>
                    <Input style={style.input} onChange={handleInputChange} id="duration" type="number" value={form.duration}/>
                    {errors.duration && <p style={{backgroundColor: '#ffffcc', border: '1px solid #ff0000', padding: '10px', color: '#000'}}>{errors.duration}</p>}
                </div>

                <div className={style.sectionContainer}>
                    <Label style={style.label} htmlFor='seson' text='Seson: '/>
                    <Select style={style.select} id="seson" select={handleSelectSeasonChange} arrayOptions={seasons} size="1" multiple={false} />
                    <p>Selected option: {form.season}</p>
                </div>

                <div className={style.sectionContainer}>
                    <Label style={style.label} htmlFor='countries' text='Country(ies): '/>
                    <Select style={style.select} id='countries' arrayOptions={countriesName} select={handleSelectCountriesChange} size="1"  multiple={false}/>
                    <p>Selected options: {form.countries.join(', ')}</p>
                </div>
            </div>

            <div>
                <Button style={style.button} onClick={handleSubmit} keyValue="Submit" text="Submit"/>
            </div>
            </form>
    )
}