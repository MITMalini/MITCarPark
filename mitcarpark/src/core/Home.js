import React, { useEffect, useState } from "react";
import './home.css';
import MITLogo from "./MITLogo.png";
import GoogleLogo from "./GoogleLogo.png"
import 'firebase/auth';
// import { db } from './firebase';
import { Link, useNavigate } from "react-router-dom";
import { auth, signInWithEmailAndPassword, signInWithGoogle } from "./firebase-config";
import { useAuthState } from "react-firebase-hooks/auth";


const Home = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading] = useAuthState(auth);

    const navigate = useNavigate();
    useEffect(() => {
        if (loading) {
            // maybe trigger a loading screen
            return;
        }
        if (user) navigate("/floor4");
    }, [user]);
    // }, [user, loading]);

    return (
        <div className='container'>
            <div className='container1'>
                <div className='container2' >
                    <div className='bg'></div>
                    <div className='container5'>
                        <h1 className='text'>
                            <span className='text1' >
                                Vehicle
                            </span>
                            <br></br>
                            <span className='text1' >
                                Parking
                            </span>
                            <br></br>
                            <span className='text1' >
                                Management
                            </span>
                            <br></br>
                            <span className='text1' >
                                System
                            </span>
                            <br></br>
                        </h1>
                    </div>
                </div>
                <div className='container3'>
                    <img src={MITLogo} alt="logo" style={{ width: "50%", height: "auto" }}></img>
                    <h1 className='Heading'>USER SIGN IN</h1>
                    <div className='container7'>
                        <div className='container11'>
                            <div className='container12'><label className="container8" htmlFor="Email">Email</label></div>
                            <input
                                type="text"
                                className="form"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="E-mail Address"
                            />
                            <div className='container12'><label className="container8" htmlFor="Password">Password</label></div>
                            <input
                                type="password"
                                className="form"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                            />
                            <div className='container13'>
                                <Link className="fptext" to="/reset">Forgot Password?</Link>
                            </div></div>
                        <div className="container9">
                            <button
                                className="loginbutton"
                                onClick={() => signInWithEmailAndPassword(email, password)}>LOGIN</button>
                            <p className="text2" >Or Sign In using</p>
                            <input type="image" src={GoogleLogo} onClick={signInWithGoogle} style={{ width: "5%", height: "auto" }} />
                        </div>
                        <br></br>
                        <div className="container10">
                            <div className="text10">
                                Don't have an account? <Link to="/register">Register</Link> now.
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home

