import { RiMenuLine } from "@remixicon/react";
import Image from "next/image";
export default function Nav() {
  return (
    <>
      <nav className="bg-gray-100 h-20 flex justify-between items-center w-[390px] sm:w-[1349px]">
        <Image
          src={"/Logo.png"}
          alt=""
          height={0}
          width={120}
          className="sm:ml-20"
        />
        <button>
          <RiMenuLine size={30} className="mr-10 sm:mr-36" />
        </button>
      </nav>
    </>
  );
}
