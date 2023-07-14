"use client";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { LoadedAddtoCartFirstTime } from "../Store/cartSlice";
import { LoadedUser } from "../Store/userStore";
import Image from "next/image";
import Menu from "../components/Menu";
import Link from "next/link";
import { useEffect } from "react";
import { LogoutUser } from "../Store/userStore";

const Header = () => {
  const { isLoading, cart } = useSelector((state) => state.cart);
  const { user, isAuth } = useSelector((state) => state.user);

  const LogoutHandler = () => {
    dispatch(LogoutUser());
  };

  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("cart")) {
      const data = localStorage.getItem("cart");
      // console.log(JSON.parse(data), "cart data ha ji");

      dispatch(LoadedAddtoCartFirstTime(JSON.parse(data)));
    }
    if (localStorage.getItem("user")) {
      const user = localStorage.getItem("user");
      // console.log(JSON.parse(data), "cart data ha ji");

      dispatch(LoadedUser(JSON.parse(user)));
    }
  }, []);

  return (
    <div className="w-100 h-16 justify-around	items-center drop-shadow-md	  flex flex-row z-50 border ">
      <div className="	">
        <Link href="/">
          <Image src="/logo.svg" width="40" height="40" />
        </Link>
      </div>
      <Menu />
      <ol className="flex ">
        <li className="text-xs mr-0 sm:mr-2 mt-1 ">
          {isAuth ? (
            "Welcome " + user?.user?.username + "😁"
          ) : (
            <>
              <Link href="/login">Login &nbsp;</Link>
              <Link href="/register"> Register&nbsp;</Link>
            </>
          )}
        </li>
        {isAuth ? (
          <span
            className="text-xs mr-2 border text-red-600 h-5 w-12 text-center bg-red-200 cursor-pointer  rounded-sm "
            onClick={LogoutHandler}
          >
            Logout
          </span>
        ) : null}
        <li className="relative  mr-4 sm:mr-0 ">
          <Link href="/cart">
            <AiOutlineShoppingCart />
            <span className="absolute h-4 w-4 text-xs flex items-center justify-center bg-red-600  -top-3 -right-3 text-white rounded-full  ">
              {cart?.length}
            </span>
          </Link>
        </li>
      </ol>
    </div>
  );
};

export default Header;
