import React from 'react'
import images from '../Assets/img.jpeg'
import './signup.css'


function SignUp(){
    return (
        <div className='container-signup'>
            <div className='content-signup'>
                <img className='image' src={images} alt="logo" />
            </div>

            <div className='content-signup'>
                <div className='top'>
                    <h3 className='welcome'>Welcome!</h3>
                    <p className='signup-info'>Sign up by entering the information below</p>
                </div>
                <div className='form-container'>
                    <form className="form">
                        <input placeholder='First Name' type="text" />
                        <input placeholder='Last Name' type="text" />
                        <input placeholder='Email' type="email" />
                        <input placeholder='Password' type="password" /> 
                        <div className='options'>
                            <p className='signup-option'>Already have an account?</p>
                            <a className='login-tag' href="http://gfg.com">Login</a>
                        </div>  
                    </form>
                </div>
                
                <div>
                    <button className='signup-btn' type='submit'>Sign Up</button>   
                </div>

            </div>
        </div>
    )
}

export default SignUp