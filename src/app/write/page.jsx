"use client";

import React, { useState, useEffect } from 'react'
import styles from "./writePage.module.css"
import Image from 'next/image';
import "react-quill/dist/quill.bubble.css";
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { app } from '@/utils/firebase';
import dynamic from 'next/dynamic';



const storage = getStorage(app);

const WritePage = () => {

    const { status } = useSession()
    const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

    const router = useRouter()

    const [open, setOpen] = useState(false)
    const [value, setValue] = useState('')

    const [title, setTitle] = useState('')
    const [file, setFile] = useState(null)
    const [media, setMedia] = useState("") 
    const [catSlug, setCatSlug] = useState("");


    useEffect(() => {
        const upload = () => {
            const name = new Date().getTime() + file.name;
            const storageRef = ref(storage, name);
            const uploadTask = uploadBytesResumable(storageRef, file);

            // Listen for state changes, errors, and completion of the upload.
            uploadTask.on('state_changed',
            (snapshot) => {
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                case 'paused':
                    console.log('Upload is paused');
                    break;
                case 'running':
                    console.log('Upload is running');
                    break;
                }
            }, 
            (error) => {
                // A full list of error codes is available at
                // https://firebase.google.com/docs/storage/web/handle-errors
                switch (error.code) {
                case 'storage/unauthorized':
                    // User doesn't have permission to access the object
                    break;
                case 'storage/canceled':
                    // User canceled the upload
                    break;

                // ...

                case 'storage/unknown':
                    // Unknown error occurred, inspect error.serverResponse
                    break;
                }
            }, 
            () => {
                // Upload completed successfully, now we can get the download URL
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log('File available at', downloadURL);
                    setMedia(downloadURL)
                });
            }
        );
    }

    file && upload();
    }, [file])

    if(status === "loading") {
        return <div className={styles.loading}>Loading...</div>
    }

    if(status === "unauthenticated") {
        router.push("/")
    }

    const slugify = (text) => text.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]/g, "-").replace(/^-+|-+$/g, "")

    const handleSubmit = async () => {
        const res = await fetch(`${process.env.NEXTAUTH_URL}/api/posts`, {
            method: "POST",
            body: JSON.stringify({ 
                title, 
                desc: value, 
                img: media, 
                slug: slugify(title),
                catSlug: catSlug || "style",
            }),
            headers: { 
                "Content-Type": "application/json"
            }
        })

        console.log(res)
        
    }

    return (
        <div className={styles.container}>
            <input type="text" placeholder="Title" className={styles.input} onChange={e => setTitle(e.target.value)} />
            <select className={styles.select} onChange={(e) => setCatSlug(e.target.value)}>
                <option value="style">style</option>
                <option value="fashion">fashion</option>
                <option value="food">food</option>
                <option value="culture">culture</option>
                <option value="travel">travel</option>
                <option value="coding">coding</option>
            </select>
            <div className={styles.editor}>
                <button className={styles.button} onClick={() => setOpen(!open)}>
                    <Image src="/plus.png" alt="" width={16} height={16} />
                </button>
                {
                    open && (
                        <div className={styles.add}>
                            <input type="file" id="image" onChange={e => setFile(e.target.files[0])} style={{ display: "none" }} />
                            <button className={styles.addButton}>
                                <label htmlFor="image">
                                    <Image src="/image.png" alt="" width={16} height={16} />
                                </label>
                            </button>
                            <button className={styles.addButton}>
                                <Image src="/external.png" alt="" width={16} height={16} />
                            </button>
                            <button className={styles.addButton}>
                                <Image src="/video.png" alt="" width={16} height={16} />
                            </button> 
                        </div>
                    )
                }
                <ReactQuill 
                    className={styles.textArea}
                    theme="bubble" 
                    value={value} 
                    onChange={setValue} 
                    placeholder="Tell your story..."
                />
            </div>
            <button className={styles.publish} onClick={handleSubmit}>
                Publish
            </button>
        </div>
    )
}

export default WritePage