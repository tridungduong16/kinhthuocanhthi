import type { AppState } from "@/store"

export const selectApp = (state: AppState) => state.app
export const selectAppLoaded = (state: AppState) => selectApp(state).loaded
export const selectAppMobileMenuOpen = (state: AppState) => selectApp(state).mobileMenuOpen
export const selectAppIsMobile = (state: AppState) => selectApp(state).isMobile
export const selectAppIsTablet = (state: AppState) => selectApp(state).isTablet
export const selectAppIsDesktop = (state: AppState) => selectApp(state).isDesktop
