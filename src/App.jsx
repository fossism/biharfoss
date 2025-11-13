import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Programs from './components/Programs'
import Events from './components/Events/Events'
import PastEvents from './components/Events/PastEvents'
import CommunityPartners from './components/Community/CommunityPartners'
import OurCommunity from './components/Community/OurCommunity'
import Footer from './components/Footer'
function App() {

  return (
    <>
    <link rel="icon" type="image/svg+xml" href="fosslogo.svg" />
      <Header />
      <Home />
      <About />
      <Programs />
      <Events />
      <PastEvents />
      <CommunityPartners />
      <OurCommunity />
      <Footer />
    </>
  )
}

export default App
