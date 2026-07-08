import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import GalleryPage from './pages/GalleryPage';
import AmenitiesPage from './pages/AmenitiesPage';
import LocationPage from './pages/LocationPage';
import ContactPage from './pages/ContactPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import Career from './pages/Career';
import EventsPage from './pages/EventsPage';
import ChannelPartner from './pages/ChannelPartner';

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="/about" element={<Layout><AboutPage /></Layout>} />
        <Route path="/projects" element={<Layout><ProjectsPage /></Layout>} />
        <Route path="/gallery" element={<Layout><GalleryPage /></Layout>} />
        <Route path="/amenities" element={<Layout><AmenitiesPage /></Layout>} />
        <Route path="/location" element={<Layout><LocationPage /></Layout>} />
        <Route path='/career' element={<Layout><Career /></Layout>} />
        <Route path="/event" element={<Layout><EventsPage /></Layout>} />
        <Route path="/channel-partner" element={<Layout><ChannelPartner /></Layout>} />
        <Route path="/contact" element={<Layout><ContactPage /></Layout>} />
        <Route path="/projects/:slug" element={<Layout><ProjectDetailPage /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
