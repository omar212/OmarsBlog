import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                <b>Hey friend! </b> Discover my stories
            </h1>
            <div className={styles.post}>
                <div className={styles.imgContainer}>
                    <Image src="/p1.jpeg" alt="post" fill />
                </div>
                <div className={styles.textContainer}>
                    <h1 className={styles.postTitle}>Lorem ipsum dolor sit amet</h1>
                    <p className={styles.postDesc}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                        vehicula, sapien nec vehicula.
                    </p>
                    <button className={styles.button}>Read MORE</button>
                </div>
            </div>
        </div>
    )
}

export default Featured;