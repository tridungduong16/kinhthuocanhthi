import Logo from '@/components/Common/Logo'
import { Navigation } from './Navigation'
import styles from './Header.module.scss'

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Logo />
        <div className={styles.actions}>
          <Navigation />
        </div>
      </div>
    </header>
  )
}
