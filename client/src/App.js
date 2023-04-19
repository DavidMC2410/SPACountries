import './App.css';
import { Routes, Route } from 'react-router-dom';
import { DetailCard } from './components/DetailCard/DetailCard';
import { Form } from './components/Form/Form';
import { Home } from './components/Landing';
import { Landing } from './components/Landing/Landing';
import { Nav } from './components/Nav/Nav';


function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route exact path='/home' element={<Home/>} />
        <Route exact path='/activityCreate' element={<Form/>} />
        <Route exact path='/detail/:detailId' element={<DetailCard/>} />
        <Route exact path='/' element={<Landing/>} />
      </Routes>
    </div>
  );
}

export default App;
