"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code, Database, Brain, CreditCard, Monitor, Globe, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

export default function Home() {
  return (
    <div className="flex flex-col gap-24 pb-24">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background z-10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/20 rounded-full blur-[120px] opacity-30 animate-pulse" />
        </div>
        
        <div className="container relative z-10 px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-accent">
              Vibe Coding & Full-Stack Development
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/60">
              Relaxing Tech.
              <br />
              Advanced Functionality.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              Crafting interactive websites and specialized automation tools for small to medium businesses. 
              Functionality over form, with just enough bling.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-foreground text-background font-medium text-lg hover:opacity-90 transition-all hover:scale-105"
              >
                Start Your MVP
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-white/10 bg-white/5 font-medium text-lg hover:bg-white/10 transition-all"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="container px-4 mx-auto">
        <motion.div {...fadeIn} className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Services</h2>
          <p className="text-muted-foreground max-w-2xl">
            Beyond static pages. We build dynamic, data-driven applications that integrate seamlessly with your business workflows.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          <ServiceCard 
            icon={<Globe className="w-8 h-8 text-accent" />}
            title="Interactive Websites"
            description="Modern, responsive web applications built with Next.js and React. Focusing on user experience and performance."
          />
          <ServiceCard 
            icon={<Brain className="w-8 h-8 text-accent" />}
            title="AI Integrations"
            description="Leverage the power of AI to generate content, analyze data, or provide intelligent customer support."
          />
          <ServiceCard 
            icon={<Database className="w-8 h-8 text-accent" />}
            title="Data & Payments"
            description="Seamless integration with databases and payment gateways like Stripe for e-commerce and SaaS solutions."
          />
          <ServiceCard 
            icon={<Monitor className="w-8 h-8 text-accent" />}
            title="Desktop Applications"
            description="Cross-platform desktop tools for specialized niche workflows and automation."
          />
          <ServiceCard 
            icon={<Code className="w-8 h-8 text-accent" />}
            title="Automation Tools"
            description="Custom scripts and bots to automate repetitive tasks and increase operational efficiency."
          />
          <ServiceCard 
            icon={<CreditCard className="w-8 h-8 text-accent" />}
            title="SaaS Development"
            description="End-to-end development of Software as a Service platforms with subscription management."
          />
        </div>
      </section>

      {/* Products Section (Placeholder) */}
      <section id="products" className="container px-4 mx-auto">
        <motion.div {...fadeIn} className="p-12 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent text-center">
          <h2 className="text-3xl font-bold mb-4">Product Showcase</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            A collection of standard websites, advanced applications, and niche tools will be showcased here.
            Stay tuned for our product launch.
          </p>
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto opacity-50 pointer-events-none blur-[2px]">
            {/* Placeholders for visual effect */}
            <div className="aspect-video bg-white/5 rounded-xl border border-white/10" />
            <div className="aspect-video bg-white/5 rounded-xl border border-white/10" />
          </div>
        </motion.div>
      </section>

      {/* Pricing / Business Model */}
      <section id="pricing" className="container px-4 mx-auto">
        <motion.div {...fadeIn} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Flexible Engagement</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Whether you need a one-off project or a long-term partner, we have a model that fits.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <PricingCard
            title="MVP Development"
            price="Free Initial Build"
            description="We build your Minimum Viable Product for free to demonstrate value."
            features={[
              "Rapid Prototyping",
              "Core Functionality",
              "Basic UI/UX",
              "Payment on Backend Deployment"
            ]}
          />
          <PricingCard
            title="Production Release"
            price="Fixed or SaaS"
            description="Once you're happy with the MVP, we finalize the pricing model."
            features={[
              "Full Polish & Optimization",
              "Custom Integrations",
              "Ongoing Support",
              "Scalable Infrastructure",
              "Fixed Price or Monthly Subscription"
            ]}
            highlight
          />
        </div>
      </section>

      {/* Call to Action */}
      <section id="contact" className="container px-4 mx-auto mb-12">
        <motion.div 
          {...fadeIn}
          className="rounded-3xl bg-foreground text-background p-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Vibe Code?</h2>
          <p className="text-lg opacity-80 max-w-2xl mx-auto mb-10">
            Let's discuss your project. Whether it's a simple website or a complex automation tool,
            we're ready to bring it to life.
          </p>
          <a
            href="mailto:hello@2kmj.com"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-background text-foreground font-medium text-lg hover:opacity-90 transition-all"
          >
            Get in Touch
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </motion.div>
      </section>
    </div>
  );
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <motion.div 
      {...fadeIn}
      className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
    >
      <div className="mb-4 p-3 bg-white/5 rounded-xl inline-block">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}

function PricingCard({ title, price, description, features, highlight = false }: { title: string, price: string, description: string, features: string[], highlight?: boolean }) {
  return (
    <motion.div 
      {...fadeIn}
      className={`p-8 rounded-3xl border ${highlight ? 'border-accent bg-accent/5' : 'border-white/10 bg-white/5'} relative overflow-hidden`}
    >
      {highlight && (
        <div className="absolute top-0 right-0 p-4">
          <span className="bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">RECOMMENDED</span>
        </div>
      )}
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <div className="text-3xl font-bold text-accent mb-4">{price}</div>
      <p className="text-muted-foreground mb-8">{description}</p>
      <ul className="space-y-4">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
