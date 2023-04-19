import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function PondPage(props){
    
    console.log(props)
    return(
        <div>
            <Head title={props.title} />
            <h1>{props.description}</h1>
            {props.ponds ? props.ponds.map((data, i) => {
                return(
                    <div key={i}>
                        <p>{data.name}</p>
                        <p>{data.area}</p>
                        <p>{data.shrimpbreed}</p>
                        <p>{data.tonnage}</p>
                    </div>
                )
            }) : ""}
        </div>

    )
}
