import Image from "next/image";

const works = [
    {
        imagePath: "/Skills/work-image.png",
        jobtitle: "Fiskil",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
        skillss: "react next.js",
     
        
    // React Next.js Typescript Nest.js",

      
    },
   

];

export function Work () {
    return (
        <div className="w-[1440px] h-[1848px] px-[96px] py-[80px] ">
            <div className="flex items-center justify-center mb-12 w-[105px] h-[28px] bg-gray-200 rounded-lg">Work
            </div>
            <div className="text-center">Some of the noteworthy projects I have built:</div>
            <div className="flex flex-col gap-15 w-[1152px] h-[480px] rounded-[12px] px-[64px]">
                {works.map((work) => (
               <div className=" flex w-[1152px] h-[480px] rounded-[12px] shadow-md "key={work.imagePath}>
                    <div className="w-[576px] h-[480px] p-[48px] flex flex-col items-center justify-center bg-slate-50"><Image src={work.imagePath} width={480} height={384} /></div>
                    <div className="w-[576px] h-[480px] p-[48px] gap-[16px] text-center text-xl font-bold">{work.jobtitle}
                        <div className="text-s font-normal text-justify">{work.content} </div>
                        <div> {work.skillss}</div>
                    </div>
                   
               </div>
               
                ))}
            </div>

        </div>
    );
}