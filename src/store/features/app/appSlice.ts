import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { AppState } from '@/store/types/app'
import { BREAKPOINTS } from '@/constants/app'
import type { AppDispatch } from '@/store'

const initialState: AppState = {
  loaded: false,
  mobileMenuOpen: false,
  isMobile: false,
  isTablet: false,
  isDesktop: false,
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLoaded: (state, action: PayloadAction<boolean>) => {
      state.loaded = action.payload
    },
    setMobileMenuOpen: (state, action: PayloadAction<boolean>) => {
      state.mobileMenuOpen = action.payload
    },
    setIsDesktop: (state, action: PayloadAction<boolean>) => {
      state.isDesktop = action.payload
    },
    setIsMobile: (state, action: PayloadAction<boolean>) => {
      state.isMobile = action.payload
    },
    setIsTablet: (state, action: PayloadAction<boolean>) => {
      state.isTablet = action.payload
    },
    fetchDataRequest: () => {}, // trigger saga
  },
})

export const actions = {
  ...appSlice.actions
}

export const {
  setLoaded,
  setMobileMenuOpen,
  setIsMobile,
  setIsTablet,
  setIsDesktop,
  fetchDataRequest,
} = appSlice.actions

export const setWindowState = (dispatch: AppDispatch) => {
  const sm = window.matchMedia(`(max-width: ${BREAKPOINTS.SM_MAX}px)`)
  const md = window.matchMedia(
    `(min-width: ${BREAKPOINTS.MD_MIN}px) and (max-width: ${BREAKPOINTS.MD_MAX}px)`,
  )
  const lg = window.matchMedia(`(min-width: ${BREAKPOINTS.LG_MIN}px)`)

  if (sm.matches) {
    dispatch(setIsMobile(true))
    dispatch(setIsTablet(false))
    dispatch(setIsDesktop(false))
  }

  if (md.matches) {
    dispatch(setIsMobile(false))
    dispatch(setIsTablet(true))
    dispatch(setIsDesktop(false))
  }

  if (lg.matches) {
    dispatch(setIsMobile(false))
    dispatch(setIsTablet(false))
    dispatch(setIsDesktop(true))
  }
}

export default appSlice.reducer
