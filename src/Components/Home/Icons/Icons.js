import '../../../App.css';
import { dataIcons } from "../../../data/dataIcons";
import { useTranslation } from "react-i18next";


function Icons(){

    const { t } = useTranslation();

   
return(
    <div className="icon-home">
        {dataIcons.map((item =>{
            const {id, icon, title, text} = item;
            return(
                <div className='icon' key={id}>
                    <img className='icon-image' src={icon} alt="icon"/>
                    <h2 className='icon-text'>{t(title)}</h2>
                    <p className='icon-text-small'>{t(text)}</p>

                </div>
            )
        }))}
    </div>
    )
}

export default Icons;



