import Image from "next/image";
import { IoSunnyOutline } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";

export function Header() {
  return (
    <div className="h-[68px] lg:w-[1280px] mx-auto w-[375px] p-[16px] flex justify-between items-center">
      <div className="flex justify-between sm:w-[343px] h-[36px]">
        <div className="font-[700] text-3xl">{`<SS />`}</div>
        <div>
          <FiMenu className=" flex w-8 h-8 lg:hidden" />
        </div>
      </div>

      <div className="flex gap-[24px] items-center">
        <p className="hidden lg:block">About</p>
        <p className="hidden lg:block">Work</p>
        <p className="hidden lg:block">Testimonials</p>
        <p className="hidden lg:block">Contact</p>
        <p className=" flex h-[36px] w-[36px] items-center ">
          <IoSunnyOutline />
        </p>
        <div className=" hidden lg:block flex items-center w-[136px] h-[36px] rounded-[12px] px-[16px] py-[6px] bg-slate-950 text-white">
          <p>Download CV</p>
        </div>
      </div>
    </div>
  );
}
