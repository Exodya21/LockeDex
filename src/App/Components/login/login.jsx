import PokemonHeader from '../headers/pokemonHeader';
import ButtonSumbit from '../buttons/buttonSumbit';
import { Link } from 'react-router-dom';
import pikahuGift from '../../../assets/pikachu-running.gif';
import './login.css';
import { useState } from 'react';

export default function Login() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    

    const loginSubmit = (e) => {
        e.preventDefault()

        let res = {email, password}

        console.log(res);
    }

    return (
        <div className='containerLogIn'>
            <PokemonHeader text={'Log In'} />

            <p className='formTitleLogIn'>¿ Quieres jugar a un locke ?</p>
            <form className='formLogIn' onSubmit={loginSubmit}>
                <div>
                    <input 
                        type="email"  
                        placeholder='Correo electrónico'
                        defaultValue={'jaume@gmail.com'}
                        onChange={ (e) => setEmail(e.target.value) }
                        />
                    <input 
                        type="password"  
                        defaultValue={'123456789'}
                        placeholder='Contraseña'
                        onChange={ (e) => setPassword(e.target.value) }
                        />
                </div>

                <div>
                    <img className='pikachuGif' src={pikahuGift} alt="pikahuGift" />
                    <p>Cargando...</p>
                </div>

                <div>
                    <Link to='/register'> <p className='linkRegister'>Registrate si aún no lo estas</p> </Link>

                    <ButtonSumbit text={'Entrar'} />
                </div>
            </form>
        </div>
    )
}