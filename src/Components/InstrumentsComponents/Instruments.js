import dataInstruments from "../../data/dataInstruments";
import Instrument from "./Instrument";
import '../../App.css';
import { useSelector } from "react-redux";
import { getSelectedCategory } from "../../redux/instrumentsSlice";

const Instruments = ({searchValue}) => {
    const selectedCategory = useSelector(getSelectedCategory);

    const searchResult = dataInstruments.filter(dataInstrument => {

        return dataInstrument.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase().trim()) 
            || dataInstrument.category.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase().trim())
            || dataInstrument.nameRu.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase().trim()) 
            || dataInstrument.categoryRu.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase().trim())
    })

    return (
        <div className="products">
            {searchResult
            .filter(instrument => {
                if (selectedCategory === 'ALL') return true;
                return selectedCategory === instrument.category;
            })
            .map(instrument => <Instrument key={instrument.id} instrument={instrument}/>)}
        </div>
    )
}

export default Instruments;