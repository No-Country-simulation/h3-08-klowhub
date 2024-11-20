import { Header } from './components/header'

interface PlatformLayoutPageProps {
  children: React.ReactNode
}

function PlatformLayout({ children }: PlatformLayoutPageProps) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default PlatformLayout
