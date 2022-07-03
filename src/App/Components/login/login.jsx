import PokemonHeader from '../headers/pokemonHeader';
import ButtonSumbit from '../buttons/buttonSumbit';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';
import { useState } from 'react';
import Loading from '../ux/loading';
import { signUp } from '../../../services/authUser';

export default function Login() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('')

    let navigate = useNavigate();

    const loginSubmit = (e) => {
        e.preventDefault()

        setLoading(true)
        let data = {email, password}

        console.log(data);
        signUp(data)
            .then( res => {

                console.log(res.data)

                res.data.success ?
                    setMessage(res.data.success)
                :
                    setMessage(res.data.error)

                return res.data
            })
            .then( res => {
                if (res.success) navigate('/lockes')
            })
    }


    return (
        <div className='containerLogIn'>
            <PokemonHeader text={'Log In'} />

            <p className='formTitleLogIn'>¿ Quieres jugar a un locke ?</p>
            <form className='formLogIn' onSubmit={loginSubmit}>
                <div>
                    <input 
                        required 
                        type="text"  
                        placeholder='Correo electrónico'
                        // defaultValue={'jaume@gmail.com'}    
                        onChange={ (e) => setEmail(e.target.value) }
                        />
                    <input 
                        required 
                        type="password"  
                        placeholder='Contraseña'
                        // defaultValue={'123456789'}
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
                    <Link to='/register'> <p className='linkRegister'>Registrate si aún no lo estas</p> </Link>

                    <ButtonSumbit text={'Entrar'} />
                </div>
            </form>
        </div>
    )
}