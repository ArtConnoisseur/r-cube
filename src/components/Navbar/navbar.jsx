import './navbar.css';
import { Link } from 'react-router-dom';

export function Navbar() {
    return (
        <nav id="navbar">
            <a href="/">
                <h3 id="logo">R<sup>3</sup></h3>
            </a>
            <ul>
                <div className="general-links">
                    <Link to="./sign-up"><li className='links'>Home</li></Link>
                    <a href="#"><li className='links'>About</li></a>
                    <a href="#"><li className='links'>Course Modules</li></a>
                </div>
                <div className='sign-up-links'>
                    <a href="#"><li className='links'>Sign Up</li></a>
                    <a href="#"><li className='links'>Sign In</li></a>
                </div>
            </ul>
        </nav>
    )
}