import { ROUTES } from '@/constants/routes'
import styles from './Footer.module.scss'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <h3 className={styles.title}>Kính Thuốc Anh Thi</h3>
          <p className={styles.text}>
            Không chỉ bán kính, chúng tôi giúp bạn nhìn rõ hơn với quy trình đo mắt chuẩn,
            tư vấn tận tâm và giải pháp phù hợp cho từng độ tuổi.
          </p>
        </div>
        <div className={styles.meta}>
          <p>85 Phạm Thái Bường, TP Vĩnh Long</p>
          <div className={styles.links}>
            <a href={ROUTES.SERVICES}>Dịch vụ</a>
            <a href={ROUTES.FRAMES}>Gọng kính</a>
            <a href={ROUTES.CONTACT}>Liên hệ</a>
          </div>
        </div>
        <p className={styles.copyright}>
          &copy; {new Date().getFullYear()} Kính Thuốc Anh Thi. Clinic first, retail second.
        </p>
      </div>
    </footer>
  )
}
