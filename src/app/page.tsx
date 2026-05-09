"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';
import { Award, Building2, Users } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
        contentWidth="compact"
        sizing="medium"
        background="blurBottom"
        cardStyle="gradient-radial"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Services",
          id: "services",
        },
        {
          name: "Projects",
          id: "projects",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Dungri Contractors"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardGallery
      background={{
        variant: "gradient-bars",
      }}
      title="Building Cameroon's Future With Precision & Excellence"
      description="Dungri Contractors provides premium construction and engineering solutions for luxury properties, commercial infrastructure, and architectural landmarks."
      buttons={[
        {
          text: "Request Consultation",
          href: "#contact",
        },
        {
          text: "View Projects",
          href: "#projects",
        },
      ]}
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/glass-skyscraper-against-blue-sky-view-from-bottom_93675-134753.jpg",
          imageAlt: "Luxury construction building",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/architect-finishing-home-schematics-after-collaborating-with-engineers-ensure-designs-meet-client_482257-133033.jpg",
          imageAlt: "Architect blueprint site",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/architecture-landscape_1127-205.jpg",
          imageAlt: "Architecture and landscape",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/berlin-concert-hall-germany_181624-18088.jpg",
          imageAlt: "Berlin Concert Hall, Germany",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/new-york-city-ny-usa-october-20-2020-vessel-hudson-yards-staircase-designed-by-architect-thomas-heatherwick-midtown-manhattan-west_1321-2497.jpg",
          imageAlt: "The Vessel staircase",
        },
      ]}
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="about" data-section="about">
      <MetricSplitMediaAbout
      useInvertedBackground={false}
      title="A Legacy of Architectural Excellence"
      description="Based in Bonduma, Buea, Dungri Contractors delivers unparalleled construction quality, combining innovative engineering with exquisite craftsmanship to build iconic landmarks across Cameroon."
      metrics={[
        {
          value: "15+",
          title: "Years Experience",
        },
        {
          value: "100+",
          title: "Projects Completed",
        },
        {
          value: "50+",
          title: "Expert Staff",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/urban-adult-architect-inspecting-design-plan-workplace_482257-8114.jpg"
      imageAlt="Architectural office interior"
      mediaAnimation="slide-up"
      metricsAnimation="slide-up"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardThree
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="bento-grid"
      useInvertedBackground={false}
      features={[
        {
          title: "Residential Construction",
          description: "Bespoke luxury homes and villas tailored to your unique vision.",
          imageSrc: "http://img.b2bpic.net/free-photo/photorealistic-wooden-house-with-timber-structure_23-2151302680.jpg",
        },
        {
          title: "Commercial Architecture",
          description: "State-of-the-art office spaces and corporate developments.",
          imageSrc: "http://img.b2bpic.net/free-photo/photovoltaics-factory-worker-programming-solar-manufacturing-machinery-closeup_482257-117810.jpg",
        },
        {
          title: "Civil Engineering",
          description: "High-precision infrastructure work with durable, sustainable results.",
          imageSrc: "http://img.b2bpic.net/free-photo/architectural-blueprints_1359-423.jpg",
        },
      ]}
      title="Our Premium Engineering Services"
      description="We blend luxury with structural integrity to ensure every build meets the highest international standards."
    />
  </div>

  <div id="projects" data-section="projects">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          name: "Luxury Hotel Plaza",
          price: "View Project",
          imageSrc: "http://img.b2bpic.net/free-photo/hotel-resort-palm-trees-summer-time_116348-4.jpg",
        },
        {
          id: "p2",
          name: "Corporate HQ",
          price: "View Project",
          imageSrc: "http://img.b2bpic.net/free-photo/parking-entrance_1150-10839.jpg",
        },
        {
          id: "p3",
          name: "Residential Tower",
          price: "View Project",
          imageSrc: "http://img.b2bpic.net/free-photo/windows-pattern-textures-exterior-building_74190-3851.jpg",
        },
        {
          id: "p4",
          name: "Commercial Plaza",
          price: "View Project",
          imageSrc: "http://img.b2bpic.net/free-photo/giant-glass-buildings_1127-2023.jpg",
        },
        {
          id: "p5",
          name: "Premium Interior",
          price: "View Project",
          imageSrc: "http://img.b2bpic.net/free-photo/view-modern-futuristic-work-space-with-furniture_23-2151797754.jpg",
        },
        {
          id: "p6",
          name: "Infrastructure Bridge",
          price: "View Project",
          imageSrc: "http://img.b2bpic.net/free-photo/construction-site-silhouette-sky-city-material_1127-2350.jpg",
        },
      ]}
      title="Architectural Portfolio"
      description="A showcase of our most sophisticated construction projects throughout the region."
    />
  </div>

  <div id="why-choose-us" data-section="why-choose-us">
      <PricingCardThree
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      plans={[
        {
          id: "pl1",
          name: "Elite Craftsmanship",
          price: "Quality",
          features: [
            "Advanced Engineering",
            "Sustainable Design",
            "Timely Delivery",
          ],
          buttons: [
            {
              text: "Inquire",
              href: "#contact",
            },
          ],
        },
        {
          id: "pl2",
          name: "Proven Expertise",
          price: "Reliability",
          features: [
            "15+ Years Experience",
            "Elite Team",
            "Transparent Process",
          ],
          buttons: [
            {
              text: "Inquire",
              href: "#contact",
            },
          ],
        },
        {
          id: "pl3",
          name: "Customized Approach",
          price: "Tailored",
          features: [
            "Bespoke Solutions",
            "Luxury Finishing",
            "Full Management",
          ],
          buttons: [
            {
              text: "Inquire",
              href: "#contact",
            },
          ],
        },
      ]}
      title="Why Dungri Contractors?"
      description="We deliver excellence by prioritizing innovation, premium materials, and timely project delivery."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwelve
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",
          name: "Sarah Miller",
          imageSrc: "http://img.b2bpic.net/free-photo/business-people-working-together_23-2148826968.jpg",
        },
        {
          id: "t2",
          name: "James Otieno",
          imageSrc: "http://img.b2bpic.net/free-photo/girl-sitting-table-holding-mobile-phone-indoors_171337-17096.jpg",
        },
        {
          id: "t3",
          name: "Chidi Okoro",
          imageSrc: "http://img.b2bpic.net/free-photo/young-businessman-happy-expression_1194-1671.jpg",
        },
        {
          id: "t4",
          name: "Elena Dumont",
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-man-with-blue-shirt-schematics_23-2148269824.jpg",
        },
        {
          id: "t5",
          name: "Markus Zeller",
          imageSrc: "http://img.b2bpic.net/free-photo/face-casual-manager-communication-man_1157-3672.jpg",
        },
      ]}
      cardTitle="Client Experiences"
      cardTag="Trust & Excellence"
      cardAnimation="slide-up"
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardThree
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          icon: Building2,
          title: "Projects Completed",
          value: "100+",
        },
        {
          id: "m2",
          icon: Award,
          title: "Industry Awards",
          value: "25+",
        },
        {
          id: "m3",
          icon: Users,
          title: "Happy Clients",
          value: "95%",
        },
      ]}
      title="Construction Facts"
      description="Quantifiable commitment to precision."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "sparkles-gradient",
      }}
      text="Ready to build your masterpiece? Connect with Dungri Contractors in Buea today for a professional consultation."
      buttons={[
        {
          text: "Call +237 672 03 58 61",
          href: "tel:+237672035861",
        },
        {
          text: "WhatsApp Consultation",
          href: "https://wa.me/237672035861",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        {
          items: [
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Services",
              href: "#services",
            },
            {
              label: "Projects",
              href: "#projects",
            },
          ],
        },
        {
          items: [
            {
              label: "Contact Us",
              href: "#contact",
            },
            {
              label: "WhatsApp Support",
              href: "https://wa.me/237672035861",
            },
          ],
        },
      ]}
      logoText="Dungri Contractors"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
