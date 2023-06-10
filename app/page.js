import styles from './page.module.css'
import Header from '@/componenets/header/header'

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.description}>
        <p>Project for learning FE skills</p>
        <p>Work with Next</p>
      </div>

      <div className={styles.center}>
        <span>Road Map</span>
        <span>Add Point</span>
        <span>All points will be saved in json file</span>
      </div>

      <div className={styles.grid}>
        <a
          href="#"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            NEXT.js
          </h2>
        </a>

        <a
          href="#"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            React
          </h2>
        </a>

        <a
          href="#"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            JS/TS
          </h2>
        </a>

        <a
          href="#"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Something else
          </h2>
        </a>
      </div>
    </main>
  )
}
