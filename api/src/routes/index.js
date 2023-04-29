const { Router } = require('express');
const { getAllCountries, getCountryById, getAllActivities, createActivity, getCountriesByName}= require('../controllers');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();


//Rutas de Country

router.get('/countries',async (req,res)=>{
    try {
        const { name }= req.query;
        if (!name){
            const allCountries = await getAllCountries();
            res.status(200).json(allCountries)
        }else{
            const countriesByName = await getCountriesByName(name);
            res.status(200).json(countriesByName)
        }
        
    } catch (error) {
        res.status(400).json({Error: error.message})
    }
})


router.get('/countries/:idPais',async (req,res)=>{
    const idPais= req.params.idPais.toUpperCase();
    
    try {
        const countryById= await getCountryById(idPais)
        res.status(200).json(countryById)
    } catch (error) {
        res.status(400).json({Error: error.message})
    }
})


// rutas de Activity

router.get('/activities',async(req,res)=>{
    try {
        const allActivities= await getAllActivities();
        res.status(200).json(allActivities)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

router.post('/activities',async (req,res)=>{
    const activity = req.body;
    try {
        const result=await createActivity(activity)
        res.status(200).json({msg: result});
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})


module.exports = router;
