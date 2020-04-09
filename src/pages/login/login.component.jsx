import React, { Component } from 'react';
import './login.styles.scss';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

class LoginPage extends Component {
    render() {
        return (
            <div className='sign'>
                <SignIn></SignIn>
                <SignUp></SignUp>
            </div>
        )
    }
}

export default LoginPage;