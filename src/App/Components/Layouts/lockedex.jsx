import './lockedex.css';

export default function Lockedex(props) {
    return (
        <div className='container-lockedex' >
            <div className='screen-lockedex'>
                {props.children}
            </div>
        </div>
    )
}
