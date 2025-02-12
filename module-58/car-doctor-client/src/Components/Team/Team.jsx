
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";

const Team = () => {
    const settings = {
    
      };
  return (
    <div className="text-center space-y-5 mt-32 bg-black">
      <h3 className="text-[#FF3811] text-xl font-bold">Team</h3>
      <h1 className="text-5xl font-bold text-[#151515]">Meet Our Team</h1>
      <p className="text-[#737373] w-2xl mx-auto pb-14">
        the majority have suffered alteration in some form, by injected humour,
        or randomised words which don&apos;t look even slightly believable.
      </p>

      {/* =====card carousal */}
      <div className="slider-container ">
        <div>Click on any slide to select and make it current slide</div>
        <Slider {...settings}>
        

          <div className="p-6 mx-2 border rounded-xl flex flex-col justify-between items-center">
            <img
              src="https://i.imgur.com/9tVMDaU.jpg"
              alt=""
              className="rounded-lg"
            />
            <h2>Car Engine Plug</h2>
            <h4>CEngine Expert</h4>
            <div className="flex gap-4">
              <div className="border p-3 rounded-full border-black bg-transparent cursor-pointer">
                <FaFacebookF></FaFacebookF>
              </div>
              <div className="border p-3 rounded-full border-black bg-transparent cursor-pointer">
                <FaXTwitter></FaXTwitter>
              </div>
              <div className="border p-3 rounded-full border-black bg-transparent cursor-pointer">
                <BsLinkedin></BsLinkedin>
              </div>
              <div className="border p-3 rounded-full border-black bg-transparent cursor-pointer">
                <FaInstagram></FaInstagram>
              </div>
            </div>
          </div>
         
           
        </Slider>
      </div>
    </div>
  );
};

export default Team;
