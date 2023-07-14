"use client";
import Link from "next/link";
import { Fragment, useState } from "react";
import { AiOutlineCaretDown } from "react-icons/ai";

const Menu = () => {
  const [showsubMenu, setshowsubmenu] = useState(false);

  const data = [
    { id: 1, name: "Home", url: "/" },
    { id: 2, name: "About", url: "/about" },
    // { id: 3, name: "Categories", subMenu: false },
    { id: 3, name: "My orders", url: "/myorders" },
  ];

  const subMenuData = [
    { id: 1, name: "Jordan", doc_count: 11 },
    { id: 2, name: "Sneakers", doc_count: 8 },
    { id: 3, name: "Running shoes", doc_count: 64 },
    { id: 4, name: "Football shoes", doc_count: 107 },
  ];

  return (
    <div>
      <ol className="flex  w-22 z-50     ">
        {data?.map((item) => {
          return item.subMenu ? (
            <Fragment>
              <li
                key={item.id}
                className="m-0 sm:m-2  relative "
                onMouseEnter={() => setshowsubmenu(!showsubMenu)}
                onMouseLeave={() => setshowsubmenu(!showsubMenu)}
              >
                <span className="flex items-center text-xs mt-3.5 sm:mt-0  z-50 md:text-xs  ">
                  {item.name}
                  <AiOutlineCaretDown />
                </span>
                {showsubMenu && (
                  <div className="">
                    <div className=" border-2	  w-96  h-10 	z-10	flex  absolute -top-2 right-02 ">
                      {item?.subMenu
                        ? subMenuData.map((ite) => (
                            <p
                              className="bg-white p-2 hover:bg-black hover:text-white  cursor-pointer text-sm md:text-xs	 "
                              key={ite.id}
                            >
                              {ite.name}
                            </p>
                          ))
                        : null}
                    </div>
                  </div>
                )}
              </li>
            </Fragment>
          ) : (
            <li
              key={item.id}
              className="m-2  flex items-center text-xs lg:text-xs "
            >
              <Link href={item.url}>{item.name}</Link>
              {item?.subMenu ? <AiOutlineCaretDown className="" /> : null}
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Menu;
