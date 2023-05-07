import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { router } from '@inertiajs/react'
import { Head, usePage, Link } from '@inertiajs/react';
import Swal from 'sweetalert2';

export default function Dashboard({ auth }) {

    const { ponds } = usePage().props
    function destroy(e) {
        e.preventDefault();
        const pondId = e.currentTarget.id;
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                router.delete(route("ponds.destroy", pondId));
                Swal.fire({
                    title: 'Deleted!',
                    text: 'Pond has been deleted.',
                    icon: 'success',
                    confirmButtonText: 'OK'
                }).then(() => {
                    window.location.reload();
                });
            }
        });
    }
    // function getIndex(){
    //     for(let i = 0; i < ponds.length; i++){
    //         return i +1;
    //     }
    // }

    
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Ponds</h2>}
        >
            <Head title="Ponds" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
  
                            <div className="flex items-center justify-between mb-6">
                                <Link
                                    className="px-6 py-2 text-white bg-green-500 rounded-md focus:outline-none"
                                    href={ route("ponds.create") }
                                >
                                    Create Pond
                                </Link>
                            </div>
  
                            <table className="table-fixed w-full">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="px-4 py-2 w-20">Pond Id</th>
                                        <th className="px-4 py-2">Pond Name</th>
                                        <th className="px-2 py-2 w-20">Area</th>
                                        <th className="px-4 py-2">Shrimp Breed</th>
                                        <th className="px-3 py-2 w-20">Tonnage</th>
                                        <th className="px-4 py-2">Action</th>
                                        <th className="px-4 py-2">ESP Setting</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {ponds.map(({ id, name, area, shrimpbreed, tonnage }) => (
                                        <tr>
                                            <td className="border px-4 py-2 justify-center">{ ponds.length }</td>
                
                                            <td className="border px-4 py-2 justify-center" key={ponds}>{ name }</td>
                                            <td className="border px-3 py-2 justify-center">{ area }</td>
                                            <td className="border px-4 py-2 justify-center">{ shrimpbreed }</td>
                                            <td className="border px-3 py-2 justify-center">{ tonnage }</td>
                                            <td className="border px-4 py-2 flex justify-center">
                                                <Link
                                                    tabIndex="1"
                                                    className="px-4 py-2 text-sm text-white bg-blue-500 rounded"
                                                    href={route("ponds.edit", id)}
                                                >
                                                    Edit
                                                </Link>
                                                <button
                                                    onClick={destroy}
                                                    id={id}
                                                    tabIndex="-1"
                                                    type="button"
                                                    className="mx-1 px-4 py-2 text-sm text-white bg-red-500 rounded"
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
  
                                    {ponds.length === 0 && (
                                        <tr>
                                            <td
                                                className="px-6 py-4 border-t"
                                                colSpan="4"
                                            >
                                                No Ponds Added.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
