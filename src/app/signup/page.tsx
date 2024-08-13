"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function signuppage() {
  const [user, setuser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [disable, setdisable] = useState(true);

  useEffect(() => {
    if (user.username.length>0 && user.email.length > 0 && user.password.length>0) {
        setdisable(false)
    } else {
        setdisable(true)
    }
  }, [user])
  
  const handleSubmit = () =>{
    try {
      
    } catch (error) {
      
    }
  }

  return (
    <div className="flex bg-green-500 min-h-screen justify-center items-center">
      <div className="bg-white p-10 rounded-lg shadow-lg text-black">
        <h1 className="font-bold text-center text-lg">Signup</h1>

        <div className="flex flex-col py-3 ">
          <label htmlFor="" className="py-1">
            username
          </label>
          <input
            type="text"
            value={user.username}
            onChange={(e)=> setuser({...user, username: e.target.value})}
            className="border-2 border-gray-500 py-1 px-2 rounded-lg outline-none"
          />
        </div>

        <div className="flex flex-col py-3 ">
          <label htmlFor="" className="py-1">
            Email
          </label>
          <input
            type="email"
            value={user.email}
            onChange={(e) => setuser({...user, email: e.target.value})}
            className="border-2 border-gray-500 py-1 px-2 rounded-lg outline-none"
          />
        </div>

        <div className="flex flex-col py-3 ">
          <label htmlFor="" className="py-1">
            Password
          </label>
          <input
            type="password"
            value={user.password}
            onChange={(e) => setuser({...user, password: e.target.value})}
            className="border-2 border-gray-500 py-1 px-2 rounded-lg outline-none"
          />
        </div>

        <button
        onClick={handleSubmit}
          className={`${
            disable ? "bg-green-400 cursor-not-allowed" : "bg-green-900"
          } w-full py-1 rounded-lg text-white`}
        >
          Signup
        </button>
        <p className="mt-2">
          Already have an account?{" "}
          <Link href={"/login"} className="underline underline-offset-1">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default signuppage;
