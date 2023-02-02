import { Link, useLocation } from "react-router-dom";
import './otp.css'
import React, {useState, useEffect} from 'react';
import image from "../Assets/img.jpeg";

const OTP = () => {
    const [otp, setOtp] = useState("");
    const [error, setError] = useState('');
    const location = useLocation()
    const {emailAddress} = location.state

    const [inputFields, setInputFields] = useState([
        { name: "field1", value: "" },
        { name: "field2", value: "" },
        { name: "field3", value: "" },
        { name: "field4", value: "" },
      ]);
    
    const url = "https://7f53-154-113-161-131.eu.ngrok.io/api/v1/registration/verify"


    const handleChange = (index, event) => {
        const newInputFields = [...inputFields];
        newInputFields[index].value = event.target.value;
        setInputFields(newInputFields);
      };
      
      


    const verify = async (par) => {
        const response = await fetch( url, {
            method: 'POST',
            body: JSON.stringify(par),
            headers: {
                "Content-type": "application/json"
            }
        })
        const data = await response.json()
        if (data.error) {
            setError(data.error)
        } else {
            console.log(data)
        }
    }

    const postData = () => {
        const otpObj = {
            emailAddress: emailAddress,
            oneTimePassword: otp
        }
        verify(otpObj)
    }
    const handleOtp = (event) => {
        const {value} = event.target
        setOtp(value)
    }

    return (
        <div className="otp-container">
            <div className="otp-left-side"> 
                <img className="otp-image" src={image} alt=""/>
            </div>

            <div className="otp-right-container">
            {inputFields.map((inputField, index) => (
                <div className="input-container" key={inputField.name}>
                    {error && <p className='error'>{error}</p>}
                    <input
                        name={inputField.name}
                        type="text"
                        className="otp-input-box"
                        value={inputField.value}
                        onChange={(event) => handleChange(index, event)}
                        placeholder="-"
                        required
                    />
                </div>
                            ))}
                        
                        <button 
                            className="otp-btn"
                            onClick={postData} 
                        >
                            <Link to="/LogIn">
                                Continue
                            </Link>
                        </button>
               
            </div>
            
        </div>
    );
}

export default OTP;






// import { Link, useLocation } from "react-router-dom";
// import './otp.css'
// import React, {useState, useEffect} from 'react';
// import image from "../Assets/img.jpeg";


// const OTP = () => {
//     const [otp, setOtp] = useState("");
//     const location = useLocation()
//     const {emailAddress} = location.state
//     const url = "https://7f53-154-113-161-131.eu.ngrok.io/api/v1/registration/verify"

//     const verify = async (par) => {
//         const response = await fetch( url, {
//             method: 'POST',
//             body: JSON.stringify(par),
//             headers: {
//                 "Content-type": "application/json"
//             }
//         })
//         const data = await response.json()
//         console.log(data)
//     }

//     const postData = () => {
//         const otpObj = {
//             emailAddress: emailAddress,
//             oneTimePassword: otp
//         }
//         console.log(otpObj)
//         verify(otpObj)
//     }
//     const handleOtp = (event) => {
//         const {value} = event.target
//         setOtp(value)
//     }

//     return (
//         <div className="otp-container">
//             <div className="otp-left-side"> 
//                 <img className="image" src={image} alt=""/>
//             </div>

//             <div className="otp-right-container">
//                 <div className="otp-form-container">
//                     <div className="otp-right-side">
//                         <p className='otp-text'>Enter your OTP number</p>
//                     </div>
//                     <div className="otp-form-div">

//                     <form>
//                         <input
//                             type="text"
//                             onClick={verify}
//                             placeholder="-"
//                             required
//                             value={otp}
//                             onChange={handleOtp}
//                         />
//                         </form>
//                         <button 
//                             to="/LogIn" 
//                             onClick={postData} 
//                             className="otp-btn">
//                             <Link to="/LogIn">
//                             {""}
//                             Continue
//                         </Link>
//                     </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default OTP;