import React, { useState } from 'react'
import { useQuery } from 'react-query'
import LoadingSpinner from '../Shared/LoadingSpinner'
import DeleteConfirmModal from './DeleteConfirmModal'

const ManageDoctor = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null)
    const {
        data: doctors,
        isLoading,
        refetch
    } = useQuery('all-doctors', () =>
        fetch('http://localhost:5000/doctor', {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json())
    )

    if (isLoading) {
        return <LoadingSpinner />
    }

    return (
        <div>
            <h2 className="text-2xl">Manage Doctors</h2>
            <div class="overflow-x-auto mt-3">
                <table class="table table-compact w-full">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Doctor</th>
                            <th>Name</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {doctors?.map((doctor, index) => (
                            <tr>
                                <th>{index + 1}</th>
                                <td>
                                    <div class="avatar">
                                        <div class="w-10 mask mask-squircle">
                                            <img src={doctor.image} alt="Doctor" />
                                        </div>
                                    </div>
                                </td>
                                <td>{doctor?.name}</td>
                                <td>{doctor?.specialty}</td>
                                <td>
                                    <label
                                        onClick={() => setDeletingDoctor(doctor)}
                                        for="delete-confirm-modal"
                                        class="btn btn-xs btn-error"
                                    >
                                        Remove
                                    </label>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {deletingDoctor && (
                <DeleteConfirmModal
                    deletingDoctor={deletingDoctor}
                    setDeletingDoctor={setDeletingDoctor}
                    refetch={refetch}
                />
            )}
        </div>
    )
}

export default ManageDoctor
