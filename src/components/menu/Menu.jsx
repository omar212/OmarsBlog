import React from "react";
import styles from "./menu.module.css";
import MenuPosts from "@/components/menuPosts/MenuPosts";
import MenuCategories from "@/components/menuCategories/MenuCategories";
const Menu = () => {
    return (
        <div className={styles.container}>

            {/* Without Image */}
            <h2 className={styles.subtitle}>What's hot</h2>
            <h1 className={styles.title}>Most Popular</h1>
            <MenuPosts withImage={false}/>

            {/* Categories */}
            <h2 className={styles.subtitle}>Discover by topic</h2>
            <h1 className={styles.title}>Categories</h1>
            <MenuCategories />

            {/* With Image */}
            <h2 className={styles.subtitle}>Chosen by the editor</h2>
            <h1 className={styles.title}>Editors Pick</h1>
            <MenuPosts withImage />
        </div>
    )
}

export default Menu;