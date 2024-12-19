import { GiSnake } from "react-icons/gi";
import { GiLion } from "react-icons/gi";
import { GiEagleEmblem } from "react-icons/gi";
//import texugo from "../assets/texugo.png"

export default function Hauses(){

    const hauses = [
        {
            id: 1,
            hause: "Grifinória",
            mascot: <GiLion />
        },
        {
            id: 2,
            hause: "Sonserina",
            mascot: <GiSnake />
        },
        {
            id: 3,
            hause: "Corvinal",
            mascot: <GiEagleEmblem />
        },
        {
            id: 4,
            hause: "Lifa-lufa",
            mascot: "🦡"
        }
    ]

    return(
        <>
            <div>
                <h2 className="text-center font-bold text-3xl text-[#fff]">Casas</h2>
                <div className="grid grid-cols-1 md:grid-cols-2">
                    {
                        hauses.map((hause)=> {
                            return(
                                <div key={hause.id}>
                                    <div className="items-center justify-center flex flex-col pb-4">
                                        <h1 className="text-[50px] px-[40px] text-[#fff]">{hause.mascot}</h1>
                                        <h1 className="border-[3px] border-[#f00] px-[29px] font-bold text-[#fff]">{hause.hause}</h1>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}