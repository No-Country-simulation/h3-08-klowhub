import { Header } from "../(platform)/components/header"


interface VendedorLayoutPageProps {
  children: React.ReactNode
}

function VendedorLayout({ children }: VendedorLayoutPageProps) {
  return (
    <>
      <Header />
      <div className="w-full p-12">
        {children}
      </div>
    </>
  )
}

export default VendedorLayout
