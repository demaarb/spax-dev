import React from "react";
import Image from "next/image";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Team", href: "/crewmembers", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];

export default function Navbar() {
  return (
    <nav className="relative flex w-full h-28 flex-wrap items-center justify-between bg-zinc-50 py-2 shadow-dark-mild">
      <div className="flex space-x-4 ms-2">
        <a className="text-xl text-black" href="/">
          <Image className="rounded-xl" id="logo" src="/logo1.png" alt="logo" width={98} height={102}/>
        </a>               
      </div>
      <div className="flex flex-1 items-center justify-center sm:items-stretch ">
        <div className="flex space-x-4 px-4">
          {navigation.map((item) => (
            <a className="text-xl text-black" key={item.name} href={item.href}>
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
