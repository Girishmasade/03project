"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

function signuppage() {
  const router = useRouter();

  const [user, setuser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [disable, setdisable] = useState(true);

  useEffect(() => {
    if (
      user.username.length > 0 &&
      user.email.length > 0 &&
      user.password.length > 0
    ) {
      setdisable(false);
    } else {
      setdisable(true);
    }
  }, [user]);

  const handleSubmit = async () => {
    try {
      const res = await axios.post("/api/users/signup", user);
      router.push("/login");
      console.log(res);
      toast.success(res.data.message);
    } catch (error: any) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="flex bg-green-500 min-h-screen justify-center items-center">
      <div className="bg-white p-10 rounded-lg shadow-lg text-black">
        <h1 className="font-bold text-center text-lg">Signup</h1>

        <div className="flex flex-col py-3 ">
          <label htmlFor="username" className="py-1">
            username
          </label>
          <input
            type="text"
            autoComplete="off"
            value={user.username}
            id="username"
            onChange={(e) => setuser({ ...user, username: e.target.value })}
            className="border-2 border-gray-500 py-1 px-2 rounded-lg outline-none"
          />
        </div>

        <div className="flex flex-col py-3 ">
          <label htmlFor="email" className="py-1">Email</label>
          <input
            type="email"
            id="email"
            value={user.email}
            autoComplete="off"
            onChange={(e) => setuser({ ...user, email: e.target.value })}
            className="border-2 border-gray-500 py-1 px-2 rounded-lg outline-none"
          />
        </div>

        <div className="flex flex-col py-3 ">
          <label htmlFor="password" className="py-1">Password</label>
          <input
            type="password"
            id="password"
            autoComplete="off"
            value={user.password}
            onChange={(e) => setuser({ ...user, password: e.target.value })}
            className="border-2 outline-none border-zinc-600 rounded-md px-2 py-1"
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
