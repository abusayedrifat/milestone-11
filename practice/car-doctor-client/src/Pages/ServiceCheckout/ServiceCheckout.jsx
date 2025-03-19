import axios from "axios";
import "./checkout.css";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const ServiceCheckout = () => {

  const {user} = useAuth()

  
const loadedData = useLoaderData()
  const {price,img, service_id,title} = loadedData
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, event) => {
    const serviceData = {
    data,price,img,service_id,title
  }
    const form = event.target;
    console.log(data);

    axios.post("https://car-doctor-server-ten-neon.vercel.app/serviceBooking",serviceData) 
     .then((data) => {
       console.log(data.data);
       form.reset();
    });
  };
  
  return (
    <div>
      <div className="relative w-full  mb-32">
        <img src="https://i.imgur.com/sJ3WDVp.png" alt="" />
        <div className=" h-full w-full absolute top-0 shading rounded-lg ">
          <h2 className="text-5xl absolute ml-6 text-white font-bold top-1/2 -translate-y-1/2 ">
            CheckOut
          </h2>
        </div>

        <div className="bg-[#FF3811] poly text-white text-center  py-2 absolute left-1/2 bottom-0 -translate-x-20  w-80">
          <p className="">Home/CheckOut</p>
        </div>
      </div>

      <div className="bg-[#F3F3F3] rounded-xl p-28 mb-24">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="flex flex-col gap-6 justify-between md:flex-row w-full">
            <div className="w-full">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="input input-bordered w-full mt-3"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>

            <div className="w-full">
              <input
                type="date"
                name="date"
                placeholder="pick a date"
                className="input input-bordered w-full mt-3"
                {...register("date", { required: true })}
              />
              {errors.date && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-6 justify-between md:flex-row w-full ">
            <div className="w-full">
              <input
                type="text"
                name="phone"
                placeholder="Your phone"
                className="input input-bordered w-full mt-3"
                {...register("phone", { required: true })}
              />
              {errors.phone && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>

            <div className="w-full">
              <input
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered w-full  mt-3"
                defaultValue={user.email}
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>
          </div>
          <div className="pt-4">
            <textarea
              name="message"
              placeholder="Your message"
              className=" textarea textarea-bordered textarea-md h-64 w-full "
              {...register("message", { required: true })}
            ></textarea>
            {errors.email && (
              <span className="text-red-600">This field is required</span>
            )}
          </div>

          <input type="submit" className="btn w-full button1" />
        </form>
      </div>
    </div>
  );
};

export default ServiceCheckout;

