import Image from "next/image"
export default function Page(){
    return(
        <>
        {/*Main Div*/}
        <div className="h-[1020px] sm:h-[600px] w-[390px] sm:w-[1349px] flex justify-center">
            {/*Inner Div*/}
            <div className="h-[1020px] sm:h-[600px] grid grid-cols-1 sm:grid-cols-2 w-[1100px]">

                {/*Image*/}
                <div className="banner5 sm:mt-0 mt-5 ml-8 sm:ml-0 bg-cover sm:w-[550px] sm:h-[600px] w-[330px] h-[340px]"></div>

                {/*Form*/}
                <div className="sm:ml-0 ml-6 w-[350px] sm:w-[550px] items-center flex flex-col h-[600px]">
                    <h1 className="text-4xl mt-5 font-semibold">Contact Us</h1>
                    <form className="mt-5 p-3 flex flex-col h-[475px] w-[310px] sm:w-[510px]">

                        {/*Name*/}
                        <label htmlFor="name" className="sm:text-lg">Name</label>
                        <input 
                        type="text" 
                        id="name"
                        name="name" 
                        placeholder="Enter Your Name"
                        className="h-[50px] p-4 border-b-2 border-black"/>

                        {/*Email*/}
                        <label htmlFor="email" className="sm:text-lg pt-3">Email</label>
                        <input 
                        type="email" 
                        id="email"
                        name="email" 
                        placeholder="Enter A valid email address"
                        className="h-[50px] p-4 border-b-2 border-black"/>

                        {/*Message*/}
                        <label htmlFor="message" className="sm:text-lg pt-3">Message</label>
                        <textarea  
                        id="name"
                        name="name" 
                        className="p-4 h-[140px] border-b-2 border-black"/>

                        {/*Checkbox*/}
                        <div className="bg-white h-[30px] mt-3 ">
                        <input type="checkbox"/>
                        <span className="ml-2 text-sm sm:text-base">I accept the</span>
                        <span className="ml-1 text-sm sm:text-base text-blue-400">Terms And Policies</span>
                        </div>

                        {/*Button*/}
                        <button className="h-[50px] tracking-wide hover:opacity-80 text-lg rounded-2xl font-bold uppercase mt-4 bg-black text-white ">Submit</button>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}