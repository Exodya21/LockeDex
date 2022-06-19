import './pokemonHeader.css';
import logo from '../../../assets/pokemon-logo.svg';

export default function pokemonHeader({ text }) {
    return (
        <header className='headers'>
            <img src={logo} alt="pokemon logo" />
            <p>{text}</p>
        </header>
    )
}