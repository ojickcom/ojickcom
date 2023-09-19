import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
       테스트입니다. 반갑습니다.
      </div>
    </main>
  )
}
