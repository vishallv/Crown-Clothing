import React, {useState} from 'react';
import { connect} from 'react-redux';

import { googleSignInStart , emailSignInStart} from '../../redux/user/user.action';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
// import { signInWithGoogle , auth } from '../../firebase/firebase.utils';


import './sign-in.styles.scss';


// class 
const SignIn = ({emailSignInStart,googleSignInStart}) => { 

    const [userCredential , setCredential] = useState({email:'',password:''});
// extends React.Component {

    // constructor() {

    //     super();
    //     this.state = {
    //         email: '',
    //         password: ''
    //     }


    // }
    const {email , password} = userCredential;
    const handleSubmit = async event => {
        event.preventDefault();
        // const { emailSignInStart} = this.props;
        

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

    const handleChange = event => {

        const { value, name } = event.target;

        setCredential({...userCredential, [name]: value })
    }

    // render() {
        // const { googleSignInStart } =this.props;
        return (
            <div className="sign-in">
                <h2 className='title'>I already have an account </h2>
                <span>Sign in with email and password</span>

                <form onSubmit={handleSubmit}>

                    <FormInput name="email" type="email"
                        value={email}
                        handleChange={handleChange}
                        label="email"
                        required />


                    <FormInput name="password"
                        type="password"
                        value={password}
                        handleChange={handleChange}
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
// }

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email,password}))
})

export default connect(null,mapDispatchToProps)(SignIn);