import Image from "next/image";
import { IoSunnyOutline } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";

export function Header() {
  return (
    <div className="max-w-6xl mx-auto px-[80px] py-[16px]  ">
      <div className=" lg:flex lg:justify-between ">
        <div className=" flex justify-between">
          <div className="font-[700] text-3xl">{`<SS />`}</div>
          <div>
            <FiMenu className="w-8 h-8 lg:hidden" />
          </div>
        </div>

        <div className="flex gap-[24px] items-center">
          <p className="hidden lg:block">About</p>
          <p className="hidden lg:block">Work</p>
          <p className="hidden lg:block">Testimonials</p>
          <p className="hidden lg:block">Contact</p>
          <p className=" hidden lg:block items-center ">
            <IoSunnyOutline />
          </p>
          <div className=" hidden lg:block dark:bg-slate-600 items-center w-[136px] h-[36px] rounded-[12px] px-[16px] py-[6px] bg-slate-950 text-white">
            <p>Download CV</p>
          </div>
        </div>
      </div>

    </div>
  );
}
