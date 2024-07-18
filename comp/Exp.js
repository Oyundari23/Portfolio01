import Image from "next/image";

const experiences = [
    {
        imagePath: "/Skills/logo-upwork.png",
        jobtitle: "Sr. Frontend Developer",
        projects: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        timeline: "Nov 2021 - Present-2024",
    },
    {
        imagePath: "/Skills/logo-upwork.png",
        jobtitle: "Team lead",
        projects: "Sed quis justo ac magna.",
        timeline: "Jul 2017 - Oct 20214",
    },
    {
        imagePath: "/Skills/logo-upwork.png",
        jobtitle: "Full-stack developer",
        projects: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        timeline: "Dec 2015 - May 2017",
    },

];

export function Exp() {
    return (
        <div className="w-[1440px] mx-auto h-[1140px] px-[96px] py-[80px] bg-slate-50">
            <div className="flex items-center justify-center mb-12 w-[105px] h-[28px] bg-gray-200 rounded-lg">Experience
            </div>
            <div className="text-center">Here is a quick summary of my most recent experiences:</div>
            <div className="flex flex-col gap-15">
                {experiences.map((experience) => (
                    <div className=" flex gap-6 w-[896px] h-[288px] mx-[192px] rounded-[12px] p-[32px] justify-between" key={experience.company}>
                        <div className="w-[102px] h-[28px]"><Image src={experience.imagePath} width={102} height={28} /></div>
                        <div className="w-[384px] h-[224px] gap-[16px] text-center text-xl font-bold">{experience.jobtitle}
                            <div className="list-none text-s font-normal"> {experience.projects}</div>
                        </div>
                        <div>{experience.timeline}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}