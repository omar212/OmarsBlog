import Menu from '@/components/menu/Menu'
import styles from './blogPage.module.css'
import CardList from '@/components/cardList/CardList'

const BlogPage = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Style Blog</h1>
        <div className={styles.content}>
            <CardList />
            <Menu />
        </div>
    </div>
  )
}

export default BlogPage