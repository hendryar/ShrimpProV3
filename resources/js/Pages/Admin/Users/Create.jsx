import React, { useState} from 'react';
import { router } from '@inertiajs/react'
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { useEffect } from 'react';
import { redirect } from "react-router-dom";
  
import AdminLayout from '@/Layouts/AdminLayout';
import { Head, useForm, Link } from '@inertiajs/react';
import Swal from 'sweetalert2';

export default function Create({ auth }) {
  
 

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);


  
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        employee_id: '',
        address: '',
        phone: '',
        password: '',
        password_confirmation: '',
    });
 
    const [formSubmitting, setFormSubmitting] = useState(false);
    // function handleSubmit(e) {
    //     e.preventDefault();
    //     setFormSubmitting(true);
    //     post(route('manageusers.store'), {
    //       preserveState: true,
    //       onSuccess: () => {
    //         Swal.fire({
    //           title: 'Success!',
    //           text: 'User created successfully',
    //           icon: 'success',
    //           buttons: {
    //             confirm: {
    //               text: 'OK',
    //               className:
    //                 'bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full',
    //               closeModal: true,
    //             },
    //           },
    //         });
    //       },
    //     });
    //   }
    function handleSubmit(e) {
        e.preventDefault();
        setFormSubmitting(true);
        post(route('manageusers.store'), {
          preserveState: true,
          onSuccess: () => {
            Swal.fire({
              title: 'Success!',
              text: 'User created successfully',
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
                    router.visit(route('manageusers.index'));
                }
              });
          },
        });
      }

    return (
        <AdminLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Create Pond</h2>}
        >
            <Head title="Register User" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
  
                            <div className="flex items-center justify-between mb-6">
                                <Link
                                    className="px-6 py-2 text-white bg-indigo-500 rounded-md focus:outline-none"
                                    href={ route("manageusers.index") }
                                >
                                    Back
                                </Link>
                            </div>
  
                            {/* <form name="createForm" onSubmit={handleSubmit}>
                                <div className="flex flex-col">
                                    <div className="mb-4">
                                        <label className="">Name</label>
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
                                    </div>
                                    <div className="mb-4">
                                        <label className="">email</label>
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



                            </form> */}
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <InputLabel htmlFor="name" value="Name" />

                                    <TextInput
                                        id="name"
                                        name="name"
                                        value={data.name}
                                        className="mt-1 block w-full"
                                        autoComplete="name"
                                        isFocused={true}
                                        onChange={(e) => setData('name', e.target.value)}
                                        required
                                    />

                                    <InputError message={errors.name} className="mt-2" />
                                </div>
                                {/* Employee ID */}
                                <div className='mt-4'>
                                    <InputLabel htmlFor="employee_id" value="Employee ID" />

                                    <TextInput
                                        id="employee_id"
                                        name="employee_id"
                                        value={data.employee_id}
                                        className="mt-1 block w-full"
                                        autoComplete="employee_id"
                                        isFocused={true}
                                        onChange={(e) => setData('employee_id', e.target.value)}
                                        required
                                    />

                                    <InputError message={errors.employee_id} className="mt-2" />
                                </div>
                                {/* Employee address */}
                                <div className='mt-4'>
                                    <InputLabel htmlFor="address" value="Address" />

                                    <TextInput
                                        id="address"
                                        name="address"
                                        value={data.address}
                                        className="mt-1 block w-full"
                                        autoComplete="address"
                                        isFocused={true}
                                        onChange={(e) => setData('address', e.target.value)}
                                        required
                                    />

                                    <InputError message={errors.address} className="mt-2" />
                                </div>
                                {/* Employee address */}
                                <div className='mt-4'>
                                    <InputLabel htmlFor="phone" value="Phone Number" />

                                    <TextInput
                                        id="phone"
                                        name="phone"
                                        value={data.phone}
                                        className="mt-1 block w-full"
                                        autoComplete="phone"
                                        isFocused={true}
                                        onChange={(e) => setData('phone', e.target.value)}
                                        required
                                    />
                                    
                                    <InputError message={errors.phone} className="mt-2" />
                                </div>
                                
                                {/* email box */}
                                <div className="mt-4">
                                    <InputLabel htmlFor="email" value="Email" />

                                    <TextInput
                                        id="email"
                                        type="email"
                                        name="email"
                                        value={data.email}
                                        className="mt-1 block w-full"
                                        autoComplete="username"
                                        onChange={(e) => setData('email', e.target.value)}
                                        required
                                    />

                                    <InputError message={errors.email} className="mt-2" />
                                </div>
                                {/* Password box */}
                                <div className="mt-4">
                                    <InputLabel htmlFor="password" value="Password" />

                                    <TextInput
                                        id="password"
                                        type="password"
                                        name="password"
                                        value={data.password}
                                        className="mt-1 block w-full"
                                        autoComplete="new-password"
                                        onChange={(e) => setData('password', e.target.value)}
                                        required
                                    />

                                    <InputError message={errors.password} className="mt-2" />
                                </div>
                                {/* password confirm box */}
                                <div className="mt-4">
                                    <InputLabel htmlFor="password_confirmation" value="Confirm Password" />

                                    <TextInput
                                        id="password_confirmation"
                                        type="password"
                                        name="password_confirmation"
                                        value={data.password_confirmation}
                                        className="mt-1 block w-full"
                                        autoComplete="new-password"
                                        onChange={(e) => setData('password_confirmation', e.target.value)}
                                        required
                                    />

                                    <InputError message={errors.password_confirmation} className="mt-2" />
                                </div>
                                {/* Login button down below */}
                                <div className="flex items-center justify-end mt-4">
                                    {/* Register button */}
                                    <PrimaryButton className="ml-4" disabled={processing}>
                                        Register
                                    </PrimaryButton>
                                </div>
                            </form>
  
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}