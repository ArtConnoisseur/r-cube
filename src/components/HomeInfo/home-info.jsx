import { ImageLinks } from '../ImageLinks/image-links';
import './home-info.css';


export function HomeInfo({ imageAddress, header, imageText, infoPara, links, learnLink }) {
    return (
        <div className='home-info-container'>
            <div className='home-info-text'>
                <h2>{header}</h2>
                <p>{infoPara}</p>
                <button onClick={() => window.location = learnLink} className='home-info-button'>Learn More</button>
            </div>
            <div id='about-image-links'>
                    <ImageLinks imageAdress={imageAddress} 
                    links={links}
                    text='Our impact! ->'/>
            </div>
        </div>

    )
}