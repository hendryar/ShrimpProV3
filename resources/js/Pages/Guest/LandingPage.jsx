import GuestLayout from '@/Layouts/GuestLayout';
import ManagerLayout from '@/Layouts/ManagerLayout';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head } from '@inertiajs/react';

export default function LandingPage({ auth }) {
    // const isLoggedIn = auth.user ? true : false;
    // if(isLoggedIn == true){
    //     if(auth.user.role == 'manager'){
    //         return(
    //             <ManagerLayout>Manager In</ManagerLayout>
    //         );
    //     }
    //     else{
    //         return(
    //             <AdminLayout>Admin In</AdminLayout>
    //         );
    //     }
    // }
    // else{
    //     return(
            <GuestLayout
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Welcome To ShrimpPRO</h2>}
        >
            <Head title="Welcome" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <h1>Website Under Construction!</h1>

                        </div>
                    </div>
                </div>
            </div>
        </GuestLayout>
    //     );
    // }
    const isLoggedIn = auth.user ? true : false;
    const role = auth.user ? auth.user.role : null;

  let layoutComponent;

  if (role === 'admin') {
    layoutComponent = 
    <AdminLayout>
        <p>Admin In</p>
    </AdminLayout>;
  } else if (role === 'manager') {
    layoutComponent = <ManagerLayout>
        <p>Manager In</p>
    </ManagerLayout>;
  } else {
    layoutComponent = <GuestLayout />;
  }

  return (
    <div>
      {isLoggedIn ? (
        layoutComponent
      ) : (
        <GuestLayout
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Welcome To ShrimpPRO</h2>}
        >
            <Head title="Welcome" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <h1>Website Under Construction!</h1>

                        </div>
                    </div>
                </div>
            </div>
        </GuestLayout>
      )}
    </div>
  );
}
