import { Footer } from '@/components/footer'
import { CartProvider, UserModeProvider, UserProvider } from '@/providers'
import { Header } from '../../components/header/header'

interface PlatformLayoutPageProps {
  /**
   * The children components to render.
   */
  children: React.ReactNode
}

function PlatformLayout({ children }: PlatformLayoutPageProps) {
  return (
    <UserProvider>
      <UserModeProvider>
        <CartProvider>
          <Header />
          {children}
          <Footer />
        </CartProvider>
      </UserModeProvider>
    </UserProvider>
  )
}

export default PlatformLayout
