import React, { useState } from "react";
import validation from './validation';
import Input from '../../Atom/Input';
import Label from '../../Atom/Label';
import Select from '../../Atom/Select';
import Button from '../../Atom/Button';
import { useSelector } from 'react-redux';
import axios from "axios";

export default function FormActivity(){

    const seasons = ['Spring', 'Summer', 'Autumn', 'Winter'];
    let countries = useSelector(state => state.countries);
    let countriesName = countries.map(country=> country.name)

    const [form, setForm]=useState({
        name:'',
        dificulty:0,
        duration: 0,
        season:'',
        countries:[],
    });

    const [errors, setErrors]=useState({
        name:'',
        dificulty:'',
        duration:''
    });

    const handleInputChange = (e)=>{
        console.log('Esto es el inputChange: ', e.target);

        const {name, value}=e.target
        setErrors(validation(form))
        setForm({...form, [name] : value});
        console.log(form);
        console.log(errors);
        
    }

    const handleSelectSeasonChange = (e)=>{
        setForm({...form, season: e.target.value})
        console.log(form);
        console.log(errors);
    }

    function handleSelectCountriesChange(event) {
        const selectedValues = Array.from(event.target.selectedOptions, option => option.value);
        const filterCountry = form.countries.find(country=>country===selectedValues[0]);
        if (filterCountry===undefined){
            setForm({...form, countries: [...form.countries, selectedValues[0]]});
        }else{
            setForm({...form, countries: form.countries.filter(c=>c!==selectedValues[0])});
        }
        console.log(form);
        console.log(errors);
      }

    const handleSubmit = async (e)=>{
        e.preventDefault();
        if  ((Object.keys(errors).length === 0)&&(form.season!=='')&&(form.countries.length!==0)){
            await axios.post('http://localhost:3001/activities',form)
            .then(({data})=>{alert(data.msg)})
            .catch(error => console.log(error))
        }else{
            alert('No se puede enviar')
        }
    }

    

    return(
        <div>

            <form onSubmit={handleSubmit}>

                <Label htmlFor='name' text='Name Activity: '/>
                <Input onChange={handleInputChange} id="name" type="text" value={form.name}/>
                {errors.name && <p>{errors.name}</p>}

                <Label htmlFor='dificulty' text='Difficulty: ' />
                <Input onChange={handleInputChange} id="dificulty" type="number" value={form.dificulty}/>
                {errors.dificulty && <p>{errors.dificulty}</p>}

                <Label htmlFor='duration' text='Duration(hours): '/>
                <Input onChange={handleInputChange} id="duration" type="number" value={form.duration}/>
                {errors.duration && <p>{errors.duration}</p>}

                <Label htmlFor='seson' text='Seson'/>
                <Select id="seson" handle={handleSelectSeasonChange} options={seasons} size="5" multiple={false} />
                <p>Opciones seleccionadas: {form.season}</p>

                <Label htmlFor='countries' text='Country(ies): '/>
                <Select id='countries' options={countriesName} handle={handleSelectCountriesChange} size="5"  multiple={true}/>
                <p>Opciones seleccionadas: {form.countries.join(', ')}</p>
               

                <Button onClick={handleSubmit} text="Submit"/>

            </form>

        </div>
    )
}