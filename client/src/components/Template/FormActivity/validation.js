export default function validation (input){

    let errors = {}

    if (!input.name) errors.name = 'The activity must have a name.'
    if ((input.dificulty<1)&&(input.dificulty>5)) errors.dificulty = 'The difficulty must be between 1 and 5.';
    if (input.duration > 6) errors.duration = 'The activity cannot last more than 6 hours.'
    
    return errors;
}
