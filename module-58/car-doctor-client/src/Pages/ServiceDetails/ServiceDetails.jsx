import { Link, useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
    const loadedData = useLoaderData()
    return (
        <div className="flex flex-col items-center">
            <h2 className="text-5xl font-bold text-[#1c1c1c]">Service Details</h2>

            <div className="flex flex-col items-center border-[#FF3811] border rounded-xl py-10 w-full my-14">
               <p className="text-2xl font-semibold text-center">You selected <span className="font-extrabold">{loadedData.title}</span>  service.
                Do you want to proceed?
            </p> 
             <Link to={`/serviceCheckout/${loadedData.service_id}`}  >
            <button className="btn button1 mt-8">Check Out</button>
            </Link>
            </div>
            
           
        </div>
    );
};

export default ServiceDetails;