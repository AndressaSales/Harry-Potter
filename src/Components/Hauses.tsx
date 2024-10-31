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
                                    <div className="items-center justify-center flex">
                                        <h1 className="text-[30px]">{h.emoji}</h1>
                                        <h2 className="font-bold">{h.house}</h2>
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