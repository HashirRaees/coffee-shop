export default function Third(){
    return(
        <>
        {/*Main div*/}
        <div className="sm:w-[1349px] sm:mt-0 mt-10 w-[390px] h-[1100px] sm:h-[950px]">

            {/*Bg Image*/}
            <div className="banner1 bg-cover sm:h-[690px] h-[200px] w-[390px] sm:w-[1349px]">

                {/*Inner divs*/}
                <div 
                className="relative sm:left-[100px] sm:gap-7 gap-4 sm:top-[570px] sm:m-0 ml-12 grid grid-flow-row grid-cols-1 sm:grid-cols-4 top-[160px] sm:h-[350px] sm:w-[1160px]">

                {/*first div*/}    
                <div className="sm:h-[300px] h-[200px] shadow-lg shadow-gray-300 flex flex-col p-3 sm:p-5 gap-3 sm:gap-5 rounded-2xl sm:w-[270px] w-[290px] bg-white">
                    <h1 className="text-yellow-700/40 text-4xl sm:text-6xl font-bold">01</h1>
                    <h2 className="sm:text-xl font-medium">About Us</h2>
                    <p className="text-sm sm:text-base text-gray-600 italic">Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                    laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>

                {/*Second div*/}
                <div className="sm:h-[300px] h-[200px] shadow-lg shadow-gray-300 flex flex-col p-3 sm:p-5 gap-3 sm:gap-5 rounded-2xl sm:w-[270px] w-[290px] bg-white">
                    <h1 className="text-yellow-700/40 text-4xl sm:text-6xl font-bold">02</h1>
                    <h2 className="sm:text-xl font-medium">Our Food</h2>
                    <p className="text-sm sm:text-base text-gray-600 italic">Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                    laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div> 

                 {/*third div*/}
                 <div className="sm:h-[300px] h-[200px] shadow-lg shadow-gray-300 flex flex-col p-3 sm:p-5 gap-3 sm:gap-5 rounded-2xl sm:w-[270px] w-[290px] bg-white">
                    <h1 className="text-yellow-700/40 text-4xl sm:text-6xl font-bold">03</h1>
                    <h2 className="sm:text-xl font-medium">Our Drinks</h2>
                    <p className="text-sm sm:text-base text-gray-600 italic">Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                    laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div> 

               {/*Fourth div*/}
               <div className="sm:h-[300px] shadow-lg shadow-gray-300 h-[200px] flex flex-col p-3 sm:p-5 gap-3 sm:gap-5 rounded-2xl sm:w-[270px] w-[290px] bg-white">
                <h1 className="text-yellow-700/40 text-4xl sm:text-6xl font-bold">04</h1>
                <h2 className="sm:text-xl font-medium">Excellent Coffee</h2>
                 <p className="text-sm sm:text-base text-gray-600 italic">Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}