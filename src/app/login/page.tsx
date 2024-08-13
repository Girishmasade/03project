"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function Loginpage() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [disable, setdisable] = useState(true);

  useEffect(() => {
    if (user.email.length> 0 && user.password.length>0) {
        setdisable(false)
    } else {
        setdisable(true)
    }
  }, []);

  return (
    <div className="flex bg-green-500 min-h-screen justify-center items-center">
      <div className="bg-white p-10 rounded-lg shadow-lg text-black">
        <h1 className="font-bold text-center text-lg">Login</h1>
        <div className="flex flex-col py-3 ">
          <label htmlFor="" className="py-1">
            Email
          </label>
          <input
            type="email"
            value={user.email}
            onChange={(e) => setUser({...user, email: e.target.value})}
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
            onChange={(e) => setUser({...user, password: e.target.value})}
            className="border-2 border-gray-500 py-1 px-2 rounded-lg outline-none"
          />
        </div>

        <button
          className={`${
            disable ? "bg-green-400 cursor-not-allowed" : "bg-green-900"
          } w-full py-1 rounded-lg text-white`}
        >
          Login
        </button>

        <p className="mt-2">
          Dont have an account?
          <Link href={"/signup"} className="underline underline-offset-1">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Loginpage;
