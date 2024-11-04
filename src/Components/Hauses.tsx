import { useEffect, useState } from "react"

export default function Hauses(){
    const [house, setHouse] = useState<any[]>([])

    useEffect(()=> {
        const casas = async () =>{
            const res = await fetch('https://potterapi-fedeperin.vercel.app/pt/houses')
            const hause = await res.json()
            setHouse(hause)
        }
        casas();
    }, [])

    return(
        <>
            <div>
                <h2 className="text-center font-bold text-3xl">Casas</h2>
                <div className="grid grid-cols-1 md:grid-cols-2">
                    {
                        house.map((h)=> {
                            return(
                                <div key={h.index}>
                                    <div className="items-center justify-center flex flex-col pb-4">
                                        <h1 className="text-[50px] px-[40px] sa">{h.emoji}</h1>
                                        <h1 className="border-[3px] border-[#000] px-[29px] font-bold">{h.house}</h1>
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