import './imageText.css';

export function ImageText({ topText, imageAddress, lowerText, className }) {
    return (
        <div className={className}>
            <div className='img-container'>
                <span className='upper-left-container'>{topText || "Check us out baby!"}</span>
                <img src={imageAddress}/>
                <span className='lower-right-container'>{lowerText || "Hello!"}</span>
            </div>
        </div>
    )
}
