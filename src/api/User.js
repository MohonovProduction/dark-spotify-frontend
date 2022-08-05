import config from './config'

const User = {}

User.authorization = async function(data) {
    console.log(JSON.stringify(data))
    return new Promise((resolve, reject) => {
        fetch(`${config.domain}/auth/login`, {
            method: 'POST',
            mode: 'cors',
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

User.checkAuthorization = function() {
    const token = localStorage.getItem('token')
    console.log('checkAuth', token, typeof token)
    switch (token) {
        case null:
            return false
        case undefined:
            return false
        case '':
            return false
        default:
            return true
    }
}

export default User
