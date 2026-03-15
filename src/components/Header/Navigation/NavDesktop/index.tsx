import { Link } from 'react-router-dom'
import { NAVIGATION_ITEMS } from '@/constants/routes'
import styles from './NavDesktop.module.scss'

export const NavDesktop = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {NAVIGATION_ITEMS.map((item) => (
          <li key={item.href}>
            {item.href.startsWith('/') ? (
              <Link to={item.href} className={styles.link}>
                {item.label}
              </Link>
            ) : (
              <a href={item.href} className={styles.link}>
                {item.label}
              </a>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}
