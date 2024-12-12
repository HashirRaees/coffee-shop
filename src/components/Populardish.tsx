import Image from "next/image";
export default function Page() {
  return (
    <>
      {/*Main div*/}
      <div className="h-[2940px] w-[390px] flex flex-col items-center sm:h-[1300px] sm:w-[1349px] bg-yellow-700/45">
        {/*Heading*/}
        <div className="flex mt-7 justify-center items-center h-[120px] w-[390px] sm:h-[170px] sm:mt-[60px] sm:w-[450px]">
          <h1 className="text-white text-3xl sm:text-6xl font-bold ">
            Popular Dishes
          </h1>
        </div>
        {/*Inner Six Divs*/}
        <div className="grid grid-cols-1 grid-flow-row sm:grid-cols-3 h-[2800px] w-[290px] sm:h-[1000px] sm:w-[1200px]">
          {/*First Div*/}
          <div className="bg-white items-center p-7 flex flex-col h-[430px] sm:h-[470px] rounded-2xl sm:w-[370px]">
            {/*Dish Image*/}
            <div className="h-[170px] sm:h-[210px] w-[250px] sm:w-[310px]">
              <Image
                src={"/pic4.jpg"}
                alt=" "
                height={0}
                width={350}
                className="rounded-2xl"
              />

              {/*Dish Name*/}
              <h1 className="text-xl sm:text-2xl font-bold text-yellow-700/45 mt-5 uppercase">
                tiramisu cake
              </h1>

              {/*Sample Text*/}
              <p className="text-sm sm:text-base mt-5 font-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto accusantium cum, in suscipit
              </p>
              <div className="sm:w-[320px] flex justify-between sm:mt-3 mt-5 h-[70px] w-[260px]">
                {/*Price*/}
                <div className="h-[60px] w-[90px] flex items-center">
                  <h1 className="text-xl sm:text-2xl text-yellow-700/45 font-bold">
                    $10.00
                  </h1>
                </div>
                {/*Button*/}
                <div className="h-[70px] sm:w-[160px] w-[130px] flex items-center">
                  <button className="button1 sm:h-[55px] sm:text-base sm:rounded-full sm:w-[150px] h-[40px] w-[120px] hover:bg-yellow-700/70 rounded-3xl text-xs uppercase text-white font-bold bg-yellow-700/45">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/*Second Div*/}
          <div className="bg-white items-center p-7 flex flex-col h-[430px] sm:h-[470px] rounded-2xl sm:w-[370px]">
            {/*Dish Image*/}
            <div className="h-[170px] sm:h-[210px] w-[250px] sm:w-[310px]">
              <Image
                src={"/pic5.jpg"}
                alt=" "
                height={0}
                width={350}
                className="rounded-2xl"
              />

              {/*Dish Name*/}
              <h1 className="text-xl sm:text-2xl font-bold text-yellow-700/45 mt-5 uppercase">
                chia pudding
              </h1>

              {/*Sample Text*/}
              <p className="text-sm sm:text-base mt-5 font-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto accusantium cum, in suscipit
              </p>

              <div className="sm:w-[320px] flex justify-between sm:mt-3 mt-5 h-[70px] w-[260px]">
                {/*Price*/}
                <div className="h-[60px] w-[90px] flex items-center">
                  <h1 className="text-xl sm:text-2xl text-yellow-700/45 font-bold">
                    $8.00
                  </h1>
                </div>
                {/*Button*/}
                <div className="h-[70px] sm:w-[160px] w-[130px] flex items-center">
                  <button className="button1 sm:h-[55px] sm:text-base sm:rounded-full sm:w-[150px] h-[40px] w-[120px] hover:bg-yellow-700/70 rounded-3xl text-xs uppercase text-white font-bold bg-yellow-700/45">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/*Third Div*/}
          <div className="bg-white items-center p-7 flex flex-col h-[430px] sm:h-[470px] rounded-2xl sm:w-[370px]">
            {/*Dish Image*/}
            <div className="h-[170px] sm:h-[210px] w-[250px] sm:w-[310px]">
              <Image
                src={"/pic6.jpg"}
                alt=" "
                height={0}
                width={350}
                className="rounded-2xl"
              />

              {/*Dish Name*/}
              <h1 className="text-xl sm:text-2xl font-bold text-yellow-700/45 mt-5 uppercase">
                cheesecake
              </h1>

              {/*Sample Text*/}
              <p className="text-sm sm:text-base mt-5 font-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto accusantium cum, in suscipit
              </p>
              <div className="sm:w-[320px] flex justify-between sm:mt-3 mt-5 h-[70px] w-[260px]">
                {/*Price*/}
                <div className="h-[60px] w-[90px] flex items-center">
                  <h1 className="text-xl sm:text-2xl text-yellow-700/45 font-bold">
                    $7.00
                  </h1>
                </div>
                {/*Button*/}
                <div className="h-[70px] sm:w-[160px] w-[130px] flex items-center">
                  <button className="button1 sm:h-[55px] sm:text-base sm:rounded-full sm:w-[150px] h-[40px] w-[120px] hover:bg-yellow-700/70 rounded-3xl text-xs uppercase text-white font-bold bg-yellow-700/45">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/*Fourth Div*/}
          <div className="bg-white items-center p-7 flex flex-col h-[430px] sm:h-[470px] rounded-2xl sm:w-[370px]">
            {/*Dish Image*/}
            <div className="h-[170px] sm:h-[210px] w-[250px] sm:w-[310px]">
              <Image
                src={"/pic7.jpg"}
                alt=" "
                height={0}
                width={350}
                className="rounded-2xl"
              />

              {/*Dish Name*/}
              <h1 className="text-xl sm:text-2xl font-bold text-yellow-700/45 mt-5 uppercase">
                chocolate cake
              </h1>

              {/*Sample Text*/}
              <p className="text-sm sm:text-base mt-5 font-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto accusantium cum, in suscipit
              </p>
              <div className="sm:w-[320px] flex justify-between sm:mt-3 mt-5 h-[70px] w-[260px]">
                {/*Price*/}
                <div className="h-[60px] w-[90px] flex items-center">
                  <h1 className="text-xl sm:text-2xl text-yellow-700/45 font-bold">
                    $7.00
                  </h1>
                </div>
                {/*Button*/}
                <div className="h-[70px] sm:w-[160px] w-[130px] flex items-center">
                  <button className="button1 sm:h-[55px] sm:text-base sm:rounded-full sm:w-[150px] h-[40px] w-[120px] hover:bg-yellow-700/70 rounded-3xl text-xs uppercase text-white font-bold bg-yellow-700/45">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/*Fifth Div*/}
          <div className="bg-white items-center p-7 flex flex-col h-[430px] sm:h-[470px] rounded-2xl sm:w-[370px]">
            {/*Dish Image*/}
            <div className="h-[170px] sm:h-[210px] w-[250px] sm:w-[310px]">
              <Image
                src={"/pic8.jpg"}
                alt=" "
                height={0}
                width={350}
                className="rounded-2xl"
              />

              {/*Dish Name*/}
              <h1 className="text-xl sm:text-2xl font-bold text-yellow-700/45 mt-5 uppercase">
                cheesecake
              </h1>

              {/*Sample Text*/}
              <p className="text-sm sm:text-base mt-5 font-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto accusantium cum, in suscipit
              </p>
              <div className="sm:w-[320px] flex justify-between sm:mt-3 mt-5 h-[70px] w-[260px]">
                {/*Price*/}
                <div className="h-[60px] w-[90px] flex items-center">
                  <h1 className="text-xl sm:text-2xl text-yellow-700/45 font-bold">
                    $7.00
                  </h1>
                </div>
                {/*Button*/}
                <div className="h-[70px] sm:w-[160px] w-[130px] flex items-center">
                  <button className="button1 sm:h-[55px] sm:text-base sm:rounded-full sm:w-[150px] h-[40px] w-[120px] hover:bg-yellow-700/70 rounded-3xl text-xs uppercase text-white font-bold bg-yellow-700/45">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/*sixth Div*/}
          <div className="bg-white items-center p-7 flex flex-col h-[430px] sm:h-[470px] rounded-2xl sm:w-[370px]">
            {/*Dish Image*/}
            <div className="h-[170px] sm:h-[210px] w-[250px] sm:w-[310px]">
              <Image
                src={"/pic9.jpg"}
                alt=" "
                height={0}
                width={350}
                className="rounded-2xl"
              />

              {/*Dish Name*/}
              <h1 className="text-xl sm:text-2xl font-bold text-yellow-700/45 mt-5 uppercase">
                orange cake
              </h1>

              {/*Sample Text*/}
              <p className="text-sm sm:text-base mt-5 font-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto accusantium cum, in suscipit
              </p>
              <div className="sm:w-[320px] flex justify-between sm:mt-3 mt-5 h-[70px] w-[260px]">
                {/*Price*/}
                <div className="h-[60px] w-[90px] flex items-center">
                  <h1 className="text-xl sm:text-2xl text-yellow-700/45 font-bold">
                    $7.00
                  </h1>
                </div>
                {/*Button*/}
                <div className="h-[70px] sm:w-[160px] w-[130px] flex items-center">
                  <button className="button1 sm:h-[55px] sm:text-base sm:rounded-full sm:w-[150px] h-[40px] w-[120px] hover:bg-yellow-700/70 rounded-3xl text-xs uppercase text-white font-bold bg-yellow-700/45">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
