import { CiMail } from "react-icons/ci";
import { GoCopy } from "react-icons/go";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";

import { LuGithub, LuTwitter, LuFigma } from "react-icons/lu";

import Link from "next/link";

const socialLinks = [
    {
        link: "/github",
        Icon: LuGithub,
    },
    {
        link: "/twitter",
        Icon: LuTwitter,
    },
    {
        link: "/figma",
        Icon: LuFigma,
    },
];


export function Footer() {
    return (
        <div className="max-w-6xl mx-auto px-[16px] py-[64px flex flex-col gap-6]">
            <div className="flex justify-center mb-5 gap-4 mt-4">
                <Header name="Get in touch" />
            </div>
            <div className="text-center mb-10">
                What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect.
            </div>
            <div className="flex gap-8 justify-center items-center mb-4">
                <div><CiMail className="h-6 w-6" /></div>
                <div>reachsagarshah@gmail.com</div>
                <div><GoCopy className="h-6 w-6" /></div>
            </div>
            <div className="flex gap-8 justify-center items-center mb-4">
                <div><FiPhone className="h-6 w-6" /></div>
                <div>+91 8980500565</div>
                <div><GoCopy className="h-6 w-6" /></div>
            </div>
            <div className="flex flex-col gap-6">
                <div className="text-center">You may also find me on these platforms!</div>              
                <div className="flex gap-4 justify-center">
                    {socialLinks.map(({ link, Icon }) => (
                        <Link key={link} href={link}>
                            <Icon className="w-8 h-8" />
                        </Link>
                    ))}
                </div>
            </div>
            <div className="bg-slate-100 flex gap-8 max-w-6xl mx-auto mt-5"> 
                  <div>2023</div>
                  <div>Designed and coded by Sagar Shah</div>
            </div>
        </div>
        
    );
}



function Header ({ name }) {
    return <div className="bg-slate-200 flex flex-wrap text-center rounded-xl px-4 py-1">{name}</div>;
}



