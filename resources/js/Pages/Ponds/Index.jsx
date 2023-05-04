import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { router } from '@inertiajs/react'
import { Head, usePage, Link } from '@inertiajs/react';
import Swal from 'sweetalert2';


export default function Dashboard({ auth }) {
  const { ponds } = usePage().props;

  function destroy(id) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this pond!',
      icon: 'warning',
      buttons: {
        cancel: {
          text: 'Cancel',
          value: false,
          visible: true,
          className: 'bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-full',
          closeModal: true,
        },
        confirm: {
          text: 'Delete',
          value: true,
          visible: true,
          className: 'bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full',
          closeModal: true,
        },
      },
    }).then((willDelete) => {
      if (willDelete) {
        router.delete(route('ponds.destroy', id)).then(() => {
          Swal.fire({
            title: 'Success!',
            text: 'Pond successfully deleted',
            icon: 'success',
            buttons: {
              confirm: {
                text: 'OK',
                className: 'bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full',
                closeModal: true,
              },
            },
          });
        });
      }
    });
  }
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          Ponds
        </h2>
      }
    >
      <Head title="Ponds" />
  
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 bg-white border-b border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <Link
                  className="px-6 py-2 text-white bg-green-500 rounded-md focus:outline-none"
                  href={route("ponds.create")}
                >
                  Create Pond
                </Link>
              </div>
  
              {ponds.length === 0 ? (
                <div className="text-gray-500 text-lg text-center">
                  No Ponds Added.
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {ponds.map((pond) => (
                    <div
                      key={pond.id}
                      className="bg-white overflow-hidden shadow rounded-lg"
                    >
                      <div className="p-4">
                        <h3 className="font-bold text-lg mb-2">{pond.name}</h3>
                        <p className="text-gray-700 mb-2">{pond.shrimpbreed}</p>
                        <p className="text-gray-700 mb-2">{pond.area}</p>
                        <p className="text-gray-700 mb-2">{pond.tonnage} tons</p>
                        <div className="flex justify-between">
                        <Link
                                                    tabIndex="1"
                                                    className="px-4 py-2 text-sm text-white bg-blue-500 rounded"
                                                    href={route("ponds.edit", pond.id)}
                                                >
                                                    Edit
                                                </Link>
                          <button
                            onClick={() => deletePond(pond.id)}
                            tabIndex="-1"
                            type="button"
                            className="mx-1 px-4 py-2 text-sm text-white bg-red-500 rounded"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
  
                  }