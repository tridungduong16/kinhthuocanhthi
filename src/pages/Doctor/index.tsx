import { Link } from 'react-router-dom'
import { ROUTES } from '@/constants/routes'
import { ContainerLayout } from '@/layouts/ContainerLayout'
import styles from './Doctor.module.scss'

const highlights = [
  'Bác sĩ chuyên khoa 2 về nhãn khoa.',
  'Trưởng khoa tại Bệnh viện Mắt Vĩnh Long.',
  'Hơn 20 năm kinh nghiệm trong thăm khám và chăm sóc thị lực.',
]

const heroFacts = ['Chuyên khoa mắt', 'Bác sĩ chuyên khoa 2', 'Hơn 20 năm kinh nghiệm']

const heroStats = [
  { value: '20+', label: 'năm kinh nghiệm thăm khám và chăm sóc thị lực' },
  { value: 'CKII', label: 'bác sĩ chuyên khoa 2 với nền tảng đào tạo chuyên sâu' },
  { value: 'Ưu tú', label: 'ghi nhận nghề nghiệp qua danh hiệu Thầy thuốc ưu tú' },
]

const profileBlocks = [
  {
    label: 'Giải thưởng và ghi nhận',
    title: 'Thầy thuốc ưu tú, nhiều năm được công nhận Chiến sĩ thi đua',
    description:
      'Những ghi nhận nghề nghiệp này phản ánh quá trình cống hiến bền bỉ, năng lực chuyên môn và uy tín trong công tác khám chữa bệnh.',
  },
  {
    label: 'Nền tảng đào tạo',
    title: 'Tốt nghiệp Bác sĩ đa khoa Đại học Cần Thơ',
    description:
      'Đây là nền tảng học thuật ban đầu giúp xây dựng tư duy lâm sàng và khả năng tiếp cận toàn diện đối với sức khỏe người bệnh.',
  },
  {
    label: 'Đào tạo chuyên sâu',
    title: 'Bác sĩ chuyên khoa 2, tốt nghiệp chuyên khoa tại Đại học Y Dược Thành phố Hồ Chí Minh',
    description:
      'Quá trình đào tạo chuyên sâu giúp củng cố năng lực trong nhãn khoa, hỗ trợ thăm khám kỹ, đánh giá đúng và tư vấn phù hợp.',
  },
]

const galleryItems = [
  { label: 'Khám thị lực', note: 'Không gian thăm khám và tư vấn chuyên môn' },
  { label: 'Tư vấn bệnh nhân', note: 'Giải thích kết quả rõ ràng, dễ hiểu' },
  { label: 'Hoạt động chuyên môn', note: 'Gắn với công tác bệnh viện và cộng đồng' },
]

const activityItems = [
  'Tham gia thăm khám, tư vấn và theo dõi sức khỏe mắt cho nhiều nhóm bệnh nhân khác nhau.',
  'Đồng hành trong các hoạt động chuyên môn tại Bệnh viện Mắt Vĩnh Long.',
  'Đóng góp vào công tác đào tạo, hướng dẫn và nâng cao chất lượng chăm sóc thị lực.',
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
          <div className={styles.sectionHeading}>
            <span className={styles.sectionLabel}>Thông tin chuyên môn</span>
            <h2>Nền tảng chuyên môn rõ ràng tạo nên sự tin cậy lâu dài</h2>
            <p>
              Với định vị phòng khám mắt hiện đại, việc giới thiệu bác sĩ thành một trang riêng
              giúp người xem hiểu rõ hơn về chuyên môn, vai trò và chiều sâu kinh nghiệm.
            </p>
          </div>

          <div className={styles.highlightGrid}>
            {highlights.map((item) => (
              <article key={item} className={styles.highlightCard}>
                <span className={styles.highlightDot} />
                <p>{item}</p>
              </article>
            ))}
          </div>

          <div className={styles.profileGrid}>
            {profileBlocks.map((item) => (
              <article key={item.title} className={styles.profileCard}>
                <span className={styles.cardLabel}>{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>

          <div className={styles.storyGrid}>
            <article className={styles.storyCard}>
              <span className={styles.cardLabel}>Vai trò hiện tại</span>
              <h3>Trưởng khoa Bệnh viện Mắt Vĩnh Long</h3>
              <p>
                Vai trò lãnh đạo chuyên môn là tín hiệu mạnh cho thấy kinh nghiệm thực tế và
                mức độ tin cậy trong quá trình thăm khám, tư vấn điều chỉnh thị lực và chăm sóc mắt.
              </p>
            </article>
            <article className={styles.storyCard}>
              <span className={styles.cardLabel}>Kinh nghiệm</span>
              <h3>Hơn 20 năm gắn bó với nhãn khoa</h3>
              <p>
                Quãng thời gian làm nghề dài tạo ra khả năng đánh giá tình trạng thị lực toàn diện,
                giải thích dễ hiểu và đưa ra chỉ định phù hợp cho từng nhóm khách hàng.
              </p>
            </article>
          </div>

          <section className={styles.gallerySection}>
            <div className={styles.sectionHeading}>
              <span className={styles.sectionLabel}>Hình ảnh và hoạt động</span>
              <h2>Một góc nhìn trực quan về quá trình thăm khám và công tác chuyên môn</h2>
              <p>
                Khu vực này có thể dùng để bổ sung ảnh thật sau này. Hiện tại được thiết kế
                như một phần gallery nhẹ để giữ nhịp bố cục và làm rõ tính chuyên môn.
              </p>
            </div>

            <div className={styles.galleryGrid}>
              <div className={styles.galleryWall}>
                {galleryItems.map((item, index) => (
                  <article key={item.label} className={styles.galleryCard}>
                    <div className={styles.galleryPreview}>
                      <span>0{index + 1}</span>
                    </div>
                    <strong>{item.label}</strong>
                    <p>{item.note}</p>
                  </article>
                ))}
              </div>

              <div className={styles.activityPanel}>
                <span className={styles.cardLabel}>Hoạt động nổi bật</span>
                <h3>Chuyên môn không chỉ thể hiện qua bằng cấp mà còn ở quá trình làm nghề</h3>
                <div className={styles.activityList}>
                  {activityItems.map((item) => (
                    <article key={item} className={styles.activityCard}>
                      <span className={styles.activityDot} />
                      <p>{item}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </ContainerLayout>
      </section>
    </div>
  )
}
