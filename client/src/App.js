import './App.css';
import { Route, Routes } from 'react-router';
import SharedLayouts from './Components/SharedLayouts';
import LoginPage from './Components/LoginPage';
import RegisterPage from './Components/RegisterPage';
import Landing from './Components/Landing';
import Home from './Components/Home'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<SharedLayouts />}>
          <Route index element={<Landing />} />
          <Route path='/LoginPage' element={<LoginPage />} />
          <Route path='/RegisterPage' element={<RegisterPage />} />
          <Route path='/Home' element={<Home />} />

        </Route>

      </Routes>

    </div>
  );
}

export default App;
