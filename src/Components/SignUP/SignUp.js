import "./SignUp.css";
import { json, Link } from "react-router-dom";
import image from "../Assets/img.jpeg";
import React, {useState, useEffect} from 'react';
import Verification from "../Verification/Verification";



function SignUp(){

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassWord] = useState("")
    
    // const [usersDetail, setUsersDetail] = useState({
    //     firstName: "",
    //     lastName: "",
    //     emailAddress: "",
    //     password: ""
    // }
    // )

    const url = "http://localhost:8080/api/v1/registration/register"
    const postData = async () => {
        console.log(firstName, lastName, email, password )
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(firstName, lastName, email, password ),
            headers: {
                "Content-type": "application/json"
            }
        })
        const data = await response.json()
        console.log(data)
    };


    
    const [alert, setAlert] = useState(false);

    useEffect(() => {
        if(alert) {
            setTimeout(() => {
                setAlert(false);
            
            }, 3000)
        }
    }, [alert])


    const [show, setShow] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
    }
//    const handleChange = (event) => {
//     const {name, value} = event.target
//     setFirstName, setLastName, setEmail, setPassWord (() => {
//         return {
//             ...firstName, lastName, email, password ,
//             [name]: value
//         }
//     })
//    }
    return(
        <div className="Signup-container">
            <div className="left-side"> 
                <img className="images" src={image} alt=""/>
            </div>

            <div className="form-container">
                <div className="right-side">
                    <h3 className='welcome'>Welcome!</h3>
                    <p className='signup-info'>Sign up by entering the information below</p>
                </div>
                {alert && <Verification onClose={() => setShow(false)} show={show}  />}
                <form 
                    onSubmit={handleSubmit}
                    className="sign-up-form">
                    <label>
                        <input 
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            // value={usersDetail.firstName} 
                            // onChange={handleChange}
                            name="firstName"
                            type="text"
                            placeholder="First Name"
                            required
                        />
                    </label>

                    <label>
                        <input 
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            // value={usersDetail.lastName} 
                            // onChange={handleChange}
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            required
                        />
                    </label>
                    
                    <label>
                        <input 
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            // value={usersDetail.emailAddress} 
                            // onChange={handleChange}
                            name="emailAddress"
                            placeholder="email"
                            required
                        />
                    </label>

                    <label>
                        <input 
                            value={password}
                            onChange={(e) => setPassWord(e.target.value)}
                            // value={usersDetail.password} 
                            // onChange={handleChange}
                            type="password"
                            name="password"
                            placeholder="Password"
                            required
                        />
                    </label>

                </form>
            
                <div className="optionsContainer">
                    <p className='signup-option'>Already have an account?</p>
                        <p>
                            <Link className="login-option" to="/LogIn" style={{textDecoration: "none"}}>
                                {""}
                                LogIn
                            </Link>
                        </p>
                </div>
                <button 
                    className="signup-btn"
                    type="submit"
                    onClick={postData}
                   
                    style={{textDecoration: "none"}}
                    >
                        <Link to="/OTP">
                                {""}
                            
                        </Link>
                    <a href="/OTP" style={{textDecoration: "none"}}>
                        <span className="signbtn">Sign Up</span> 
                   </a>
                   {/* <Verification onClose={() => setShow(false)} show={show} /> */}
                </button>
                   
            </div>
        </div>
    )
}

export default SignUp;
