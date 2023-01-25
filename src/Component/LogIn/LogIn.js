import React, { useState } from "react";
import "./LogIn.css";
import axios from "axios";
import { Link } from "react-router-dom";



function LogIn() {
    const [email, setEmail] = useState([]);
    const [password, setPassword] = useState([]);

    const baseUrl = "https://jsonplaceholder.typicode.com/posts";

    const postData = (e) => {
        e.preventDafualt();
        axios.post(baseUrl, {
            email,
            password,
        })
        .then((res) => console.log(res))
        .catch((res) => console.log(res));

        setEmail("");
        setPassword("");
    };

    return(
        <div className="login">
            <div className="login_left"></div>
            <div className="login_right">
                <h2>Welcome Back!</h2>
                <h4>Log in to your Dashboard</h4>
                <form>
                    <label>
                        <div>Email:</div>
                        <input className="input_box"
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </label>

                    <label>
                        <div>Password:</div>
                        <input className="input_box"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </label>
                    <div className="remember">
                    <p>Remember Me</p>
                    <p>
                        <Link className="pass" to="/ForgetPassword" style={{textDecoration: "none"}}>
                            {""}
                            Forget Password?
                        </Link>
                    </p>
                    </div>
                    <button className="login_submit" onClick={postData}>
                        Log In
                    </button>
                    <div className="sign_link">
                    <p>
                        Dont't have an Account?
                    </p>
                    <p>
                    <Link to="/SignUp">
                            {""}
                            <span>Sign Up</span>
                        </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LogIn;