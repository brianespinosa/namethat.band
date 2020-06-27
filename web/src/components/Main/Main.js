import styles from 'src/layouts/AppLayout/AppLayout.module.css'

const Main = ({ children }) => {
  return <main className={styles.Main}>{children}</main>
}

export default Main
