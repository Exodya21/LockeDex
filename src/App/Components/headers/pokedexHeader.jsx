import './pokedexHeader.css';

export default function PokemonHeader() {
    return (
        <header className='header-lockeDex'>
            <div className='cam'></div>
            <div className='container-mini-lights'>
                <div className='mini-light red'></div>
                <div className='mini-light yellow'></div>
                <div className='mini-light green'></div>
            </div>
        </header>
    )
}