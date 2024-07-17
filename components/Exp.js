

const works = [
    {
    company: "",
    jobtitle: "Developer",
    projects: "application",
    timeline: "fgfg",
    },

];

export function Exp () {
    return (
        <div className="w-[1440px] h-[1140px] px-[96px] py-[80px] bg-slate-50">   
            <div className="flex items-center justify-center mb-12 w-[105px] h-[28px] bg-gray-200 rounded-lg">Experience
            </div>
            {/* <div className="flex gap-4">
               {works.map (({work}) => (
               <div key={work.company}>
                    {work.company}
               </div>
               ))}
            </div> */}
           
        </div>
    );
}