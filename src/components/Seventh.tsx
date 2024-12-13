export default function Page(){
    return(
        <>
        {/*Main div*/}
        <div className="h-[80px] sm:w-[1349px] w-[390px] sm:mt-32 mt-10">

            {/*Style Div*/}
            <div className="h-[270px] sm:h-[700px] absolute z-10 sm:left-[900px] left-[200px] rounded-3xl sm:w-[330px] w-[150px] bg-yellow-700"></div>

            {/*Bg Image*/}
            <div className="banner4 bg-cover z-20 rounded-3xl sm:h-[600px] h-[200px] sm:w-[886px] w-[250px] sm:mt-12 mt-10 bg-gray-300 absolute sm:left-[230px] left-[60px]">
            </div>
        </div>

        {/*Black div*/}
        <div className="bg-stone-900 sm:mt-64 mt-16 sm:w-[1349px] -z-10 w-[390px] sm:h-[600px] h-[480px]">

            {/*text div*/}
            <div className="bg-white sm:z-30 sm:h-[370px] sm:p-8 h-[260px] flex flex-col gap-5 absolute mt-44 rounded-3xl p-5 sm:left-[150px] left-[60px] sm:w-[550px] w-[280px]">
                <h1 className="text-xl sm:text-3xl sm:mt-0 mt-7 font-thin uppercase tracking-wider">Cafe in Manhattan</h1>
                <h1 className="text-3xl sm:text-7xl font-bold">Coffee or tea specialty to choose</h1>
            </div>
        </div>
        </>
    )
}