import Navbar from "@/components/Navbar";
import Image from "next/image";
import Third from "@/components/Third";
import Fourth from "@/components/Fourth";
import Populardish from "@/components/Populardish";
import Fifth from "@/components/Fifth";
import Sixth from "@/components/Sixth";
import Seventh from "@/components/Seventh";
import Eight from "@/components/Eight";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      {/*Hero Section*/}
      <div
        className="banner w-[390px] bg-cover sm:bg-cover
     sm:w-[1349px] h-[500px] sm:h-[700px] bg-slate-400"
      >
        {/*Hero Div*/}
        <div
          className="bg-stone-700 p-6 sm:p-8 gap-4 sm:gap-14 flex flex-col
        absolute top-[140px] sm:top-[188px] opacity-85 
        left-[60px] sm:left-[120px] rounded-2xl h-[320px]
         sm:h-[490px] w-[250px] sm:w-[550px]"
        >
          <h1 className="sm:mt-0 mt-4 text-2xl sm:text-6xl text-white font-bold ">
            Unique Craft Cafe in NYC
          </h1>
          <p className="text-xs leading-relaxed sm:text-lg text-white font-normal">
            Amet luctus venenatis lectus magna fringilla urna porttitor rhoncus
            dolor. A lacus vestibulum sed arcu non. Dolor magna eget est lorem
            ipsum dolor sit amet consectetur.
          </p>
          <button
            className="button1 tracking-wider rounded-full text-sm sm:text-base
             font-semibold h-[50px] sm:h-[60px]
              uppercase border-2 sm:w-[45%] border-white text-white hover:bg-white hover:text-stone-700"
          >
            View Menu
          </button>
        </div>

        {/*Coffee and Cakes Section*/}
      </div>
      <div className="h-[1200px] sm:h-[950px] flex items-center flex-col w-[390px] sm:w-[1349px]">
        <div className="h-20 flex items-center mt-9 justify-center w-[300px] sm:w-[500px]">
          <h1 className="text-3xl sm:text-5xl font-bold ">Coffee & Cakes</h1>
        </div>

        {/*First section*/}
        <div className="h-[1000px] mt-5 sm:h-[700px] gap-8 grid grid-flow-row grid-cols-1 sm:grid-cols-2 sm:w-[890px]">
          <div className="h-[500px] flex flex-col sm:h-full w-[270px] sm:w-[420px]">
            <div className="sm:h-[240px] flex items-end w-full">
              <Image src={"/pic2.png"} alt="" height={0} width={450} />
            </div>
            <div className="bg-white text-center p-5 sm:p-7 h-[200px] w-full">
              <p className="text-xs sm:text-base text-gray-600">
                Quick can manor smart money hopes worth too. Comfort produce
                husband boy her had hearing. Law others theirs passed but
                wishes. You day real less till dear read. Considered use
                dispatched melancholy sympathize discretion led. Oh feel if up
                to till like.
              </p>
            </div>
            <div className="shadow-lg shadow-gray-400 bg-yellow-700/40 rounded-2xl h-[200px] sm:h-[260px] flex flex-col sm:w-[420px]">
              <h1 className="text-white text-base sm:text-2xl font-bold text-center sm:mt-4 mt-3 p-5 sm:p-8">
                Our coffee is rich in flavor and the espresso is a perfect
                balance of sweetness and acidity that functions well in milk
                drinks.
              </h1>
            </div>
          </div>

          {/*Second Section*/}
          <div className="h-[500px] sm:h-full w-[270px] sm:w-[420px]">
            <div className="shadow-lg shadow-gray-400 bg-yellow-700/60 rounded-2xl h-[200px] sm:h-[240px] flex flex-col sm:w-[420px]">
              <h1 className="text-white text-base sm:text-2xl font-bold text-center sm:mt-4 mt-5 p-5 sm:p-8">
                In addition to our own unique line-up of seasonal Single Origin
                Drip Coffees, Single Origin Cold Brews
              </h1>
            </div>
            <div className="text-center p-7 sm:p-7 h-[200px] w-full">
              <p className="text-xs sm:text-base text-gray-600">
                He an thing rapid these after going drawn or. Timed she his law
                the spoil round defer. In surprise concerns informed betrayed he
                learning is ye. Ignorant formerly so ye blessing. He as spoke
                avoid given downs money on we. Of properly carriage shutters ye
                as wandered up repeated moreover.
              </p>
            </div>
            <div className="sm:h-[240px] flex items-end w-full">
              <Image src={"/pic3.png"} alt="" height={0} width={450} />
            </div>
          </div>
        </div>
      </div>

      {/*Third Section*/}
      <Third/>

       {/*fourth Section*/}
       <Fourth/>

       {/*Popular dish section*/}
       <Populardish/>

       {/*Fifth section*/}
       <Fifth/>

       {/*Sixth Section*/}
       <Sixth/>

       {/*Seventh Section*/}
       <Seventh/>

       {/*Eight Section*/}
       <Eight/>

       {/*Footer*/}
       <Footer/>
    </>
  );
}
