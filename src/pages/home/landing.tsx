"use client"

import styles from "../../styles/scss/home/home.module.css";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { Image } from 'primereact/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import the icons you need
import {
    faEnvelope,
    faMapMarkerAlt,
    faPhone,
    faTemperatureLow
} from '@fortawesome/free-solid-svg-icons';
import { Button } from "primereact/button";

import logo from '../../imgs/image 5.png'
import bg_logo5 from '../../imgs/bg_logo5.png'
import background from '../../imgs/437954352_446554371073403_6335062559747970792_n 1.png'


export function Header() {
    return (
        <>
            <PrimeReactProvider value={{ unstyled: false }}>
                <header>
                    <div className={styles.container}>
                        <div className={styles.contact}>
                            <div className={`${styles.location} ${styles.col}`}>
                                <FontAwesomeIcon className={styles.iconHead} icon={faMapMarkerAlt} />
                                <h4>Sikforsvägen 7, Hällefors</h4>
                            </div>
                            <div className={styles.bord}></div>
                            <div className={`${styles.mile} ${styles.col}`}>
                                <FontAwesomeIcon className={styles.iconHead} icon={faEnvelope} />
                                <a href="mailto:kommun@hellefors.se">kommun@hellefors.se</a>
                            </div>
                            <div className={styles.bord}></div>
                            <div className={`${styles.phone} ${styles.col}`}>
                                <FontAwesomeIcon className={styles.iconHead} icon={faPhone} />
                                <h4>0591-641 00</h4>
                            </div>
                        </div>
                        <div className={styles.head}>
                            <div className={styles.logo}>
                                <Image className={styles.logo} src={logo} alt="Picture of the author" />
                            </div>
                            <nav>
                                <ul>
                                    <li><a href="#">Barnomsorg Utbildning</a></li>
                                    <li><a href="#">Omsorg stöd</a></li>
                                    <li><a href="#">uppleva Göra</a></li>
                                    <li><a href="#">Bygga Bo Miljö</a></li>
                                    <li><a href="#">Trafik Gator</a></li>
                                    <li><a href="#">Närinhsliv Arabete</a></li>
                                    <li><a href="#">Kommun Politik</a></li>
                                </ul>
                            </nav>
                            <div className={styles.login}>
                                <Button label="Login" severity="info" />
                            </div>
                        </div>
                    </div>
                </header>
            </PrimeReactProvider>
        </>
    );
}
export function Landing() {
    return (
        <>
            <PrimeReactProvider value={{ unstyled: false }}>
                <Header />

                <div className={styles.landing}>
                    <div className={styles.back}>
                        <div className={styles.overlay}></div>
                        <Image className={styles.background} src={background} alt="Picture of the author" />
                    </div>
                    <div className={styles.container}>
                        <div className={styles.services_cards}>
                            <div className={styles.box}>
                                <div className={styles.colum}>
                                    <h2>Aktuellt</h2>
                                    <FontAwesomeIcon className={styles.icon} icon={faTemperatureLow} />
                                </div>
                                <ul>
                                    <li><a href="#">Staden satsar på basket ~</a></li>
                                    <li><a href="#">Erstas nya sjukhus är årets ~</a></li>
                                    <li><a href="#">Nominera till trgghetspriset ~</a></li>
                                </ul>
                            </div>
                            <div className={styles.box}>
                                <div className={styles.colum}>
                                    <h2>Aktuellt</h2>
                                    <FontAwesomeIcon className={styles.icon} icon={faTemperatureLow} />
                                </div>
                                <ul>
                                    <li><a href="#">Lovaktiviteter för barn och unga ~</a></li>
                                    <li><a href="#">Njut av sommaren i stadens vardagsrum ~</a></li>
                                    <li><a href="#">Nominera till trgghetspriset ~</a></li>
                                </ul>
                            </div>
                            <div className={styles.box}>
                                <div className={styles.colum}>
                                    <h2>Aktuellt</h2>
                                    <FontAwesomeIcon className={styles.icon} icon={faTemperatureLow} />
                                </div>
                                <ul>
                                    <li><a href="#">Kvalitet på badvatten ~</a></li>
                                    <li><a href="#">Jobba i Stockholms stad ~</a></li>
                                    <li><a href="#">Pressrum ~</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className={styles.title}>
                            <h1>Välkommen till
                                Hellefors.<span>se</span></h1>
                        </div>
                    </div>
                </div>

                <About />
            </PrimeReactProvider>
        </>
    );
}
export function About() {
    return (
        <>
            <PrimeReactProvider value={{ unstyled: false }}>
                <div className={styles.about}>
                    <div className={styles.contct}>
                        <div className={styles.titel}>
                            <h1>IT BERRIES</h1>
                            <p>Hällefors är en stad i ständig rörelse. Vi i Malmö stad skapar kraft i den rörelsen. Vi planerar och utvecklar staden tillsammans med Malmöborna och finns till för alla som lever och verkar här. Vad vill du göra idag?
                                Message @Rashed</p>
                            <h4>Läs mer</h4>
                        </div>
                        <div className={styles.logo}>
                            <Image className={styles.bg_logo} src={bg_logo5} alt="Picture of the author" />
                        </div>
                    </div>
                </div>
            </PrimeReactProvider>
        </>
    );
}