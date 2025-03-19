import { useForm } from "react-hook-form";
import logInIMG from "../../assets/icons/login.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaFacebookF } from "react-icons/fa";
import { IoLogoGithub, IoLogoGoogle } from "react-icons/io";
import { useState } from "react";
import useAuth from "../../Hooks/useAuth";


const LogIn = () => {
  const { signIn } = useAuth()

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, event) => {
    const form = event.target;
    const { email, password } = data;
    signIn(email, password)
      .then((result) => {
        console.log(result);

            form.reset();
            navigate(location?.state ? location?.state : "/");
         
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="flex justify-between items-center my-24">
      <div className="w-1/2">
        <img src={logInIMG} alt="" />
      </div>
      <div className="w-1/2 border border-[#D0D0D0] rounded-lg p-16 flex flex-col items-center">
        <h2 className="text-4xl font-bold mb-8">Sign In</h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col w-full"
        >
          <label className="mb-6">
            Email
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input input-bordered w-full mt-3"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-red-600">This field is required</span>
            )}
          </label>
          <label className="mb-6 ">
            Password
            <div className="flex justify-between mt-3 items-center relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                className="input input-bordered w-full "
                {...register("password", { required: true })}
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className=" cursor-pointer  text-xl absolute right-4"
              >
                {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
              </span>
            </div>
            {errors.password && (
              <span className="text-red-600">This field is required</span>
            )}
          </label>
          <input
            type="submit"
            value={"Sign In"}
            className="btn button1 w-full mt-7"
          />
        </form>
        <p className="mt-9 font-medium">Or SignIn with</p>
        <div className="flex gap-4 mt-9 mb-20">
          <button className="btn rounded-full text-xl">
            <FaFacebookF></FaFacebookF>{" "}
          </button>
          <button className="btn rounded-full text-xl">
            {" "}
            <IoLogoGoogle></IoLogoGoogle>{" "}
          </button>
          <button className="btn rounded-full text-xl">
            {" "}
            <IoLogoGithub></IoLogoGithub>{" "}
          </button>
        </div>

        <p className="font-medium">
          Dont&apos;t have an account?
          <span className="text-[#FF3811] font-bold">
            <Link to={"/signUp"}> SignUp</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default LogIn;
