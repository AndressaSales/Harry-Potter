import { useState } from "react"

export default function Search(){
    const [person, setPerson] = useState<string>('')
    const [searchCaracteres, setSearchCaracteres] = useState<any[]>([])

    const buscar = async () => {
        const response = await fetch(`https://potterapi-fedeperin.vercel.app/es/characters?search=${person}`)
        const caracteristicas = await response.json()
        setSearchCaracteres(caracteristicas)
    }

    return(
        <>
            <div>
                <div className="items-center p-4 flex justify-center lg:flex-row flex-col">
                <input type="text" placeholder="Ex: Harry Potter" className="lg:flex-grow w-[300px] text-2xl lg:text-[20px] outline-none border-[3px] border-[#f00] border-t-transparent border-r-transparent border-l-transparent " value={person} onChange={(e)=> setPerson(e.target.value)}/>
                <button className="m-4 bg-sky-700 text-center text-[#fff] px-4 py-2 rounded-md text-xl">Buscar</button>
                </div>
            </div>
        </>
    )
}