import "./slider.css";

const Slider = () => {
  return (
    <div className="carousel w-full md:h-[600px] ">
      {/* =====slider 1=== landscape painting */}
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://i.imgur.com/mVIfCtH.jpg"
          className="w-full h-full rounded-md"
        />
        <div className=" absolute w-full h-[600px] rounded-md shading">
        </div>
        <div className="absolute right-[3%] bottom-[7%] flex gap-3">
          <a href="#slide6" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>


      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://i.imgur.com/vUkzcux.jpg"
          className="w-full h-full rounded-md"
        />
        <div className=" absolute w-full h-[600px] rounded-md shading">
        </div>
        <div className="absolute right-[3%] bottom-[7%] flex gap-3">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://i.imgur.com/WcWIfwT.jpg"
          className="w-full h-full rounded-md"
        />
        <div className=" absolute w-full h-[600px] rounded-md shading">
        </div>
        <div className="absolute right-[3%] bottom-[7%] flex gap-3">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      <div id="slide4" className="carousel-item relative w-full">
        <img
          src="https://i.imgur.com/SMliBuQ.jpg"
          className="w-full h-full rounded-md"
        />
        <div className=" absolute w-full h-[600px] rounded-md shading">
        </div>
        <div className="absolute right-[3%] bottom-[7%] flex gap-3">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide5" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      <div id="slide5" className="carousel-item relative w-full">
        <img
          src="https://i.imgur.com/L52tvyO.jpg"
          className="w-full h-full rounded-md"
        />
        <div className=" absolute w-full h-[600px] rounded-md shading">
        </div>
        <div className="absolute right-[3%] bottom-[7%] flex gap-3">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide6" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      <div id="slide6" className="carousel-item relative w-full">
        <img
          src="https://i.imgur.com/6xue9LB.jpg"
          className="w-full h-full rounded-md"
        />
        <div className=" absolute w-full h-[600px] rounded-md shading">
        </div>
        <div className="absolute right-[3%] bottom-[7%] flex gap-3">
          <a href="#slide5" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Slider;
