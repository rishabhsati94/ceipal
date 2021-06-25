import { React, useState } from 'react';
import '../css/sign.css';
import '../css/login.css';
import Details from './Details'
import login1 from '../images/login1.png'
import { Link } from 'react-router-dom';
import eye from '../images/eye.png'



export default function SignIn() {

    const [eyeImg, setEyeImg] = useState(false);

    function formHandler(e) {
        e.preventDefault();
        // console.log('Click in sign in');
    }


    return (
        <>
            <section className='login'>
                <div className="img"></div>
                <div className='earth-block'></div>
                <div className='center'>
                    <div className="leftSide">
                        <Details />
                        <div className="alreadySign">
                            <p> Don't have an account?</p>
                            <Link className='signupLink' to="/signup"> Sign Up</Link>
                        </div>
                    </div>

                    <div className='rightSide'>
                        <div className='sign'>
                            <img src={login1} alt='loginImage' />
                            <h2>Sign In</h2>
                            <form onSubmit={formHandler}>
                                <input type="email" placeholder="Enter email" />
                                <input type={eyeImg ? "text" : "password"} placeholder="Password" />
                                <img src={eye} alt='eyeImage' onClick={() => setEyeImg(!eyeImg)} style={{
                                   width: "3.5rem",
                                   marginTop: "-3.2rem",
                                   marginLeft: "31rem",
                                   cursor: "pointer"
                                }}/>

                                <button className='signbtn' type="submit">
                                    SIGN IN
                                </button>
                            </form>
                        </div>
                    </div>

                </div>

            </section>

        </>
    )
}
