import Image from "next/image";

export function Hero() {
    return (
        <div className="flex justify-between">
            <div className="text-6xl">Hi, I'm Sagar </div>
    <Image src="/Pic.png" width={100} height={100} />
        </div>
   
    );
}