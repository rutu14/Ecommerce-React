import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { useUserActions } from '../../context';
import { Alert, DotsLoader } from '../../components';
import './auth.css'

const SignUpPage = () => {
    const navigate = useNavigate();
    const { state, signup } = useUserActions();
    const { loader, tokenPresent, signuperror, signuperrorMsg } = state;
    const [ viewAlert, setViewAlert ] = useState(false);
    const closeAlert = () => setViewAlert(false);
    const [ signupInputs, setSignupInputs ] = useState({ firstname: "" , lastname: "", email: "",password: "" })
    console.log( signupInputs )
    console.log( tokenPresent )

    useEffect(()=>{
        if( tokenPresent){
            setTimeout(() => {navigate('/')}, 0);
            console.log('User signed in')
            console.log(state)
        }
        if( signuperror ) {
            setViewAlert(true) 
        } 
    },[ tokenPresent,signuperror])

    const handleChange = e => {
        const { name, value } = e.target;
        setSignupInputs(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const onSubmit = () =>{
        signup( signupInputs.firstname, signupInputs.lastname, signupInputs.email, signupInputs.password)
    }

    return(        
        <main>
            {viewAlert && <Alert customClass={'loginerror signerror'} action={'error'} closefn={closeAlert} title={'Error in SignUp'} description={signuperrorMsg} />}
            <section className="login-container">
            <h1 className="heading2 medium font-color">Register Yourself</h1>
            <article className="login-box m-t20">
                <form className="inner-login-box" >

                    <label htmlFor="firstname-input" className="text4 font-color">First Name</label>
                    <input id="firstname-input" className="text-input login-input" value={signupInputs.firstname} name='firstname' type="email" onChange={handleChange}/>

                    <label htmlFor="lastname-input" className="text4 font-color m-t10">Last Name</label>
                    <input id="lastname-input" className="text-input login-input" value={signupInputs.lastname} name='lastname' type="email" onChange={handleChange}/>

                    <label htmlFor="email-input" className="text4 font-color m-t10">Email</label>
                    <input id="email-input" className="text-input login-input" value={signupInputs.email} name='email' type="email" onChange={handleChange}/>

                    <label htmlFor="password-input" className="text4 font-color m-t10">Password</label>
                    <input id="password-input" className="text-input login-input" value={signupInputs.password} name='password' type="password" onChange={handleChange}/>

                    { loader 
                    ?  <DotsLoader />
                    : <button className="btn btn-primary login-btn text-uppercase m-t10" onClick={onSubmit} type="button">Sign Up</button> 
                    } 

                    <Link to={"/login"} className="btn-link td text-center m-t10" role="button">Login</Link>

                </form>                
            </article>
        </section>
        </main>
    );
}

export { SignUpPage }