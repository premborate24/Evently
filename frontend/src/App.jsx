import React, { useEffect } from 'react'; 
import './App.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { createBrowserRouter, RouterProvider, useNavigate } from 'react-router-dom';
import Button from './components/button';
import Celebrations from './Celebrations';
import AuthForm from './components/Login'; // Ensure you import your Login component here
import image from './images/main.jpg';
import image4 from './images/engagement.jpg';
import image5 from './images/wedding (1).jpg';
import image6 from './images/bday.jpg';
import image7 from './images/partyy.jpg';
import image8 from './images/reunion.jpg';
import image9 from './images/reception.jpg';
import WeddingPackages from './components/WeddingPackages';
import Navbar from './components/Navbar';
import About from './pages/about';
import ServiceCard from './components/ServiceCard';
import EngagementPackages from './components/EngangementPackages';
import BirthdayPackages from './components/BirthdayPackages';
import PartyPackages from './components/PartyPackages';
import ReunionPackages from './components/ReunionPackages';
import ReceptionPackages from './components/ReceptionPackages';
import BeforeLogin from './pages/BeforeLogin';
import VendorLogin from './components/VendorLogin'; // Adjust the path as necessary
import ContactUs from './pages/Contact';
import PaymentForm from './components/PaymentForm';



const Home = () => {
  const [isLogin, setIsLogin] = React.useState(false);
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      setIsLogin(true)
    }
    else{
      setIsLogin(false)
    }
  },[])
  const navigate = useNavigate();

  const handleServiceClick = (serviceName) => {
    if (serviceName === 'Wedding') {
      navigate("/WeddingPackages");
    }
    if (serviceName === 'Engagement') {
      navigate("/EngagementPackages");
    }
    if (serviceName === 'Birthday') {
      navigate("/BirthdayPackages");
    }
    if (serviceName === 'Party') {
      navigate("/PartyPackages");
    }
    if (serviceName === 'Reunion') {
      navigate("/ReunionPackages");
    }
    if (serviceName === 'Reception') {
      navigate("/ReceptionPackages");
    }
  };

  const handleLoginClick = () => {
    navigate("/BeforeLogin");
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Navbar onNavigate={scrollToSection} />
      <div className="video-container" id="home">
        <img src={image} alt="Event Background" />
        <div className="overlay">
          <div className="logo">
            <img src="/evently_logo.png" alt="Evently Logo" />
          </div>
          <div className="hook-line">
            Let’s Create Unforgettable Memories Together
          </div>
          <div>
        {!isLogin &&  <Button text="Login Now" onClick={handleLoginClick} />}
          </div>
        </div>
      </div>

      <div id="about">
        <About />
      </div>

      <section id="services" className="section">
        <h1 className='h2'>Services</h1>
        <div className='services'>
          <ServiceCard image={image4} title="Engagement" onClick={() => handleServiceClick('Engagement')} />
          <ServiceCard image={image5} title="Wedding" onClick={() => handleServiceClick('Wedding')} />
          <ServiceCard image={image6} title="Birthday" onClick={() => handleServiceClick('Birthday')} />
          <ServiceCard image={image7} title="Party" onClick={() => handleServiceClick('Party')} />
          <ServiceCard image={image8} title="Reunion" onClick={() => handleServiceClick('Reunion')} />
          <ServiceCard image={image9} title="Reception" onClick={() => handleServiceClick('Reception')} />
        </div>
      </section>

      <section>
        <Celebrations />
      </section>

      <section id="contact" className="section">
        <ContactUs/>
      </section>
    </>
  );
};

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/BeforeLogin", element: <BeforeLogin /> },
  { path: "/VendorLogin", element: <VendorLogin /> },
  { path: "/login", element: <AuthForm /> }, // Add the login route here
  { path: "/WeddingPackages", element: <WeddingPackages /> },
  { path: "/EngagementPackages", element: <EngagementPackages/>},
  { path: "/BirthdayPackages", element: <BirthdayPackages/>},
  { path: "/PartyPackages", element: <PartyPackages/>},
  { path: "/ReunionPackages", element: <ReunionPackages/>},
  { path: "/ReceptionPackages", element: <ReceptionPackages/>},
  {path:"/payment", element:<PaymentForm/>}
]);

function App() {
  return (
    <GoogleOAuthProvider clientId="YOUR_CLIENT_ID_HERE">
      <RouterProvider router={router} />
    </GoogleOAuthProvider>
  );
}

export default App;
