import './sign-in.css';
import { Input } from '../../components/Input/input';
import { Link } from 'react-router-dom';
import { ImageText } from '../../components/ImageText/imageText';
import { useForm } from 'react-hook-form';
import { BackButton } from '../../components/BackButton/back-button';

function validateEmail(value) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(value) || 'The email is invalid';
}

function validatePassword(value) {
    if (value.length < 8) {
        return 'Password should be 8 characters long at least';
    }
}



export function SignIn() {
    const {register, formState, handleSubmit} = useForm();
    const { errors } = formState;

    const onFormSubmit = (data) => {
        console.log(data);
    };

    return (
        <div id="sign-in-container">
            <BackButton />
            <form onSubmit={handleSubmit(onFormSubmit)} noValidate>
                <h4>
                    Sign in and pick up where you left off!
                </h4>
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
                <button type="submit" >Sign In!</button>
                <Link to='/sign-up'>Don{'\''}t have an account? Sign Up!</Link>
            </form>
            <span className='vertical'>sign in and resume your studies!</span>
            <ImageText 
            className='sign-up-hero'
            topText='Here are some plants.'
            lowerText='Why? Everyone likes plants.'
            imageAddress='https://plus.unsplash.com/premium_photo-1680082510819-cace32f84aeb?q=80&w=2500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
        </div>
    )
}