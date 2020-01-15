import React from 'react';
import { connect} from 'react-redux';

import { googleSignInStart , emailSignInStart} from '../../redux/user/user.action';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
// import { signInWithGoogle , auth } from '../../firebase/firebase.utils';


import './sign-in.styles.scss';


class SignIn extends React.Component {

    constructor() {

        super();
        this.state = {
            email: '',
            password: ''
        }


    }
    handleSubmit = async event => {
        event.preventDefault();
        const { emailSignInStart} = this.props;
        const {email , password} =this.state;

        emailSignInStart(email,password);

        // try{
        //     await auth.signInWithEmailAndPassword(email,password);
        //     this.setState({ email: '', password: '' })

        // }
        // catch(error){
        //     // console.log(error)
        //     alert(error.message)
        // }
        

        

    }

    handleChange = event => {

        const { value, name } = event.target;

        this.setState({ [name]: value })
    }

    render() {
        const { googleSignInStart } =this.props;
        return (
            <div className="sign-in">
                <h2 className='title'>I already have an account </h2>
                <span>Sign in with email and password</span>

                <form onSubmit={this.handleSubmit}>

                    <FormInput name="email" type="email"
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label="email"
                        required />


                    <FormInput name="password"
                        type="password"
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label="password"
                        required />

                    <div className="buttons">
                        <CustomButton type="submit"> Sign In</CustomButton>
                        <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn> Sign In With Google</CustomButton>
                    </div>
                </form>
            </div>

        );
    }
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email,password}))
})

export default connect(null,mapDispatchToProps)(SignIn);