import Image from "next/image";
import { IoSunnyOutline } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";


import { IoClose } from "react-icons/io5";
import Link from "next/link";
import { useState } from "react";


const navigations = [
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Work",
    link: "/work",
  },
  {
    name: "Testimonials",
    link: "/testimonials",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

export function Header() {
  let [open, setOpen] = useState(true);

  function openMenu() {
    setOpen(true);
  }
  function closeMenu() {
    setOpen(false);
  }

  return (
    <div className="max-w-6xl mx-auto px-[80px] py-[16px]  ">
      <div className=" lg:flex lg:justify-between ">
        <div className=" flex justify-between">
          <div className="font-[700] text-3xl">{`<SS />`}</div>
          <div>
            <FiMenu className="w-8 h-8 hidden lg:block" onClick={openMenu}/>
          </div>
        </div>

        <div className="flex gap-[24px] items-center">
          <div className=" hidden lg:block lg:flex lg:gap-8 ">
            {navigations.map((nav) => (
              <Link key={nav.link} href={nav.link} className="text-slate-400 gap-6">
                {nav.name}
              </Link>
            ))}
          </div>
          {/* <p className="hidden lg:block">About</p>
          <p className="hidden lg:block">Work</p>
          <p className="hidden lg:block">Testimonials</p>
          <p className="hidden lg:block">Contact</p> */}
          <p className=" hidden lg:block items-center ">
            <IoSunnyOutline />
          </p>
          <div className=" hidden lg:block dark:bg-slate-600 items-center w-[136px] h-[36px] rounded-[12px] px-[16px] py-[6px] bg-slate-950 text-white">
            <p>Download CV</p>
          </div>
        </div>
      </div>
      

      <div className="flex flex-col gap-8">
        <div className={`fixed transiion-all inset-0 bg-slate-500/90 ${open ? "block" : "hidden"}`} onClick={closeMenu}></div>
        <div className={`fixed top-0 bottom-0 transitio-all w-64 text-black bg-white dark:text-white dark:bg-slate-900 flex flex-col gap-8 shadow-lg ${open ? "right-0" : "-right-full"}`} >
          Menu
          <button onClick={closeMenu}> <IoClose h-8 w-8  /> </button>
          <div className=" flex flex-col gap-8 ">
            {navigations.map((nav) => (
              <Link key={nav.link} href={nav.link} className="text-slate-800 dark:text-white gap-6">
                {nav.name}
              </Link>
            ))}
          </div>
         
        </div>
      </div>
    </div>
    
   
  );
}
