'use client'

import { useGSAP } from '../hooks/useGSAP'
import Header from '../components/Header'

export default function Home() {
  const containerRef = useGSAP()

  return (
    <div ref={containerRef} className="min-h-screen bg-background text-foreground">
      <Header />
      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden bg-background pt-20 pb-12">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-secondary/30 pointer-events-none"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-40 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/3 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="container mx-auto px-4 py-12 md:py-20 relative">
          <div className="max-w-6xl mx-auto">
            {/* Main Hero Content */}
            <div className="text-center mb-16">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-sm font-medium mb-6">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                Attention: Real Estate Promoters/ Agents
              </div>
              
              {/* Main Headline */}
              <h1 className="hero-title font-heading text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight max-w-4xl mx-auto">
                This New Meta Marketing System Brings Builders & Agents <span className="text-accent">Hot Buyer Leads</span> Every Day
              </h1>
              
              {/* Subheadline */}
              <p className="hero-subtitle text-lg md:text-xl mb-8 text-muted max-w-3xl mx-auto font-body leading-relaxed">
                → Flooded Site Visit Appointments → Faster Sales… Without Cold Calls or Wasting Money on Traditional Ads
              </p>
              <p className="hero-subtitle text-md md:text-lg mb-8 text-muted max-w-3xl mx-auto font-body leading-relaxed">
                If you want to wake up to daily hot buyer leads, a calendar packed with property site visits, and finally stop wondering when your next villa or plot will sell… this may be the most important page you'll ever read.
              </p>
              
              {/* Key Benefits */}
              <div className="flex flex-wrap justify-center gap-4 mb-10 text-sm md:text-base">
                <div className="flex items-center bg-secondary/50 px-4 py-2 rounded-lg border border-border/50">
                  <svg className="w-5 h-5 text-accent mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Direct Phone Calls
                </div>
                <div className="flex items-center bg-secondary/50 px-4 py-2 rounded-lg border border-border/50">
                  <svg className="w-5 h-5 text-accent mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Drone + DSLR Shoots
                </div>
                <div className="flex items-center bg-secondary/50 px-4 py-2 rounded-lg border border-border/50">
                  <svg className="w-5 h-5 text-accent mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  ROI-Focused Campaigns
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <button className="group bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-3">
                  <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z"/>
                  </svg>
                  Call Now to Get Hot Buyer Leads
                </button>
                <p className="text-sm text-muted text-center mt-2">(Who's got money, ready to invest & show up for your property visit)</p>
                {/* <button className="group border-2 border-accent text-accent hover:bg-accent hover:text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-300 flex items-center gap-3">
                  <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"/>
                  </svg>
                  Watch Demo
                </button> */}
              </div>
              
              {/* Trust Indicators */}
              <div className="text-center">
                <div className="bg-secondary/80 border border-border rounded-2xl p-6 md:p-8 max-w-4xl mx-auto backdrop-blur-sm">
                  <p className="text-base md:text-lg font-semibold text-foreground mb-6">
                    Trusted by 50+ real estate businesses across Tamil Nadu
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    <div className="group text-center">
                      <div className="mb-2">
                        <span className="text-3xl md:text-4xl font-bold text-accent block leading-tight">500+</span>
                      </div>
                      <p className="text-sm md:text-base font-medium text-foreground">Properties Sold</p>
                      <div className="w-12 h-1 bg-accent/30 rounded-full mx-auto mt-2 group-hover:bg-accent transition-colors"></div>
                    </div>
                    
                    <div className="group text-center">
                      <div className="mb-2">
                        <span className="text-3xl md:text-4xl font-bold text-accent block leading-tight">4 Years</span>
                      </div>
                      <p className="text-sm md:text-base font-medium text-foreground">Experience</p>
                      <div className="w-12 h-1 bg-accent/30 rounded-full mx-auto mt-2 group-hover:bg-accent transition-colors"></div>
                    </div>
                    
                    <div className="group text-center">
                      <div className="mb-2">
                        <span className="text-3xl md:text-4xl font-bold text-accent block leading-tight">24/7</span>
                      </div>
                      <p className="text-sm md:text-base font-medium text-foreground">Support</p>
                      <div className="w-12 h-1 bg-accent/30 rounded-full mx-auto mt-2 group-hover:bg-accent transition-colors"></div>
                    </div>
                  </div>
                  
                  <div className="flex justify-center items-center mt-6 gap-2">
                    <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-medium text-muted">Verified Track Record</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Video Demo Section */}
            <div className="relative">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8">
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-3">
                    Watch Our Process in Action
                  </h3>
                  <p className="text-muted font-body">
                    See how we generate hot buyer leads using drone shoots and targeted Meta campaigns
                  </p>
                </div>
                
                <div className="relative group cursor-pointer">
                  <div className="aspect-video bg-gradient-to-br from-secondary/80 to-secondary border border-video-border rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 group-hover:shadow-3xl">
                    <div className="w-full h-full flex items-center justify-center relative bg-gradient-to-br from-background/50 to-secondary/50 backdrop-blur-sm">
                      {/* Background Pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-10 left-10 w-32 h-32 bg-accent rounded-full blur-2xl"></div>
                        <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent rounded-full blur-3xl"></div>
                      </div>
                      
                      {/* Play Button */}
                      <div className="relative z-10 text-center group-hover:scale-105 transition-transform duration-300">
                        <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-4 bg-accent hover:bg-accent-dark rounded-full flex items-center justify-center shadow-lg transition-all duration-300 group-hover:shadow-xl">
                          <svg className="w-8 h-8 md:w-10 md:h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                        <div className="text-foreground">
                          <p className="text-lg md:text-xl font-semibold mb-1">Demo Video</p>
                          <p className="text-sm text-muted">3 min overview • Coming soon</p>
                        </div>
                      </div>
                      
                      {/* Video Stats Overlay */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="bg-background/90 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center justify-between text-sm">
                          <span className="text-foreground font-medium">Live Results Preview</span>
                          <div className="flex items-center gap-4 text-muted">
                            <span>👁 2.5K views</span>
                            <span>📞 150+ leads generated</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Video Description */}
                  <div className="mt-6 text-center">
                    <div className="inline-flex items-center gap-2 text-muted text-sm">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                      </svg>
                      Average 15-25 qualified leads per campaign
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section - Mythereyan */}
      <section className="animate-section py-16 md:py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6 text-foreground">
                From Serving Every Industry… To Going All-In On Real Estate
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg mb-6 font-body leading-relaxed text-foreground">
                  My name is <span className="font-semibold text-accent">Mythereyan</span>.
                </p>
                <p className="text-lg mb-6 font-body leading-relaxed">
                  Since 2013, I've been running a marketing agency — restaurants, jewellery, e-commerce, real estate… you name it.
                </p>
                <p className="text-lg mb-6 font-body leading-relaxed">
                  But one thing stood out 👇
                </p>
                <p className="text-lg mb-6 font-body leading-relaxed">
                  In most industries, ROI was fuzzy. Owners never knew if their ad spend was really working.
                </p>
                <p className="text-lg mb-6 font-body leading-relaxed text-foreground font-semibold">
                  But Real estate was different.
                </p>
                <p className="text-lg mb-6 font-body leading-relaxed">
                  If I ran one campaign → spent ₹35,000 on ads → sold a ₹35 Lakh property.
                </p>
                <p className="text-lg mb-6 font-body leading-relaxed text-accent font-semibold">
                  That's a 100x return on ad spend. No other industry comes close.
                </p>
              </div>
              <div className="bg-secondary border border-border p-8 rounded-xl text-center">
                <div className="w-32 h-32 mx-auto mb-4 bg-accent/20 rounded-full flex items-center justify-center">
                  <span className="text-4xl">👨‍💼</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Mythereyan</h3>
                <p className="text-sm text-muted mb-4">Real Estate Marketing Specialist</p>
                <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
                  <p className="text-sm font-body text-foreground">
                    "Every rupee you spend on Meta ads done right will yield more ROI than any other ad medium."
                  </p>
                </div>
              </div>
            </div>
            <div className="text-center mt-12">
              <div className="bg-accent/10 border-2 border-accent/30 p-6 rounded-xl max-w-3xl mx-auto">
                <p className="text-lg font-body leading-relaxed text-foreground mb-4">
                  After Covid, I shut down work in every other sector and went all-in on real estate.
                </p>
                <p className="text-xl font-semibold text-foreground">
                  Now my mission is simple:
                </p>
                <p className="text-lg font-body leading-relaxed text-accent mt-4">
                  👉 To help promoters, developers, and agents flood their projects with Ready-to-Invest Buyer Leads → Daily Site Visit Appointments → More Sales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section - Matching Website Design */}
      <section className="animate-section py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-sm font-medium mb-6">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                The Painful Truth About Traditional Marketing
              </div>
              <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6 text-foreground">
                Why Old Methods <span className="text-accent">Fail</span>
              </h2>
              <p className="text-xl text-muted max-w-3xl mx-auto font-body leading-relaxed">
                You've tried everything. Yet leads remain cold, site visits are rare, and sales are unpredictable.
              </p>
            </div>

            {/* VS Comparison Layout */}
            <div className="grid lg:grid-cols-3 gap-8 items-center mb-16">
              {/* Traditional Methods - Left Side */}
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 mx-auto bg-secondary border border-border rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-muted" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Old Methods</h3>
                  <p className="text-muted font-semibold">Outdated & Ineffective</p>
                </div>
                
                {/* Traditional Method Cards */}
                <div className="space-y-4">
                  <div className="bg-secondary border border-border p-6 rounded-xl hover:border-accent/50 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-background rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">📰</span>
                      </div>
                      <h4 className="font-semibold text-foreground">Newspaper Ads</h4>
                    </div>
                    <p className="text-sm text-muted pl-13">Expensive, no targeting, declining readership</p>
                    <div className="mt-3 pl-13">
                      <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded-full">❌ Wasteful Spending</span>
                    </div>
                  </div>
                  
                  <div className="bg-secondary border border-border p-6 rounded-xl hover:border-accent/50 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-background rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">🎯</span>
                      </div>
                      <h4 className="font-semibold text-foreground">Flex & Banners</h4>
                    </div>
                    <p className="text-sm text-muted pl-13">Generic messaging, no engagement tracking</p>
                    <div className="mt-3 pl-13">
                      <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded-full">❌ Zero Analytics</span>
                    </div>
                  </div>
                  
                  <div className="bg-secondary border border-border p-6 rounded-xl hover:border-accent/50 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-background rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">🖥</span>
                      </div>
                      <h4 className="font-semibold text-foreground">"Cheap Lead" Agencies</h4>
                    </div>
                    <p className="text-sm text-muted pl-13">Low quality leads, no purchase intent</p>
                    <div className="mt-3 pl-13">
                      <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded-full">❌ Junk Quality</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* VS Divider - Center */}
              <div className="flex flex-col items-center justify-center">
                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mb-4 shadow-lg">
                  <span className="text-2xl font-bold text-white">VS</span>
                </div>
                <div className="h-32 w-px bg-accent/40"></div>
              </div>

              {/* Our Solution - Right Side */}
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 mx-auto bg-accent/20 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Our System</h3>
                  <p className="text-accent font-semibold">ROI-Focused & Proven</p>
                </div>
                
                {/* Solution Highlight */}
                <div className="bg-accent/10 border-2 border-accent/30 p-8 rounded-xl">
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-4">🚀</div>
                    <h4 className="text-xl font-bold text-foreground mb-2">We're Here to Change That</h4>
                    <p className="text-accent font-semibold mb-4">ROI-focused Done-for-You System</p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm">
                      <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                      <span className="text-foreground">Precise audience targeting</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                      <span className="text-foreground">Complete ROI transparency</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                      <span className="text-foreground">Fast results → quality site visits</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Problems - Bottom Section */}
            <div className="bg-secondary border border-border rounded-xl p-8 md:p-12">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  The <span className="text-accent">Painful Reality</span> of Traditional Methods
                </h3>
                <p className="text-muted max-w-2xl mx-auto">
                  Why real estate promoters/agents are stuck with unsold inventory and EMI pressure
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-6 bg-background rounded-xl border border-border">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">❌</span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">No Clear Targeting</h4>
                  <p className="text-sm text-muted">Shooting in the dark with no audience precision</p>
                </div>
                
                <div className="text-center p-6 bg-background rounded-xl border border-border">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📉</span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">ROI Track Panna Mudiyadhu</h4>
                  <p className="text-sm text-muted">No way to measure return on investment</p>
                </div>
                
                <div className="text-center p-6 bg-background rounded-xl border border-border">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🐌</span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Slow Results</h4>
                  <p className="text-sm text-muted">Very few site visits → rare sales</p>
                </div>
              </div>
              
              {/* Pain Quote */}
              <div className="bg-accent/10 border border-accent/30 rounded-xl p-8 text-center">
                <div className="text-4xl mb-4">😰</div>
                <blockquote className="text-lg md:text-xl font-body leading-relaxed text-foreground mb-4">
                  That's why real estate promoters/agents are stuck with unsold inventory, EMI pressure, and thoughts like:
                </blockquote>
                <p className="text-xl md:text-2xl font-bold text-accent italic">
                  "Indha business ah thodaranumaaa ?"
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-12">
              <p className="text-lg text-muted mb-6">
                Don't let outdated methods drain your resources any longer
              </p>
              <button className="bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                📞 See Our Proven System Instead
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* New Method Section */}
      <section className="animate-section py-16 md:py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6 text-foreground">
                How Our System Works
              </h2>
              <p className="text-lg font-body leading-relaxed text-muted">
                We've built a ROI-focused Done for you system that does all the heavy lifting for you.
              </p>
            </div>
            <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
              <div className="space-y-6">
                <div className="process-step bg-background border border-border p-6 rounded-xl flex items-start gap-4">
                  <div className="bg-accent text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold flex-shrink-0">1</div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold mb-2 text-foreground">On-Site Shoot</h3>
                    <p className="font-body text-muted">✅ Drone + DSLR visuals → grabs buyer attention instantly.</p>
                  </div>
                </div>
                <div className="process-step bg-background border border-border p-6 rounded-xl flex items-start gap-4">
                  <div className="bg-accent text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold flex-shrink-0">2</div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold mb-2 text-foreground">Persuasion-Based Video Ads</h3>
                    <p className="font-body text-muted">✅ Scripts designed to trigger "Call Now" action.</p>
                  </div>
                </div>
                <div className="process-step bg-background border border-border p-6 rounded-xl flex items-start gap-4">
                  <div className="bg-accent text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold flex-shrink-0">3</div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold mb-2 text-foreground">Targeted Meta Campaigns</h3>
                    <p className="font-body text-muted">✅ FB + Instagram ads built only for serious buyers.</p>
                  </div>
                </div>
                <div className="process-step bg-background border border-border p-6 rounded-xl flex items-start gap-4">
                  <div className="bg-accent text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold flex-shrink-0">4</div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold mb-2 text-foreground">Direct Call Enquiries</h3>
                    <p className="font-body text-muted">✅ Buyers call you → fast site visits → faster closures.</p>
                  </div>
                </div>
                <div className="process-step bg-background border border-border p-6 rounded-xl flex items-start gap-4">
                  <div className="bg-accent text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold flex-shrink-0">5</div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold mb-2 text-foreground">Daily Optimization</h3>
                    <p className="font-body text-muted">✅ We refine creatives, targeting & budgets → so leads keep flowing.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-12">
              <button className="bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 hover:cursor-pointer">
                📞 Call Now to Get Hot Buyer Leads
              </button>
              <p className="text-sm text-muted mt-2">(Who's got money, ready to invest & show up for your property visit)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Proof & Case Studies Section */}
      <section id="results" className="stats-section py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6 text-foreground">
                Proof & Case Studies
              </h2>
              <p className="text-lg font-body text-muted">
                We don't just talk about leads. We deliver them.
              </p>
            </div>
            
            {/* Case Studies */}
            <div className="space-y-8 mb-12">
              {/* Case Study 1 */}
              <div className="case-study bg-secondary border border-border p-8 rounded-xl">
                <div className="grid md:grid-cols-3 gap-6 items-center">
                  <div className="bg-background p-4 rounded-lg text-center">
                    <div className="text-2xl mb-2">📈</div>
                    <div className="text-sm text-muted">BEFORE</div>
                    <div className="text-lg font-semibold text-foreground">Dead Enquiries</div>
                  </div>
                  <div className="text-center">
                    <div className="text-accent text-4xl font-bold">→</div>
                  </div>
                  <div className="bg-background p-4 rounded-lg text-center">
                    <div className="text-2xl mb-2">🏆</div>
                    <div className="text-sm text-muted">RESULT</div>
                    <div className="text-lg font-semibold text-foreground">15 Site Visits in 3 Weeks</div>
                  </div>
                </div>
                <div className="mt-6">
                  <h3 className="font-heading text-xl font-semibold mb-3 text-foreground">Case Study 1: Dead Enquiries → 15 Site Visits in 3 Weeks</h3>
                  <div className="space-y-2 font-body text-sm">
                    <p>➡ <span className="font-semibold">Problem:</span> Banner ads, no consistent leads.</p>
                    <p>➡ <span className="font-semibold">Solution:</span> Targeted Meta campaigns.</p>
                    <p>➡ <span className="font-semibold text-accent">Result:</span> 15 booked site visits, 3 villas sold.</p>
                  </div>
                </div>
              </div>
              
              {/* Case Study 2 */}
              <div className="case-study bg-secondary border border-border p-8 rounded-xl">
                <div className="grid md:grid-cols-3 gap-6 items-center">
                  <div className="bg-background p-4 rounded-lg text-center">
                    <div className="text-2xl mb-2">💰</div>
                    <div className="text-sm text-muted">INVESTMENT</div>
                    <div className="text-lg font-semibold text-foreground">₹35K ads</div>
                  </div>
                  <div className="text-center">
                    <div className="text-accent text-4xl font-bold">→</div>
                  </div>
                  <div className="bg-background p-4 rounded-lg text-center">
                    <div className="text-2xl mb-2">🎯</div>
                    <div className="text-sm text-muted">ROI</div>
                    <div className="text-lg font-semibold text-accent">₹35 Lakh plot sold</div>
                  </div>
                </div>
                <div className="mt-6">
                  <h3 className="font-heading text-xl font-semibold mb-3 text-foreground">Case Study 2: 100x ROI on Plot Launch</h3>
                  <div className="space-y-2 font-body text-sm">
                    <p>➡ <span className="font-semibold">Problem:</span> Slow sales, no predictability.</p>
                    <p>➡ <span className="font-semibold">Solution:</span> Video + Meta funnel.</p>
                    <p>➡ <span className="font-semibold text-accent">Result:</span> ₹35K ads → ₹35 Lakh plot sold.</p>
                  </div>
                </div>
              </div>
              
              {/* Case Study 3 */}
              <div className="case-study bg-secondary border border-border p-8 rounded-xl">
                <div className="grid md:grid-cols-3 gap-6 items-center">
                  <div className="bg-background p-4 rounded-lg text-center">
                    <div className="text-2xl mb-2">😓</div>
                    <div className="text-sm text-muted">BEFORE</div>
                    <div className="text-lg font-semibold text-foreground">Cold Calling</div>
                  </div>
                  <div className="text-center">
                    <div className="text-accent text-4xl font-bold">→</div>
                  </div>
                  <div className="bg-background p-4 rounded-lg text-center">
                    <div className="text-2xl mb-2">📞</div>
                    <div className="text-sm text-muted">NOW</div>
                    <div className="text-lg font-semibold text-accent">Daily Hot Leads</div>
                  </div>
                </div>
                <div className="mt-6">
                  <h3 className="font-heading text-xl font-semibold mb-3 text-foreground">Case Study 3: Consistent Hot Leads → No More Cold Calling</h3>
                  <div className="space-y-2 font-body text-sm">
                    <p>➡ <span className="font-semibold">Problem:</span> Agent wasted hours chasing junk leads.</p>
                    <p>➡ <span className="font-semibold">Solution:</span> Our lead filtering system.</p>
                    <p>➡ <span className="font-semibold text-accent">Result:</span> Daily hot buyer calls, ready for site visits.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-accent/10 border-2 border-accent/30 p-8 rounded-xl text-center">
              <p className="text-xl font-body leading-relaxed mb-4 text-foreground font-semibold">
                "Our clients don't chase buyers anymore. Buyers chase them."
              </p>
              <button className="bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 hover:cursor-pointer">
                📞 Call Now to Get Hot Buyer Leads
              </button>
              <p className="text-sm text-muted mt-2">(Who's got money, ready to invest & show up for your property visit)</p>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get - Offer Stack Section */}
      <section id="process" className="animate-section py-16 md:py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-sm font-medium mb-6">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" clipRule="evenodd" />
                </svg>
                Complete Service Package
              </div>
              <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6 text-foreground">
                What You Get <span className="text-accent">(Offer Stack)</span>
              </h2>
              <p className="text-lg font-body leading-relaxed text-muted max-w-3xl mx-auto">
                When you work with us, you don't just "run ads."
              </p>
              <p className="text-xl font-body leading-relaxed text-foreground font-semibold mt-4">
                You get a complete buyer-generation machine 👇
              </p>
            </div>

            {/* Offer Stack Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {/* Offer Item 1 */}
              <div className="offer-item bg-background border border-border p-8 rounded-xl hover:border-accent/50 transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mr-4 group-hover:bg-accent/30 transition-colors">
                    <span className="text-2xl">📸</span>
                  </div>
                  <div className="text-accent font-bold text-lg">01</div>
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3 text-foreground group-hover:text-accent transition-colors">
                  On-site Shoot (Drone + DSLR)
                </h3>
                <p className="font-body text-muted leading-relaxed">
                  High-clarity visuals that demand attention and showcase your property's best angles.
                </p>
                <div className="mt-4 pt-4 border-t border-border/50">
                  <div className="flex items-center text-sm text-accent">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Professional equipment included
                  </div>
                </div>
              </div>

              {/* Offer Item 2 */}
              <div className="offer-item bg-background border border-border p-8 rounded-xl hover:border-accent/50 transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mr-4 group-hover:bg-accent/30 transition-colors">
                    <span className="text-2xl">🎬</span>
                  </div>
                  <div className="text-accent font-bold text-lg">02</div>
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3 text-foreground group-hover:text-accent transition-colors">
                  One Persuasion Ad Video
                </h3>
                <p className="font-body text-muted leading-relaxed">
                  Script + edit + cutdowns for WhatsApp/Reels that convert viewers into callers.
                </p>
                <div className="mt-4 pt-4 border-t border-border/50">
                  <div className="flex items-center text-sm text-accent">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Multiple format versions
                  </div>
                </div>
              </div>

              {/* Offer Item 3 */}
              <div className="offer-item bg-background border border-border p-8 rounded-xl hover:border-accent/50 transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mr-4 group-hover:bg-accent/30 transition-colors">
                    <span className="text-2xl">📅</span>
                  </div>
                  <div className="text-accent font-bold text-lg">03</div>
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3 text-foreground group-hover:text-accent transition-colors">
                  30-Day Campaign
                </h3>
                <p className="font-body text-muted leading-relaxed">
                  Complete setup, targeting, testing, and daily optimization for maximum ROI.
                </p>
                <div className="mt-4 pt-4 border-t border-border/50">
                  <div className="flex items-center text-sm text-accent">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Daily monitoring & tweaks
                  </div>
                </div>
              </div>

              {/* Offer Item 4 */}
              <div className="offer-item bg-background border border-border p-8 rounded-xl hover:border-accent/50 transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mr-4 group-hover:bg-accent/30 transition-colors">
                    <span className="text-2xl">📞</span>
                  </div>
                  <div className="text-accent font-bold text-lg">04</div>
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3 text-foreground group-hover:text-accent transition-colors">
                  Direct Buyer Calls
                </h3>
                <p className="font-body text-muted leading-relaxed">
                  Hot leads calling you directly, not ghosting forms or wasting your time.
                </p>
                <div className="mt-4 pt-4 border-t border-border/50">
                  <div className="flex items-center text-sm text-accent">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Pre-qualified prospects
                  </div>
                </div>
              </div>

              {/* Offer Item 5 */}
              <div className="offer-item bg-background border border-border p-8 rounded-xl hover:border-accent/50 transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mr-4 group-hover:bg-accent/30 transition-colors">
                    <span className="text-2xl">📊</span>
                  </div>
                  <div className="text-accent font-bold text-lg">05</div>
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3 text-foreground group-hover:text-accent transition-colors">
                  ROI-Driven System
                </h3>
                <p className="font-body text-muted leading-relaxed">
                  Designed to convert clicks → site visits → sales with full transparency.
                </p>
                <div className="mt-4 pt-4 border-t border-border/50">
                  <div className="flex items-center text-sm text-accent">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Complete tracking & reporting
                  </div>
                </div>
              </div>

              {/* Bonus Item */}
              <div className="offer-item bg-accent/10 border-2 border-accent/30 p-8 rounded-xl hover:border-accent/60 transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-accent text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  BONUS
                </div>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-accent/30 rounded-full flex items-center justify-center mr-4 group-hover:bg-accent/40 transition-colors">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <div className="text-accent font-bold text-lg">+</div>
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3 text-foreground group-hover:text-accent transition-colors">
                  Strategy Consultation
                </h3>
                <p className="font-body text-muted leading-relaxed">
                  Free 30-min strategy call to customize the approach for your specific market.
                </p>
                <div className="mt-4 pt-4 border-t border-accent/20">
                  <div className="flex items-center text-sm text-accent font-semibold">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Worth ₹5,000 - FREE
                  </div>
                </div>
              </div>
            </div>

            {/* Results Section */}
            <div className="bg-accent/10 border border-accent/30 rounded-2xl p-8 md:p-12 text-center mb-12">
              <div className="mb-8">
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
                  ⚡ The Result You Can Expect:
                </h3>
                <p className="text-muted max-w-2xl mx-auto">
                  Our complete system working together to flood your calendar with hot buyer appointments
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="group">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/30 transition-colors">
                    <span className="text-3xl">🔥</span>
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-2">Daily Hot Buyer Leads</h4>
                  <p className="text-sm text-muted">Qualified prospects calling you every single day</p>
                </div>
                
                <div className="group">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/30 transition-colors">
                    <span className="text-3xl">🌊</span>
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-2">Flooded Site Visits</h4>
                  <p className="text-sm text-muted">Your calendar packed with property viewing appointments</p>
                </div>
                
                <div className="group">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/30 transition-colors">
                    <span className="text-3xl">📈</span>
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-2">More Sales, Predictably</h4>
                  <p className="text-sm text-muted">Consistent closures from high-intent buyers</p>
                </div>
              </div>
            </div>

            {/* Quote Section */}
            <div className="bg-background border border-border rounded-xl p-8 text-center mb-12">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 3a1 1 0 000 2h8a1 1 0 100-2H6zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1zM2 15a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <blockquote className="text-xl md:text-2xl font-body leading-relaxed text-foreground font-semibold italic mb-4">
                "This isn't just ads. It's a complete buyer-generation machine — built for real estate promoters & agents like you."
              </blockquote>
              <div className="text-accent font-semibold">- Mythereyan, Real Estate Marketing Specialist</div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <button className="bg-accent hover:bg-accent-dark text-white font-bold px-10 py-5 rounded-xl text-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                📞 Call Now to Get Hot Buyer Leads
              </button>
              <p className="text-sm text-muted mt-3 max-w-md mx-auto">
                (Who's got money, ready to invest & show up for your property visit)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Straight Talk - No False Guarantees Section */}
      <section className="value-section animate-section py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6 text-foreground">
                Straight Talk (No False Guarantees)
              </h2>
            </div>
            <div className="space-y-8">
              <div className="bg-secondary border border-border p-8 rounded-xl">
                <h3 className="font-heading text-2xl font-semibold mb-4 text-foreground">Let's be real.</h3>
                <p className="text-lg font-body leading-relaxed mb-4">
                  Sales depend on property price, location, approvals.
                </p>
                <p className="text-lg font-body leading-relaxed mb-6">
                  That's something no one can guarantee.
                </p>
                <h3 className="font-heading text-xl font-semibold mb-4 text-accent">But here's what we assure 👇</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="assurance-card bg-accent/10 border border-accent/30 p-6 rounded-xl">
                  <h4 className="font-heading text-lg font-semibold mb-3 text-foreground flex items-start gap-2">
                    <span className="text-accent flex-shrink-0">✅</span>
                    Hot Buyer Leads Only
                  </h4>
                  <p className="font-body text-sm">Genuine, intent-first enquiries.</p>
                </div>
                <div className="assurance-card bg-accent/10 border border-accent/30 p-6 rounded-xl">
                  <h4 className="font-heading text-lg font-semibold mb-3 text-foreground flex items-start gap-2">
                    <span className="text-accent flex-shrink-0">✅</span>
                    Flooded Site Visit Opportunities
                  </h4>
                  <p className="font-body text-sm">Appointments that your sales team can close.</p>
                </div>
                <div className="assurance-card bg-accent/10 border border-accent/30 p-6 rounded-xl">
                  <h4 className="font-heading text-lg font-semibold mb-3 text-foreground flex items-start gap-2">
                    <span className="text-accent flex-shrink-0">✅</span>
                    Full Transparency
                  </h4>
                  <p className="font-body text-sm">Every rupee is tracked & optimized. No guesswork.</p>
                </div>
                <div className="assurance-card bg-accent/10 border border-accent/30 p-6 rounded-xl">
                  <h4 className="font-heading text-lg font-semibold mb-3 text-foreground flex items-start gap-2">
                    <span className="text-accent flex-shrink-0">✅</span>
                    Proven System
                  </h4>
                  <p className="font-body text-sm">Tested across 500+ projects in Tamil Nadu.</p>
                </div>
              </div>
              
              <div className="bg-accent/5 border-2 border-accent/20 p-8 rounded-xl text-center">
                <p className="text-xl font-body leading-relaxed text-foreground font-semibold italic mb-6">
                  "Sales depend on property price & location. Leads depend on us. And we'll get you the hottest leads your project can attract."
                </p>
                <button className="bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 hover:cursor-pointer">
                  📞 Call Now to Get Hot Buyer Leads
                </button>
                <p className="text-sm text-muted mt-2">(Who's got money, ready to invest & show up for your property visit)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Now - Urgency Section */}
      <section id="urgency" className="py-16 md:py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-12">
              <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6 text-foreground">
                Why Now
              </h2>
            </div>
            <div className="space-y-8">
              <div className="bg-background border border-border p-8 rounded-xl">
                <p className="text-lg font-body leading-relaxed mb-4">
                  We handle on-site shoots across Tamil Nadu.
                </p>
                <p className="text-lg font-body leading-relaxed mb-6 text-accent font-semibold">
                  But we can onboard only 10 clients per month (crew + editing slots are limited).
                </p>
                <p className="text-lg font-body leading-relaxed">
                  👉 If you're seeing this page, chances are there's still a slot open in your city.
                </p>
                <p className="text-lg font-body leading-relaxed text-foreground font-semibold mt-2">
                  But it won't last.
                </p>
              </div>
              
              <button className="bg-accent hover:bg-accent-dark text-white font-bold px-12 py-6 rounded-lg text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl">
                📞 Call Now to Get Hot Buyer Leads
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section animate-section py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6 text-foreground">
                FAQ (Objections Answered)
              </h2>
            </div>
            <div className="space-y-6">
              <div className="faq-item bg-secondary border border-border p-6 rounded-xl">
                <h3 className="font-heading text-lg font-semibold mb-3 text-accent">Q1: "First leads eppo varum?"</h3>
                <p className="font-body leading-relaxed">Usually calls start quickly after campaign launch. Depends on price & location.</p>
              </div>
              <div className="faq-item bg-secondary border border-border p-6 rounded-xl">
                <h3 className="font-heading text-lg font-semibold mb-3 text-accent">Q2: "En area la work aaguma?"</h3>
                <p className="font-body leading-relaxed">Yes. We travel TN full. Local angle creatives for your buyers.</p>
              </div>
              <div className="faq-item bg-secondary border border-border p-6 rounded-xl">
                <h3 className="font-heading text-lg font-semibold mb-3 text-accent">Q3: "Cheap leads kudukka mudiyadhaa?"</h3>
                <p className="font-body leading-relaxed">Cheap leads = no intent. We bring only Hot Buyer Leads.</p>
              </div>
              <div className="faq-item bg-secondary border border-border p-6 rounded-xl">
                <h3 className="font-heading text-lg font-semibold mb-3 text-accent">Q4: "Premium property work aaguma?"</h3>
                <p className="font-body leading-relaxed">Yes, if price & value story are clear. We target the right buyer audience.</p>
              </div>
              <div className="faq-item bg-secondary border border-border p-6 rounded-xl">
                <h3 className="font-heading text-lg font-semibold mb-3 text-accent">Q5: "Contract lock-in irukka?"</h3>
                <p className="font-body leading-relaxed">No. Month-to-month. Continue only if ROI makes sense.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="contact" className="animate-section py-16 md:py-24 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6 text-foreground">
              Next Step is Simple:
            </h2>
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-center gap-3 text-lg font-body">
                <span className="text-2xl">📞</span>
                <span>Call us. Confirm slot.</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-lg font-body">
                <span className="text-2xl">🎬</span>
                <span>We shoot → launch ads → calls start.</span>
              </div>
            </div>
            
            <div className="bg-red-900/20 border-2 border-red-500/50 p-6 rounded-xl mb-8">
              <p className="text-lg font-body text-foreground font-semibold">
                ⚡ Only 10 clients/month. Don't miss your city slot.
              </p>
            </div>
            
            <div className="space-y-4">
              <button className="animate-button bg-accent hover:bg-accent-dark text-white font-bold px-12 py-6 rounded-lg text-xl transition-all duration-300 shadow-2xl block w-full sm:w-auto mx-auto">
                <span className="inline-flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mr-2 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z"/>
                  </svg>
                  Call Now to Get Hot Buyer Leads
                </span>
              </button>
              <p className="text-sm text-muted font-body">(Who's got money, ready to invest & show up for your property visit)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-background border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted font-body">
            © 2025 Idhu Real Estate Lead. Tamil Nadu Coverage. ROI-Focused Approach.
          </p>
        </div>
      </footer>
    </div>
  );
}
