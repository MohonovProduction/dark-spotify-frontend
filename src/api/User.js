import config from "@/api/config";

const User = {}

User.authorization = async function(data) {
    console.log(JSON.stringify(data))
    return new Promise((resolve, reject) => {
        fetch(`${config.domain}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'connection': 'keep-alive'
            },
            body: JSON.stringify(data)
        })
            .then(data => resolve(data))
            .catch(err => reject(err))
    })
}

User.isAuthorized = function() {
    const token = localStorage.getItem('token')
    console.log('checkAuth', token, typeof token)
    return token != null
}

User.createUser = async function(data) {
    console.log(data)
    return new Promise((resolve, reject) => {
        fetch(`${config.domain}/auth/reg`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'connection': 'keep-alive'
            },
            body: JSON.stringify(data)
        })
            .then(data => resolve(data))
            .catch(err => reject(err))
    })
}

User.setToken = function(token) {
    localStorage.setItem('token', token)
}

export default User
