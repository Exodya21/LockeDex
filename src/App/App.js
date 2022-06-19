import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Pokedex from './Components/pokedex';
import Lockedex from './Components/Layouts/lockedex';
import Login from './Components/login/login';

function App() {
  return (
    <div className="App">
      <header className='header-lockeDex'>
        hola mundo
      </header>
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
