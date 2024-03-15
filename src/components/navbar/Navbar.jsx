import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import AuthLinks from "@/components/authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.social}>
                <Image src="/facebook.png" alt="Facebook" width={30} height={30} />
                <Image src="/youtube.png" alt="YouTube" width={30} height={30} />
                <Image src="/instagram.png" alt="Instagram" width={30} height={30} />
                <Image src="/tiktok.png" alt="TikTok" width={30} height={30} />
            </div>
            <div className={styles.logo}>Omar Blog</div>
            <div className={styles.links}>
                <ThemeToggle />
                <Link href="/" className={styles.link}>Home</Link>
                <Link href="/" className={styles.link}>About</Link>
                <Link href="/" className={styles.link}>Contact</Link>
                <AuthLinks />
            </div>
        </div>
    )
}

export default Navbar;