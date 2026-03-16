import { Link } from 'react-router-dom'
import { ROUTES } from '@/constants/routes'
import { ContainerLayout } from '@/layouts/ContainerLayout'
import styles from './Doctor.module.scss'

const heroFacts = ['Chuyên khoa mắt', 'Bác sĩ chuyên khoa 2', 'Hơn 20 năm kinh nghiệm']

const heroStats = [
  { value: '20+', label: 'năm kinh nghiệm thăm khám và chăm sóc thị lực' },
  { value: 'CKII', label: 'bác sĩ chuyên khoa 2 với nền tảng đào tạo chuyên sâu' },
  { value: 'Ưu tú', label: 'ghi nhận nghề nghiệp qua danh hiệu Thầy thuốc ưu tú' },
]

const timelineItems = [
  {
    year: 'Đại học',
    title: 'Tốt nghiệp Bác sĩ đa khoa — Đại học Cần Thơ',
    description: 'Nền tảng y khoa tổng quát, xây dựng tư duy lâm sàng toàn diện.',
    image: '',
  },
  {
    year: 'Chuyên khoa',
    title: 'Nhận bằng Bác sĩ chuyên khoa 2 — Đại học Y Dược TP.HCM',
    description: 'Đào tạo chuyên sâu về nhãn khoa, củng cố năng lực thăm khám và phẫu thuật mắt.',
    image: '/images/doctor-graduation.jpg',
  },
  {
    year: 'Công tác',
    title: 'Trưởng khoa Bệnh viện Mắt Vĩnh Long',
    description: 'Hơn 20 năm gắn bó với nhãn khoa, trực tiếp thăm khám và hướng dẫn chuyên môn cho đội ngũ y bác sĩ.',
    image: '',
  },
  {
    year: 'Hội thảo',
    title: 'Tham dự Hội nghị ngành Nhãn khoa Việt Nam (VIETCAN) tại Đà Nẵng',
    description: 'Cập nhật kiến thức chuyên môn, trao đổi kinh nghiệm với đồng nghiệp trong ngành nhãn khoa trên cả nước.',
    image: '/images/doctor-conference.jpg',
  },
  {
    year: 'Ngành nghề',
    title: 'Tham dự Giỗ tổ ngành Mắt kính lần thứ 32',
    description: 'Gắn bó với ngành kính mắt, tham gia sự kiện truyền thống tôn vinh nghề nghiệp và kết nối cộng đồng chuyên môn.',
    image: '/images/doctor-gioto.jpg',
  },
  {
    year: 'Ghi nhận',
    title: 'Nhận bằng khen của Chủ tịch UBND tỉnh Vĩnh Long',
    description: 'Nhân Ngày Thầy thuốc Việt Nam 27/2, vinh dự được trao bằng khen ghi nhận quá trình cống hiến trong công tác khám chữa bệnh.',
    image: '/images/doctor-award.jpg',
  },
]

export const DoctorPage = () => {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <ContainerLayout>
          <div className={styles.heroGrid}>
            <div className={styles.content}>
              <span className={styles.eyebrow}>Giới thiệu bác sĩ</span>
              <h1>Bác sĩ Nguyễn Anh Thi</h1>
              <p className={styles.summary}>Chuyên khoa mắt, hơn 20 năm kinh nghiệm thăm khám và chăm sóc thị lực.</p>
              <p className={styles.lead}>
                Bác sĩ Nguyễn Anh Thi là bác sĩ chuyên khoa 2, Trưởng khoa Bệnh viện Mắt
                Vĩnh Long với hơn 20 năm kinh nghiệm trong khám, tư vấn và chăm sóc sức khỏe mắt.
              </p>
              <div className={styles.factList}>
                {heroFacts.map((fact) => (
                  <span key={fact} className={styles.factChip}>
                    {fact}
                  </span>
                ))}
              </div>
              <div className={styles.actions}>
                <Link to={ROUTES.CONTACT} className={styles.primaryButton}>
                  Đặt lịch khám
                </Link>
                <a href="#thong-tin" className={styles.secondaryButton}>
                  Xem hồ sơ bác sĩ
                </a>
              </div>
            </div>
            <div className={styles.visualColumn}>
              <article className={styles.heroPanel}>
                <span className={styles.cardLabel}>Hồ sơ chuyên môn</span>
                <h2>Nền tảng chuyên môn rõ ràng để người bệnh an tâm ngay từ lần đầu</h2>
                <p>
                  Bác sĩ Nguyễn Anh Thi là bác sĩ chuyên khoa 2, giữ vai trò Trưởng khoa tại
                  Bệnh viện Mắt Vĩnh Long, đồng thời được ghi nhận qua các danh hiệu và thành
                  tích nghề nghiệp nổi bật.
                </p>
                <div className={styles.heroStatGrid}>
                  {heroStats.map((item) => (
                    <article key={item.label} className={styles.heroStatCard}>
                      <strong>{item.value}</strong>
                      <span>{item.label}</span>
                    </article>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </ContainerLayout>
      </section>

      <section className={styles.profileSection} id="thong-tin">
        <ContainerLayout>
          <section className={styles.timelineSection}>
            <div className={styles.sectionHeading}>
              <span className={styles.sectionLabel}>Quá trình công tác</span>
              <h2>Hành trình chuyên môn của bác sĩ Nguyễn Anh Thi</h2>
              <p>
                Từ nền tảng y khoa tổng quát đến chuyên khoa nhãn khoa, mỗi giai đoạn
                đều góp phần xây dựng năng lực thăm khám và tư vấn cho bệnh nhân.
              </p>
            </div>

            <div className={styles.timeline}>
              <div className={styles.timelineLine} aria-hidden="true" />
              {timelineItems.map((item, index) => (
                <article
                  key={item.title}
                  className={`${styles.timelineItem} ${index % 2 === 1 ? styles.timelineItemRight : ''}`}
                >
                  <div className={styles.timelineDot} aria-hidden="true">
                    <span>{index + 1}</span>
                  </div>
                  <div className={`${styles.timelineCard} ${item.image ? styles.timelineCardWithImage : ''}`}>
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.title}
                        className={styles.timelineImage}
                      />
                    )}
                    <div className={styles.timelineCardContent}>
                      <span className={styles.timelineYear}>{item.year}</span>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </ContainerLayout>
      </section>
    </div>
  )
}
