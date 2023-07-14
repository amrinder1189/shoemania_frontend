"use client";
import { useState } from "react";
import axios from "axios";
import { Api_Url } from "../../../utils/url";
import { toast } from "react-toastify";

const Register = () => {
  const notify = () => toast("Wow! Great Registered Successfully");

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerhandler = async (e) => {
    e.preventDefault();
    const user = await axios.post(Api_Url + "/api/auth/local/register", {
      username,
      email,
      password,
    });
    console.log(user);
    notify();
  };

  return (
    <div className="flex justify-center items-center">
      <form className="form border flex flex-col h-52 w-1/22 rounded-lg ">
        <input
          placeholder="username"
          type="text"
          className="form-control border m-2 p-1"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder="email"
          type="email"
          className="form-control border m-2 p-1"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="password"
          type="password"
          className="form-control border m-2 p-1"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="btn border w-20 rounded-lg bg-black text-white text-xs m-2 p-2 "
          onClick={registerhandler}
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Register;
