import "./SignUp.css";
import { Link } from "react-router-dom";
import image from "../Assets/img.jpeg";
import { getUserDetails, setDetails } from '../APIServices/userDetail';
import React, {useState, useEffect} from 'react';
import Verification from "../Verification/Verification";
import axios from "axios";



function SignUp(){
    const [usersDetail, setUsersDetail] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    }
    )

        // POST request using fetch()
    fetch("http://localhost:8080/api/v1/registration/register", {
        
    // Adding method type
    method: "POST",
    
    // Adding body or contents to send
    body: JSON.stringify({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    }),
    
    // Adding headers to the request
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
    })

    // Converting to JSON
    .then(response => response.json())

    // Displaying results to console
    .then(json => console.log(json));

    // const url = "http://localhost:8080/api/v1/registration/register"
    // const postData = (e) => {
    //     e.preventDefault();
    //     axios.post(url, {
    //         usersDetail
    //     })
    //     .then((res) => console.log(res))
    //     .then((res) => console.log(res));
    //     setUsersDetail('');
    // };


    
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
                <form onSubmit={handleSubmit} className="sign-up-form">
                    <label>
                        <input 
                            value={usersDetail.firstName} 
                            onChange={event => setUsersDetail(event.target.value)}
                            type="text"
                            placeholder="First Name"
                            required
                        />
                    </label>

                    <label>
                        <input 
                            value={usersDetail.lastName} 
                            onChange={event => setUsersDetail(event.target.value)}
                            type="text"
                            placeholder="Last Name"
                            required
                        />
                    </label>
                    
                    <label>
                        <input 
                            type="email"
                            value={usersDetail.email} 
                            onChange={event => setUsersDetail(event.target.value)}
                            placeholder="email"
                            required
                        />
                    </label>

                    <label>
                        <input 
                            value={usersDetail.password} onChange={event => setUsersDetail(event.target.value)}
                            type="password"
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
                        <Link to="/OTP">
                                {""}
                            {/* <span className="sign_span">Sign Up</span> */}
                        </Link>
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
