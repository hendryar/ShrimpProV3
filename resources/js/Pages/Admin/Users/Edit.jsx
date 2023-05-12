import React from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head, useForm, usePage, Link } from '@inertiajs/react';

export default function Edit({ auth }) {
    const { editedUser } = usePage().props;
    const { data, setData, put, errors } = useForm({
        editedname: editedUser.name || "",
        employee_id: editedUser.employee_id || "",
        email: editedUser.email || "",
        role: editedUser.role || "",
        phone: editedUser.phone || "",
        address: editedUser.address || "",
    });
  
    function handleSubmit(e) {
        e.preventDefault();
        put(route("manageusers.update", editedUser.id));
    }
    return (
        <AdminLayout
            // user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Edit User</h2>}
        >
            <Head title="Edit User" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
  
                            <div className="flex items-center justify-between mb-6">
                                <Link
                                    className="px-6 py-2 text-white bg-blue-500 rounded-md focus:outline-none"
                                    href={ route("manageusers.index") }
                                >
                                    Back
                                </Link>
                            </div>

                            <form name="createForm" onSubmit={handleSubmit}>
                                <input type="hidden" name="id" value={editedUser.name} />
                                <div className="flex flex-col">
                                    <div className="mb-4">
                                        <label className="">Name</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-2"
                                            label="Name"
                                            name="name"
                                            value={data.editedname}
                                            onChange={(e) =>
                                                setData("editedname", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.editedname}
                                        </span>
                                    </div>
                                    
                                    <div className="mb-4">
                                        <label className="">Employee ID</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-2"
                                            label="Emploee_ID"
                                            name="employee_id"
                                            value={data.employee_id}
                                            onChange={(e) =>
                                                setData("employee_id", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.employee_id}
                                        </span>
                                    </div>
                                    <div className="mb-4">
                                        <label className="">Email Address</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-2"
                                            label="Email"
                                            name="email"
                                            value={data.email}
                                            onChange={(e) =>
                                                setData("email", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.email}
                                        </span>
                                    </div>
                                    <div className="mb-4">
                                        <label className="">Role</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-2"
                                            label="Role"
                                            name="role"
                                            value={data.role}
                                            onChange={(e) =>
                                                setData("role", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.role}
                                        </span>
                                    </div>
                                    <div className="mb-4">
                                        <label className="">Phone</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-2"
                                            label="Phone"
                                            name="phone"
                                            value={data.phone}
                                            onChange={(e) =>
                                                setData("phone", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.phone}
                                        </span>
                                    </div>
                                    <div className="mb-4">
                                        <label className="">Address</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-2"
                                            label="Address"
                                            name="address"
                                            value={data.address}
                                            onChange={(e) =>
                                                setData("address", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.address}
                                        </span>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <button
                                        type="submit"
                                        className="px-6 py-2 font-bold text-white bg-green-500 rounded"
                                    >
                                        Update
                                    </button>
                                </div>
                            </form>
  
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
