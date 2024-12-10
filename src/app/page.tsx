import Navbar from "@/components/Navbar";
export default function Page(){
  return(
    <>
    <header> <Navbar /> </header>
    <div 
    className="banner w-[390px] bg-cover sm:bg-cover
     sm:w-[1349px] h-[500px] sm:h-[700px] bg-slate-400">
      <div
       className="bg-stone-700 p-6 sm:p-8 gap-4 sm:gap-12 flex flex-col
        absolute top-[130px] sm:top-[188px] opacity-85 
        left-[60px] sm:left-[120px] rounded-2xl h-[390px]
         sm:h-[490px] w-[200px] sm:w-[550px]">
        <h1 
        className="sm:mt-0 mt-4 text-xl sm:text-6xl text-white font-bold ">
          Unique Craft Cafe in NYC
          </h1>
        <p 
        className="text-sm leading-relaxed sm:text-lg text-white font-normal">
          Amet luctus venenatis lectus magna fringilla urna porttitor 
          rhoncus dolor. A lacus vestibulum sed arcu non.
           Dolor magna eget est lorem ipsum dolor sit amet consectetur.
           </p>
           <button
            className="button1 tracking-wider rounded-full text-sm sm:text-base
             font-semibold h-[40px] sm:h-[60px]
              uppercase border-2 sm:w-[45%] border-white text-white hover:bg-white hover:text-stone-700">
                View Menu
            </button>
       </div>
    </div>
    <div className="h-[800px] flex items-center flex-col w-[390px] sm:w-[1349px] bg-gray-200">
      <div className="bg-gray-300 h-20 flex items-center mt-9 justify-center w-[300px] sm:w-[500px]" >
        <h1 className="text-3xl sm:text-5xl font-bold ">Coffee & Cakes</h1>
      </div>
      <div className="h-[600px] bg-slate-400 w-[870px]"></div>
    </div>
    </>
  )
}
