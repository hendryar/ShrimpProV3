import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';


export default function Homepage(props){
    console.log(props)
    return(
        
        <div className = 'flex justify-center items-center min-h-screen'>
            <Head title={props.title} />
            <h1>{props.description}</h1>
        </div>

    )
}