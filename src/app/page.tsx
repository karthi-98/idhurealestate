'use client'

import { useGSAP } from '../hooks/useGSAP'
import Header from '../components/Header'

export default function Home() {
  const containerRef = useGSAP()

  return (
    <div ref={containerRef} className="min-h-screen bg-background text-foreground">
      <Header />
      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden bg-background pt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-black to-secondary pointer-events-none"></div>
        <div className="container mx-auto px-4 py-16 md:py-24 relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="hero-title font-heading text-4xl md:text-6xl lg:text-5xl font-bold mb-6 leading-tight">
                Real Estate Promoters/ Agents/ Builders
              </h1>
              <div className="hero-subtitle text-xl md:text-2xl mb-8 text-muted max-w-4xl mx-auto font-body leading-relaxed">
                Site visit kondu varathu kashtama irukaa? New enquiries illa-nu stress aaguringalaa?
              </div>
              <div className="hero-description text-lg md:text-xl mb-12 font-body leading-relaxed max-w-5xl mx-auto">
                Naanga unga property-ku <span className="text-accent font-semibold">"Ready to Invest Buyer Leads"</span> & <span className="text-accent font-semibold">"Hot Buyer Leads"</span> kondu varrom — ads, scripts, video, ellamey done-for-you.
              </div>
            </div>
            
            {/* Centered Video Section */}
            <div className="video-holder flex justify-center mb-12">
              <div className="w-full max-w-2xl">
                <div className="relative">
                  <div className="aspect-video bg-secondary border-2 border-video-border rounded-xl p-4 shadow-2xl">
                    <div className="w-full h-full bg-black rounded-lg flex items-center justify-center relative overflow-hidden">
                      {/* Placeholder for video */}
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5"></div>
                      <div className="relative z-10 text-center">
                        <div className="w-20 h-20 mx-auto mb-4 bg-accent/20 rounded-full flex items-center justify-center">
                          <svg className="w-10 h-10 text-accent" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                        <p className="text-muted text-lg font-body">Video Coming Soon</p>
                        <p className="text-sm text-muted mt-2">See Our Process in Action</p>
                      </div>
                    </div>
                  </div>
                  {/* Video title */}
                  <div className="mt-6 text-center">
                    <h3 className="text-xl font-heading text-white">Watch How We Generate Hot Leads</h3>
                    <p className="text-base text-muted font-body mt-2">Drone shoots + Meta ads = Direct calls</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Centered CTA */}
            <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="animate-button bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:cursor-pointer">
                <span className="button-text">
                  <svg className="inline-block mr-2 w-6 h-6 align-text-bottom" fill="white" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z"/>
                  </svg>
                  Call Now to Get Hot Buyer Leads
                </span>
              </button>
              <div className="text-sm text-muted">Free consultation available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Promise/Clear Outcome Section */}
      <section className="animate-section py-16 md:py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6 text-white">
                Clear Promise & Outcome
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="font-heading text-2xl md:text-3xl font-semibold mb-4 text-white">Goal:</h3>
                <p className="text-lg mb-6 font-body leading-relaxed">
                  Ungaloda DTCP plots & ready-to-move villas-ku quality enquiries → site visits → sales
                </p>
                <h3 className="font-heading text-2xl md:text-3xl font-semibold mb-4 text-white">How:</h3>
                <p className="text-lg font-body leading-relaxed">
                  On-site Drone + DSLR shoot + persuasion-based Meta video ads → direct call-now enquiries to you.
                </p>
              </div>
              <div className="bg-secondary border border-border p-8 rounded-xl">
                <div className="text-center">
                  <div className="text-4xl md:text-6xl font-bold text-accent mb-2">500+</div>
                  <div className="text-lg text-foreground font-body">Properties Sold</div>
                  <div className="text-sm text-muted mt-2">Across Tamil Nadu</div>
                </div>
              </div>
            </div>
            <div className="text-center mt-12">
              <button className="animate-button bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:cursor-pointer">
                <span className="inline-flex items-center">
                  <svg
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
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="problem-section animate-section py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6 text-white">
                The Problem with Old Methods
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="problem-card bg-secondary border border-border p-6 rounded-xl">
                  <h3 className="font-heading text-xl font-semibold mb-3 text-white">❌ Old Methods</h3>
                  <p className="font-body leading-relaxed">
                    Newspaper, flex, banners, portals, "cheap leads" agencies = eyeballs irukkum, intent suthamaa irukaadhu
                  </p>
                </div>
                <div className="problem-card bg-secondary border border-border p-6 rounded-xl">
                  <h3 className="font-heading text-xl font-semibold mb-3 text-white">📉 Problems:</h3>
                  <ul className="space-y-2 font-body">
                    <li>• Targeting clear ah irukaadhu</li>
                    <li>• ROI kandupidika mudiyadhu</li>
                    <li>• Result slow, site visits romba kamiyaaa dhaa varum</li>
                    <li>• Sales romba rare ah kedaika vaaipu iruku</li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="problem-card bg-secondary border-2 border-accent p-8 rounded-xl">
                  <h3 className="font-heading text-2xl font-semibold mb-4 text-white">✅ Our Approach</h3>
                  <p className="text-lg font-body leading-relaxed mb-4">
                    <span className="font-semibold text-white">ROI Focused:</span> Neenga enga kita invest panra 35K la atleast 2-3 properties average ah sale nadakum
                  </p>
                  <p className="text-sm text-muted font-body">
                    Numbers depend upon property pricing and location
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain/Empathy Section */}
      <section className="animate-section py-16 md:py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-8 text-white">
              We Understand Your Pain
            </h2>
            <div className="space-y-6 mb-12">
              <div className="text-lg md:text-xl font-body leading-relaxed text-muted">
                ❌ EMI pressure<br/>
                ❌ Unsold inventory, price reduce panni loss-la sell panra ennatha laam inaikae vidunga<br/>
                ❌ "Indha business ah vitae pora thoughts?"
              </div>
            </div>
            <div className="bg-white/10 border border-border p-4 rounded-xl mb-8">
              <p className="text-xl md:text-xl font-body leading-relaxed text-white">
                Intha kavalai ellam vidunga. Namma system sales-ku thevaiyana hot enquiries kondu varum.
              </p>
            </div>
            <button className="bg-white hover:bg-white-dark text-black font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 hover:cursor-pointer">
              📞 Call Now to Get Hot Buyer Leads
            </button>
          </div>
        </div>
      </section>

      {/* Proof of Results Section */}
      <section id="results" className="stats-section py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6 text-white">
                Why Listen to Us?
              </h2>
            </div>
            <div className="card-group grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div className="stat-card animate-card bg-secondary border border-border p-6 rounded-xl text-center">
                <div className="stat-number text-3xl font-bold text-accent mb-2">500+</div>
                <div className="text-md font-body">Properties across Tamil Nadu</div>
                <div className="text-sm text-muted mt-1">(plots, DTCP plots, villas)</div>
              </div>
              <div className="stat-card animate-card bg-secondary border border-border p-6 rounded-xl text-center">
                <div className="stat-number text-3xl font-bold text-accent mb-2">4</div>
                <div className="text-md font-body">Years deep real estate lead gen</div>
                <div className="text-sm text-muted mt-1">Enna sollanum, eppadi kaamikkanum nu theriyum</div>
              </div>
              <div className="stat-card animate-card bg-secondary border border-border p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-accent mb-2">📹</div>
                <div className="text-md font-body">Video-first Meta ads</div>
                <div className="text-sm text-muted mt-1">Call-now enquiries</div>
              </div>
              <div className="stat-card animate-card bg-secondary border border-border p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-accent mb-2">24/7</div>
                <div className="text-md font-body">Responsiveness</div>
                <div className="text-sm text-muted mt-1">Phone-la iruppom, fix pannuvom</div>
              </div>
            </div>
            <div className="bg-white/10 border border-primary/20 p-8 rounded-xl text-center">
              <p className="text-xl font-body leading-relaxed mb-4">
                <span className="font-semibold text-white">Real-estate only.</span> Generalist illai. Ungaloda win = engaloda win.
              </p>
              <p className="text-md text-muted font-body">
                3 naal 0 leads irundhaalum, 3 naal 100 leads irundhaalum — phone-la iruppom, fix pannuvom, scale pannuvom.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* New Method/Process Section */}
      <section id="process" className="process-section animate-section py-16 md:py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
                Our Process to Success
              </h2>
              <p className="text-xl font-body leading-relaxed text-white">
                Namma focus elaamae Return on your Investment dhaan
              </p>
            </div>
            <div className="card-group grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <div className="process-step animate-card bg-secondary p-6 rounded-xl border border-border">
                <div className="text-2xl mb-4">🚁</div>
                <h3 className="font-heading text-xl font-semibold mb-3 text-white">1. We Travel to Your Site</h3>
                <p className="font-body text-md leading-relaxed text-gray-300">Tamil Nadu full coverage</p>
              </div>
              <div className="process-step animate-card bg-secondary p-6 rounded-xl border border-border">
                <div className="text-2xl mb-4">📸</div>
                <h3 className="font-heading text-xl font-semibold mb-3 text-white">2. High-Quality Shoot</h3>
                <p className="font-body text-md leading-relaxed text-gray-300">Drone + DSLR la high-clarity visuals</p>
              </div>
              <div className="process-step animate-card bg-secondary p-6 rounded-xl border border-border">
                <div className="text-2xl mb-4">✍️</div>
                <h3 className="font-heading text-xl font-semibold mb-3 text-white">3. Persuasion Script</h3>
                <p className="font-body text-md leading-relaxed text-gray-300">Call pannanum-nu trigger pannuradhu</p>
              </div>
              <div className="process-step animate-card bg-secondary p-6 rounded-xl border border-border">
                <div className="text-2xl mb-4">🎯</div>
                <h3 className="font-heading text-xl font-semibold mb-3 text-white">4. Meta Campaigns</h3>
                <p className="font-body text-md leading-relaxed text-gray-300">Direct calls to you</p>
              </div>
              <div className="process-step animate-card bg-secondary p-6 rounded-xl border border-border">
                <div className="text-2xl mb-4">🏠</div>
                <h3 className="font-heading text-xl font-semibold mb-3 text-white">5. You Handle Closures</h3>
                <p className="font-body text-md leading-relaxed text-gray-300">Site visits & closures (unga strength)</p>
              </div>
              <div className="process-step animate-card bg-secondary p-6 rounded-xl border border-border">
                <div className="text-2xl mb-4">⚡</div>
                <h3 className="font-heading text-xl font-semibold mb-3 text-white">6. Daily Optimization</h3>
                <p className="font-body text-md leading-relaxed text-gray-300">Creatives, targeting, budget</p>
              </div>
            </div>
            <div className="text-center">
              <button className="bg-white hover:bg-white-dark text-black font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 hover:cursor-pointer">
                📞 Call Now to Get Hot Buyer Leads
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="value-section animate-section py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6 text-white">
                What You Get
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="value-card bg-secondary border border-border p-6 rounded-xl">
                  <h3 className="font-heading text-xl font-semibold mb-3 text-white flex items-center">
                    🚁 On-site Shoot
                  </h3>
                  <p className="font-body leading-relaxed">Drone + DSLR professional quality</p>
                </div>
                <div className="value-card bg-secondary border border-border p-6 rounded-xl">
                  <h3 className="font-heading text-xl font-semibold mb-3 text-white flex items-center">
                    🎬 Persuasive Video Ad
                  </h3>
                  <p className="font-body leading-relaxed">Script + edit (WhatsApp/status-ku short cutdown kooda create pannuvom)</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="value-card bg-secondary border border-border p-6 rounded-xl">
                  <h3 className="font-heading text-xl font-semibold mb-3 text-white flex items-center">
                    📅 30-Day Campaign
                  </h3>
                  <p className="font-body leading-relaxed">Set-up, targeting, testing, daily optimization</p>
                </div>
                <div className="value-card bg-secondary border border-border p-6 rounded-xl">
                  <h3 className="font-heading text-xl font-semibold mb-3 text-white flex items-center">
                    📞 Direct Call Enquiries
                  </h3>
                  <p className="font-body leading-relaxed">Buyers ungalaiye call pannuvanga → fast site visits</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 md:py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6 text-white">
                Irresistible Offer
              </h2>
            </div>
            <div className="pricing-card bg-secondary p-8 md:p-12 rounded-2xl border-2 border-accent backdrop-blur-sm">
              <div className="text-center mb-8">
                <div className="text-4xl md:text-6xl font-bold text-accent mb-2">₹35,000</div>
                <div className="text-lg text-muted font-body">Kickoff Month</div>
              </div>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-4">
                  <h3 className="font-heading text-xl font-semibold text-white">What's Included:</h3>
                  <div className="space-y-3 font-body">
                    <div className="flex items-center">
                      <span className="text-white mr-2">✓</span>
                      ₹25,000 → DFY video + setup + 30 days optimization
                    </div>
                    <div className="flex items-center">
                      <span className="text-white mr-2">✓</span>
                      ₹10,000 → Meta ad spend
                    </div>
                    <div className="flex items-center">
                      <span className="text-white mr-2">✓</span>
                      On-site shoot (TN full coverage)
                    </div>
                    <div className="flex items-center">
                      <span className="text-white mr-2">✓</span>
                      One persuasion video ad + 30 days ads
                    </div>
                  </div>
                </div>
                <div className="process-step animate-card bg-secondary p-6 rounded-xl border border-border">
                  <h3 className="font-heading text-xl font-semibold mb-4 text-white">After 30 Days:</h3>
                  <div className="space-y-3 font-body text-sm">
                    <p>Reinvest ad spend (₹20K+) — ROI paathu scale pannunga</p>
                    <p>10% service fee on renewals (management/optimization continued)</p>
                    <p className="font-semibold text-white">Simple aim: Month 1 la 2–3 sales → reinvest → scale → sell-out.</p>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <button className="bg-white hover:bg-gray-200 text-black font-bold px-12 py-6 rounded-lg text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl">
                  📞 Call Now to Get Hot Buyer Leads
                </button>
                <p className="text-sm text-muted mt-3 font-body">Limited slots - Monthly 10 clients mattum thaan onboard pannuvom</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section animate-section py-16 md:py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6 text-white">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="space-y-6">
              <div className="faq-item bg-secondary border border-border p-6 rounded-xl">
                <h3 className="font-heading text-lg font-semibold mb-3 text-white">Q: First leads eppo varum?</h3>
                <p className="font-body leading-relaxed">Creatives approve aana udane launch. Market, price, location base-la, calls usually very quickly start aagum. Volume vary aagum — focus quality intent.</p>
              </div>
              <div className="faq-item bg-secondary border border-border p-6 rounded-xl">
                <h3 className="font-heading text-lg font-semibold mb-3 text-white">Q: "Cheap leads" kudukka mudiyadhaa?</h3>
                <p className="font-body leading-relaxed">Cheap leads = wasted time. Naanga Hot Buyer Leads-ku design pannuvom — site visit & sales dhaan goal.</p>
              </div>
              <div className="faq-item bg-secondary border border-border p-6 rounded-xl">
                <h3 className="font-heading text-lg font-semibold mb-3 text-white">Q: En area la work aaguma?</h3>
                <p className="font-body leading-relaxed">Naanga Tamil Nadu full cover pannuvom. On-site shoot + local angle creatives.</p>
              </div>
              <div className="faq-item bg-secondary border border-border p-6 rounded-xl">
                <h3 className="font-heading text-lg font-semibold mb-3 text-white">Q: Premium price properties work aaguma?</h3>
                <p className="font-body leading-relaxed">Premium price = clear value story + right audience. Namma creatives adha clarify pannum; calls quality-la varum. (Market fit important.)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="contact" className="animate-section py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-8 text-white">
              Ready to Get Hot Buyer Leads?
            </h2>
            <p className="text-xl md:text-2xl mb-8 font-body leading-relaxed text-muted">
              Call pannunga. Slot confirm pannuvom. Naanga shoot → ad launch → calls start panna veenam.
            </p>
            <div className="bg-secondary border-2 border-accent p-6 rounded-xl mb-8">
              <p className="text-lg font-body text-white">
                ⚠️ Monthly 10 clients mattum thaan. Ippo ungaloda city-la irundhaa, immediate onboard.
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
              <p className="text-sm text-muted font-body">No Hype, No Guarantees — Straight Talk. Quality + ROI mindset dhaan.</p>
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
