import Filter from "./Filter";
import '../../App.css';


const AllCategories = () => {

    return (
        <div>
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