import { ROUTES } from '@/constants/routes'
import styles from './Logo.module.scss'

const Logo = () => {
  return (
    <a href={`${ROUTES.HOME}#trang-chu`} className={styles.logo} aria-label="Kính Thuốc Anh Thi">
      <img src="/logo.PNG" alt="" className={styles.mark} />
    </a>
  )
}

export default Logo
