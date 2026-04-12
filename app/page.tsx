import Header from './components/Header'
import HeroSection from './components/HeroSection'
import InfoCards from './components/InfoCards'
import ComparisonTable from './components/ComparisonTable'
import ShiftGears from './components/ShiftGears'

import IgnitionForm from './components/IgnitionForm'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <InfoCards />
        <ComparisonTable />
        <ShiftGears />

        <IgnitionForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
