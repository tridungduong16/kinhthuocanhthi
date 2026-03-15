import styles from './FloatingContact.module.scss'

const CONTACT_LINKS = {
  zalo: 'https://zalo.me/',
  messenger: 'https://m.me/',
}

export const FloatingContact = () => {
  return (
    <div className={styles.wrapper} aria-label="Liên hệ nhanh">
      <a
        href={CONTACT_LINKS.zalo}
        target="_blank"
        rel="noreferrer"
        className={`${styles.button} ${styles.zalo}`}
        aria-label="Liên hệ qua Zalo"
      >
        <span className={styles.label}>Zalo</span>
        <span className={styles.icon} aria-hidden="true">
          Z
        </span>
      </a>
      <a
        href={CONTACT_LINKS.messenger}
        target="_blank"
        rel="noreferrer"
        className={`${styles.button} ${styles.messenger}`}
        aria-label="Liên hệ qua Messenger"
      >
        <span className={styles.label}>Messenger</span>
        <span className={styles.icon} aria-hidden="true">
          M
        </span>
      </a>
    </div>
  )
}
