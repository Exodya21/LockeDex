import PokemonHeader from '../headers/pokemonHeader';
import ButtonSumbit from '../buttons/buttonSumbit';
import { Link, useNavigate } from 'react-router-dom';
import '../login/login.css';
import { useState } from 'react';
import Loading from '../ux/loading';
import { signIn } from '../../../services/authUser';

export default function Register() {

    const [nickname, setNickname] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('')

    let navigate = useNavigate();

    const registerSubmit = (e) => {
        e.preventDefault()

        setLoading(true)
        let data = {nickname, email, password}

        console.log(data);
        signIn(data)
            .then( res => {

                console.log(res.data)

                res.data.success ?
                    setMessage(res.data.success)
                :
                    setMessage(res.data.error)

                return res.data
            })
            .then( res => {
                if (res.success) navigate('/') 
            })
    }


    return (
        <div className='containerLogIn'>
            <PokemonHeader text={'Register'} />

            <p className='formTitleLogIn'>¿ Eres nuevo ? Bienvenido.</p>
            <form className='formLogIn' onSubmit={registerSubmit}>
                <div>
                    <input
                        required 
                        type="text"  
                        placeholder='Nombre de usuario'
                        // defaultValue={'jaume21'}
                        onChange={ (e) => setNickname(e.target.value) }
                        />
                    <input 
                        required
                        type="email"  
                        placeholder='Correo electrónico'
                        // defaultValue={'jaume@gmail.com'}
                        onChange={ (e) => setEmail(e.target.value) }
                        />
                    <input 
                        required 
                        type="password"  
                        // defaultValue={'123456789'}
                        placeholder='Contraseña'
                        onChange={ (e) => setPassword(e.target.value) }
                        />
                </div>

                {
                    message == '' ? 
                        <Loading boolean={loading}/>
                    :
                        <p>{message}</p>
                }               
                <div>
                    <Link to='/'> <p className='linkRegister'>¿ Ya tienes un perfil ?</p> </Link>

                    <ButtonSumbit text={'Registrate'} />
                </div>
            </form>
        </div>
    )
}