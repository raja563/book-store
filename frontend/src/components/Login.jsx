import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

// import { Navigate } from "react-router-dom";


const Login = () => {

  const navigate = useNavigate();

  const users={
    email:"",
    password:"",
  }
  const [user, setUser] = useState();

  const inputHandler = (e) => {
    const { name, value } = e.target;
    // console.log(name,value);
    setUser({ ...user, [name]:value });
  };

  const formHandler = async(e) => {
    e.preventDefault();
    const url = "http://localhost:8000/api/v1/login";
    await axios
      .post(url, user)
      .then((response) => {
        toast.success(response.data.msg,{ position: "top-right" });
        // console.log(response);

        localStorage.setItem("User", JSON.stringify(response.data.user));
        navigate("/");
        setTimeout(()=>{

          window.location.reload();
        },500)
      })
      .catch((error) => {
        // console.log(error);
        setTimeout(()=>{

          toast.error("error:"+ error.response.data.msg,{position:"top-right"});
        },1000)
      });
    }



  return (
    <div className=" bg-gray-300 mt-32  w-[560px] h-[320px] m-auto p-5 rounded-md">
      <div className="flex justify-between">
      <h1 className="font-bold text-lg">Login</h1>
      <a href="/">x</a>
      </div>
      <div>
        {/* <p>{JSON.stringify(form)}</p> */}
        <form action="" onSubmit={formHandler}>
          <div className="mt-4 space-y-2">
            <span>Email</span>
            <br />
            <input
              className="w-80 px-3 rounded-md py-1 outline-none"
              type="email"
              onChange={inputHandler}
              placeholder="Enter email"
              name="email"
            />
          </div>
          <div className="mt-4 space-y-2 ">
            <span>Password</span>
            <br />
            <input
             className="w-80 px-3 rounded-md py-1 outline-none"
              type="password"
              placeholder="Enter  password"
              onChange={inputHandler}
              name="password"
            />
          </div>
          <div className=" flex justify-around mt-4 items-center">
            <button className=" rounded-md  bg-pink-500 text-white px-3 py-1 m-2 hover:bg-pink-700  cursor-pointer duration-200">
              Login
            </button>
            <p>Not registered? <a href="/signup" className="underline cursor-pointer text-blue-500">Signup</a>
            </p>
          </div>
        </form>
      </div>

      
    </div>
  );
};

export default Login;
