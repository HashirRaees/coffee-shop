import Image from "next/image"
export default function Page(){
    return(
        <>
        {/*Main div*/}
        <div className="h-[1800px] sm:h-[1100px] sm:w-[1349px] w-[390px] flex flex-col items-center">

            {/*Header*/}
            <div className="h-[100px] sm:h-[200px] flex justify-center items-center mt-10 sm:w-[550px] w-[300px]">
                <h1 className="text-3xl sm:text-5xl font-bold">Cake & Dessert Cafe</h1>
            </div>

            {/*Images div*/}
            <div className="h-[1500px] sm:h-[680px] sm:w-[1210px] sm:gap-8 gap-10 sm:grid-cols-3 grid grid-cols-1 w-[320px]">

                {/*First image*/}
                <div className="h-[212px] sm:h-[300px] sm:w-[380px] w-full">
                    <Image src={"/pic10.jpg"} alt="" height={280} width={320} className="sm:h-[300px] sm:w-[380px]"/>
                </div>

                {/*Second image*/}
                <div className="h-[212px] sm:h-[300px] sm:w-[380px] w-full">
                    <Image src={"/pic11.jpg"} alt="" height={280} width={320} className="sm:h-[300px] sm:w-[380px]"/>
                </div>

                {/*Third image*/}
                <div className="h-[212px] sm:h-[300px] sm:w-[380px] w-full">
                    <Image src={"/pic12.jpg"} alt="" height={280} width={320} className="sm:h-[300px] sm:w-[380px]"/>
                </div>

                {/*Fourth image*/}
                <div className="h-[212px] sm:h-[300px] sm:w-[380px] w-full">
                    <Image src={"/pic13.jpg"} alt="" height={280} width={320} className="sm:h-[300px] sm:w-[380px]"/>
                </div>

                {/*Fifth image*/}
                <div className="h-[212px] sm:h-[300px] sm:w-[380px] w-full">
                    <Image src={"/pic14.jpg"} alt="" height={280} width={320} className="sm:h-[300px] sm:w-[380px]"/>
                </div>

                {/*Sixth image*/}
                <div className="h-[212px] sm:h-[300px] sm:w-[380px] w-full">
                    <Image src={"/pic15.jpg"} alt="" height={280} width={320} className="sm:h-[300px] sm:w-[380px]"/>
                </div>
            </div>
            <button
             className="button1 font-medium hover:border-none hover:bg-yellow-700/45
              hover:text-white sm:h-[70px] h-[70px] mt-10 sm:w-[220px] w-[210px]
               tracking-wider uppercase text-base border-2
                rounded-full border-yellow-700/45">
            View More
            </button>
        </div>
        </>
    )
}