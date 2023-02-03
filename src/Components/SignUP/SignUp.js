import "./SignUp.css";
import { Link} from "react-router-dom";
import  {useNavigate } from 'react-router-dom';
import image from "../Assets/img.jpeg";
import React, {useState, useEffect} from 'react';
import Verification from "../Verification/Verification";

function SignUp(){
   
    const [usersDetail, setUsersDetail] = useState({
        firstName: "",
        lastName: "",
        emailAddress: "",
        password: ""
    })

    const navigate = useNavigate();

    // const [showModal, setShowModal] = useState(false);

    // const toggleModal = () => setShowModal(!showModal);

    
    const [alert, setAlert] = useState(false);

    

    useEffect(() => {
        if(alert) {
            setTimeout(() => {
                setAlert(false);
            
            }, 3000)
        }
    }, [alert])


   const handleChange = (event) => {
    const {name, value} = event.target
    setUsersDetail((prevState) => {
        return {
            ...prevState,
            [name]: value
        }
    })
   }
   
   const url = "https://7f53-154-113-161-131.eu.ngrok.io/api/v1/registration/register"

   const postData = async (event) => {
    event.preventDefault();
       console.log(usersDetail)
       const response = await fetch(url, {
           method: 'POST',
           body: JSON.stringify(usersDetail),
           headers: {
               "Content-type": "application/json"
           }
       })
       const data = await response.json()
       console.log(data)
       navigate("/OTP", {
        state:{
            emailAddress: usersDetail.emailAddress,
            password: usersDetail.password
        }
       })

    }
    
    return(
        <div className="signup-container">
            <div className="sign-up-left-container"> 
                <img className="logo" src={image} alt=""/>
            </div>

            <div className="sign-up-right-container">
                <h2 className='header-texts'>Welcome!</h2>
                <h4 className="headers-paragraph">Sign up by entering the information below</h4>
                <div className="form-container">
                    {/* {alert && <Verification onClose={() => setShowModal(false)} show={showModal}  />} */}
                    <form 
                        method="post"
                        className="sign-up-form"
                        
                        >
                        <label>
                            <input 
                                className="firstName"
                                value={usersDetail.firstName} 
                                onChange={handleChange}
                                name="firstName"
                                type="text"
                                placeholder="First Name"
                                required
                            />
                        </label>

                        <label>
                            <input 
                                className="lastName"
                                value={usersDetail.lastName} 
                                onChange={handleChange}
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                                required
                            />
                        </label>
                        
                        <label>
                            <input 
                                className="email"
                                type="email"
                                value={usersDetail.emailAddress} 
                                onChange={handleChange}
                                name="emailAddress"
                                placeholder="email"
                                required
                            />
                        </label>

                        <label>
                            <input 
                                className="passwords"
                                value={usersDetail.password} 
                                onChange={handleChange}
                                type="password"
                                name="password"
                                placeholder="Password"
                                required
                            />
                        </label>
                    </form>
            
                <div className="options-container">
                    <p className='signup-option'>Already have an account?</p>
                    <p>
                        <Link to="/LogIn" className="login-option" style={{textDecoration: "none"}}>
                            {""}
                            <span className="login-option">Login</span> 
                        </Link>
                        
                    </p>
                </div>
                <button 
                    to="/OTP"
                    className="signup-submit-button"
                    type="submit"
                    onClick={postData}       
                    style={{textDecoration: "none"}}
                    >
                       <Link to="/OTP">
                        {""}
                        
                        
                        </Link>
                        <span className="signup-submit-text">Sign Up</span> 
                </button>
                {/* <Verification  /> */}
                   
            </div>
        </div>
    </div>
)
}

export default SignUp;
