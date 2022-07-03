import './loading.css';
import pikahuGift from '../../../assets/pikachu-running.gif';

export default function Loading( {boolean} ) {

    let text = 'Cargando...';

    return (
        <div>
            {
                boolean == true ?
                <div> 
                    <img className='pikachuGif' src={pikahuGift} alt="pikahuGift" />
                    <p>{text}</p>
                </div>
                :
                <div></div>
            }
        </div>
    )
}