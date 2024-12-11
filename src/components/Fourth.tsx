import Image from "next/image"
export default function Fourth(){
    return(
        <>
        {/*Bg Image*/}
        <div className="banner2 h-[750px] w-[390px] flex sm:justify-end items-center bg-cover sm:h-[600px] sm:w-[1349px]">

            {/*inner divs*/}
            <div className="sm:relative sm:mt-20 sm:h-[500px] h-[600px] gap-3 sm:p-0 p-4 sm:gap-4 grid grid-cols-2 sm:mr-20 sm:grid-cols-3 sm:w-[600px]">

                {/*First div*/}
                <div className="bg-stone-950 gap-4 sm:gap-6 flex flex-col items-center justify-center opacity-70 h-[180px] w-[175px] sm:h-[200px] sm:w-[180px] rounded-2xl">
                <Image src={"/ice cream.png"} alt="" height={0} width={60} className="opacity-100"/>
                <h1 className="text-white text-lg sm:text-xl sm:font-medium uppercase opacity-100">Top Ice-Cream</h1>
                </div>

                {/*Second div*/}
                <div className="bg-stone-950 gap-4 sm:gap-6 flex flex-col items-center justify-center opacity-70 h-[180px] w-[175px] sm:h-[200px] sm:w-[180px] rounded-2xl">
                <Image src={"/sorbet.png"} alt="" height={0} width={60} className="opacity-100"/>
                <h1 className="text-white text-lg sm:text-xl sm:font-medium uppercase opacity-100">Fruit Sorbets</h1>
                </div>

                {/*Third div*/}
                <div className="bg-stone-950 gap-4 sm:gap-6 flex flex-col items-center justify-center opacity-70 h-[180px] w-[175px] sm:h-[200px] sm:w-[180px] rounded-2xl">
                <Image src={"/cone.png"} alt="" height={0} width={60} className="opacity-100"/>
                <h1 className="text-white text-lg sm:text-xl sm:font-medium uppercase opacity-100">Chip Flavors</h1>
                </div>

                {/*fourth div*/}
                <div className="bg-stone-950 gap-4 sm:gap-6 flex flex-col items-center justify-center opacity-70 h-[180px] w-[175px] sm:h-[200px] sm:w-[180px] rounded-2xl">
                <Image src={"/sundae.png"} alt="" height={0} width={60} className="opacity-100"/>
                <h1 className="text-white text-lg sm:text-xl sm:font-medium uppercase opacity-100">Sundaes</h1>
                </div>

                {/*fifth div*/}
                <div className="bg-stone-950 gap-4 sm:gap-6 flex flex-col items-center justify-center opacity-70 h-[180px] w-[175px] sm:h-[200px] sm:w-[180px] rounded-2xl">
                <Image src={"/milshake.png"} alt="" height={0} width={60} className="opacity-100"/>
                <h1 className="text-white text-lg sm:text-xl sm:font-medium uppercase opacity-100">Smoothies</h1>
                </div>

                {/*sixth div*/}
                <div className="bg-stone-950 gap-2 sm:gap-6 flex flex-col items-center justify-center opacity-70 h-[180px] w-[175px] sm:h-[200px] sm:w-[180px] rounded-2xl">
                <Image src={"/ice cream.png"} alt="" height={0} width={60} className="opacity-100"/>
                <h1 className="text-white text-lg sm:text-xl sm:font-medium uppercase opacity-100">drinks<br/> % more</h1>
                </div>
            </div>
        </div>
        </>
    )
}