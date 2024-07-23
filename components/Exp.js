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
        <div className="max-w-6xl mx-auto px-[16px] flex flex-col gap-8  py-[64px] bg-slate-50">
            <div className="flex justify-center mb-5 gap-4 mt-4">
                <Header name="Experience" />
            </div>
            <div className="text-center">Here is a quick summary of my most recent experiences:</div>
            <div className="flex flex-col gap-0 rounded-lg bg-slate-100">
                {experiences.map((experience) => (
                    <div className=" flex flex-col  px-[32px] py-[32px] justify-between gap-[24px] lg:flex-row lg:gap-8" key={experience.company}>
                        <div className=""><Image src={experience.imagePath} width={102} height={28} /></div>
                        <div className=" flex flex-col gap-8 lg:flex-row-reverse">
                            <div>{experience.timeline}</div>
                            <div className=" gap-[16px] text-xl font-bold">{experience.jobtitle}
                                <div className="list-none text-s font-normal"> {experience.projects}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
function Header ({ name }) {
    return <div className="bg-slate-200 flex flex-wrap text-center rounded-xl px-4 py-1">{name}</div>;
  }

