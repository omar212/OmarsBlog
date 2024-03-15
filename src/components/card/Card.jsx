import Link from "next/link";
import styles from "./card.module.css";
import Image from "next/image";


const Card = ({ key, item }) => {
    console.log(item);
    return (
        <div className={styles.container} key={key}>
            {
                item.img &&
                <div className={styles.imageContainer}>
                    <Image src={item.img} alt="" fill className={styles.image} />
                </div>
            }
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>{item.createdAt.substring(0,10)} - </span>
                    <span className={styles.category}>{item.title}</span>
                </div>
                <Link href={`/posts/${item.slug}`}>
                    <h1 className={styles.title}>{item.title}</h1>
                </Link>
                <p className={styles.desc}>
                    {item.desc.substring(0, 60)}...
                </p>
                <Link href={`/posts/${item.slug}`} className={styles.link}>
                    Read More
                </Link>
            </div>
        </div> 
    )
}

export default Card;