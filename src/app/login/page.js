"use client";
import { useState } from "react";
import axios from "axios";
import { Api_Url } from "../../../utils/url";
import { LoadedUser, Loadinguser } from "../../Store/userStore";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const notify = () => toast("Login Success 😁");
  const notifyy = () => toast("Some Error 😗");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.user);

  const loginhandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    const user = await axios.post(Api_Url + "/api/auth/local", {
      identifier: email,
      password,
    });

    if (user.status === 200) {
      dispatch(Loadinguser());
      console.log(user.data);
      dispatch(LoadedUser(user.data));
      notify();
      setLoading(false);

      router.push("/");
    } else {
      notifyy();
      setLoading(false);
    }
    console.log(user);
    console.log(isLoading, "loading...");
  };

  return (
    <div className="flex justify-center items-center">
      <form className="form border flex flex-col h-52 w-1/22 rounded-lg ">
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
          className="btn border w-22 rounded-lg bg-black text-white text-xs m-2 p-2 "
          onClick={loginhandler}
          type="submit"
        >
          {loading ? "Loging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
