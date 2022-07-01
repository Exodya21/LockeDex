import './loading.css';
import pikahuGift from '../../../assets/pikachu-running.gif';

export default function Loading() {

    let text = 'Cargando...';

    return (
        <div>
            <img className='pikachuGif' src={pikahuGift} alt="pikahuGift" />
            <p>{text}</p>
        </div>
    )
}