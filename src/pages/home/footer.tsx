"use client"

import styles from "../../styles/scss/home/home.module.css";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { Image } from 'primereact/image';
import logo from '../../imgs/image 9.png'
import logo_smll from '../../imgs/image 5.png'

import facebook from '../../imgs/Footer.svg'
import instagram from '../../imgs/Footer_00000060731145794484315360000009105668273505501614_.svg'
import youtube from '../../imgs/Footer_00000097478219325602259810000016515601242319258798_.svg'
import twitter from '../../imgs/Footer_00000131326812203794713360000007310237020916286137_.svg'
import linkedin from '../../imgs/Grundutbildningsprogram.svg'




export function Footer() {
    return (
        <>
            <PrimeReactProvider value={{ unstyled: false }}>
                <div className={styles.footer}>
                    <div className={styles.container}>
                        <div className={styles.picture}>
                            <Image className={styles.logo} src={logo} alt="Picture of the author" />
                        </div>
                        <div className={styles.contact}>
                            <div className={styles.colum}>
                                <label htmlFor="Andra språk ">Andra språk </label>
                                <ul>
                                    <li><a href="#">Svenska</a></li>
                                    <li><a href="#">English</a></li>
                                    <li><a href="#">Lyssna</a></li>
                                </ul>
                            </div>
                            <div className={styles.colum}>
                                <label htmlFor="kontakta oss ">kontakta oss </label>
                                <ul>
                                    <li><a href="#">Kontakta Hällefors stad</a></li>
                                    <li><a href="#">Felanmälan - gator, torg, parker</a></li>
                                    <li><a href="#">Lämna synpunkter</a></li>
                                    <li><a href="#">Följa oss i sociala medier</a></li>
                                    <li><a href="#">Press och media</a></li>
                                </ul>
                            </div>
                            <div className={styles.colum}>
                                <label htmlFor="Andra språk ">Om webbplatsen</label>
                                <ul>
                                    <li><a href="#">Om webbplatsen</a></li>
                                    <li><a href="#">Kakor på Hellefors.se</a></li>
                                    <li><a href="#">Behandling av personuppgifter</a></li>
                                    <li><a href="#">Tillgänglighetsredogörelse</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className={styles.social}>
                            <div className={styles.container_social}>
                                <div className={`${styles.colum}`}>
                                    <div className={styles.row_logo}>
                                        <Image className={styles.logo} src={logo_smll} alt="Picture of the author" />
                                        <div className={styles.titel}>
                                            <h2>Hällefors kommun</h2>
                                            <div className={styles.row_img}>
                                                <a href="#"> <Image className={styles.logo} src={facebook} alt="Picture of the author" /></a>
                                                <a href="#"> <Image className={styles.logo} src={instagram} alt="Picture of the author" /></a>
                                                <a href="#"> <Image className={styles.logo} src={youtube} alt="Picture of the author" /></a>
                                                <a href="#"> <Image className={styles.logo} src={twitter} alt="Picture of the author" /></a>
                                                <a href="#"> <Image className={styles.logo} src={linkedin} alt="Picture of the author" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.colum}>
                                    <h3>Kontakt­information Hällefors kommun, 712 83 Hällefors Sikforsvägen 7, Hällefors</h3>
                                    <h3>kommun@hellefors.se</h3>
                                    <h3>0591-641 00</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </PrimeReactProvider>
        </>
    );
}