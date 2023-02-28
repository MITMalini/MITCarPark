import React, { useEffect, useState } from "react";
import './reset.css';
import MITLogo from "./MITLogo.png";
import 'firebase/auth';
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, sendPasswordResetEmail } from "./firebase-config";


const ForgetPassword = (props) => {
    const [email, setEmail] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (loading) return;
        if (user) navigate("/dashboard");
    }, [user, loading]);

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
                    <img src={MITLogo} alt="logo" style={{ width: "50%", height: "auto" }}></img><br></br>
                    <div className="reset">
                        <div className="reset__container">
                            <div className="reset__container1">
                            <input
                                type="text"
                                className="reset__textBox"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="E-mail Address"
                            />
                            <button
                                className="reset__btn"
                                onClick={() => sendPasswordResetEmail(email)}
                            >
                                Send password reset email
                            </button>
                            <div>
                                Don't have an account? <Link to="/register">Register</Link> now.
                            </div>
                            </div>
                            
                        </div>
                    </div>

                </div>   </div></div>
    )
}

export default ForgetPassword;

