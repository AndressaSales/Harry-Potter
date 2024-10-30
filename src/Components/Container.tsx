import Books from "./Books";

export default function Container(){
    return(
        <>
            <div className="m-auto max-w-[800px] p-[20px] rounded-[10px] bg-[#fff] b">
                <h1 className="text-center text-[#f00] text-3xl font-bold">✨Mundo Mágico!✨</h1>
                <p className="text-center">do</p>
                <h1 className="text-[#f00] text-center font-bold text-3xl">Harry Potter</h1>
                <hr />
                <div>
                    <Books />
                </div>
            </div>
        </>
    )
}