import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Pokedex from './Components/pokedex/pokedex';
import Lockedex from './Components/Layouts/lockedex';
import Login from './Components/login/login';
import PokemonHeader from './Components/headers/pokedexHeader';
import Register from './Components/register/register';
import ListaLockes from './Components/listaLockes/listaLockes';

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

                <Route path='/register' element={<Register />} />

                <Route path='/lockes' element={<ListaLockes />} />
            </Routes>
          </BrowserRouter>
        </Lockedex>
      </main>
    </div>
  );
}

export default App;
