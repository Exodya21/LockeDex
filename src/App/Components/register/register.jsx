import PokemonHeader from '../headers/pokemonHeader';
import ButtonSumbit from '../buttons/buttonSumbit';
import { Link, Navigate } from 'react-router-dom';
import '../login/login.css';
import { useState } from 'react';
import Loading from '../ux/loading';

export default function Register() {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    

    const registerSubmit = (e) => {
        e.preventDefault()

        let res = {name, email, password}

        console.log(res);
    }

    return (
        <div className='containerLogIn'>
            <PokemonHeader text={'Register'} />

            <p className='formTitleLogIn'>¿ Eres nuevo ? Bienvenido.</p>
            <form className='formLogIn' onSubmit={registerSubmit}>
                <div>
                    <input 
                        type="text"  
                        placeholder='Nombre de usuario'
                        defaultValue={'jaume21'}
                        onChange={ (e) => setName(e.target.value) }
                        />
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

                <Loading />

                <div>
                    <Link to='/'> <p className='linkRegister'>¿ Ya tienes un perfil ?</p> </Link>

                    <ButtonSumbit text={'Registrate'} />
                </div>
            </form>
        </div>
    )
}