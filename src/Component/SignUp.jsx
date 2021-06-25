import {React, useState} from 'react'
import login1 from '../images/login1.png';
import '../css/sign.css';
import '../css/login.css';
import Details from './Details'
import { Link } from 'react-router-dom';
import eye from '../images/eye.png'

export default function SignUp() {

    const [eyeImg, setEyeImg] = useState(false);
    const [eyeImg1, setEyeImg1] = useState(false);
    const [userErr, setUserErr] = useState(false);
    const [emailErr, setEmailErr] = useState(false);
    const [phoneErr, setPhoneErr] = useState(false);
    const [passErr, setPassErr] = useState(false);
    const [cPassErr, setCPassErr] = useState(false);

    const[pass,checkPass]=useState("");
    // const [state, setstate] = useState({

    //     name: "",
    //     email:"",
    //     phone:"",
    //     password:"",
    //     cpassword:""

    // })

    // const inputText = (e)=> {
    //     const {name, value} = e.target;

    //     setstate((preValue)=>{
    //         return{
    //             ...preValue,
    //             [name]: value,
    //         }
    //     })
    // }

    function userNameHandler(e){
        
        let reg = /^([a-zA-Z\s]){2,15}$/;
        let userName = e.target.value;

        if(reg.exec(userName)){
            setUserErr(false)
        }else{
            setUserErr(true);
        }
    }

    function userEmailHandler(e){

        let reg = /^([_\-.0-9a-zA-Z]+)@([a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
        let userEmail = e.target.value;
        if(reg.exec(userEmail)){
            setEmailErr(false)
        }else{
            setEmailErr(true);
        }
    }

    function userPhoneHandler(e){
        let reg = /([+\-0-9]){10,14}$/;
        let userPhone = e.target.value;

        if(reg.exec(userPhone)){
            setPhoneErr(false);
        }else{
            setPhoneErr(true);
        }
    }

    function userPasswordHandler(e){

        let userPass = e.target.value;
        checkPass(e.target.value)
        if(userPass.length > 7){
            setPassErr(false);
        }else{
            setPassErr(true);
        }
        
    }

    function userCPasswordHandler(e)
    {
        
        if(e.target.value===pass)
        {
            setCPassErr(false);
        }
        else{
                    setCPassErr(true);
                }
    }

    function formHandler(e){
        e.preventDefault();
        // console.log('Click in sign up');
    }

    return (
        <>
            <section className='login'>
                <div className="img"></div>
                <div className='earth-block'></div>
                <div className='center'>
                    <div className="leftSide">
                        <div className='sign'>
                            <img src={login1} alt='loginImage' />
                            <form onSubmit={formHandler}>
                                <input type="text" placeholder='Enter User Name' onChange={userNameHandler} name="name"  autoComplete="off" />
                                { userErr?
                                <>
                                <span style={{color:"red", fontSize:"1.5rem"}}>User Name must be 3-15</span>
                                </>:null
                                }

                                <input type="email" placeholder="Enter email" onChange={userEmailHandler} name="email"  autoComplete="off"/>
                                { emailErr?
                                <>
                                <span style={{color:"red", fontSize:"1.5rem"}}>Invalid Email Address</span>
                                </>:null
                                }

                                <input type="text" placeholder='Enter Phone Number' onChange={userPhoneHandler} name="phone"  autoComplete="off"/>
                                { phoneErr?
                                <>
                                <span style={{color:"red", fontSize:"1.5rem"}}>Wrong Number</span>
                                </>:null
                                }

                                <input type={eyeImg ? "text" : "password"} placeholder="Password" onChange={userPasswordHandler} name="password"  autoComplete="off"/>
                                <img src={eye} alt='eyeImage' onClick={() => setEyeImg(!eyeImg)} style={{
                                    width: "3.5rem",
                                    marginTop: "-3.2rem",
                                    marginLeft: "31rem",
                                    cursor: "pointer"
                                }}/>
                                { passErr?
                                <>
                                <span style={{color:"red", fontSize:"1.5rem"}}>Password Should Be More Then 7 Characters</span>
                                </>:null
                                }


                                <input type={eyeImg1 ? "text" : "password"} placeholder="Conform Password" onChange={userCPasswordHandler} name="cpassword"  autoComplete="off"/>
                                <img src={eye} alt='eyeImage' onClick={() => setEyeImg1(!eyeImg1)} style={{
                                    width: "3.5rem",
                                    marginTop: "-3.2rem",
                                    marginLeft: "31rem",
                                    cursor: "pointer"
                                }}/>
                                { cPassErr?
                                <>
                                <span style={{color:"red", fontSize:"1.5rem"}}>Password Not Match</span>
                                </>:null
                                }

                                <button className='signbtn' type="submit">
                                    Register
                                </button>
                            </form>

                        </div>
                    </div>

                    <div className='rightSide'>
                        <Details />
                        <div className="alreadySign">
                            <p>Already Signed Up?</p>
                            {/* <Link className='signinLink' to="/signin">Sign In</Link> */}
                            <Link className='signinLink' to="/">Sign In</Link>
                        </div>
                    </div>

                </div>

            </section>

        </>
    )
}
