import { Link } from 'react-router-dom';

import './back-button.css';

export function BackButton() {
    return (
        <Link to="" className="back-button" onClick={() => (history.back())}>
            <i className="fa-solid fa-arrow-left"></i>
        </Link>
    );
}