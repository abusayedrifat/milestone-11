// import { useEffect, useState } from "react";
import AboutUs from "../../Components/AboutUs/AboutUs";
import Slider from "../../Components/Slider/Slider";
import OurServices from "../../Components/OurServices/OurServices";
import Team from "../../Components/Team/Team";
import useServices from "../../Hooks/useServices";

const Home = () => {
  // const [services, setServices] = useState([]);

  // useEffect(() => {
  //   fetch("https://car-doctor-server-ten-neon.vercel.app/services")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // console.log(data);
  //       setServices(data);
  //     });
  // }, []);

  const services = useServices()

  return (
    <div>
      <div className="relative mb-32">
        <Slider></Slider>
        <div className=" absolute w-1/2 lg:w-1/3 ml-[5%] md:ml-[10%] top-1/2 -translate-y-[25%] ">
          <h2 className="text-4xl md:text-6xl text-white font-bold md:leading-[70px]">
            Affordable Price For Car Servicing
          </h2>
          <p className="text-white py-8">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div className="flex gap-4">
            <button className="btn bg-[#FF3811] text-white border-none">
              Discover more
            </button>
            <button className="btn bg-transparent border-[#ffffff] text-white">
              latest Project
            </button>
          </div>
        </div>
      </div>

      <AboutUs></AboutUs>
      {/*our services */}

      <div className="text-center space-y-5 mt-32">
        <h3 className="text-[#FF3811] text-xl font-bold">Our services</h3>
        <h1 className="text-5xl font-bold text-[#151515]">Our Service Area</h1>
        <p className="text-[#737373] w-2xl mx-auto pb-14">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don&apos;t look even slightly
          believable.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => (
            <OurServices key={service._id} service={service}></OurServices>
          ))}
        </div>
        <button className="btn button1">More services</button>
      </div>

      <Team></Team>
    </div>
  );
};

export default Home;
