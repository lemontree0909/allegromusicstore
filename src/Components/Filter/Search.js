import { useMemo, useState } from "react";
import '../../App.css';

const Search = ({ dataInstruments, setInstrument }) =>{

    const [text, setText] = useState("");
    const [search, setSearch] = useState("");

    const handleText = (e) => {
        setText(e.target.value)
    }

    const handleSearch = () => {
        setSearch(text)
    }

    useMemo(() => {
        console.log ("Filtering")

        if (search) {
            const filteredItems = [];
            dataInstruments.forEach(instrumentName => {

                if (instrumentName.category.toLowerCase().includes(search.toLocaleLowerCase())) { 
                    console.log(instrumentName.category.toLowerCase().includes(search.toLocaleLowerCase()))
                    filteredItems.push(instrumentName);
                }

                else if (instrumentName.name.toLowerCase().includes(search.toLocaleLowerCase())) {
                    filteredItems.push(instrumentName);
                }
                else {
                    setInstrument(filteredItems);
                }
        })
    }
    // eslint-disable-next-line
    }, [search, dataInstruments])

    return(
        <div>
            <input type="text" onChange={handleText}></input>
            <button type="submit" className="search" onClick={handleSearch}>🔍</button>
        </div>
    )
}

export default Search;
