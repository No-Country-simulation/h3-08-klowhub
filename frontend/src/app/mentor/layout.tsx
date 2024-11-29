import { Header } from "../(platform)/components/header"


interface MentorLayoutPageProps {
  children: React.ReactNode
}

function MentorLayout({ children }: MentorLayoutPageProps) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default MentorLayout
