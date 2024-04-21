import './sign-in.css';
import { Input } from '../../components/Input/input';
import { Link } from 'react-router-dom';
import { useState } from 'react';


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
        </div>
    )
}