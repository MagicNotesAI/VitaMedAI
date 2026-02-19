import { HeroSection } from '../../../components/HeroSection';
import { LogosSection } from '../../../components/LogosSection';
import { StatsSection } from '../../../components/StatsSection';
import { VideoSection } from '../../../components/VideoSection';
import { StakeholdersSection } from '../../../components/StakeholdersSection';
import { BetaAccessSection } from '../../../components/BetaAccessSection';
import { TestimonialsSection } from '../../../components/TestimonialsSection';
import { Footer } from '../../../components/Footer';
import { FooterBanner } from '../../../components/FooterBanner';

export function Home() {
  return (
    <>
      <HeroSection />
      <Footer />
      <LogosSection />
      <VideoSection />
      <StakeholdersSection />
      <StatsSection />
      <TestimonialsSection />
      <BetaAccessSection />
      <FooterBanner />
    </>
  );
}