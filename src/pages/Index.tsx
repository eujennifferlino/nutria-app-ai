import { useState } from "react";
import { motion } from "framer-motion";

import { StatProps } from "@/types/landing-page";

import {
  Header,
  HeroSection,
  FeaturesSection,
  HowItWorksSection,
  TestimonialsSection,
  CTASection,
  Footer,
} from "@/components/landing-page";

import {
  features,
  testimonials,
  stats,
  howItWorksSteps,
} from "@/data/landing-page-data";

const Index = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const handleOpenVideo = () => setIsVideoOpen(true);
  const handleCloseVideo = () => setIsVideoOpen(false);

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-nutria-50 via-blue-50 to-purple-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Header />

      <HeroSection
        stats={stats}
        isVideoOpen={isVideoOpen}
        onOpenVideo={handleOpenVideo}
        onCloseVideo={handleCloseVideo}
      />

      <FeaturesSection features={features} />

      <HowItWorksSection steps={howItWorksSteps} />

      <TestimonialsSection testimonials={testimonials} />

      <CTASection />

      <Footer />
    </motion.div>
  );
};

export default Index;
