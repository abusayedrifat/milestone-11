const AboutUs = () => {
  return (
    <div>
      <div className="hero  min-h-screen">
        <div className="hero-content justify-around items-start flex-col md:gap-32 md:flex-row">
          <div className="w-1/2 relative">
            <img
              src="https://i.imgur.com/kpWXl5B.jpg"
              className=" rounded-lg shadow-2xl h-[500px]"
            />
            <div className="absolute p-3 bg-white rounded-md    -right-[14%] -bottom-[15%]">
              <img
                src="https://i.imgur.com/7DxlXeZ.jpg"
                alt=""
                className=" h-[330px] w-[330px]"
              />
            </div>
          </div>
          <div className="w-1/2">
            <h1 className="text-2xl font-bold text-[#FF3811]">About Us</h1>
            <h1 className="text-5xl font-bold text-[#151515] pt-5">
              We are qualified <br /> & of experience in this field{" "}
            </h1>
            <p className="py-6 text-[#737373]">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don&apos;t look even
              slightly believable.
            </p>
            <p className="pb-6 text-[#737373]">
              the majority have suffered alteration in some form, by injected
              humour, or randomised words which don&apos;t look even slightly
              believable.
            </p>
            <button className="btn button1">Get More Info</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
