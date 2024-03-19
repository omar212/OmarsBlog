import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";

const getData = async () => {
    let base_url;

    if (process.env.NODE_ENV === 'production') {
        base_url = process.env.PRODUCTION_BASE_URL;
    } else {
        base_url = process.env.LOCAL_BASE_URL;
    }

    const res = await fetch(`${base_url}/api/categories`, {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error("Network response was not ok");
    }

    return res.json();
}

const CategoryList = async () => {
    const data = await getData();

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Popular Categories</h1>
            <div className={styles.categories}>
                {data?.map((category) => (
                    <Link 
                        href={`/blog?cat=${category.title}`} 
                        key={category._id} 
                        className={`${styles.category} ${styles.style}`}
                    >
                        {
                            category.image && (
                                <Image 
                                    src={`${category.image}`} 
                                    width={32} 
                                    height={32} 
                                    alt={category.title} 
                                    className={styles.image}
                                />
                            )
                        }
                        
                        {category.title}
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default CategoryList;