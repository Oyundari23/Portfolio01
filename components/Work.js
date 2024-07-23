// import Image from "next/image";

// const works = [
//     {
//         imagePath: "/Skills/work-image.png",
//         jobtitle: "Fiskil",
//         content: [
//             "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
//             "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//             "Ut pretium arcu et massa semper, id fringilla leo semper",
//             "Ut pretium arcu et massa semper, id fringilla leo semper",
//             ],
//         contentlist: [],
//         skillss: "react next.js",    
//     },
// ];

// const Card = ({ props }) => {

import Image from "next/image";
import { LuExternalLink } from "react-icons/lu";

const worksData = [
    {
        title: "Fiskil",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
        image: "skills/work.png",
        link: "/",
        tags: ["React", "Next", "Node", "Tailwindcss", "Figma", "Git", "PostgreSQL", "Cypress", "Typescript", "Storybook"],
    }, 
    {
        title: "Fiskil-1",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
        image: "skills/work.png",
        link: "/",
        tags: ["React", "Next", "Node", "Tailwindcss", "Figma", "Git", "PostgreSQL", "Cypress", "Typescript", "Storybook"],
    }, 
    {
        title: "Fiskil-2",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
        image: "skills/work.png",
        link: "/",
        tags: ["React", "Next", "Node", "Tailwindcss", "Figma", "Git", "PostgreSQL", "Cypress", "Typescript", "Storybook"],
    }, 
];

export function Works () {
    return (
     <div className="max-w-6xl mx-auto px-[16px] py-[64px] lg:px-[96px]">
        <div className="flex justify-center mb-5 gap-4 mt-4">
          <Tag name="Work"/>
        </div>
        <div className="text-center mb-10">
           Some of the noteworthy projects I have built:
        </div>
        <div className="px-4 "> 
        {
            worksData.map((work, index) => (
            <WorkCard key={work.title} work={work} isReverse={index % 2 === 1} />
        ))
        }          
        </div>
     </div>
    );
}

function WorkCard({ isReverse = false, work }) {
    return (
        <div className={` lg-4 rounded-lg shadow lg:flex ${isReverse ? "lg:flex-row-reverse" : ""}`}>
            <div className="px-12 py-12 lg:flex-1 bg-slate-100 dark:bg-slate-900">
                <Image src="/skills/work.png" width={240} height={280} className="w-full rounded-lg shadow "/>
            </div>
            <div className="px-12 py-12 flex flex-col gap-4 md:flex-1">
                <div className="mb-2 font-bold">
                    {work.title}
                </div>
                <div className="mb-2 text-justify">
                    {work.desc}
                </div>
                <div className="flex flex-wrap gap-2">
                    {work.tags.map((tag) => (
                        <Tag key={tag} name={tag} />
                    ))}                 
                </div>
                <div className="py-4 px-4"><LuExternalLink /></div>
            </div>
        </div>
    );
}
function Tag ({ name }) {
    return <div className="bg-slate-200 dark:bg-slate-600 flex flex-wrap text-center rounded-xl px-4 py-1">{name}</div>;
}



        // <div className="w-[1440px] mx-auto h-[1848px] px-[96px] py-[80px] flex flex-col gap-6 ">
        //     <div className="flex items-center justify-center mb-12 w-[105px] h-[28px] bg-gray-200 rounded-lg">Work
        //     </div>
        //     <div className="text-center">Some of the noteworthy projects I have built:</div>
        //     <div className="flex flex-col gap-15 w-[1152px] h-[480px] rounded-[12px] px-[64px]">
        //         {works.map((work) => (
        //        <div className=" flex w-[1152px] h-[480px] rounded-[12px] shadow-md "key={work.imagePath}>
        //             <div className="w-[576px] h-[480px] p-[48px] flex flex-col items-center justify-center bg-slate-50" ><Image src={work.imagePath} width={480} height={384} /></div>
        //             <div className="w-[576px] h-[480px] p-[48px] gap-[16px] text-center text-xl font-bold">{work.jobtitle}
        //                 <div className="text-s font-normal text-justify">{work.content} </div>
        //                 <div> {work.skillss}</div>
        //             </div>
                   
        //        </div>
               
        //         ))}
        //     </div>

        // </div>
