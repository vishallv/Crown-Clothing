import React, {useState} from 'react';
import {connect } from 'react-redux';


import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

// import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import {signUpStart} from '../../redux/user/user.action';

import './sign-up.styles.scss';

// class
 const SighUp = ({signUpStart}) => {
//  extends React.Component {

    // constructor() {
    //     super();

        // this.state = {
        //     displayName: '',
        //     email: '',
        //     password: '',
        //     confirmPassword: ''
        // }
    // }

    const [userCredential,setCredential] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const { displayName, email, password, confirmPassword } = userCredential;
    const handleSubmit = async event => {
        event.preventDefault();

        // const { displayName, email, password, confirmPassword } = this.state;
        // const {signUpStart} = this.props;
        if (password !== confirmPassword) {
            alert("Password dont match");
            return;
        }

        signUpStart({displayName, email, password})

        // try {

        //     const { user } = await auth.createUserWithEmailAndPassword(email, password);

        //     await createUserProfileDocument(user,{displayName});

        //     this.setState({
        //         displayName: '',
        //         email: '',
        //         password: '',
        //         confirmPassword: ''
        //     })

        // }
        // catch (error) {
        //     console.log(error);
        // }


    }

    const handleOnChange = (event) => {

        const { name, value } = event.target;

        setCredential({...userCredential, [name]: value });
    }

    // render() {

        // const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className="sign-up">
                <h2 className="title"> I do not have a account</h2>
                <span>Sign up with your email amd passworrd</span>
                <form className="sign-up-form" onSubmit={handleSubmit}>

                    <FormInput
                        type="text"
                        name="displayName"
                        value={displayName}
                        handleChange={handleOnChange}
                        label="Display Name"
                        required
                    />

                    <FormInput
                        type="email"
                        name="email"
                        value={email}
                        handleChange={handleOnChange}
                        label="Email"
                        required
                    />

                    <FormInput
                        type="password"
                        name="password"
                        value={password}
                        handleChange={handleOnChange}
                        label="Password"
                        required
                    />

                    <FormInput
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        handleChange={handleOnChange}
                        label="Confirm Password"
                        required
                    />

                    <CustomButton type="submit">Sign Up</CustomButton>


                </form>
            </div>

        )
    }
// }

const mapDispatchToProps = dispatch =>({
    signUpStart : userCredential => dispatch(signUpStart(userCredential))
})

export default connect(null,mapDispatchToProps)(SighUp);
