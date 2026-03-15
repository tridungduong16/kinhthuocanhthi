import { useEffect, useCallback } from "react"
import { useDispatch } from "react-redux"
import { setWindowState } from "@/store/features/app/appSlice"
import { actions } from "@/store/actions"

export const useApp = () => {
  const dispatch = useDispatch()

  const onResize = useCallback(() => {
    setWindowState(dispatch)
  }, [dispatch])

  // LISTEN LOADED
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      dispatch(actions.app.setLoaded(true))
    }, 1000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [dispatch])

  // LISTEN WINDOW RESIZE
  useEffect(() => {
    onResize()

    window?.addEventListener('resize', onResize)

    return () => {
      window?.removeEventListener('resize', onResize)
    }
  }, [onResize])
}
