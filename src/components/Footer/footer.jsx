import { Link } from 'react-router-dom';
import './footer.css';

export function Footer() {
    return (
        <footer className="footer">
            <h3 className='accent'>R<sup>3</sup></h3>
            <div className='socials-section'>
                <h5>Check Out Our Socials!</h5>
                <div className='footer-socials'>
                    <a><i className="fa-brands fa-instagram"></i></a>
                    <a><i className="fa-brands fa-x-twitter"></i></a>
                    <a><i className="fa-brands fa-meta"></i></a>
                    <a><i className="fa-brands fa-linkedin"></i></a>
                </div>
            </div>
            <div className='course-references-section'>
                <h5>Our References:</h5>
                <ul className='footer-list'>
                    <a><li>Wikipedia</li></a>
                    <a><li>Springer</li></a>
                    <a><li>Fancis and Taylor</li></a>
                    <a><li>Prof. Atredies</li></a>
                </ul>
            </div>
            <div className='alumni-section'>
            <h5>Our Notable Alumni:</h5>
                <ul className='footer-list'>
                    <a><li>Siya Vermani</li></a>
                    <a><li>Nihal Pinto</li></a>
                    <a><li>Nikhil Pinto</li></a>
                    <a><li>Rudraksh Srivastava</li></a>
                </ul>
            </div>
            <div>
                <h5>Sign Up Liks</h5>
                <ul className='footer-list'>
                    <Link to='/sign-up'><li>Sign Up</li></Link>
                    <Link to='/sign-in'><li>Sign In</li></Link>
                </ul>
            </div>
            <div className='copyright'>
            © The R-Cube Project 22BCT0157 Webdev Mini Project
            </div>
        </footer>
    )
}