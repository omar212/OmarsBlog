import Image from 'next/image'
import React from 'react'
import styles from './comments.module.css'

const Comments = () => {

    const status = "authenticated"

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Comments</h1>
            {
                status === "authenticated" ? (
                    <div className={styles.write}>
                        <textarea className={styles.input} placeholder="Leave a comment" />
                        <button className={styles.button}>Send</button>
                    </div>
                ) : (
                    <Link href="/login"> Login to write a comment</Link>
                )
            }
            <div className={styles.comments}>
                <div className={styles.comment}>
                    <div className={styles.user}>
                        <Image 
                            src="/p1.jpeg"
                            alt="user"
                            width={50}
                            height={50}
                            className={styles.image}
                        />
                        <div className={styles.userInfo}>
                            <span className={styles.username}>
                                John Doe
                            </span>
                            <span className={styles.date}>
                                04/04/2021
                            </span>
                        </div>
                    </div>
                    <p className={styles.desc}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                </div>
                <div className={styles.comment}>
                    <div className={styles.user}>
                        <Image 
                            src="/p1.jpeg"
                            alt="user"
                            width={50}
                            height={50}
                            className={styles.image}
                        />
                        <div className={styles.userInfo}>
                            <span className={styles.username}>
                                John Doe
                            </span>
                            <span className={styles.date}>
                                04/04/2021
                            </span>
                        </div>
                    </div>
                    <p className={styles.desc}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                </div>
                <div className={styles.comment}>
                    <div className={styles.user}>
                        <Image 
                            src="/p1.jpeg"
                            alt="user"
                            width={50}
                            height={50}
                            className={styles.image}
                        />
                        <div className={styles.userInfo}>
                            <span className={styles.username}>
                                John Doe
                            </span>
                            <span className={styles.date}>
                                04/04/2021
                            </span>
                        </div>
                    </div>
                    <p className={styles.desc}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                </div>
            </div>
        </div>  
    )
}

export default Comments