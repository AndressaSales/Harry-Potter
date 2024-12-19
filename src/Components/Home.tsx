import { FaWandSparkles } from "react-icons/fa6";

export default function Home(){
    return(
        <>
            <div className="flex justify-center items-center">
                <h1 className="text-center text-[#f00] lg:text-9xl font-bold title pt-6 text-5xl">Harry Potter</h1>
                <p><FaWandSparkles color="brown" className="lg:text-7xl text-4xl" /></p>
            </div>
        </>
    )
}