import { useDispatch, useSelector } from "react-redux";
import { filterCategory, getSelectedCategory } from "../../redux/instrumentsSlice";
import { useTranslation } from "react-i18next";
import '../../App.css';


const Filter = ({category}) => {
    const dispatch = useDispatch();
    const selectedCategory = useSelector(getSelectedCategory);
    const { t } = useTranslation();

    return(
        <div className="cta">
            <h4 onClick={() => {dispatch(filterCategory(category))}} 
            className={selectedCategory === category ? 'categoryButtonSelected categoryButton' : 'categoryButton'}>
                {t(category)}
            </h4>
        </div>
    )
}

export default Filter;