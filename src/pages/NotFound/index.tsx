import { Link } from 'react-router-dom'
import { ROUTES } from '@/constants/routes'
import styles from './NotFound.module.scss'

export const NotFoundPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.code}>404</h1>
      <p className={styles.message}>Trang không tìm thấy</p>
      <Link to={ROUTES.HOME} className={styles.link}>
        Về trang chủ
      </Link>
    </div>
  )
}
