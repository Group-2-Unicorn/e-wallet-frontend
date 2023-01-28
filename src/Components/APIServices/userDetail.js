export function getUserDetails(){
    return fetch('http://localhost:3000/userDetail')
    .then(data => data.json)
}