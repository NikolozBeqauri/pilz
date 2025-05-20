import AboutSection from '../components/About/AboutSection';
import BankSlider from '../components/BankSlider/BankSlider';
import ContactSection from '../components/ContactSection/ContactSection';
import FooterComponent from '../components/FooterComponent/FooterComponent';
import Hero from '../components/Hero/Hero';
import NavigationRender from '../components/NavigationRender/NavigationRender';
import Services from '../components/Services/Services';

export default function HomePage() {
  return (
    <div>
      <NavigationRender />
      <Hero />
      <Services />
      <AboutSection />
      <BankSlider />
      <ContactSection />
      <FooterComponent />
    </div>
  );
}