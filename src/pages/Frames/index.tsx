import { ContainerLayout } from '@/layouts/ContainerLayout'
import styles from './Frames.module.scss'

const frameSamples = [
  {
    name: 'Titanium Slim',
    category: 'Gọng mảnh cao cấp',
    description: 'Thiết kế mỏng nhẹ, hợp người cần đeo cả ngày khi làm việc văn phòng.',
    tone: 'Navy Smoke',
  },
  {
    name: 'Soft Oval',
    category: 'Gọng nữ thanh lịch',
    description: 'Form oval mềm, phù hợp khuôn mặt nhỏ và nhu cầu đeo kính hằng ngày.',
    tone: 'Champagne Gold',
  },
  {
    name: 'Urban Square',
    category: 'Gọng nam hiện đại',
    description: 'Dáng vuông rõ nét, giữ cảm giác chuyên nghiệp nhưng không quá cứng.',
    tone: 'Matte Graphite',
  },
  {
    name: 'Blue Shield',
    category: 'Gọng cho dân màn hình',
    description: 'Ưu tiên thoải mái sống mũi và phối hợp tốt với tròng chống ánh sáng xanh.',
    tone: 'Steel Blue',
  },
  {
    name: 'Classic Rim',
    category: 'Gọng nửa viền',
    description: 'Phù hợp người thích vẻ ngoài gọn, sáng và dễ dùng trong môi trường công sở.',
    tone: 'Warm Silver',
  },
  {
    name: 'Daily Flex',
    category: 'Gọng linh hoạt',
    description: 'Bản lề chắc chắn, thích hợp học sinh hoặc người cần độ bền trong sinh hoạt hằng ngày.',
    tone: 'Deep Olive',
  },
]

const categories = [
  'Gọng mảnh nhẹ cho văn phòng',
  'Gọng thanh lịch cho nữ',
  'Gọng vuông hiện đại cho nam',
  'Gọng bền cho học sinh và gia đình',
]

export const FramesPage = () => {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <ContainerLayout>
          <div className={styles.heroGrid}>
            <div className={styles.content}>
              <span className={styles.eyebrow}>Gọng kính</span>
              <h1>Một vài mẫu gọng được chọn để bạn tham khảo trước</h1>
              <p className={styles.lead}>
                Đây là trang preview, giúp khách hàng hình dung phong cách gọng kính có thể
                được tư vấn sau khi đo mắt. Trọng tâm vẫn là chọn đúng cho thị lực, khuôn mặt
                và thói quen sử dụng.
              </p>
              <div className={styles.categoryList}>
                {categories.map((item) => (
                  <span key={item} className={styles.categoryChip}>
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className={styles.heroPanel}>
              <div className={styles.panelCard}>
                <span className={styles.panelLabel}>Clinic-first selection</span>
                <h2>Gọng chỉ là bước sau tư vấn, không phải lựa chọn ngẫu hứng</h2>
                <p>
                  Mỗi mẫu gọng được gợi ý để khách hàng dễ hình dung phong cách, sau đó sẽ
                  được cân lại với độ cận, tròng kính và cảm giác đeo thực tế.
                </p>
              </div>
            </div>
          </div>
        </ContainerLayout>
      </section>

      <section className={styles.samplesSection}>
        <ContainerLayout>
          <div className={styles.sectionHeading}>
            <span className={styles.sectionLabel}>Preview mẫu kính</span>
            <h2>Vài mẫu gọng đại diện cho các nhu cầu phổ biến</h2>
            <p>
              Trang này không cố bán hàng như catalog. Mục tiêu là cho bạn thấy một số hướng
              lựa chọn trước khi đến đo mắt và được tư vấn trực tiếp.
            </p>
          </div>

          <div className={styles.grid}>
            {frameSamples.map((frame, index) => (
              <article key={frame.name} className={styles.card}>
                <div className={styles.preview}>
                  <div className={styles.glasses}>
                    <span />
                    <span />
                  </div>
                  <em>0{index + 1}</em>
                </div>
                <div className={styles.copy}>
                  <span className={styles.badge}>{frame.category}</span>
                  <h3>{frame.name}</h3>
                  <p>{frame.description}</p>
                  <strong>{frame.tone}</strong>
                </div>
              </article>
            ))}
          </div>
        </ContainerLayout>
      </section>
    </div>
  )
}
