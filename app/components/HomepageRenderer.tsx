'use client'

import Link from 'next/link'
import Image from 'next/image'
import Header from './Header'
import HeroSection from './HeroSection'
import StatsSection from './StatsSection'
import ProjectsPreview from './ProjectsPreview'
import CTASection from './CTASection'
import ErrorBoundary from './ErrorBoundary'
import { DrupalHomepage } from '@/lib/types'
import { Wrench, Building2, Ruler, Shield, Clock, Award, MapPin, Phone, Mail } from 'lucide-react'

interface HomepageRendererProps {
  homepageContent: DrupalHomepage | null | undefined
}

const experiences = [
  { icon: Wrench, title: 'Expert Craftsmanship', description: 'Skilled tradespeople delivering precision in every detail of your project' },
  { icon: Building2, title: 'Commercial & Residential', description: 'Full-service construction for buildings of every scale and purpose' },
  { icon: Ruler, title: 'Design-Build Services', description: 'Seamless integration of design and construction under one roof' },
  { icon: Shield, title: 'Safety First', description: 'Industry-leading safety protocols with zero-incident commitment' },
  { icon: Clock, title: 'On-Time Delivery', description: 'Rigorous project management ensuring deadlines are always met' },
  { icon: Award, title: 'Award Winning', description: 'Recognized for excellence by the National Construction Association' },
]

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80&fit=crop', alt: 'Construction site aerial view' },
  { src: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80&fit=crop', alt: 'Heavy equipment at work' },
  { src: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80&fit=crop', alt: 'Completed building project' },
  { src: 'https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?w=600&q=80&fit=crop', alt: 'Construction team collaboration' },
]

export default function HomepageRenderer({ homepageContent }: HomepageRendererProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <ErrorBoundary>
        <HeroSection homepageContent={homepageContent} />
      </ErrorBoundary>

      <ErrorBoundary>
        <StatsSection homepageContent={homepageContent} />
      </ErrorBoundary>

      <ErrorBoundary>
        <ProjectsPreview />
      </ErrorBoundary>

      {/* Signature Experiences */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Why Choose Ironstone
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Decades of experience building structures that stand the test of time
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {experiences.map((exp) => {
              const IconComponent = exp.icon
              return (
                <div
                  key={exp.title}
                  className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 text-center group"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-primary-100 to-accent-100 mb-5 group-hover:from-primary-200 group-hover:to-accent-200 transition-colors">
                    <IconComponent className="w-7 h-7 text-primary-700" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{exp.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Our Work in Action
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From groundbreaking to ribbon cutting, see how we bring visions to life
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className="relative aspect-square rounded-xl overflow-hidden group"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  unoptimized
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <ErrorBoundary>
        <CTASection homepageContent={homepageContent} />
      </ErrorBoundary>

      {/* Rich 4-Column Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-primary-800 rounded-xl flex items-center justify-center">
                  <Wrench className="w-5 h-5 text-primary-400" />
                </div>
                <span className="font-display text-2xl font-bold text-white">Ironstone</span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Building excellence from foundation to finish. Over 25 years of trusted construction services for commercial and residential projects.
              </p>
              <div className="flex items-center space-x-2 text-gray-400">
                <MapPin className="w-4 h-4 text-primary-500 flex-shrink-0" />
                <span className="text-sm">1800 Builder Blvd, Houston, TX 77002</span>
              </div>
            </div>

            {/* Explore Column */}
            <div>
              <h4 className="font-display text-lg font-bold text-white mb-6 uppercase tracking-wide">Explore</h4>
              <ul className="space-y-3">
                <li><Link href="/projects" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">Our Projects</Link></li>
                <li><Link href="/services" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">Services</Link></li>
                <li><Link href="/team" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">Meet the Team</Link></li>
                <li><Link href="/testimonials" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">Client Testimonials</Link></li>
                <li><Link href="/about" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">About Us</Link></li>
              </ul>
            </div>

            {/* Services Column */}
            <div>
              <h4 className="font-display text-lg font-bold text-white mb-6 uppercase tracking-wide">Services</h4>
              <ul className="space-y-3">
                <li className="text-gray-400 text-sm">Commercial Construction</li>
                <li className="text-gray-400 text-sm">Residential Building</li>
                <li className="text-gray-400 text-sm">Renovations & Remodeling</li>
                <li className="text-gray-400 text-sm">Industrial Projects</li>
                <li className="text-gray-400 text-sm">Project Management</li>
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h4 className="font-display text-lg font-bold text-white mb-6 uppercase tracking-wide">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-primary-500 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">(713) 555-0198</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-primary-500 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">info@ironstoneconstruction.com</span>
                </li>
                <li className="flex items-start space-x-2 mt-4">
                  <Clock className="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5" />
                  <div className="text-gray-400 text-sm">
                    <p>Mon - Fri: 7:00 AM - 5:00 PM</p>
                    <p>Saturday: By Appointment</p>
                    <p>Sunday: Closed</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Ironstone Construction. All rights reserved.
            </p>
            <p className="text-gray-600 text-xs mt-2 md:mt-0">
              Building with integrity in Houston, Texas
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
