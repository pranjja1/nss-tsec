import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutSection from './components/AboutSection';
import HeroSection from './components/HeroSection';
import EventSection from './components/EventSection';
import CommunityForum from './components/CommunityForum';
import Gallery from './components/Gallery';
import Announcements from './components/Announcements';
import ReportingSection from './components/ReportingSection';
import TrackingSection from './components/TrackingSection';
import LoginPage from './components/LoginPage';
import EventDetailPage from './components/EventDetailPage';
import AllEventsPage from './components/AllEventsPage';
import ProfilePage from './components/ProfilePage';
import Gallery1 from './components/Gallery1';
import Todo from './components/Todo';


function Layout() {
  return (
    <>
      <Header />
      
      <HeroSection />
      <EventSection />
      <CommunityForum />
      <Gallery />
      <Announcements />
      <ReportingSection />
      <TrackingSection />
      <AboutSection />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/events" element={<EventSection />} />
        <Route path="/community" element={<CommunityForum />} />
        <Route path="/po" element={<LoginPage />} />
        <Route path="/uslogin" element={<UserLogin />} />
        <Route path="/events/all" element={<AllEventsPage />} />
        <Route path="/events/:id" element={<EventDetailPage />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/gallery1" element={<Gallery1 />} />
        <Route path="/todo" element={<Todo />} />
        
       
        {/* Define other routes if needed */}
      </Routes>
    </Router>
  );
}

export default App;
ReactDOM.render(<App />, document.getElementById('root'));
