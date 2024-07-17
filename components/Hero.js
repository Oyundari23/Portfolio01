import { IoLocationOutline } from "react-icons/io5";

import { LuGithub } from "react-icons/lu";
import { LuTwitter } from "react-icons/lu";
import { LuFigma } from "react-icons/lu";
import Image from "next/image";

export function Hero() {
    return (
        <div className="w-[1440px] h-[552px] justify-between px-[96px] py-[80px] flex">
            <div className="flex flex-col gap-[48px] w-[768px] h-[360px] text-justify">
                <div>
                    <p className="text-[60px]">Hi, I'm Sagar</p>
                    <p>I'm a full stack developer (React.js & Node.js) with a focus on creating (and occasionally designing) exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Even though I have been creating web applications for over 7 years, I still love it as if it was something new.</p>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-3"><IoLocationOutline /><p>Ahmedabad, India</p></div>
                    <div className="flex items-center gap-3 ml-1">
                        <div className="bg-[#10B981] w-[8px] h-[8px] rounded-md">
                        </div>
                        <p>Available for new projects</p>
                    </div>
                </div>
                <div className="flex gap-4 ">
                    <div><LuGithub /></div>
                    <div><LuTwitter /></div>
                    <div><LuFigma /></div>
                </div>
            </div>
            <div>
                <div className=" w-[440px] h-[360px] relative">
                    <Image src="/Pic.png" width={280} height={320} />
                    <div className=" absolute bg-slate-300 w-[280px] h-[320px] top-8 -z-50 left-8 ">
                </div>
                

                </div>

            </div>
        </div>

    

    );
}