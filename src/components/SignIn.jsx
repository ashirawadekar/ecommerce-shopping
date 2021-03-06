import React from 'react';

import FormInput from './FormInput';
import CustomButton from './CustomButton';

import {signInWithGoogle} from '../firebase/firebase.utils';

import './SignIn.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({ email: '', password: ''});
    }

    handleChange = (event) => {
        const {value, name} = event.target;

        this.setState({ [name]: value})
    }

    render() {
        return (
            <div className='sign-in'>
                <h2 className='title'>I already have an account</h2>
                <span>Sign In with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                           type='email'
                           name='email'
                           value={this.state.email}
                           handleChange={this.handleChange}
                           label='Email'
                        //    required
                    />
                    <FormInput 
                           type='password'
                           name='password'
                           value={this.state.password}
                           handleChange={this.handleChange}
                           label='Password'
                        //    required
                    /> 
                    <div className='buttons'>
                        <CustomButton type='submit'>
                            Sign In
                        </CustomButton>
                        <CustomButton onClick={signInWithGoogle} 
                                    isGoogleSignIn
                        >
                            Sign In with Google
                        </CustomButton>
                    </div>
                    
                </form>
            </div>
        );
    }
}

export default SignIn;