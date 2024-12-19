import Books from "./Components/Books";
import Hauses from "./Components/Hauses";
import Home from "./Components/Home";
import Search from "./Components/Search";

export default function App(){
    return(
        <>
            <Home />
            <Search />
            <Books />
            <Hauses />
        </>
    )
}