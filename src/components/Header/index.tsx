import Logo from '@/components/Common/Logo'
import { Navigation } from './Navigation'
import styles from './Header.module.scss'

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <Logo />
        </div>
        <div className={styles.actions}>
          <Navigation />
        </div>
        <div className={styles.spacer} aria-hidden="true" />
      </div>
    </header>
  )
}
