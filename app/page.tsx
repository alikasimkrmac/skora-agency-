import Header from './components/Header'
import HeroSection from './components/HeroSection'
import InfoCards from './components/InfoCards'
import ComparisonTable from './components/ComparisonTable'
import ShiftGears from './components/ShiftGears'
import TimelineViz from './components/TimelineViz'
import IgnitionForm from './components/IgnitionForm'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <InfoCards />
        <ComparisonTable />
        <ShiftGears />
        <TimelineViz />
        <IgnitionForm />
      </main>
      <Footer />
    </>
  )
}
