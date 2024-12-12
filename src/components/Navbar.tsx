import { RiMenuLine } from "@remixicon/react";
import Image from "next/image";
export default function Nav() {
  return (
    <>
      <nav className="bg-yellow-700/30 h-20 flex justify-between items-center w-[390px] sm:w-[1349px]">
        <Image
          src={"/Logo.png"}
          alt=""
          height={0}
          width={120}
          className="sm:ml-20"
        />
        <ul className="sm:flex hidden gap-20 mr-14">
          <li className="text-2xl hover:underline cursor-pointer font-semibold text-white">Home</li>
          <li className="text-2xl hover:underline cursor-pointer font-semibold text-white">About</li>
          <li className="text-2xl hover:underline cursor-pointer font-semibold text-white">Contact</li>
          <li className="text-2xl hover:underline cursor-pointer font-semibold text-white">Services</li>
        </ul>
        <button className="sm:hidden">
          <RiMenuLine size={30} className="sm:hidden mr-10 sm:mr-36" />
        </button>
      </nav>
    </>
  );
}
