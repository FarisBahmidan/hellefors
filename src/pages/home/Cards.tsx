import { Button } from "primereact/button"
import styles from "../../styles/scss/home/home.module.css"

interface IRow {
    title: string,
    moreLink: string,
    cards: {
        date: Date,
        title: string,
        text: string,
        img: string,
        link: string
    }[]
}

export function Cards() {
    const getData = (): IRow[] => {
        return [
            {
                title: "Det Händer I Hällefors Stad",
                moreLink: "https://google.com",
                cards: [
                    {
                        date: new Date(),
                        text: "I kommunen finns fyra kommunala förskolor, en fristående förskola och en fristående pedagogisk omsorg.",
                        title: "Förskola",
                        link: "https://google.com",
                        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Googleplex_HQ_%28cropped%29.jpg/1200px-Googleplex_HQ_%28cropped%29.jpg"
                    },
                    {
                        date: new Date(),
                        text: "I kommunen finns fyra kommunala förskolor, en fristående förskola och en fristående pedagogisk omsorg.",
                        title: "Förskola",
                        link: "https://google.com",
                        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Googleplex_HQ_%28cropped%29.jpg/1200px-Googleplex_HQ_%28cropped%29.jpg"
                    },
                    {
                        date: new Date(),
                        text: "I kommunen finns fyra kommunala förskolor, en fristående förskola och en fristående pedagogisk omsorg.",
                        title: "Förskola",
                        link: "https://google.com",
                        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Googleplex_HQ_%28cropped%29.jpg/1200px-Googleplex_HQ_%28cropped%29.jpg"
                    },
                ]
            },
            {
                title: "Det Händer I Hällefors Stad",
                moreLink: "https://google.com",
                cards: [
                    {
                        date: new Date(),
                        text: "I kommunen finns fyra kommunala förskolor, en fristående förskola och en fristående pedagogisk omsorg.",
                        title: "Förskola",
                        link: "https://google.com",
                        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Googleplex_HQ_%28cropped%29.jpg/1200px-Googleplex_HQ_%28cropped%29.jpg"
                    },
                    {
                        date: new Date(),
                        text: "I kommunen finns fyra kommunala förskolor, en fristående förskola och en fristående pedagogisk omsorg.",
                        title: "Förskola",
                        link: "https://google.com",
                        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Googleplex_HQ_%28cropped%29.jpg/1200px-Googleplex_HQ_%28cropped%29.jpg"
                    },
                    {
                        date: new Date(),
                        text: "I kommunen finns fyra kommunala förskolor, en fristående förskola och en fristående pedagogisk omsorg.",
                        title: "Förskola",
                        link: "https://google.com",
                        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Googleplex_HQ_%28cropped%29.jpg/1200px-Googleplex_HQ_%28cropped%29.jpg"
                    },
                ]
            },
            {
                title: "Det Händer I Hällefors Stad",
                moreLink: "https://google.com",
                cards: [
                    {
                        date: new Date(),
                        text: "I kommunen finns fyra kommunala förskolor, en fristående förskola och en fristående pedagogisk omsorg.",
                        title: "Förskola",
                        link: "https://google.com",
                        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Googleplex_HQ_%28cropped%29.jpg/1200px-Googleplex_HQ_%28cropped%29.jpg"
                    },
                    {
                        date: new Date(),
                        text: "I kommunen finns fyra kommunala förskolor, en fristående förskola och en fristående pedagogisk omsorg.",
                        title: "Förskola",
                        link: "https://google.com",
                        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Googleplex_HQ_%28cropped%29.jpg/1200px-Googleplex_HQ_%28cropped%29.jpg"
                    },
                    {
                        date: new Date(),
                        text: "I kommunen finns fyra kommunala förskolor, en fristående förskola och en fristående pedagogisk omsorg.",
                        title: "Förskola",
                        link: "https://google.com",
                        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Googleplex_HQ_%28cropped%29.jpg/1200px-Googleplex_HQ_%28cropped%29.jpg"
                    },
                ]
            },
        ]
    }
    return (
        <div className={styles.cards}>
            {getData().map(({ cards, title, moreLink }, i) => {
                return <Row title={title} key={i} cards={cards} moreLink={moreLink} />
            })}
        </div>
    )
}
function Row({ title, cards, moreLink }: IRow) {
    return (
        <div className={styles.content}>
            <div className={styles.MainTitleContainer}>
                <h1 className={styles.mainTitle}>{title}</h1>
                <Button onClick={() => { window.location.href = moreLink; }} label="Visa fler artiklar" severity="info" />
            </div>
            <div className={styles.row}>
                {cards.map(({ date, text, title, img, link }, i) => {
                    return (
                        <div onClick={() => {
                            window.location.href = link;
                        }} key={i} className={styles.singleCard}>
                            <img src={img} />
                            <p className={styles.date}>{`${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`}</p>
                            <h1 className={styles.singleCardTitle}>{title}</h1>
                            <p className={styles.text}>{text}</p>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}
