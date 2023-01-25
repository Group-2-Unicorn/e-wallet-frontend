import "./SignUp.css";
import { Link } from "react-router-dom";
import LogIn from "../LogIn/LogIn";

function SignUp(){
    return(
        <div className="Signup-container">
            <div className="left-side"> 
                <img src="../Assets/img.jpeg" alt=""/>
            </div>

            <div className="form-container">
                <div className="right-side">
                    <h3 className='welcome'>Welcome!</h3>
                    <p className='signup-info'>Sign up by entering the information below</p>
                </div>
                <form>
                    <label>
                        <input className="input_box"
                            type="text"
                            placeholder="First Name"
                            required
                        />
                    </label>

                    <label>
                        <input className="input_box"
                            type="text"
                            placeholder="Last Name"
                            required
                        />
                    </label>
                    
                    <label>
                        <input className="input_box"
                            type="text"
                            placeholder="Email"
                            required
                        />
                    </label>

                    <label>
                        <input className="input_box"
                            type="text"
                            placeholder="Password"
                            required
                        />
                    </label>

                </form>
            
                <div className="remember">
                    <p className='signup-option'>Already have an account?</p>
                        <p>
                            <Link className="pass" to="/LogIn" style={{textDecoration: "none"}}>
                                {""}
                                Login
                            </Link>
                        </p>
                </div>
            </div>
        </div>
    )
}

export default SignUp;
