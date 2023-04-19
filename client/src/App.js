import './App.css';
import {  Route } from 'react-router-dom';
import  DetailCard  from './components/Molecule/DetailCard/DetailCard.jsx';
import  Form  from './components/Organism/Form/Form.jsx';
import  Home  from './components/Page/Home/Home.jsx';
import  Landing  from './components/Page/Landing/Landing.jsx';
import  Nav  from './components/Organism/Nav/Nav.jsx';

//  <Route exact path='/detail/:detailId' element={<DetailCard/>} />

function App() {
  return (
    <div className="App">
      <Nav/>
      <Route exact path='/' element={<Landing/>} />
      <Route exact path='/home' element={<Home/>} />
      <Route exact path='/activityCreate' element={<Form/>} />
      <Route exact path='/detail/:detailId' element={<DetailCard/>} />
      
    </div>
  );
}

export default App;
