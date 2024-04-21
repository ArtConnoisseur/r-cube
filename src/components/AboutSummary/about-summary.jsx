import { Link } from 'react-router-dom';
import './about-summary.css'

function handleCardClick() {
    window.location = '/about/#why-learn';
}

export function AboutSummary() {
    return (
        <div className='about-card-container'>
            <div className='card importance' onClick={() => (handleCardClick())}>
                <img src='https://images.unsplash.com/photo-1491147334573-44cbb4602074?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>    
            </div>
            <div className='card testimonial'>
                <img src='https://plus.unsplash.com/premium_photo-1682310144714-cb77b1e6d64a?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
            </div>
            <div className='card course-content'>
                <img src='https://images.unsplash.com/photo-1540921002383-b2a7ff6a716d?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
            </div>
            <div className='card climate-crisis'>
                <img src='https://plus.unsplash.com/premium_photo-1680193193859-b4835b6c07e1?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
            </div>
            <div className='card free'>
                <img src='https://plus.unsplash.com/premium_photo-1670509045675-af9f249b1bbe?q=80&w=3107&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
            </div>
            <div className='card sponsors'>
                <img src='https://images.unsplash.com/photo-1591635337593-cc06d1cb6157?q=80&w=3092&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
            </div>
        </div>
    )
}
