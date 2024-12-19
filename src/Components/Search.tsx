import { useState } from "react"

export default function Search(){
    const [person, setPerson] = useState<string>('')
    const [searchCaracteres, setSearchCaracteres] = useState<any[]>([])

    const buscar = async () => {
        const response = await fetch(`https://potterapi-fedeperin.vercel.app/es/characters?search=${person}`)
        const caracteristicas = await response.json()
        setSearchCaracteres(caracteristicas)
        console.log(caracteristicas)
        setPerson('')
    }

    return(
        <div className="items-center justify-center flex pt-5">
            <div className="w-[600px] background rounded-[10px]">
                <div className="items-center p-4 flex justify-center lg:flex-row flex-col">
                <input type="text" placeholder="Ex: Harry Potter" className="w-[90%] bg-[#cdcd] rounded-[10px] pl-[7px] h-[30px] outline-none" value={person} onChange={(e)=> setPerson(e.target.value)}/>
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
                                    <p className="text-2xl p-2 font-bold text-cente title">{characters.fullName}</p>
                                    <p className="font-bold text-center">{characters.hogwartsHouse}</p>
                                    <p className="text-center font-mono ">{characters.birthdate}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}