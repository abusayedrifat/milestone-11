import { useEffect, useState } from "react";
import BookingRow from "./BookingRow";
import axios from "axios";
import "./Bookings.css";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const Bookings = () => {
  const { user } = useAuth();
  const [bookings, setBookings] = useState([]);
  const axiosSecure = useAxiosSecure()
console.log(bookings);

  // const url = `https://car-doctor-server-ten-neon.vercel.app/serviceBooking?email=${user?.email}`;
  const url = `/serviceBooking?email=${user?.email}`;

  // useEffect(() => {
  //   axios.get(url, {withCredentials:true})
  //   .then((data) => {
  //     console.log(data);
  //     setBookings(data.data);
  //   });
  //    fetch(url)
  //   .then(res=>res.json())
  // }, [url]);

  useEffect(()=>{
    axiosSecure.get(url)
    .then(res=>{
      setBookings(res.data)
      console.log(res.data);
      
    })
  },[url, axiosSecure])


  const handleDelete = (id) => {
    axios.delete(`https://car-doctor-server-ten-neon.vercel.app/serviceBooking/${id}`)
        .then((data) => {
      console.log(data);
      const remainings = bookings.filter((booking) => booking._id !== id);
      setBookings(remainings);
    });
  };

  const handleConfirmBooking = (id) => {
    axios
      .patch(`https://car-doctor-server-ten-neon.vercel.app/serviceBooking/${id}`, {
        status: "confirmed",
      })
      .then((result) => {
        console.log(result);

        const remainings = bookings.filter((booking) => booking._id !== id);
        const updated = bookings.find((booking) => booking._id === id);

        updated.status = "confiremd";
        const newBookings = [updated, ...remainings];

        setBookings(newBookings);
      });
  };

  return (
    <div className="overflow-x-auto">
      <div className="relative w-full  mb-32">
        <img src="https://i.imgur.com/Z5wYfqZ.png" alt="" />
        <div className=" h-full w-full absolute top-0 shading rounded-lg ">
          <div className="absolute ml-6 top-1/2 -translate-y-1/2 space-y-4">
            <h2 className="text-5xl   text-white font-bold  ">Cart Details</h2>
            <p className="text-[#FF3811] text-lg ml-3">
              Home - Product Details
            </p>
          </div>
        </div>
      </div>

      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Name</th>
            <th>Service</th>
            <th>Price</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <BookingRow
              key={booking._id}
              booking={booking}
              handleDelete={handleDelete}
              handleConfirmBooking={handleConfirmBooking}
            ></BookingRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Bookings;
