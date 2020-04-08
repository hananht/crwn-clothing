import React, { Component } from 'react';
import './sign.styles.scss';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

class SignPage extends Component {
    /*
    constructor() {
        super();
    }
    */

    render() {
        return (
            <div className='sign'>
                <SignIn></SignIn>
                <SignUp></SignUp>
            </div>
        )
    }
}

export default SignPage;