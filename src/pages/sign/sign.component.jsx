import React, { Component } from 'react';
import './sign.styles.scss';

import SignIn from '../../components/sign-in/sign-in.component';

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
            </div>
        )
    }
}

export default SignPage;