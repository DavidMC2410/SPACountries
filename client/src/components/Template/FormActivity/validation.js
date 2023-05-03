export default function validation (input, inputName, stateError){


    let errors = {...stateError}

    switch (inputName) {
        case "name":
            errors.name = ((input.name.length<3)||(input.name.length>32)) ? 'The name of the activity must be between 3 and 32 characters.':null;
            break;

        case "difficulty":
            errors.difficulty = ((input.difficulty<1)||(input.difficulty>5)) ? 'The difficulty must be between 1 and 5.':null;
            break;
        
        case "duration":
            errors.duration = ((input.duration > 6)||(input.duration <= 0)) ? 'The activity cannot last more than 6 hours.':null;
            break;

        case "season":
            errors.season =(input.season==='')?'Please select a season.':null;
            break;
        case "countries":
            errors.countries = ((input.countries.length===0))?'The minimum selection is one country.':null;
            break;
        default:
            break;
    }
    
    return errors;
}
