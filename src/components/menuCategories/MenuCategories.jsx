import React from 'react'
import styles from './MenuCategories.module.css'
import Link from 'next/link'

const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
        <Link 
            href="/blog?" 
            className={`${styles.categoryItem} ${styles.style}`}
        >
            Travel
        </Link>
        <Link 
            href="/blog?" 
            className={`${styles.categoryItem} ${styles.style}`}
        >
            Travel
        </Link>                
        <Link 
            href="/blog?" 
            className={`${styles.categoryItem} ${styles.style}`}
        >
            Travel
        </Link>
        <Link 
            href="/blog?" 
            className={`${styles.categoryItem} ${styles.style}`}
        >
            Travel
        </Link>
        <Link 
            href="/blog?" 
            className={`${styles.categoryItem} ${styles.style}`}
        >
            Travel
        </Link>
        <Link 
            href="/blog?" 
            className={`${styles.categoryItem} ${styles.style}`}
        >
            Travel
        </Link>
    </div>
  )
}

export default MenuCategories