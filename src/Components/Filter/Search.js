import '../../App.css';
import { useTranslation } from "react-i18next";


const Search = ({ setSearchValue }) =>{

    const { t } = useTranslation();


    return(
        <div>
            <input type="text" placeholder={t("Search...")} className="search" onChange={e => setSearchValue(e.target.value)}></input>
        </div>
    )
}

export default Search;
