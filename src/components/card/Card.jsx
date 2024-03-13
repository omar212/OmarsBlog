import Link from "next/link";
import styles from "./card.module.css";
import Image from "next/image";


const Card = ({ key, item }) => {
    return (
        <div className={styles.container} key={key}>
            <div className={styles.imageContainer}>
                <Image src="/p1.jpeg" alt="" fill className={styles.image} />
            </div>
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>{item.createdAt} - </span>
                    <span className={styles.category}>{item.title}</span>
                </div>
                <Link href="/">
                    <h1 className={styles.title}>{item.title}</h1>
                </Link>
                <p className={styles.desc}>
                    {item.desc}
                </p>
                <Link className={styles.link} href="/">
                    Read More
                </Link>
            </div>
        </div> 
    )
}

export default Card;