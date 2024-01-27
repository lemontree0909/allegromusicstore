import { useState } from "react";
import { useTranslation } from "react-i18next";
import '../../../App.css';
import { dataPromo } from "../../../data/dataPromo";

function Carousel(){

    const { t } = useTranslation();

    const  [instrumentCarousel, setInstrumentCarousel] = useState(0);
    const {image} = dataPromo[instrumentCarousel];

    const previousInstrument = () => {
        setInstrumentCarousel (( instrumentCarousel =>{
            instrumentCarousel --;
            if (instrumentCarousel<0){
                return dataPromo.length -1;
            }
            return instrumentCarousel;
        }))
    }

    const nextInstrument = () => {
        setInstrumentCarousel (( instrumentCarousel =>{
            instrumentCarousel ++;
            if (instrumentCarousel>dataPromo.length -1){
                instrumentCarousel=0;
            }
            return instrumentCarousel;
        }))
    }

return(<div>
    <div className="conter">
        <button className="btn-home" onClick={previousInstrument}>{t('Previous')}</button>
        <img src={image} className="carousel-image" alt="instrument"/>
        <button className="btn-home" onClick={nextInstrument}>{t('Next')}</button>
    </div>
    <div className="info">
        <h1 className='textStory'>{t("Allegro's Story")}</h1>
        <h4 className='textStory'>{t('Allegro is one of the best quality music stores in the city. In fact, they are the best when it comes to pianos. In addition to pianos they also have a wide range of other instruments. Allegro is the best distributor of many worldwide musical instrument manufacturers such as Yamaha and Zildjian, PRS,Mesa/Boogie, Line6, Zoom, Schecter, Godin, Pearl River, Suzuki, Rotosund, Ashton, and Savarez.')}</h4>
    </div>
</div>)
}

export default Carousel;