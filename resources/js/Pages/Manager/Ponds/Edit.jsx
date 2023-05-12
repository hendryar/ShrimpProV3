import React, { useState } from 'react';
import { router } from '@inertiajs/react'
import ManagerLayout from '@/Layouts/ManagerLayout';
import Swal from 'sweetalert2';
import { Head, useForm, usePage, Link } from '@inertiajs/react';

export default function Edit({ auth }) {

    const { pond } = usePage().props;
    
    const { data, setData, put, errors } = useForm({
        name: pond.name || "",
        area: pond.area || "",
        shrimpbreed: pond.shrimpbreed || "",
        tonnage: pond.tonnage || "",
    });

    console.log("logging pond: " + pond.length);
    
  
    function handleSubmit(e) {
        e.preventDefault();
        put(route("managerponds.update", pond.id), {
          preserveState: true,
          onSuccess: () => {
            Swal.fire({
              title: 'Success!',
              text: 'Pond updated successfully',
              icon: 'success',
              buttons: {
                confirm: {
                  text: 'OK',
                  className:
                    'bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full',
                  closeModal: true,
                },
              },
            }).then((result) => {
                if (result.isConfirmed) {
                    router.visit(route('managerponds.index'));
                }
              });
          },
        });
      }

    return (
        <ManagerLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Edit Pond</h2>}
        >
            <Head title="Edit Ponds" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
  
                            <div className="flex items-center justify-between mb-6">
                                <Link
                                    className="px-6 py-2 text-white bg-blue-500 rounded-md focus:outline-none"
                                    href={ route("managerponds.index") }
                                >
                                    Back
                                </Link>
                            </div>

                            <form name="createForm" onSubmit={handleSubmit}>
                                {/* //TODO: Add hidden input for id by Mahendra */}
                                <input type="hidden" name="id" value={pond.id} />
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
        </ManagerLayout>
    );
}
