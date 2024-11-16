import { Footer } from '@/components/footer'

interface AuthLayoutPageProps {
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
