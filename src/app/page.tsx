"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code, Database, Brain, CreditCard, Monitor, Globe, CheckCircle2, Send, CheckCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

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
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <span className="inline-block text-sm font-medium">
              <span className="px-4 py-1.5 rounded-full bg-accent/20 text-accent">Vibe Coding</span>
              <span className="text-secondary ml-2">& Full-Stack Development</span>
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight leading-tight">
              <span className="bg-accent/20 px-2 rounded">Relaxing</span> Tech.
              <br />
              <span className="text-accent">Advanced</span>
              <br />
              <span className="text-accent">Functionality.</span>
            </h1>
            <p className="text-lg md:text-xl text-secondary max-w-xl leading-relaxed">
              Crafting interactive websites and specialized automation tools for small to medium businesses. 
              Functionality over form, with just enough bling.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-accent text-background font-medium text-lg hover:bg-accent/90 transition-all hover:scale-105"
              >
                Start Your MVP
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-secondary/30 bg-surface/50 font-medium text-lg hover:bg-surface transition-all"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop"
              alt="Cozy home office workspace"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="container px-4 mx-auto">
        <motion.div {...fadeIn} className="mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Core Services</h2>
          <p className="text-secondary max-w-2xl">
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
        <motion.div {...fadeIn} className="p-12 rounded-3xl border border-secondary/20 bg-surface/30 text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">Product Showcase</h2>
          <p className="text-secondary max-w-2xl mx-auto mb-8">
            A collection of standard websites, advanced applications, and niche tools will be showcased here.
            Stay tuned for our product launch.
          </p>
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto opacity-50 pointer-events-none blur-[2px]">
            {/* Placeholders for visual effect */}
            <div className="aspect-video bg-surface/50 rounded-xl border border-secondary/20" />
            <div className="aspect-video bg-surface/50 rounded-xl border border-secondary/20" />
          </div>
        </motion.div>
      </section>

      {/* Pricing / Business Model */}
      <section id="pricing" className="container px-4 mx-auto">
        <motion.div {...fadeIn} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Flexible Engagement</h2>
          <p className="text-secondary max-w-2xl mx-auto">
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
          className="rounded-3xl bg-accent/10 border border-accent/20 p-8 md:p-12"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Design your future with us!</h2>
            <p className="text-lg text-secondary max-w-2xl mx-auto">
              Let's discuss your project. Whether it's a simple website or a complex automation tool,
              we're ready to bring it to life.
            </p>
          </div>
          <ContactForm />
        </motion.div>
      </section>
    </div>
  );
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <motion.div 
      {...fadeIn}
      className="p-6 rounded-2xl border border-secondary/20 bg-surface/30 hover:bg-surface/50 transition-colors"
    >
      <div className="mb-4 p-3 bg-accent/10 rounded-xl inline-block">
        {icon}
      </div>
      <h3 className="text-xl font-serif font-bold mb-2">{title}</h3>
      <p className="text-secondary text-sm leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}

function PricingCard({ title, price, description, features, highlight = false }: { title: string, price: string, description: string, features: string[], highlight?: boolean }) {
  return (
    <motion.div 
      {...fadeIn}
      className={`p-8 rounded-3xl border ${highlight ? 'border-accent bg-accent/10' : 'border-secondary/20 bg-surface/30'} relative overflow-hidden`}
    >
      {highlight && (
        <div className="absolute top-0 right-0 p-4">
          <span className="bg-accent text-background text-xs font-bold px-3 py-1 rounded-full">RECOMMENDED</span>
        </div>
      )}
      <h3 className="text-2xl font-serif font-bold mb-2">{title}</h3>
      <div className="text-3xl font-serif font-bold text-accent mb-4">{price}</div>
      <p className="text-secondary mb-8">{description}</p>
      <ul className="space-y-4">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
            <span className="text-sm text-secondary">{feature}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // For static sites, use mailto link or a service like Formspree
      // Option 1: Use mailto (opens email client)
      const subject = encodeURIComponent(`New Contact Form: ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      window.location.href = `mailto:hello@2kmj.com?subject=${subject}&body=${body}`;
      
      // Option 2: If you want to use Formspree or similar service, uncomment below:
      // const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(formData),
      // });
      // if (!response.ok) throw new Error("Failed to send message");

      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-secondary mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-surface/50 border border-secondary/20 text-foreground placeholder:text-secondary/50 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-secondary mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-surface/50 border border-secondary/20 text-foreground placeholder:text-secondary/50 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
            placeholder="your@email.com"
          />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-secondary mb-2">
          Project Details
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 rounded-xl bg-surface/50 border border-secondary/20 text-foreground placeholder:text-secondary/50 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all resize-none"
          placeholder="Tell us about your project..."
        />
      </div>
      <div className="flex items-center justify-between">
        {submitStatus === "success" && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-accent text-sm"
          >
            <CheckCircle className="w-5 h-5" />
            <span>Message sent! We'll get back to you soon.</span>
          </motion.div>
        )}
        {submitStatus === "error" && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-red-400 text-sm"
          >
            Something went wrong. Please try again or email us directly.
          </motion.div>
        )}
        <button
          type="submit"
          disabled={isSubmitting}
          className="ml-auto inline-flex items-center justify-center px-8 py-3 rounded-full bg-accent text-background font-medium text-lg hover:bg-accent/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            "Sending..."
          ) : (
            <>
              Send Message
              <Send className="ml-2 w-5 h-5" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
