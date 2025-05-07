
import styles from "../../styles/scss/home/home.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


// import the icons you need
import {
    faEnvelope,
    IconDefinition
} from '@fortawesome/free-solid-svg-icons';
import { TreeSelect } from "primereact/treeselect";

interface IService {
    icon: IconDefinition,
    text: string,
    color: string,
}

export function Services() {
    const GetServices = (): IService[] => {
        return [
            {
                color: "#8BB8E8",
                icon: faEnvelope,
                text: "Bo och leva",
            },
            {
                color: "#9ABEAA",
                icon: faEnvelope,
                text: "Kontakta oss",
            },
            {
                color: "#EBE49A",
                icon: faEnvelope,
                text: "Jobba I Hällefors stad",
            },
            {
                color: "#E9C4C7",
                icon: faEnvelope,
                text: "Uppleva och göra",
            },
            {
                color: "#9ABEAA",
                icon: faEnvelope,
                text: "Företag och verksamheter",
            },
            {
                color: "#8BB8E8",
                icon: faEnvelope,
                text: "Föreningar",
            },
            {
                color: "#E9C4C7",
                icon: faEnvelope,
                text: "Aktuellt och nyheter",
            },
            {
                color: "#EBE49A",
                icon: faEnvelope,
                text: "Kartor",
            },
        ]
    }
    return <>

        <Search />
        <div className={styles.services}>
            <div className={styles.container}>
                <div className={styles.titel}>
                    <h1>Hitta snabbare</h1>
                </div>
                <div className={styles.content}>
                    {GetServices().map(({ color, icon, text }, i) => {
                        return <Service key={i} icon={icon} color={color} text={text} />
                    })}
                </div>
            </div>
        </div>
    </>
}

function Service({ color, icon, text }: IService) {
    return (
        <>
            <div className={styles.service} style={{ background: color, }}>
                <FontAwesomeIcon className={styles.icon} icon={icon} />
                <p>{text}</p>
            </div>
        </>
    )
}

function Search() {
    return (
        <div className={styles.card_Search}>
            <TreeSelect value={""} onChange={(e) => window.location.href = e.value as string} options={[
                {
                    label: "link1",
                    key: "https://google.com"
                }
            ]}
                filter className={styles.search} placeholder="search"></TreeSelect>
        </div>
    );
}