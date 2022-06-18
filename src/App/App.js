import './App.css';
import Pokedex from './Components/pokedex';
import Lockedex from './Components/lockedex';

function App() {
  return (
    <div className="App">
      <header className='header-lockeDex'>
        hola mundo
      </header>
      <main className='all-dex'>
        <Pokedex />
        <Lockedex />
      </main>
    </div>
  );
}

export default App;
