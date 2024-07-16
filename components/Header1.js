import Image from "next/image";
import { IoSunnyOutline } from "react-icons/io5";


export function Header() {
    return (
        <div className="flex justify-between bg-slate-500">
            <div className="font-bold" >SS</div>
            <div className="hidden md:block">About</div>
            <div className="hidden md:block">Work</div>
            <div className="hidden md:block">Testimonials</div>
            <div className="hidden md:block">Contact</div>
            <div className="hidden md:block"><IoSunnyOutline /></div>
            <div className="bg-black rounded-md hidden md:block text-base width-[136px height-[36px] py-[6px] pl-[16px]]">Download CV</div>
            <div className="md:hidden">Mobile Menu</div>
        </div>
    );
}