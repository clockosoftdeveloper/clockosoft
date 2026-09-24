import ContactSection from "@/components/pages/home/contact";
import { FloatingMessenger } from "@/components/pages/home/floating-messenger";
import Footer from "@/components/pages/home/footer";
import PortfolioSection from "@/components/pages/home/portfolio";
import HeroSection from "../components/pages/home/hero";
import ServicesSection from "@/components/pages/home/services";
import AchievementSection from "@/components/pages/home/achievements";
import SiteHeader from "@/components/pages/home/site-header";

const page = () => {
  return <div>
    <SiteHeader/>
    <HeroSection />
    <ServicesSection/>
    <PortfolioSection />
    <AchievementSection/>
    <ContactSection/>
    <Footer />
    <FloatingMessenger />
  </div>;
};

export default page;
