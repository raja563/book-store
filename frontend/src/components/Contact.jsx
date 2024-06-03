import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Contact = () => {

  const navigate=useNavigate();

  const contats={
    name:"",
    email:"",
    phone:"",
    message:"",
  }
  const [contact,setContact]=useState(contats)
  // inputHandler
  const inputHandler=(e)=>{
    const {name,value}=e.target;
    // console.log(name,value);
    setContact({...contact,[name]:value})
    console.log(contact);
  }

  const formHandler=async(e)=>{
    e.preventDefault();
    const url="http://localhost:8000/api/v1/contact";
    await axios.post(url,contact).then((response)=>{
      toast.success("submit successfull !!",{position:"top-right"});
      navigate('/');
    }).catch((error)=>{
      console.log(error);
      toast.error("Error:"+error.response.data.msg,{position:"top-right"});
    })
  }

  return (
    <div>
      <Navbar />
      <div className="max-w-screen-2xl mt-[64px] min-h-screen container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white">
        <div className="">
          <h1 className="text-3xl pt-[32px]">Contact Us</h1>
          <div className="bg-slate-300 w-[420px] m-auto p-2 rounded-md md:w-[60%] mt-24">
            <form action="" onSubmit={formHandler}>
              <div className="space-y-2">
                <span>Name</span>
                <br />
                <input
                  type="text"
                  name="name"
                  onChange={inputHandler}
                  className="w-[90%] outline-none p-1 rounded-md"
                  placeholder="Enter your name"
                />
              </div>

              <div className="space-y-2">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  name="email"
                  onChange={inputHandler}
                  className="w-[90%] outline-none p-1 rounded-md"
                  placeholder="Enter your email"
                />
              </div>
              <div className="space-y-2">
                <span>Phone</span>
                <br />
                <input
                  type="text"
                  name="phone"
                  onChange={inputHandler}
                  className="w-[90%] outline-none p-1 rounded-md"
                  placeholder="Enter your phone"
                />
              </div>
              <div className="space-y-2">
                <span>Message</span>
                <br />
                <textarea
                  type="text"
                  name="message"
                  onChange={inputHandler}
                  className="w-[90%] outline-none p-1 rounded-md"
                  placeholder="Enter your message"
                />
              </div>
              <div className="space-y-2 mt-2 text-center">
                <button className="bg-pink-500 rounded-md  p-1 hover:bg-pink-700  hover:duration-500">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
