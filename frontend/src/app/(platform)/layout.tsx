import { UserModeProvider, UserProvider } from '@/providers'
import { Header } from './components/header'

interface PlatformLayoutPageProps {
  children: React.ReactNode
}

function PlatformLayout({ children }: PlatformLayoutPageProps) {
  return (
    <UserModeProvider>
      <UserProvider>
        <Header />
        {children}
      </UserProvider>
    </UserModeProvider>
  )
}

export default PlatformLayout
