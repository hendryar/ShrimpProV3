import React from 'react';
import ManagerLayout from '@/Layouts/ManagerLayout';
import { Head, useForm, Link } from '@inertiajs/react';
import Swal from 'sweetalert2';

export default function Dashboard({ auth }) {
  
    const { data, setData, errors, post } = useForm({
        title: "",
        description: "",
    });
  
    function handleSubmit(e) {
        e.preventDefault();
      
        if (data.name && data.area && data.shrimpbreed && data.tonnage) {
          Swal.fire({
            title: 'Success!',
            text: 'Data has been saved.',
            icon: 'success',
            confirmButtonText: 'Ok',
          }).then((result) => {
            if (result.isConfirmed) {
              post(route('managerponds.store'));
            }
          });
        } else {
          Swal.fire({
            title: 'Error!',
            text: 'Please fill all fields.',
            icon: 'error',
            confirmButtonText: 'Ok',
          });
        }
    }
  
    return (
        <ManagerLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Create Pond</h2>}
        >
            <Head title="Ponds" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
  
                            <div className="flex items-center justify-between mb-6">
                                <Link
                                    className="px-6 py-2 text-white bg-indigo-500 rounded-md focus:outline-none"
                                    href={ route("managerponds.index") }
                                >
                                    Back
                                </Link>
                            </div>
  
                            <form name="createForm" onSubmit={handleSubmit}>
                                <div className="flex flex-col">
                                    <div className="mb-4">
                                        <label className="">Pond Name</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-2"
                                            label="Name"
                                            name="name"
                                            value={data.name}
                                            onChange={(e) =>
                                                setData("name", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.name}
                                        </span>
                                    </div>
                                    <div className="mb-4">
                                        <label className="">Pond Area</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-2"
                                            label="Area"
                                            name="area"
                                            value={data.area}
                                            onChange={(e) =>
                                                setData("area", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.area}
                                        </span>
                                    </div>
                                    <div className="mb-4">
                                        <label className="">Shrimp Breed</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-2"
                                            label="ShrimpBreed"
                                            name="shrimpbreed"
                                            value={data.shrimpbreed}
                                            onChange={(e) =>
                                                setData("shrimpbreed", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.shrimpbreed}
                                        </span>
                                    </div>
                                    <div className="mb-4">
                                        <label className="">Tonnage</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-2"
                                            label="Tonnage"
                                            name="tonnage"
                                            value={data.tonnage}
                                            onChange={(e) =>
                                                setData("tonnage", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.tonnage}
                                        </span>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <button
                                        type="submit"
                                        className="px-6 py-2 font-bold text-white bg-green-400 rounded" 
                                    >
                                        Save
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </ManagerLayout>
    );
}