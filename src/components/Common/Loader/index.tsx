import clsx from 'clsx'
import styles from './Loader.module.scss'

interface LoaderProps {
  isVisible?: boolean
}

const Loader = ({ isVisible }: LoaderProps) => {
  return (
    <div className={clsx(styles.loader, { [styles.visible]: isVisible })}>
      <div className={styles.spinner} />
    </div>
  )
}

export default Loader
