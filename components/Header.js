import Image from "next/image";
import { IoSunnyOutline } from "react-icons/io5";


export function Header() {
    return (
        <div className="h-[68px] mx-auto w-[1440px] px-[80px] py-[16px] flex justify-between">
            <div className="font-[700] text-3xl ">{`<SS />`}
            </div>
            <div className="flex w-[554px] h-[36px] gap-[24px] items-center">
                <p className="hidden md:block">About</p>
                <p className="hidden md:block">Work</p>
                <p className="hidden md:block">Testimonials</p>
                <p className="hidden md:block">Contact</p>
                <p className=" flex h-[36px] w-[36px] items-center "><IoSunnyOutline /></p>
                <div className=" flex items-center w-[136px] h-[36px] rounded-[12px] px-[16px] py-[6px] bg-slate-950 text-white">
                    <p>Download CV</p>
                </div>
            </div>
        </div>
    );
}