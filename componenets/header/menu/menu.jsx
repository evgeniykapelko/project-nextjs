import styles from './menu.module.css'

export default function Menu() {
  return <div className={styles.menu}>
    <a className={styles.item} href='roadmap'>RoadMap</a>
    <div className={styles.item}>Item 2</div>
    <div className={styles.item}>Item 3</div>
    <div className={styles.item}>Item 4</div>
    <div className={styles.item}>Item 5</div>
    <div className={styles.item}>Item 6</div>
  </div>;
}
