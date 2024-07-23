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

export function Skills () {
  return (
    <div className="max-w-6xl mx-auto px-[16px] py-[64px] gap-[36px] flex flex-col ">
      <div className="flex justify-center mb-5 gap-4 mt-4">
                <Header name="Skills" />
            </div>
      <div className="text-center">The skills, tools and tech I am really good at:</div>
      <div className="">
        <div className="grid grid-cols-3 gap-10 lg:grid-cols-8">
          {skills.map((skill) => (
            <div key={skill.name}>
              <Image src={skill.imagePath} width={40} height={40} />
              {skill.name}
            </div>
          ))}
        </div>
      </div>     
    </div>
  );
}

function Header ({ name }) {
  return <div className="bg-slate-200 flex flex-wrap text-center rounded-xl px-4 py-1">{name}</div>;
}