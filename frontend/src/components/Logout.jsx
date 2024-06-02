import React from "react";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";

const Logout = () => {
  const [authUser, setAuthUser] = useAuth();

  const logoutHandle = () => {
    try {
      setAuthUser({
        ...authUser,
        user: null,
      });

      localStorage.removeItem("User");
      toast.success("Logout success !!!", { position: "top-right" });
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      setTimeout(() => {
        toast.error("Error:" + error.msg, { position: "top-right" });
      }, 1000);
    }
  };

  return (
    <div>
      <button
        onClick={logoutHandle}
        className="bg-red-500 text-white py-2 px-3 rounded-md cursor-pointer hover:bg-red-700 duration-200"
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
