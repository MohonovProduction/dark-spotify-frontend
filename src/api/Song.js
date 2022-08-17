import config from "@/api/config";

const Song = {}

Song.upload = async function(data) {
    return new Promise((resolve, reject) => {
        fetch(`${config.domain}/song/upload`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json',
                'connection': 'keep-alive',
            },
            body: JSON.stringify(data),
        })
            .then(data => resolve(data))
            .catch(err => reject(err))
    })
}

export default Song
