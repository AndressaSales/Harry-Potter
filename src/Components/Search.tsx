import { useState } from "react"

export default function Search(){
    const [person, setPerson] = useState<string>('')
    const [searchCaracteres, setSearchCaracteres] = useState<any[]>([])

    const buscar = async () => {
        const response = await fetch(`https://potterapi-fedeperin.vercel.app/es/characters?search=${person}`)
        const caracteristicas = await response.json()
        setSearchCaracteres(caracteristicas)
        console.log(caracteristicas)
    }

    return(
        <>
            <div>
                <div className="items-center p-4 flex justify-center lg:flex-row flex-col">
                <input type="text" placeholder="Ex: Harry Potter" className="lg:flex-grow w-[300px] text-2xl lg:text-[20px] outline-none border-[3px] border-[#f00] border-t-transparent border-r-transparent border-l-transparent " value={person} onChange={(e)=> setPerson(e.target.value)}/>
                <button 
                    className="m-4 bg-sky-700 text-center text-[#fff] px-4 py-2 rounded-md text-xl"
                    onClick={buscar}
                >Buscar</button>
                </div>

                <div className="justify-center items-center flex pb-[30px]">
                    {
                        searchCaracteres.map((characters)=>{
                            return(
                                <div key={characters.index}>
                                    <div className="justify-center items-center flex">
                                        <img src={characters.image} alt={characters.fullName} className="rounded-xl h-[340px] cursor-pointer duration-200 hover:scale-110" />
                                    </div>
                                    <p className="text-2xl p-2 font-bold text-center">{characters.fullName}</p>
                                    <p className="font-bold text-center">{characters.hogwartsHouse}</p>
                                    <p className="text-center font-mono ">{characters.birthdate}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}