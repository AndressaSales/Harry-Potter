import Books from "./Books";
import Hauses from "./Hauses";
import Search from "./Search";

export default function Container(){
    return(
        <>
            <div className="m-auto max-w-[800px] p-[20px] rounded-[10px] bg-[#fff] b">
                <h1 className="text-center text-[#f00] text-3xl font-bold">✨Harry Potter✨</h1>
                <hr />
                <div>
                    <Search />
                    <Books />
                    <hr />
                    <Hauses />
                </div> 
            </div>
        </>
    )
}