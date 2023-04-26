const { Country, Activity } = require('../db');
const axios = require('axios');
const { Sequelize, Op } = require('sequelize')


// Función para traer las countries de la API, 
const dataContries = async ()=>{

    const resp = await axios.get('https://restcountries.com/v3/all');

    const arrayCountries = resp.data.map(country=>{
        const newCountry = {
            id: country.cca3,
            name: country.name.common,
            flag: country.flags[0],
            continent: country.continents[0],
            capital: !country.capital ? '' : country.capital.join(),
            subregion: country.subregion,
            area: country.area,
            population: country.population
        };
        return newCountry;
    });
    return arrayCountries;
}

// Función para carga la info a la base de datos
const dataToDataBase = async ()=>{
        const data = await Country.findAll();

        if (data.length===0){
            const dataInfo = await dataContries();
            await Country.bulkCreate(dataInfo);
        }
}



//Controladores de Country


const getAllCountries = async ()=>{


    let allCountries = await Country.findAll({
        include: [
            {
              model: Activity,
              attributes: ['name'],
              through: {
                attributes: []
              }
            }
          ]
    })
    return allCountries;

}

const getCountriesByName = async (name)=>{



    let resp = await Country.findAll({
        where: {
            name:{
                [Op.iLike]:`%${name}%`
            }
        },
        include: [
            {
              model: Activity,
              attributes: ['name'],
              through: {
                attributes: []
              }
            }
          ]
    })

    if (!resp.length){
        throw new Error ('No se encontro ningun país')
    }
    return resp;
}

const getCountryById = async (id)=>{

    let resp;
    if (id){
        resp = await Country.findByPk(id, {
            include: [
                {
                  model: Activity,
                  attributes: ['name'],
                  through: {
                    attributes: []
                  }
                }
              ]
        });
    }
    if (!resp){
        throw new Error ('No se escontro ningun país con el id proporcionado')
    }
    return resp;
}



// Controladores de Activity

const getAllActivities = async () => {

    let resp = await Activity.findAll();

    if (!resp){
        throw new Error ('No se encontraron actividades')
    }
    return resp;
}

const createActivity = async ({name, difficulty, duration, season, countries})=>{

    if (!name){
        throw new Error ('Es obligatorio que la actividad tenga un nombre')
    }

    const newActivity = {
        name: name,
        difficulty: difficulty,
        durationHours: duration,
        season: season
    }

    const [activity, created] = await Activity.findOrCreate({ 
        where: newActivity
    });

    const countryPromises = countries.map(async (value) => {
        const country = await Country.findOne({ where: { name: value } });
        if (country) {
          await activity.addCountry(country);
        }
      });

    
    
    await Promise.all(countryPromises);

    

    const message=`Se creo la actividad ${name}.`
    return message;

}

module.exports = {
    getAllCountries,
    getCountryById,
    getAllActivities,
    createActivity,
    getCountriesByName,
    dataToDataBase
}