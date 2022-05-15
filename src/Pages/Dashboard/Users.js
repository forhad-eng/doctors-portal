import React from 'react'
import { useQuery } from 'react-query'
import LoadingSpinner from '../Shared/LoadingSpinner'

const Users = () => {
    const { data, isLoading } = useQuery('users', () =>
        fetch('http://localhost:5000/user', {
            headers: { authorization: `Bearer ${localStorage.getItem('accessToken')}` }
        }).then(res => res.json())
    )

    if (isLoading) {
        return <LoadingSpinner />
    }

    const makeAdmin = email => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Make an admin success')
                } else {
                    alert(data.message)
                }
            })
    }

    return (
        <div class="overflow-x-auto mt-3">
            <table class="table table-compact w-full">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>User</th>
                        <th>JOB</th>
                        <th>ACtion</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((user, index) => (
                        <tr>
                            <th>{index + 1}</th>
                            <td>{user.email}</td>
                            <td>
                                {user.role !== 'admin' && (
                                    <button onClick={() => makeAdmin(user.email)} className="btn btn-xs">
                                        Make admin
                                    </button>
                                )}
                            </td>
                            <td>
                                <button className="btn btn-xs">Remove user</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Users
