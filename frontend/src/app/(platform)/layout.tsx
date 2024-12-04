import { UserProvider } from '@/providers'
import { Header } from './components/header'

interface PlatformLayoutPageProps {
  children: React.ReactNode
}

function PlatformLayout({ children }: PlatformLayoutPageProps) {
  return (
    <UserProvider>
      <Header />
      {children}
    </UserProvider>
  )
}

export default PlatformLayout
