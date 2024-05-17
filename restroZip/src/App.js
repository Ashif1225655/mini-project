import './App.css';
import AddToCart from './components/AddToCart';
import FilterdPage from './components/FilterdPage';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import Login from './components/Login';
function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/filteredpage/:category' element={<FilterdPage/>}/>
        <Route path='/addtocart' element={<AddToCart/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
