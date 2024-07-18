import Image from "next/image";

const skills = [
  {
    imagePath: "/Skills/icon-javscript.svg",
    name: "Javascript",
  },
  {
    imagePath: "/Skills/icon-typescript.svg",
    name: "Typescript",
  },
  {
    imagePath: "/Skills/icon-react.svg",
    name: "React",
  },
  {
    imagePath: "/Skills/icon-nextjs.svg",
    name: "Next.js",
  },
  {
    imagePath: "/Skills/icon-nodejs.svg",
    name: "Node.js",
  },
  {
    imagePath: "/Skills/icon-express.svg",
    name: "Express.js",
  },
  {
    imagePath: "/Skills/icon-nest.svg",
    name: "Nest.js",
  },
  {
    imagePath: "/Skills/icon-socket.svg",
    name: "Socket.js",
  },
];

export function Skills() {
  return (
    <div className="w-[1440px] mx-auto h-[560px] px-[96px] py-[80px] flex flex-col gap-[48px] ">
      <div className="flex items-center justify-center mb-12 w-[105px] h-[28px] bg-gray-200 rounded-lg">
        Skills
      </div>
      <div className="w-[1216px] h-[100px] flex justify-between">
        {skills.map((skill) => (
          <div key={skill.name}>
            <Image src={skill.imagePath} width={40} height={40} />
            {skill.name}
          </div>
        ))}
      </div>
      <div className="w-[1216px] h-[100px] flex justify-between">
        {skills.map((skill) => (
          <div key={skill.name}>
            <Image src={skill.imagePath} width={40} height={40} />
            {skill.name}
          </div>
        ))}
      </div>
    </div>
  );
}
