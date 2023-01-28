export function getUserDetails(){
    return fetch('http://localhost:3000/userDetail')
    .then(data => data.json)
}

export function setDetails(setDetails){
    return fetch('http://localhost:3000/userDetail', {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ setDetails })
    })
    .then(data => data.json())
}