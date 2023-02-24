import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom' ;
import Footer from './components/Footer';
import Header from './components/Header';
import Landing from './components/Landing';
import Welcome from './components/Welcome';
import Login from './components/Login';
import Signup from './components/Signup';
import ErrorPage from './components/ErrorPage';
import ForgetPassword from './components/ForgetPassword';
import { IconContext } from 'react-icons/lib';

function App() {
  return (
      <BrowserRouter>
        <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
        <Header/>
     
          <Routes> 
            <Route path="/" element={<Landing/>} />
            <Route path="/welcome" element={<Welcome/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />}/>
            <Route path="/forgetpassword" element={<ForgetPassword />}/>
            <Route path='*' element={<ErrorPage/>} />
          </Routes>
  
        <Footer/>
        </IconContext.Provider>
      </BrowserRouter>
   
  );
}

export default App;
