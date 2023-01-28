export function getOTP(){
    return fetch('http://localhost:3000/otp')
    .then(data => data.json)
}