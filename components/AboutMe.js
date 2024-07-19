import Image from "next/image";


export function AboutMe() {
    return (
        <div className=" max-w-6xl mx-auto flex flex-col gap-5 py-[80px] px-[96px]">
            <div className="flex-row justify-center rounded-xl bg-slate-300 mb-5 gap-4 mt-4">
              About me
                <div className=" gap-[48px] flex flex-col lg:flex-row">
                    <div className="ml-[40px] relative z-50 flex lg:my-auto ">
                        <Image src="/skills/aboutme.png" width={280} height={360} />
                        {/* <div className="bg-slate-200 h-[480px] absolute w-[400px] top-10 -z-50 ">
                        </div> */}
                    </div>
                    <div className=" flex flex-col flex-1 gap-4 text-justify items-center py-4 px-4">
                        <p className="text-3xl">
                            Curious about me? Here you have it:
                        </p>
                        <p>
                            I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.
                        </p>
                        <p>
                            I began my journey as a web developer in 2015, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early thirties, 7 years after starting my web development journey, I'm building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.
                        </p>
                        <p>
                            I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to development.
                        </p>
                        <p>
                            When I'm not in full-on developer mode, you can find me hovering around on twitter or on indie hacker, witnessing the journey of early startups or enjoying some free time. You can follow me on Twitter where I share tech-related bites and build in public, or you can follow me on GitHub.
                        </p>
                        <p>
                            Finally, some quick bits about me.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}