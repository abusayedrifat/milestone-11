import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";

const Bookings = () => {
    
    const {user} = useContext(AuthContext)
    const [bookings,setBookings] = useState([])

    const url = `http://localhost:5000/serviceBooking?email=${user.email}`
    
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setBookings(data)
        })
    },[])

    return (
        <div>
            {bookings.length}
        </div>
    );
};

export default Bookings;