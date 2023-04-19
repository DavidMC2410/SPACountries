import { useNavigate } from 'react-router-dom'

export default function Landing(){
    let navigate = useNavigate();
    return (
    <div>
        <h1>Countries</h1>
        <button onClick={navigate('/home')}>In</button>
    </div>)
}