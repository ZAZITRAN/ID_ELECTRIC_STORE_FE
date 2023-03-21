
import './App.css';
import { Route,Routes } from 'react-router-dom';
import LoginRegister from './pages/LoginRegister';
import HomePage from './pages/HomePage';


function App() {
  if(window.location.pathname==="/"){
    window.location.href="/home"
  }
  return (
    <Routes>
      <Route path='/home' element={<HomePage/>}/>
      <Route path='/login-register' element={<LoginRegister/>}/>
    </Routes>
  );
}

export default App;
