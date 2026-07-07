import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import ModelCatalog from './components/ModelCatalog'
import PromoKredit from './components/PromoKredit'
import Testimonials from './components/Testimonials'
import Faq from './components/Faq'
import LeadForm from './components/LeadForm'
import Footer from './components/Footer'
import FloatingWhatsapp from './components/FloatingWhatsapp'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Highlights />
        <ModelCatalog />
        <PromoKredit />
        <Testimonials />
        <Faq />
        <LeadForm />
      </main>
      <Footer />
      <FloatingWhatsapp />
    </>
  )
}

export default App
