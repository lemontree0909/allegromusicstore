import { useTranslation } from "react-i18next";
import '../../App.css';



function ContactUs(){

    const { t } = useTranslation();

    return(
        <div>
        <div>
            <div className="contact">
                <h1 className="store one">{t("Our stores")}</h1>
                <h2 className="store two">{t("contact us for any information and support!")}</h2>
                <img className="storeImage" src="https://images.unsplash.com/photo-1519508234439-4f23643125c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aW5zdHJ1bWVudHMlMjBzaG9wfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60" alt="pic"/>
                <button className="store btn">✉️ info@allegromusic.com</button>
            </div>
        </div>

            <div className="containerParent">
                <div className="containerCard">
                    <div className="card">
                        <div className="face face1">
                            <div className="content">
                                <img src="https://images.pexels.com/photos/5855988/pexels-photo-5855988.jpeg?auto=compress&cs=tinysrgb&w=800" alt="pic"/>
                                <h3>{t("Orange County")}</h3>
                            </div>
                        </div>
                        <div className="face face2">
                            <div className="content">
                                <p>{t("ADDRESS: 160 Carpenter Avenue, Middletown, NY 10900")}</p>
                                <p>{t("TEL")}: 1 (945) 692-6922</p>
                                <p>{t("RETAIL HOURS")}:</p>
                                <p>{t("Mon-Sat: 11AM-5PM Sun: Closed")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="face face1">
                            <div className="content">
                                <img src="https://images.pexels.com/photos/12743266/pexels-photo-12743266.jpeg?auto=compress&cs=tinysrgb&w=800" alt="pic"/>
                                <h3>{t("Dutchess County")}</h3>
                            </div>
                        </div>
                        <div className="face face2">
                            <div className="content">
                                <p>{t("ADDRESS: 1686 Route 9 Wappingers Falls, NY 12500")}</p>
                                <p>{t("TEL")}: 1 (945) 297-0011</p>
                                <p>{t("RETAIL HOURS")}:</p>
                                <p>{t("Mon-Sat: 11AM-5PM Sun: Closed")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="face face1">
                            <div className="content">
                                <img src="https://images.unsplash.com/photo-1566211684155-e9b50b6d8b71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fG11c2ljJTIwc3RvcmV8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60" alt="pic"/>
                                <h3>{t("Brooklyn")}</h3>
                            </div>
                        </div>
                        <div className="face face2">
                            <div className="content">
                                <p>{t("ADDRESS: 64 West St, Suite 113, Brooklyn, NY 11244")}</p>
                                <p>{t("TEL")}: 1 (946) 230-8651</p>
                                <p>{t("RETAIL HOURS")}:</p>
                                <p>{t("Appointment Only")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs;