import React from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { router } from '@inertiajs/react'
import { Head, usePage, Link } from '@inertiajs/react';
import Swal from 'sweetalert2';

export default function Index({ auth }) {
  const { users } = usePage().props;

  function destroy(id) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this user',
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
      if (willDelete.isConfirmed) {
          router.delete(route('manageusers.destroy', id)).then(() => {
            router.reload();
          });
      }
    });

  }

  return (
    <AdminLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          Manage Users
        </h2>
      }
    >
      <Head title="Manage Users" />
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 bg-white border-b border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <Link
                  className="px-6 py-2 text-white bg-green-500 rounded-md focus:outline-none"
                  href={route("manageusers.create")}
                >
                  Register a Manager
                </Link>
              </div>
              {users.length === 0 ? (
                <div className="text-gray-500 text-lg text-center">
                  No Users Added.
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {users.map((user) => (
                    <div
                      key={user.id}
                      className="bg-white overflow-hidden shadow rounded-lg"
                    >
                      <div className="p-4">
                        <h3 className="font-bold text-lg mb-4 text-center">{user.name} - {user.role}</h3>
                        <p className="text-gray-700 mb-2">Employee ID: {user.employee_id}</p>
                        <p className="text-gray-700 mb-4">Email: {user.email}</p>
                        <p className="text-gray-700 mb-2">Phone: {user.phone}</p>
                        <p className="text-gray-700 mb-2">Address: {user.address}</p>
                        <div className="grid grid-flow-col justify-stretch mt-4">
                        <Link
                          tabIndex="1"
                          className="mx-1 px-4 py-2 text-sm text-white bg-indigo-500 rounded text-center"
                          
                          href={route("manageusers.edit", user.id)}
                        >Edit
                        </Link>
                          {user.role !== 'admin' && (
                          <button
                            onClick={() => destroy(user.id)}
                            tabIndex="-1"
                            type="button"
                            className="mx-1 px-4 py-2 text-sm text-white bg-rose-500 rounded"
                          >
                            Delete
                          </button>
                        )}
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
      
    </AdminLayout>
  );  
}