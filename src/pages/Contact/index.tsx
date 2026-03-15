import styles from './Contact.module.scss'
import { ContainerLayout } from '@/layouts/ContainerLayout'

export const ContactPage = () => {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <ContainerLayout>
          <span className={styles.eyebrow}>Liên hệ</span>
          <h1>Ghé thăm Kính Thuốc Anh Thi tại TP Vĩnh Long</h1>
          <p className={styles.lead}>
            Bạn có thể đến trực tiếp để đo mắt, gọi tư vấn hoặc nhắn Zalo. Thông tin liên hệ
            được trình bày rõ để tiện cho việc đặt lịch và tìm đường.
          </p>
        </ContainerLayout>
      </section>

      <section className={styles.section}>
        <ContainerLayout>
          <div className={styles.grid}>
            <article className={styles.card}>
              <span className={styles.label}>Địa chỉ</span>
              <h2>85 Phạm Thái Bường, TP Vĩnh Long</h2>
              <p>Vị trí thuận tiện để thăm khám, đo mắt và nhận tư vấn trực tiếp tại cửa hàng.</p>
            </article>
            <article className={styles.card}>
              <span className={styles.label}>Kênh liên hệ</span>
              <h2>Gọi tư vấn hoặc nhắn Zalo</h2>
              <p>Phù hợp khi cần hỏi nhanh về lịch đo mắt, tròng kính hoặc chọn gọng trước khi đến.</p>
            </article>
            <article className={styles.card}>
              <span className={styles.label}>Google Maps</span>
              <h2>Xem đường đi nhanh</h2>
              <p>
                <a href="https://maps.google.com/?q=85+Pham+Thai+Buong,+TP+Vinh+Long" target="_blank" rel="noreferrer">
                  Mở bản đồ đến cửa hàng
                </a>
              </p>
            </article>
          </div>
        </ContainerLayout>
      </section>
    </div>
  )
}
