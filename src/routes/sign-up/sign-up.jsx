import './sign-up.css';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Input } from '../../components/Input/input';
import { ImageText } from '../../components/ImageText/imageText';
import { BackButton } from '../../components/BackButton/back-button';

let passwordValue = '-1';

function onFormSubmit(data) {
    console.log(data);
}

function validateEmail(value) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(value) || 'The email is invalid';
}

function validateFullName(value) {
    const regex = /^[a-zA-Z]+ [a-zA-Z]+$/;
    return regex.test(value) || 'Name should have space between first and last name';
}

function validatePassword(value) {
    passwordValue = value;

    if (value.length < 8) {
        return 'Password should be 8 characters long at least';
    }

    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    return regex.test(value) || 'Use Special Characters!';
}

function validateConfirmPassword(value) {
    if (passwordValue === '-1') 
        return 'Please enter password first!';
    else
        return value === passwordValue || 'The passwords do not match!';
}


export function SignUp() {
    const {register, formState, handleSubmit} = useForm();
    const { errors } = formState;

    const onFormSubmit = (data) => {
        console.log(data);
    };

    return (
        <div id="sign-up-container">
            <BackButton />
            <form onSubmit={handleSubmit(onFormSubmit)} noValidate>
                <h4>Sign up and start learning today!</h4>
                <Input 
                    fieldname={'Full Name'}
                    placeholder={'John Doe | Should contain at least one space'}
                    type={'email'}
                    displayFN={true}
                    error={errors.fullName?.message}
                    registerInput={{...register('fullName',
                        {
                            required: 'This feild is required!',
                            validate: (value) => validateFullName(value),
                        }
                    )}}
                />
                <Input 
                    fieldname={'Email'}
                    placeholder={'username@example.com'}
                    type={'email'}
                    displayFN={true}
                    error={errors.email?.message}
                    registerInput={{...register('email', 
                    {
                        required: 'This feild is required!',
                        validate: (value) => validateEmail(value)
                    }
                    )}}
                />
                <Input 
                    fieldname={'Password'}
                    placeholder={'Should contain @/&/$ etc.'}
                    type={'password'}
                    displayFN={true}
                    error={errors.password?.message}
                    registerInput={{...register('password', {
                        required: 'This feild is required!',
                        validate: (value) => validatePassword(value)
                    }
                    )}}
                />
                <Input 
                    fieldname={'Confirm Password'}
                    placeholder={'Enter the same passwords as above'}
                    type={'password'}
                    displayFN={true}
                    error={errors.confirmPassword?.message}
                    registerInput={{...register('confirmPassword', {
                        required: 'This feild is required!',
                        validate: (value) => validateConfirmPassword(value)
                    }
                    )}}
                />
                <button type="submit">Sign Up!</button>
                <Link to="/sign-in">Already have an account? Sign In!</Link>
            </form>
            <span className="vertical">We welcome you to R - Cube</span>
            <ImageText
                className="sign-up-hero"
                topText="Here are some plants."
                lowerText="Why? Everyone likes plants."
                imageAddress="https://plus.unsplash.com/premium_photo-1680082510819-cace32f84aeb?q=80&w=2500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
        </div>
    );
}
