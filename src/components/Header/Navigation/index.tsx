import { useSelector } from 'react-redux'
import { selectAppIsMobile } from '@/store/features/app/selector'
import { NavDesktop } from './NavDesktop'
import { NavMobile } from './NavMobile'

export const Navigation = () => {
  const isMobile = useSelector(selectAppIsMobile)

  return isMobile ? <NavMobile /> : <NavDesktop />
}
