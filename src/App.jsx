

import { Route,Routes } from 'react-router-dom';
import LoginRegister from './pages/LoginRegister';
import HomePage from './pages/HomePage';
import Catalog from './pages/Catalog';
import Search from './pages/Search';
import MyCart from './pages/MyCart';
import Checkout from './pages/Checkout';





function App() {
  if(window.location.pathname==="/"){
    window.location.href="/home"
  }
  return (
    <Routes>
      <Route path='/home' element={<HomePage/>}/>
      <Route path='/login-register' element={<LoginRegister/>}/>
      <Route path='/catalog' element={<Catalog/>}/>
      <Route path='/search' element={<Search/>}/>
      <Route path='/mycart' element={<MyCart/>}>
          <Route path='checkout'element ={<Checkout/>}/>
      </Route>


    </Routes>
  );
}

export default App;
