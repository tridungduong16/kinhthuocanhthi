export const SEGMENTS = {
  HOME: '/',
  DOCTOR: '/bac-si',
} as const

export const ROUTES = {
  HOME: '/',
  DOCTOR: '/bac-si',
}

export const NAVIGATION_ITEMS = [
  { label: 'Trang chủ', href: `${ROUTES.HOME}#trang-chu` },
  { label: 'Giới thiệu', href: `${ROUTES.HOME}#gioi-thieu` },
  { label: 'Bác sĩ', href: ROUTES.DOCTOR },
  { label: 'Dịch vụ', href: `${ROUTES.HOME}#dich-vu` },
  { label: 'Gọng kính', href: `${ROUTES.HOME}#mau-kinh` },
  { label: 'Liên hệ', href: `${ROUTES.HOME}#lien-he` },
]
