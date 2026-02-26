import { CSSProperties, useState } from 'react'

import Footer from 'components/Footer'
import Header from 'components/Header'
import MobileMenu from 'components/MobileMenu'
import Skiplinks from 'components/Skiplinks'

type LayoutProps = {
  isMainPage?: boolean
  style?: CSSProperties
  children?: React.ReactNode
  className?: string
}

const LayoutWithMobileMenu = ({ isMainPage, children }: LayoutProps) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)
  const toggleMobileMenuOpen = () => {
    setMobileMenuOpen((prev) => !prev)
  }

  return (
    <>
      <Header isMobileMenuOpen={isMobileMenuOpen} toggleMobileMenuOpen={toggleMobileMenuOpen} isMainPage={isMainPage} />
      {children}

      <MobileMenu isOpen={isMobileMenuOpen} setOpen={setMobileMenuOpen} isMainPage={isMainPage} />
    </>
  )
}

const Layout = ({ isMainPage, style, children, className }: LayoutProps) => (
  <>
    <Skiplinks />

    <LayoutWithMobileMenu isMainPage={isMainPage}>
      <main className={className} style={style}>
        {children}
      </main>
      <Footer />
    </LayoutWithMobileMenu>
  </>
)

export default Layout
