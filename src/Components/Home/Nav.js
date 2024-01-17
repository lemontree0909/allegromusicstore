import React from "react";
import {

  BrowserRouter as Router,

  Routes,

  Route,

  Link

} from "react-router-dom";
import Home from "../Home/Home";
import Shop from "../Shop/Shop";
import Academy from "../Academy/Academy";
import ContactUs from "../ContactUs/ContactUs";
import world from '../../picture/icons/world.png';
import '../../App.css';
import { useTranslation } from "react-i18next";
import Cart from "../Cart/Cart";

function Nav() {

  const { i18n, t } = useTranslation();

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')
  }

  return <Router>

    <nav>
      <div className="left-side">
      <Link to ="/home" className="link">{t('About us')}</Link>
      <Link to ="/" className="link">{t('Shop')}</Link>
      <Link to ="/academy" className="link">{t('Allegro Academy')}</Link>
      <Link to ="/contact" className="link">{t('Contact Us')}</Link>
      </div>

      <div className="right-side">
        <Cart/>

        <img onClick={toggleLang} className='worldIcon' src={world} alt="icon"/>
          {i18n.language === 'en' ? 'EN' : 'RU'}
      </div>
    </nav>
    


    <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/" element={<Shop/>}/>
      <Route path="/academy" element={<Academy/>}/>
      <Route path="/contact" element={<ContactUs/>}/>
    </Routes>

  </Router>
}

export default Nav;
