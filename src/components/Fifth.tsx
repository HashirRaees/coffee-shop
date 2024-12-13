export default function Page(){
    return(
        <>
        {/*Main div*/}
        <div className="bg-zinc-900 h-[780px] sm:h-[1100px] sm:w-[1349px] w-[390px]">

            {/*Style div1*/}

            <div className="h-[150px] sm:h-[550px] absolute sm:left-[770px] left-[200px] sm:mt-20 mt-12 rounded-2xl bg-yellow-700/50 sm:w-[480px] w-[150px]"></div>

            {/*Style div2*/}
            <div className="h-[180px] sm:h-[400px] sm:top-[5135px] sm:w-[440px] rounded-2xl w-[140px] mt-[120px] sm:left-[100px] left-[45px] absolute bg-yellow-700/50"></div>

            {/*Bg image*/}
            <div className="banner3 bg-cover z-10 bg-gray-300 absolute sm:left-[160px] sm:mt-[150px] left-[90px] rounded-3xl mt-[80px] sm:h-[670px] h-[190px] sm:w-[1000px] w-[230px]"></div>

            {/*Text Div*/}
            <div className="h-[380px] sm:h-[480px] sm:gap-14 gap-8 flex flex-col sm:p-9 p-7 sm:w-[480px] w-[280px] bg-white absolute rounded-3xl sm:top-[5330px] z-10 sm:left-[640px] top-[6940px] left-[60px]">
                <h1 className="text-2xl sm:text-4xl sm:mt-10 font-bold text-orange-800">
                Vegetarian Menu
                </h1>
                <p className="text-base sm:text-xl">Duis aute irure dolor in reprehenderit in 
                 voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                 Excepteur sint occaecat cupidatat non proident
                 </p>
                 <button className="button1 h-[55px] sm:h-[60px] sm:w-[210px] hover:bg-orange-800 hover:text-white font-medium rounded-full border-2 tracking-wider border-orange-800 w-[180px] bg-white uppercase">Learn More</button>
            </div>
        </div>
        </>
    )
}