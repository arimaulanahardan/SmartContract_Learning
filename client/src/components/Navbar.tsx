import { useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import logo from "../../images/logo.png";

const ListItem = ["Market", "Exchange", "Tutorials", "Wallets"];

const NavbarItem = (props: { title: string; styleProps?: string | any }) => {
  return (
    <li className={`mx-4 cursor-pointer ${props.styleProps}`}>{props.title}</li>
  );
};

const Navbar = () => {
  const [togle, setTogle] = useState(false);

  return (
    <>
      <nav className="w-full flex md:justify-center justify-between items-center p-4">
        <div className="md:flex[0.5] flex-intial justify-center items-center">
          <img src={logo} alt="logo" className="w-32 cursor-pointer" />
        </div>
        <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
          {ListItem.map((item, index) => (
            <NavbarItem key={index + item} title={item} />
          ))}
          <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
            Login
          </li>
        </ul>
        <div className="flex relative">
          {togle ? (
            <AiOutlineClose
              fontSize={28}
              className="text-white md:hidden cursor-pointer"
              onClick={() => setTogle(false)}
            />
          ) : (
            <HiMenuAlt4
              fontSize={28}
              className="text-white md:hidden cursor-pointer"
              onClick={() => setTogle(true)}
            />
          )}
          {togle && (
            <ul className="z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in">
              <li className="text-xl w-full my-2">
                <AiOutlineClose
                  fontSize={28}
                  className="text-white cursor-pointer"
                  onClick={() => setTogle(false)}
                />
                {ListItem.map((item, index) => (
                  <NavbarItem
                    key={index + item}
                    title={item}
                    styleProps="my-2 text-lg"
                  />
                ))}
              </li>
            </ul>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
