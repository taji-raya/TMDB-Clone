import './App.css';
import { Route, Routes } from 'react-router';
import SharedLayouts from './Components/SharedLayouts';
import LoginPage from './Components/LoginPage';
import RegisterPage from './Components/RegisterPage';
import Landing from './Components/Landing';
import Home from './Components/Home'
import MovieDetails from './Components/MovieDetails'
import Watchlist from './Components/Watchlist';
import { Authcheck } from './Context/hooks/useAuthContext';

function App() {
  return (
    <div className="App">
      <Authcheck>
        <Routes>
          <Route path='/' element={<SharedLayouts />}>
            <Route index element={<Landing />} />
            <Route path='/LoginPage' exact element={<LoginPage />} />
            <Route path='/RegisterPage' exact element={<RegisterPage />} />
            <Route path='/Home' element={<Home />} />
            <Route path='/Watchlist' element={<Watchlist />} />
            <Route path="/MovieDetails/:movieID/:mediaType" element={<MovieDetails />} />
          </Route>
        </Routes>
      </Authcheck>
    </div>
  );
}

export default App;
