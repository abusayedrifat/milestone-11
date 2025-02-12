import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const OurServices = ({service}) => {

    const {price,title,img,service_id} = service
    return (
        <div className="border p-5 rounded-2xl space-y-5 text-left">
            <img src={img} alt="" className=" rounded-lg"/>
            <h3 className="text-2xl font-extrabold">{title}</h3>
            <div className="flex justify-between items-center font-extrabold  text-[#FF3811] text-lg">
            <p > Price : ${price}  </p>
            <Link to={`/serviceDetails/${service_id}`}><FaArrowRight></FaArrowRight></Link>
            
            </div>
        </div>
    );
};

export default OurServices;

OurServices.propTypes = {
    service: PropTypes.node 
}
