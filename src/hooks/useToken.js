import { useEffect, useState } from 'react'

const useToken = user => {
    const [token, setToken] = useState('')

    useEffect(() => {
        const email = user?.user?.email
        if (email) {
            fetch(`http://localhost:5000/user/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ email })
            })
                .then(res => res.json())
                .then(data => {
                    localStorage.setItem('accessToken', data.accessToken)
                    setToken(data.accessToken)
                })
        }
    }, [user])

    return [token]
}

export default useToken
