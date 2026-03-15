import { ContainerLayout } from '@/layouts/ContainerLayout'
import styles from './Services.module.scss'

const services = [
  {
    title: 'Đo mắt và kiểm tra thị lực',
    description: 'Đánh giá tình trạng thị lực, đo khúc xạ và xác định giải pháp phù hợp cho từng độ tuổi.',
  },
  {
    title: 'Tư vấn kính phù hợp',
    description: 'Gợi ý gọng và tròng kính theo độ cận, khuôn mặt, nhu cầu học tập và làm việc.',
  },
  {
    title: 'Cắt kính nhanh tại chỗ',
    description: 'Hoàn thiện kính đúng độ với quy trình gọn, rõ ràng và dễ theo dõi.',
  },
  {
    title: 'Kiểm tra mắt định kỳ',
    description: 'Theo dõi thay đổi thị lực để phát hiện sớm và điều chỉnh kịp thời.',
  },
]

export const ServicesPage = () => {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <ContainerLayout>
          <span className={styles.eyebrow}>Dịch vụ</span>
          <h1>Dịch vụ khám mắt và hỗ trợ thị lực rõ ràng, dễ hiểu</h1>
          <p className={styles.lead}>
            Các dịch vụ tại Kính Thuốc Anh Thi được trình bày theo tinh thần clinic-first,
            ưu tiên thăm khám, tư vấn và giải pháp đúng cho từng trường hợp.
          </p>
        </ContainerLayout>
      </section>

      <section className={styles.section}>
        <ContainerLayout>
          <div className={styles.grid}>
            {services.map((item, index) => (
              <article key={item.title} className={styles.card}>
                <span className={styles.number}>0{index + 1}</span>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </ContainerLayout>
      </section>
    </div>
  )
}
