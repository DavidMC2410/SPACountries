export default function validation (input, inputName, stateError){

    let errors = {...stateError}

    switch (inputName) {
        case "name":
            errors.name = !input.name ? 'The activity must have a name.':null;
            break;

        case "difficulty":
            errors.difficulty = ((input.difficulty<1)||(input.difficulty>5)) ? 'The difficulty must be between 1 and 5.':null;
            break;
        
        case "duration":
            errors.duration = ((input.duration > 6)||(input.duration <= 0)) ? 'The activity cannot last more than 6 hours.':null;
            break;
    
        default:
            break;
    }
    
    return errors;
}
