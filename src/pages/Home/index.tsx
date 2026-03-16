import { Link } from 'react-router-dom'
import { ROUTES } from '@/constants/routes'
import { ContainerLayout } from '@/layouts/ContainerLayout'
import styles from './Home.module.scss'

const services = [
  {
    title: 'Đo mắt và kiểm tra thị lực',
    description:
      'Đánh giá tình trạng thị lực, đo khúc xạ và xác định giải pháp phù hợp cho từng nhu cầu học tập, làm việc và sinh hoạt.',
  },
  {
    title: 'Tư vấn kính phù hợp',
    description:
      'Gợi ý gọng, tròng kính và tính năng sử dụng dựa trên độ cận, khuôn mặt và thói quen sinh hoạt của từng khách hàng.',
  },
  {
    title: 'Cắt kính nhanh tại chỗ',
    description:
      'Hoàn thiện kính đúng độ, đảm bảo thẩm mỹ và thoải mái khi đeo với quy trình rõ ràng, dễ theo dõi.',
  },
  {
    title: 'Kiểm tra mắt định kỳ',
    description:
      'Theo dõi sự thay đổi thị lực theo thời gian để phát hiện sớm các dấu hiệu cần can thiệp hoặc điều chỉnh kính.',
  },
]

const featuredFrames = [
  {
    title: 'Kính cận mỏng nhẹ',
    description: 'Phù hợp cho học sinh, sinh viên và người làm văn phòng cần đeo kính cả ngày.',
  },
  {
    title: 'Kính viễn và lão thị',
    description: 'Hỗ trợ nhìn xa hoặc đọc sách cho người trung niên và lớn tuổi.',
  },
  {
    title: 'Kính loạn thị',
    description: 'Tròng kính được đo và cắt chính xác, giúp tầm nhìn cân bằng và thoải mái.',
  },
  {
    title: 'Kính chống ánh sáng xanh',
    description: 'Giảm mỏi mắt cho người thường xuyên sử dụng máy tính và điện thoại.',
  },
]

const advantages = [
  'Quy trình đo mắt rõ ràng, ưu tiên độ chính xác và sự thoải mái.',
  'Tư vấn dễ hiểu, tập trung vào sức khỏe thị lực trước khi chọn gọng.',
  'Sản phẩm kính được chọn lọc, bảo hành minh bạch và dễ theo dõi.',
  'Không gian sáng, sạch và phù hợp cho gia đình đến thăm khám.',
]

const reviews = [
  {
    name: 'Chị Mai, Vĩnh Long',
    quote:
      'Tôi đánh giá cao cách tư vấn ở đây vì nhân viên giải thích rất kỹ về độ cận và cách chọn tròng kính phù hợp.',
  },
  {
    name: 'Anh Hiếu, giáo viên',
    quote:
      'Không gian sạch, thao tác đo mắt nhanh gọn, đeo kính mới vào thấy dễ chịu ngay từ lần đầu tiên.',
  },
  {
    name: 'Cô Lan, khách hàng gia đình',
    quote:
      'Cả nhà tôi đều đo mắt định kỳ tại Anh Thi. Cảm giác yên tâm hơn vì được nhắc lịch và theo dõi thị lực đều đặn.',
  },
]

export const HomePage = () => {
  return (
    <div className={styles.page} id="trang-chu">
      <section className={styles.hero}>
        <ContainerLayout>
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <span className={styles.eyebrow}>Phòng khám mắt hiện đại tại Vĩnh Long</span>
              <h1 className={styles.heroTitle}>Chăm sóc thị lực cho bạn và gia đình</h1>
              <p className={styles.heroText}>
                Đo mắt chuẩn, tư vấn tận tâm và lựa chọn kính phù hợp theo nhu cầu sống.
                Kính Thuốc Anh Thi đặt sức khỏe đôi mắt lên trước, kính chỉ là giải pháp đi
                kèm đúng lúc.
              </p>
              <div className={styles.heroActions}>
                <Link to={ROUTES.CONTACT} className={styles.primaryButton}>
                  Đặt lịch đo mắt
                </Link>
                <Link to={ROUTES.DOCTOR} className={styles.secondaryButton}>
                  Xem bác sĩ
                </Link>
              </div>
              <ul className={styles.heroHighlights}>
                <li>Đo khúc xạ rõ ràng và dễ hiểu</li>
                <li>Tư vấn kính theo tình trạng thị lực</li>
                <li>Không gian clinic-first, sáng và tin cậy</li>
              </ul>
            </div>

            <div className={styles.heroVisual} aria-hidden="true">
              <div className={styles.visualCardLarge}>
                <span className={styles.visualTag}>Phòng đo mắt</span>
                <h2>Đo mắt chính xác, tư vấn tận tâm từ bác sĩ chuyên khoa</h2>
                <p>
                  Mỗi lần đo mắt tại Anh Thi, bạn sẽ được bác sĩ giải thích rõ ràng
                  về tình trạng thị lực và hướng xử lý phù hợp nhất.
                </p>
              </div>
              <div className={styles.visualCardSmall}>
                <span className={styles.visualChip}>Máy đo khúc xạ</span>
                <span className={styles.visualChip}>Tư vấn gọng kính</span>
                <span className={styles.visualChip}>Cắt kính nhanh</span>
              </div>
              <div className={styles.metricCard}>
                <strong>Clinic first</strong>
                <span>Tập trung vào sức khỏe mắt trước khi chọn kính</span>
              </div>
            </div>
          </div>
        </ContainerLayout>
      </section>

      <section className={styles.introSection} id="gioi-thieu">
        <ContainerLayout>
          <div className={styles.sectionHeading}>
            <span className={styles.sectionLabel}>Giới thiệu</span>
            <h2>Chăm sóc thị lực trước, chọn kính sau</h2>
            <p>
              Kính Thuốc Anh Thi là địa chỉ đo mắt và tư vấn thị lực tại Vĩnh Long, phục
              vụ từ học sinh, nhân viên văn phòng đến người cần theo dõi thị lực định kỳ.
              Mọi quy trình đều hướng đến sự đúng độ, dễ hiểu và phù hợp lâu dài.
            </p>
          </div>

          <div className={styles.introGrid}>
            <article className={styles.infoCard}>
              <span className={styles.cardNumber}>01</span>
              <h3>Uy tín xây dựng từ quy trình</h3>
              <p>
                Từ bước kiểm tra ban đầu đến lúc giao kính, khách hàng được giải thích rõ
                ràng về tình trạng thị lực và lựa chọn phù hợp.
              </p>
            </article>
            <article className={styles.infoCard}>
              <span className={styles.cardNumber}>02</span>
              <h3>Chuyên môn để tạo niềm tin</h3>
              <p>
                Bác sĩ chuyên khoa trực tiếp tham gia quy trình đo mắt và tư vấn,
                mang đến sự an tâm cho khách hàng ở mọi lứa tuổi.
              </p>
            </article>
            <article className={styles.infoCard}>
              <span className={styles.cardNumber}>03</span>
              <h3>Kính đi kèm giải pháp</h3>
              <p>
                Kính được chọn sau khi hiểu rõ tình trạng mắt, không phải chọn trước rồi
                mới đo. Đảm bảo đúng độ, phù hợp nhu cầu sử dụng thực tế.
              </p>
            </article>
          </div>
        </ContainerLayout>
      </section>

      <section className={styles.doctorTeaserSection}>
        <ContainerLayout>
          <div className={styles.doctorTeaserGrid}>
            <div className={styles.portraitCard}>
              <span className={styles.sectionLabel}>Chuyên môn</span>
              <h2>Bác sĩ Nguyễn Anh Thi</h2>
              <p>
                Bác sĩ chuyên khoa 2, Trưởng khoa Bệnh viện Mắt Vĩnh Long với hơn 30 năm
                kinh nghiệm trong lĩnh vực nhãn khoa.
              </p>
              <div className={styles.portraitBadge}>Bác sĩ chuyên khoa 2 • Hơn 30 năm kinh nghiệm</div>
            </div>

            <article className={styles.doctorTeaserCard}>
              <span className={styles.doctorTeaserLabel}>Trang riêng</span>
              <h3>Tìm hiểu thêm về bác sĩ</h3>
              <p>
                Xem quá trình công tác, chuyên môn và định hướng chăm sóc thị lực
                của bác sĩ Nguyễn Anh Thi tại trang riêng.
              </p>
              <Link to={ROUTES.DOCTOR} className={styles.primaryButton}>
                Xem trang bác sĩ
              </Link>
            </article>
          </div>
        </ContainerLayout>
      </section>

      <section className={styles.servicesSection} id="dich-vu">
        <ContainerLayout>
          <div className={styles.sectionHeading}>
            <span className={styles.sectionLabel}>Dịch vụ</span>
            <h2>Quy trình chăm sóc thị lực tại Anh Thi</h2>
            <p>
              Từ bước đo mắt đầu tiên đến khi nhận kính, mỗi bước đều được giải thích
              rõ ràng để bạn hiểu mình đang được hỗ trợ những gì.
            </p>
          </div>

          <div className={styles.serviceGrid}>
            {services.map((service, index) => (
              <article key={service.title} className={styles.serviceCard}>
                <span className={styles.serviceIcon}>0{index + 1}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </ContainerLayout>
      </section>

      <section className={styles.framesSection} id="mau-kinh">
        <ContainerLayout>
          <div className={styles.sectionHeading}>
            <span className={styles.sectionLabel}>Mẫu kính</span>
            <h2>Một số giải pháp kính tiêu biểu</h2>
            <p>
              Dưới đây là các nhóm kính phổ biến mà khách hàng thường được tư vấn sau khi đo mắt.
              Mẫu kính chi tiết hơn có tại trang gọng kính.
            </p>
            <div className={styles.sectionActions}>
              <Link to={ROUTES.FRAMES} className={styles.secondaryButton}>
                Xem trang gọng kính
              </Link>
            </div>
          </div>

          <div className={styles.frameGrid}>
            {featuredFrames.map((item, index) => (
              <article key={item.title} className={styles.frameCard}>
                <div className={styles.framePreview}>
                  <span>{index + 1}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </ContainerLayout>
      </section>

      <section className={styles.whySection}>
        <ContainerLayout>
          <div className={styles.whyGrid}>
            <div className={styles.sectionHeadingLeft}>
              <span className={styles.sectionLabel}>Vì sao chọn Anh Thi</span>
              <h2>Sự tin cậy đến từ cách chúng tôi làm việc</h2>
              <p>
                Không chỉ là lời nói, mà là quy trình rõ ràng, không gian chuyên nghiệp
                và sự chăm sóc mà bạn cảm nhận được ngay từ lần đầu ghé thăm.
              </p>
            </div>

            <div className={styles.advantageList}>
              {advantages.map((item) => (
                <article key={item} className={styles.advantageCard}>
                  <span className={styles.advantageDot} />
                  <p>{item}</p>
                </article>
              ))}
            </div>
          </div>
        </ContainerLayout>
      </section>

      <section className={styles.reviewsSection}>
        <ContainerLayout>
          <div className={styles.sectionHeading}>
            <span className={styles.sectionLabel}>Đánh giá khách hàng</span>
            <h2>Khách hàng nói gì về Anh Thi</h2>
            <p>
              Những chia sẻ thực tế từ khách hàng đã sử dụng dịch vụ đo mắt
              và làm kính tại cửa hàng.
            </p>
          </div>

          <div className={styles.reviewGrid}>
            {reviews.map((review) => (
              <article key={review.name} className={styles.reviewCard}>
                <p className={styles.reviewQuote}>"{review.quote}"</p>
                <span className={styles.reviewName}>{review.name}</span>
              </article>
            ))}
          </div>
        </ContainerLayout>
      </section>

      <section className={styles.contactSection} id="lien-he">
        <ContainerLayout>
          <div className={styles.contactGrid}>
            <div className={styles.contactContent}>
              <span className={styles.sectionLabel}>Liên hệ</span>
              <h2>Đặt lịch đo mắt và ghé thăm cửa hàng tại TP Vĩnh Long</h2>
              <p>
                Liên hệ trực tiếp hoặc đặt lịch trước để được phục vụ nhanh hơn.
                Cửa hàng nằm tại trung tâm TP Vĩnh Long, dễ tìm và có chỗ đậu xe.
              </p>
              <div className={styles.contactActions}>
                <Link to={ROUTES.CONTACT} className={styles.primaryButton}>
                  Đặt lịch đo mắt
                </Link>
                <a
                  href="https://maps.google.com/?q=85+Pham+Thai+Buong,+TP+Vinh+Long"
                  className={styles.secondaryButton}
                  target="_blank"
                  rel="noreferrer"
                >
                  Xem đường đi
                </a>
              </div>
            </div>

            <div className={styles.locationCard}>
              <div className={styles.locationBlock}>
                <span className={styles.locationLabel}>Địa chỉ</span>
                <strong>85 Phạm Thái Bường, TP Vĩnh Long</strong>
              </div>
              <div className={styles.locationBlock}>
                <span className={styles.locationLabel}>Kênh tư vấn</span>
                <p>Đặt lịch đo mắt, gọi tư vấn hoặc nhắn Zalo tại cửa hàng.</p>
              </div>
              <div className={styles.locationBlock}>
                <span className={styles.locationLabel}>Giờ gợi ý</span>
                <p>Phù hợp cho thăm khám gia đình, học sinh và người cần kiểm tra thị lực định kỳ.</p>
              </div>
            </div>
          </div>
        </ContainerLayout>
      </section>
    </div>
  )
}
