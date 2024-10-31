import { useEffect, useState } from "react"

export default function Books(){
    const [book, setBook] = useState<any[]>([])

    useEffect(()=> {
        const fetchBooks = async () => {
            const response = await fetch('https://potterapi-fedeperin.vercel.app/pt/books')
            const book = await response.json()
            setBook(book)
        }
        fetchBooks();
    }, [])

    return(
        <>
            <div>
                <h1 className="text-center p-4 font-bold text-[32px]">Livros</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                    {
                        book.map((b) => {
                            return(
                                <div className="py-[7px]" key={b.number}>
                                    <div className="items-center justify-center flex">
                                     <img src={b.cover} alt={b.title} className=" rounded-md s" />
                                    </div>
                                    <h1 className="text-center pt-[15px] font-bold text-xl">{b.title}</h1>
                                    <p className=" font-mono text-sm text-center">{b.releaseDate}</p>
                                    <p className="text-center font-serif">{b.description}</p>
                                    
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}