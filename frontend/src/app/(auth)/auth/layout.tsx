import { Footer } from '@/components/footer'

interface AuthLayoutPageProps {
  /**
   * The children components to render.
   */
  children: React.ReactNode
}

function AuthLayoutPage({ children }: AuthLayoutPageProps) {
  return (
    <>
      {children}
      <Footer />
    </>
  )
}

export default AuthLayoutPage
