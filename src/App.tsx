import { useSelector } from "react-redux"
import { Outlet } from "react-router-dom"

import { useApp } from "./hooks/useApp"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { selectAppLoaded } from "./store/features/app/selector"
import Loader from "./components/Common/Loader"

import styles from './App.module.scss'

function App() {
  useApp()

  const loaded = useSelector(selectAppLoaded)

  if (!loaded) {
    return <Loader isVisible />
  }

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App
