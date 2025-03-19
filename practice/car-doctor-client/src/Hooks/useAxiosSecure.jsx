import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const axiosSecure = axios.create({
  baseURL: "https://car-doctor-server-ten-neon.vercel.app",
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (response) => {
        console.log(response);
        
        return response;
      },
      (error) => {

        console.log(error);
        
        if (error.response?.status === 401 ) {

          logOut()
            .then(() => {
              navigate("/logIn");
            })
            .catch((error) => console.log(error.message));
        }
      }
    );
  }, []);

  return axiosSecure;
};

export default useAxiosSecure;
