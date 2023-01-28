import { Link } from "react-router-dom";
import './otp.css'
import image from "../Assets/img.jpeg";


const OTP = () => {

    return (
        <div className="otp-container">
            <div className="otp-left-side"> 
                <img className="image" src={image} alt=""/>
            </div>

            <div className="otp-right-container">
                <div className="otp-form-container">
                    <div className="otp-right-side">
                        <p className='otp-text'>Enter your OTP number</p>
                    </div>
                    <div className="otp-form-div">
                        <form className='otp-form'>
                            <label>
                                <input 
                                className="input-btn"
                                type="password"
                                placeholder="-"
                                required
                                />
                            </label>

                            <label>
                                <input 
                                className="input-btn"
                                type="password"
                                placeholder="-"
                                required
                                />
                            </label>

                            <label>
                                <input 
                                className="input-btn"
                                type="password"
                                placeholder="-"
                                required
                                />
                            </label>

                            <label>
                                <input 
                                className="input-btn"
                                type="password"
                                placeholder="-"
                                required
                                />
                            </label>
                        </form>
                        <button 
                            className="otp-btn"
                            to="/Verification" 
                            // onClick={() => setShow(true)}
                        >
                        <Link >
                            {""}
                        </Link>
                        <a href="/Verification" style={{textDecoration: "none"}}>
                        <span className="otpbtn">Continue</span> 
                   </a></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OTP;