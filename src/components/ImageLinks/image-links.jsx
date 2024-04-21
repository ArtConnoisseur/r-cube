import { Link } from 'react-router-dom';
import './image-links.css';

export function ImageLinks({ imageAdress, links = [], text }) {
    const linkList = Array.from(links).map((link, ind) => {
        if (link) {
            return (<li key={ind+1}><Link to={link} ><i className="fa-solid fa-up-right-from-square"></i></Link></li>)
        }
    })

    return (
        <div className='link-image-container'>
            <img src={imageAdress}/>
            <ul className='link-image-links'>
                {linkList}
            </ul>
            <button>
                {text || ''}
            </button>
        </div>
    )
}