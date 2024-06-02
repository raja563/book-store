import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
const Contact = () => {

  // handleinput
  

  return (
    <div>
      <Navbar />
      <div className="max-w-screen-2xl mt-[64px] min-h-screen container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white">
        <div className="">
          <h1 className="">Enquiry</h1>
          <div className="bg-slate-300 w-[420px] m-auto p-2 rounded-md md:w-[60%] mt-24">
            <form action="">
              <div className="space-y-2">
                <span>Name</span>
                <br />
                <input
                  type="text"
                  className="w-[90%] outline-none p-1 rounded-md"
                  placeholder="Enter your name"
                />
              </div>
              
              <div className="space-y-2">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  className="w-[90%] outline-none p-1 rounded-md"
                  placeholder="Enter your email"
                />
              </div>
              <div className="space-y-2">
                <span>Phone</span>
                <br />
                <input
                  type="text"
                  className="w-[90%] outline-none p-1 rounded-md"
                  placeholder="Enter your phone"
                />
              </div>
              <div className="space-y-2">
                <span>Message</span>
                <br />
                <textarea
                  type="text"
                  className="w-[90%] outline-none p-1 rounded-md"
                  placeholder="Enter your message"
                />
              </div>
              <div className="space-y-2 mt-2 text-center">
                <button className="bg-red-600 rounded-md  p-1 hover:bg-red-700">Submit</button>
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
