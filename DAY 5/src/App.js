import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App';
import './App.css';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Home } from './pages/Home';
import { Dashboard } from './pages/Dashboard';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={< Login />} />
          <Route path='/Login' index element={< Login />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/Dashboard' element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
