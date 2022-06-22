import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Pokedex from './Components/pokedex';
import Lockedex from './Components/Layouts/lockedex';
import Login from './Components/login/login';
import PokemonHeader from './Components/headers/pokedexHeader';

function App() {
  return (
    <div className="App">
      <PokemonHeader />
      <main className='all-dex'>
        <Pokedex />
        <Lockedex>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Login />} />
                <Route index element={<Login />} />
                <Route path="*" element={<p>404 not Found</p>} />
            </Routes>
          </BrowserRouter>
        </Lockedex>
      </main>
    </div>
  );
}

export default App;
