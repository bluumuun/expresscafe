import logo from './logo.svg';
import './App.css';
import { useState, useContext, useEffect } from 'react';
import AuthPage from './pages/auth';
import NewOrderPage from './pages/new_order';
import OrderHistoryPage from './pages/order_history';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/nav';


// module.exports = routes;

function App() {
  let { user, setUser } = useContext(AppContext)
  return (
    <main className= "App">
      { user  ?
      <>
      <NavBar />
      <Routes>
        <Route path ='/orders/new' element={<NewOrderPage />} />
        <Route path='/orders' element={<OrderHistoryPage />} />
      </Routes>
      </>:
      <AuthPage />
      
  }
    </main>
  );
}

export default App;
