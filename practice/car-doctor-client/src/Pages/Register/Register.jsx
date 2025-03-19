import { useForm } from "react-hook-form";
import logInIMG from "../../assets/icons/login.svg";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash, FaFacebookF } from "react-icons/fa";
import { IoLogoGithub, IoLogoGoogle } from "react-icons/io";
import { useState } from "react";
import { Bounce, toast, ToastContainer } from "react-toastify";
import useAuth from "../../Hooks/useAuth";

const Register = () => {
  const { createUser } = useAuth()
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, event) => {
    const { email, password } = data;
    const form = event.target;
    createUser(email, password)
      .then((result) => {
        console.log(result);
        form.reset();
      })
      .catch((error) => {
        console.log(error.message);
      });

    console.log(data);
  };

  const handlePassword = (e) => {
    const password = e.target.value;
    console.log(password);

    if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{6,}$/.test(password)) {
      toast.warn(
        <div>
          <ul>
            <li>1. password length must be minimum 6 </li>
            <li>2. at least one capital letter</li>
            <li>3. at least one small letter</li>
            <li>4. at least one number</li>
          </ul>
        </div>
      );
      return;
    }
    // else if (!/[A-Z]/.test(password)) {
    //   toast.warn('one capital latter isrequired')
    //   return
    // }
    // else if (!/[a-z]/.test(password)) {
    //   toast.warn('one small letter is required')
    //   return
    // }
    // else if(!/[0-9]/.test(password)){
    //   toast.warn('one nmber is required')
    //   return
    // }
    else {
      toast.success("your password is good to go now");
    }
  };

  return (
    <div className="flex justify-between items-center my-24">
      <div className="w-1/2">
        <img src={logInIMG} alt="" />
      </div>
      <div className="w-1/2 border border-[#D0D0D0] rounded-lg p-16 flex flex-col items-center">
        <h2 className="text-4xl font-bold mb-8">Sign Up</h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col w-full"
        >
          <label className="mb-6 w-full">
            Name
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input input-bordered w-full mt-3"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-red-600">This field is required</span>
            )}
          </label>
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
          <label className="mb-6">
            Password
            <div className="relative mt-3 flex  items-center">
              <input
                onKeyUp={handlePassword}
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                className="input input-bordered w-full "
                {...register("password", { required: true })}
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="text-xl absolute right-3"
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
            value={"Sign Up"}
            className="btn button1 w-full mt-7"
          />
        </form>
        <p className="mt-9 font-medium">Or SignUp with</p>
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
          Already have an account?
          <span className="text-[#FF3811] font-bold">
            <Link to={"/logIn"}> SignIn</Link>
          </span>
        </p>
      </div>
      <div>
        <ToastContainer
          position="top-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition={Bounce}
        />
      </div>
    </div>
  );
};

export default Register;
