import './chat.css';
import cruzeta from '../../../assets/cruzeta.svg';

export default function Chat() {
    return (
        <footer className='footer-pokedex'>
            <div className='form-chat'>
                <div className='chat'>
                    <div className='screen-messages'></div>
                    <div className='chatting'>
                        <input type="text" spellcheck="false" />
                        <button>Enviar</button>
                    </div>
                </div>
            </div>
            <img src={cruzeta} alt="cruzeta" />
        </footer>
    )
}