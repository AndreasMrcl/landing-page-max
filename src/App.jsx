import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HowToOrder from './components/HowToOrder'
import UnitCars from './components/UnitCars'
import BestService from './components/BestService'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'
import FloatingWhatsapp from './components/FloatingWhatsapp'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HowToOrder />
        <UnitCars />
        <BestService />
        <ContactUs />
      </main>
      <Footer />
      <FloatingWhatsapp />
    </>
  )
}

export default App
