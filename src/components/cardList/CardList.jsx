import React from "react";
import styles from "./cardList.module.css";
import Pagination from "@/components/pagination/Pagination";
import Card from "@/components/card/Card";


const getData = async (page, cat) => {
    let base_url;

    if (process.env.NODE_ENV === 'production') {
        base_url = process.env.PRODUCTION_BASE_URL;
    } else {
        base_url = process.env.LOCAL_BASE_URL;
    }

    const res = await fetch(`${base_url}/api/posts?page=${page}&cat=${cat || ""}`, {
        cache: "no-store",
    });

    
    if (!res.ok) {
        throw new Error("Network response was not ok");
    }

    return res.json();
}

const CardList = async ({ page, cat }) => {
    const { posts, count, postsPerPage } = await getData(page, cat);

    const POST_PER_PAGE = postsPerPage || 2;

    const hasPrev = POST_PER_PAGE * (page - 1) > 0
    const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;


    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Recent Posts</h1>
            <div className={styles.posts}>
                {
                    posts?.map((item) => (
                        <Card item={item} key={item._id} />
                    ))
                }
            </div>
            <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
        </div>
    )
}

export default CardList;