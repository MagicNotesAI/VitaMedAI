import { HeroSection } from '../../../HeroSection';
import { LogosSection } from '../../../LogosSection';
import { StatsSection } from '../../../StatsSection';
import { VideoSection } from '../../../VideoSection';
import { StakeholdersSection } from '../../../StakeholdersSection';
import { BetaAccessSection } from '../../../BetaAccessSection';
import { TestimonialsSection } from '../../../TestimonialsSection';
import { Footer } from '../../../Footer';
import { FooterBanner } from '../../../FooterBanner';
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