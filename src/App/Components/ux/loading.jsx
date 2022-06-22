import './loading.css';
import pikahuGift from '../../../assets/pikachu-running.gif';

export default function Loading() {
    return (
        <div>
            <img className='pikachuGif' src={pikahuGift} alt="pikahuGift" />
            <p>Cargando...</p>
        </div>
    )
}