import { SearchBar } from './SearchBar';
import { Link } from 'react-router-dom';

export default function Nav (){
    return(
        <nav>
            <SearchBar />
            <Link to="/home">HOME</Link>
            <Link to="/activityCreate">Actividades</Link>
        </nav>
    )
}