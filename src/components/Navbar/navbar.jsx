import './navbar.css';

function Navbar() {
    return (
        <nav id="navbar">
            <ul>
                <li className='links'>Home</li>
                <li className='links'>About</li>
                <li className='links'>Course Modules</li>
                <div className='sign-up-links'>
                    <li className='links'>Sign Up</li>
                    <li className='links'>Sign In</li>
                </div>
            </ul>
        </nav>
    )
}

export default Navbar;