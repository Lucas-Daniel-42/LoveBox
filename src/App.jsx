import './App.css';
import FormPage from './components/FormPage';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
  BrowserRouter
} from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>

      

    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path='/form' element={<FormPage/>} />
    </Routes>

    </BrowserRouter>
  )
}

export default App;
