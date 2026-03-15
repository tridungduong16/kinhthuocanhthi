import { useState } from 'react'
import { Link } from 'react-router-dom'
import { NAVIGATION_ITEMS } from '@/constants/routes'
import styles from './NavMobile.module.scss'

export const NavMobile = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className={styles.nav}>
      <button
        type="button"
        className={styles.toggle}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-label="Mở menu điều hướng"
      >
        <span />
        <span />
        <span />
      </button>
      {open && (
        <ul className={styles.menu}>
          {NAVIGATION_ITEMS.map((item) => (
            <li key={item.href}>
              {item.href.startsWith('/') ? (
                <Link to={item.href} className={styles.link} onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
              ) : (
                <a href={item.href} className={styles.link} onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
