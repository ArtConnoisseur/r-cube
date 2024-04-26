import './navbar.css';
import { Link } from 'react-router-dom';

export function Navbar() {
    return (
        <nav id="navbar">
            <Link to="/">
                <h3 id="logo">R<sup>3</sup></h3>
            </Link>
            <ul>
                <div className="general-links">
                    <Link to="/"><li className='links'>Home</li></Link>
                    <Link to="/about"><li className='links'>About</li></Link>
                    <Link to="/course-modules"><li className='links'>Course Modules</li></Link>
                    <Link to='/feedback'><li className='links'>Feedback</li></Link>
                </div>
                <div className='sign-up-links'>
                    <Link to="/sign-up"><li className='links'>Sign Up</li></Link>
                    <Link to="/sign-in"><li className='links'>Sign In</li></Link>
                </div>
            </ul>
        </nav>
    )
}