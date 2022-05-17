import React from 'react'
import { toast } from 'react-toastify'

const DeleteConfirmModal = ({ deletingDoctor, setDeletingDoctor, refetch }) => {
    const { name, email } = deletingDoctor

    const removeDoctorHandle = () => {
        fetch(`http://localhost:5000/doctor/${email}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    refetch()
                    toast.success(data.message)
                    setDeletingDoctor(null)
                }
            })
    }

    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Are you sure?</h3>
                    <p class="py-4">You want to remove {name}?</p>
                    <div class="modal-action">
                        <label onClick={removeDoctorHandle} for="delete-confirm-modal" class="btn btn-sm btn-error">
                            Proceed
                        </label>
                        <label for="delete-confirm-modal" class="btn btn-sm">
                            Cancel
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeleteConfirmModal
