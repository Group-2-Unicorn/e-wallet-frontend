import "./SignUp.css";
import { json, Link } from "react-router-dom";
import image from "../Assets/img.jpeg";
import { getUserDetails, setDetails } from '../APIServices/userDetail';
import React, {useState, useEffect} from 'react';
import Verification from "../Verification/Verification";
import axios from "axios";



function SignUp(){
    const [usersDetail, setUsersDetail] = useState({
        firstName: "",
        lastName: "",
        emailAddress: "",
        password: ""
    }
    )



    const url = "http://localhost:8080/api/v1/registration/register"
    const postData = async () => {
        //console.log(usersDetail)
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(usersDetail),
            headers: {
                "Content-type": "application/json"
            }
        })
        const data = await response.json()
        console.log(data)
        // axios.post(url, {
        //     usersDetail
        // })
        // .then((res) => SignUp(res))
        // .then((res) => SignUp(res));
        // setUsersDetail('');
    };


    
    const [alert, setAlert] = useState(false);

    // useEffect(() => {
    //     let mounted = true;
    //     getUserDetails()
    //         .then(userListDetails => {
    //             if(mounted){
    //                 setUsersDetail(userListDetails)
    //             }
    //         })
    //     return () => mounted = false;
    // },[]);

    useEffect(() => {
        if(alert) {
            setTimeout(() => {
                setAlert(false);
            
            }, 3000)
        }
    }, [alert])

    const handleSubmit = (e) => {
        e.preventDefault();
        setDetails(usersDetail)
        .then(() => {
            setDetails('');
            setAlert(true);
        })
    };



    const [show, setShow] = useState(false);
   const handleChange = (event) => {
    const {name, value} = event.target
    setUsersDetail(() => {
        return {
            ...usersDetail,
            [name]: value
        }
    })
   }
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
                {alert && <Verification />}
                <form 
                    className="sign-up-form">
                    <label>
                        <input 
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
                            value={usersDetail.password} 
                            onChange={handleChange}
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
                    // onClick={() => setShow(true)}
                    style={{textDecoration: "none"}}
                    >
                        {/* <Link className="login-option"  style={{textDecoration: "none"}}>
                            {""}
                        </Link> */}
                    <a href={"/OTP"} style={{textDecoration: "none"}}>
                        <span className="signbtn">Sign Up</span> 
                   </a>
                   <Verification onClose={() => setShow(false)} show={show} />
                </button>
                   
            </div>
        </div>
    )
}

export default SignUp;
