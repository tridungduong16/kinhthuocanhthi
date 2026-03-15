import { useComponentVisible } from '@/hooks/useComponentVisible'
import clsx from 'clsx'
import styles from './Dropdown.module.scss'

interface DropdownItem {
  label: string
  href: string
}

interface DropdownProps {
  label: string
  items: DropdownItem[]
}

const Dropdown = ({ label, items }: DropdownProps) => {
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false)

  return (
    <div ref={ref} className={styles.dropdown}>
      <button
        className={styles.trigger}
        onClick={() => setIsComponentVisible(!isComponentVisible)}
      >
        {label}
      </button>
      <ul className={clsx(styles.menu, { [styles.open]: isComponentVisible })}>
        {items.map((item) => (
          <li key={item.href}>
            <a href={item.href} className={styles.item}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Dropdown
