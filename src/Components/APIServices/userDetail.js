export function getUserDetails(){
    return fetch('http://localhost:3000/userDetail')
    .then(data => data.json)
}

export function setItem(elements){
    return fetch('http://localhost:3000/userDetail', {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ elements })
    })
    .then(data => data.json())
}