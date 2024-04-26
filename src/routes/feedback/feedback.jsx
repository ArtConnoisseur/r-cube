import { useForm } from 'react-hook-form';
import { Input } from '../../components/Input/input';
import { ImageText } from '../../components/ImageText/imageText';
import { BackButton } from '../../components/BackButton/back-button';
import './feedback.css';

function onFormSubmit(data) {
    console.log(data);
}

export function Feedback() {
    const { register, control, handleSubmit, formState } = useForm(); 
    const { errors } = formState;

    return (
        <div className='feedback-form'>
            <BackButton />
            <form onSubmit={handleSubmit(onFormSubmit)} noValidate>
                <h2>We would love to hear from you!</h2>
                <Input 
                    fieldname={'Subject'}
                    placeholder={'Subject of feedback'}
                    type={'text'}
                    displayFN={true}
                    error={errors.subject?.message}
                    registerInput={{...register('subject',
                        {
                            required: 'This feild is required!',
                            maxLength: {
                                value: 30,
                                message: 'Subject line is too long! Max: 30 chars.'
                            }
                        }
                    )}}
                />
                <Input 
                    fieldname={'Content'}
                    placeholder={'Subject of feedback'}
                    type={'textarea'}
                    displayFN={true}
                    error={errors.content?.message}
                    registerInput={{...register('content',
                        {
                            required: 'This feild is required!',
                            maxLength: {
                                value: 500,
                                message: "Message is too long! Max: 500 chars."
                            }
                        }
                    )}}
                />
                <button type='submit'>Submit Feedabck!</button>
            </form>
            <ImageText
                className="sign-up-hero"
                topText="We love hearing from you!"
                lowerText="Send us your feedback!"
                imageAddress="https://plus.unsplash.com/premium_photo-1680082510819-cace32f84aeb?q=80&w=2500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
        </div>
    )
}

