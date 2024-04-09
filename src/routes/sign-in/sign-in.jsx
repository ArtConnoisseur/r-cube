import './sign-in.css';
import { Input } from '../../components/Input/input';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Scenery() {
    return (
        <svg width="2229" height="448" viewBox="0 0 2229 448" fill="none" xmlns="http://www.w3.org/2000/svg" id='sup-scenery'>
        <path d="M525.223 123.733C426.978 122.137 181.276 47.2459 70.7062 10L36 294L2123.71 283.358C2141.28 217.069 2165.89 80.9002 2123.71 66.534C2070.98 48.5761 1671.19 145.682 1609.79 145.682C1548.39 145.682 1027.01 43.9204 923.01 43.9204C653.369 43.9204 648.03 125.728 525.223 123.733Z" fill="#7ABF8D"/>
        <path d="M499.774 22.6267C401.554 21.0265 121.218 132.637 10.6761 95.3002L0 448L2215.95 355.325C2233.52 288.874 2238.77 204.377 2196.6 189.976C2143.89 171.974 1804.92 -12.0433 1453.95 0.624609C1163.88 11.0941 972.19 157.973 868.766 168.64C765.341 179.308 622.549 24.6269 499.774 22.6267Z" fill="#97D534"/>
        </svg>
    )
}

export function SignIn() {
    const [ emailError, setEmailError ] = useState('');
    const [ passwordError, setPasswordError ] = useState('');

    let email;
    let password;

    function handleOnBlurEmail(event) {
        event.preventDefault();

        const regex = /([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|"([]!#-[^-~ \t]|(\\[\t -~]))+")@([0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?(\.[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?)*|\[((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|IPv6:((((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){6}|::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){5}|[0-9A-Fa-f]{0,4}::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){4}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):)?(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){3}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,2}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){2}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,3}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,4}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::)((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3})|(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3})|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,5}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3})|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,6}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::)|(?!IPv6:)[0-9A-Za-z-]*[0-9A-Za-z]:[!-Z^-~]+)])/;

        if (!(event.target.value)) {
            setEmailError('Please enter an emai!');
        } else if(!regex.test(event.target.value)) {
            setEmailError('Enter a valid email!');
        } else {
            email = event.target.value;
            setEmailError('');
        }
    }

    function handleOnBlurPassword(event) {
        event.preventDefault();

        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;

        if (!(event.target.value)) {
            setPasswordError('You HAVE to enter a password!')
        } else if(event.target.value.length < 8) {
            setPasswordError('Password should be at least 8 characters long!');
        } else {
            password = event.target.value;
            setPasswordError('');
        }
    }

    const handleOnSubmit = (event) => {
        event.preventDefault(); 

        console.log(email, password)
    }

    return (
        <div id="sign-up-container">
            <form onSubmit={(event) => {handleOnSubmit(event)}}>
                <h4>
                    Sign in and pick up where you left off!
                </h4>
                <Input fieldname='Email' displayFN={true} type="input" placeholder='username@example.com' onBlur={(e) => {handleOnBlurEmail(e)}} error={emailError} />
                <Input fieldname='Password' displayFN={true} type="password" placeholder='Should contain @/#/$ etc.' onBlur={(e) => {handleOnBlurPassword(e)}} error={passwordError} />
                <button type="submit" >Sign In!</button>
                <Link to='/sign-up'>Don{'\''}t have an account? Sign Up!</Link>
            </form>
            <Scenery />
        </div>
    )
}