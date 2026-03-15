export const SEGMENTS = {
  HOME: '/',
  DOCTOR: '/bac-si',
  SERVICES: '/dich-vu',
  FRAMES: '/gong-kinh',
  CONTACT: '/lien-he',
} as const

export const ROUTES = {
  HOME: '/',
  DOCTOR: '/bac-si',
  SERVICES: '/dich-vu',
  FRAMES: '/gong-kinh',
  CONTACT: '/lien-he',
}

export const NAVIGATION_ITEMS = [
  { label: 'Trang chủ', href: ROUTES.HOME },
  { label: 'Bác sĩ', href: ROUTES.DOCTOR },
  { label: 'Dịch vụ', href: ROUTES.SERVICES },
  { label: 'Gọng kính', href: ROUTES.FRAMES },
  { label: 'Liên hệ', href: ROUTES.CONTACT },
]
