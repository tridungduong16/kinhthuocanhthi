import type { ReactNode } from 'react'
import styles from './ContainerLayout.module.scss'

interface ContainerLayoutProps {
  children: ReactNode
}

export const ContainerLayout = ({ children }: ContainerLayoutProps) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}
