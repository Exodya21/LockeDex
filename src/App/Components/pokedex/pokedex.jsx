import './pokedex.css';
import Chat from '../chat/chat';

function Pokedex() {
    return (
        <div className='container-pokedex'>
            <div className='screen-pokedex'>
                <div className='screen'>
                    
                </div>

                <div className='lights-red-green'>
                    <div className='light-off'></div>
                    <div className='light-off'></div>
                </div>
            </div>

            <div className='buttons-pokedex'>
                <div className='btns-pk'>
                    <button className='btn-grey'></button>
                    <div className='buttons-large'>
                        <button className='btn-yellow'></button>
                        <button className='btn-grey2'></button>
                    </div>
                </div>
                <input className='searcher' placeholder={'Busca un pokemon...'} type="text" spellCheck="false" />
            </div>

            <Chat />
        </div>
    )
}

export default Pokedex;