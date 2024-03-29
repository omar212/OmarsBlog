"use client";
import Image from 'next/image'
import React, { useState } from 'react'
import styles from './comments.module.css'
import useSWR from 'swr'
import Link from 'next/link'
import { useSession } from "next-auth/react"

const fetcher = async (url) => {
    const res = await fetch(url)
    
    const data = await res.json()
    
    if(!res.ok) {
        const error = new Error(data.message)
        throw error;
    }

    return data
}

const Comments = ({ postSlug }) => {

    const { status  } = useSession()

    console.log({postSlug})

    const { data, mutate, isLoading } = useSWR(`http://localhost:3000/api/comments?postSlug=${postSlug}`, fetcher)

    const [desc, setDesc] = useState("")

    const handleSubmit = async () => {
        await fetch("/api/comments", { 
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ desc, postSlug })
        });
        mutate();
    }

    console.log("data from comments component ---> ", data)
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Comments</h1>
            {
                status === "authenticated" ? (
                    <div className={styles.write}>
                        <textarea 
                            className={styles.input} 
                            placeholder="Leave a comment" 
                            onChange={(e) => setDesc(e.target.value)} 
                        />
                        <button className={styles.button} onClick={handleSubmit}>Send</button>
                    </div>
                ) : (
                    <Link href="/login"> Login to write a comment</Link>
                )
            }
            <div className={styles.comments}>
                {
                    isLoading ? (
                        "loading..."
                    ) : data && data?.length > 0 ? (
                        data?.map( (item) => (
                            <div className={styles.comment} key={item._id}>
                                <div className={styles.user}>
                                    <Image 
                                        src={item.user.image}
                                        alt="user"
                                        width={50}
                                        height={50}
                                        className={styles.image}
                                    />
                                    <div className={styles.userInfo}>
                                        <span className={styles.username}>
                                            {item.user.name}
                                        </span>
                                        <span className={styles.date}>
                                            {item.createdAt.substring(0, 10) }
                                        </span>
                                    </div>
                                </div>
                                <p className={styles.desc}>
                                    {item.desc}
                                </p>
                            </div>
                        ))
                    ) : "No comments yet. Be the first to comment!"
                }
            </div>
        </div>  
    )
}

export default Comments