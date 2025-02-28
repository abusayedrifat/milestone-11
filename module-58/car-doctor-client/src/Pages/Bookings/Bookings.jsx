import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";
import BookingRow from "./BookingRow";
import axios from "axios";
import "./Bookings.css";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
console.log(bookings);

  const url = `http://localhost:5000/serviceBooking?email=${user?.email}`;

  useEffect(() => {
    axios.get(url,{withCredentials:true})
    .then((data) => {
      console.log(data);
      setBookings(data.data);
    });
    // fetch(url)
    // .then(res=>res.json())
  }, [url]);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/serviceBooking/${id}`)
        .then((data) => {
      console.log(data);
      const remainings = bookings.filter((booking) => booking._id !== id);
      setBookings(remainings);
    });
  };

  const handleConfirmBooking = (id) => {
    axios
      .patch(`http://localhost:5000/serviceBooking/${id}`, {
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
