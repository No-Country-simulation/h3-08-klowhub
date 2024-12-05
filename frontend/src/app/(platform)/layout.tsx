import { CartProvider, UserModeProvider, UserProvider } from '@/providers'
import { Header } from './components/header'

interface PlatformLayoutPageProps {
  children: React.ReactNode
}

function PlatformLayout({ children }: PlatformLayoutPageProps) {
  return (
    <UserProvider>
      <UserModeProvider>
        <CartProvider>
          <Header />
          {children}
        </CartProvider>
      </UserModeProvider>
    </UserProvider>
  )
}

export default PlatformLayout
