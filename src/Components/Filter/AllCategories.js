import Filter from "./Filter";
import '../../App.css';
import Search from "./Search";
import dataInstruments from "../../data/dataInstruments";
import { useState } from "react";


const AllCategories = () => {
    // eslint-disable-next-line
    const [instruments, setInstruments] = useState(dataInstruments);

    return (
        <div>
            <div className="search-container">
                <Search dataInstruments={dataInstruments}
                        setInstruments={setInstruments}
                />
            </div>

            <div className="navbar">
                <div className="navbarElements">
                    {['ALL', 'PIANOS', 'GUITARS', 'DRUMS AND PERCUSSION', 'KEYBOARDS', 'STUDIO / DJ', 'EFFECTS', 'AMPLFIERS', 'STRINGS', 'BREATHINGS', 'DUBBING', 'HI-FI', 'LESSONS']
                    .map(category => <Filter key={category} category={category}/>)}
                </div>
            </div>
        </div>
    )
}

export default AllCategories;