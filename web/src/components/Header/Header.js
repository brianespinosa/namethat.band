import Nav from 'src/components/Nav'

import styles from 'src/layouts/AppLayout/AppLayout.module.css'

const Header = () => {
  return (
    <header className={styles.Header}>
      <h1>
        Name<span>That</span>Band
      </h1>
      <Nav />
    </header>
  )
}

export default Header
