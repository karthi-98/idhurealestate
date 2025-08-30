'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export const useGSAP = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Add class to enable animations
    document.body.classList.add('gsap-enabled')
    
    const ctx = gsap.context(() => {
      // Hero section - Word-by-word staggered fade-in animation
      
      // Function to split text into words and wrap each word
      const splitTextIntoWords = (selector: string) => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
          const text = element.textContent || '';
          const words = text.split(' ');
          element.innerHTML = words
            .map(word => `<span class="word-animate" style="display: inline-block; opacity: 0; transform: translateY(30px);">${word}</span>`)
            .join(' ');
        });
      };

      // Split hero text into words
      splitTextIntoWords('.hero-title');
      splitTextIntoWords('.hero-subtitle');
      splitTextIntoWords('.hero-description');
      
      // Set initial state for CTA and video
      gsap.set('.hero-cta', { y: 30, opacity: 0 });
      gsap.set('.video-holder', { y: 30, opacity: 0 });

      // Animate words with stagger
      const tl = gsap.timeline({ delay: 0.3 });
      
      tl.to('.hero-title .word-animate', {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.08,
        ease: 'power2.out'
      })
      .to('.hero-subtitle .word-animate', {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.06,
        ease: 'power2.out'
      }, '-=0.3')
      .to('.hero-description .word-animate', {
        y: 0,
        opacity: 1,
        duration: 0.4,
        stagger: 0.04,
        ease: 'power2.out'
      }, '-=0.2')
      .to('.hero-cta', {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: 'power2.out'
      }, '-=0.5')
      .to('.video-holder', {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: 'power2.out'
      }, '-=0.4');

      // Statistics animation - Only animate once when entering viewport
      gsap.fromTo('.stat-card', 
        { y: 20 },
        {
          scrollTrigger: {
            trigger: '.stats-section',
            start: 'top 90%',
            toggleActions: 'play none none none'
          },
          y: 0,
          duration: 0.4,
          stagger: 0.05,
          ease: 'power2.out'
        }
      )

      // Count up animation for numbers
      gsap.utils.toArray('.stat-number').forEach((element: any) => {
        const endValue = element.textContent?.replace(/[^\d]/g, '') || '0'
        const obj = { value: 0 }
        
        gsap.to(obj, {
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
          },
          value: parseInt(endValue),
          duration: 2,
          ease: 'power2.out',
          onUpdate: () => {
            if (element.textContent?.includes('+')) {
              element.textContent = Math.round(obj.value) + '+'
            } else {
              element.textContent = Math.round(obj.value).toString()
            }
          }
        })
      })

      // Section animations - Only animate once when entering viewport
      gsap.utils.toArray('.animate-section').forEach((section: any) => {
        gsap.fromTo(section, 
          { y: 30 },
          {
            scrollTrigger: {
              trigger: section,
              start: 'top 85%',
              toggleActions: 'play none none none'
            },
            y: 0,
            duration: 0.6,
            ease: 'power3.out'
          }
        )
      })

      // Cards stagger animation - Only animate once when entering viewport
      gsap.utils.toArray('.card-group').forEach((group: any) => {
        const cards = group.querySelectorAll('.animate-card')
        gsap.fromTo(cards, 
          { y: 20 },
          {
            scrollTrigger: {
              trigger: group,
              start: 'top 85%',
              toggleActions: 'play none none none'
            },
            y: 0,
            duration: 0.4,
            stagger: 0.05,
            ease: 'power2.out'
          }
        )
      })

      // Problem section cards - simple hover-only animations, always visible
      gsap.utils.toArray('.problem-card').forEach((card: any) => {
        // Ensure they're visible immediately
        gsap.set(card, { opacity: 1, y: 0 })
        
        // Add simple hover effect
        card.addEventListener('mouseenter', () => {
          gsap.to(card, { y: -5, duration: 0.3, ease: 'power2.out' })
        })
        
        card.addEventListener('mouseleave', () => {
          gsap.to(card, { y: 0, duration: 0.3, ease: 'power2.out' })
        })
      })

      // Value proposition cards - Only animate once when entering viewport
      gsap.fromTo('.value-card', 
        { y: 20 },
        {
          scrollTrigger: {
            trigger: '.value-section',
            start: 'top 85%',
            toggleActions: 'play none none none'
          },
          y: 0,
          duration: 0.4,
          stagger: 0.05,
          ease: 'power2.out'
        }
      )

      // Process steps animation - Only animate once when entering viewport
      gsap.fromTo('.process-step', 
        { y: 20 },
        {
          scrollTrigger: {
            trigger: '.process-section',
            start: 'top 85%',
            toggleActions: 'play none none none'
          },
          y: 0,
          duration: 0.4,
          stagger: 0.05,
          ease: 'power2.out'
        }
      )

      // FAQ accordion-style animation - Only animate once when entering viewport
      gsap.fromTo('.faq-item', 
        { y: 20 },
        {
          scrollTrigger: {
            trigger: '.faq-section',
            start: 'top 85%',
            toggleActions: 'play none none none'
          },
          y: 0,
          duration: 0.4,
          stagger: 0.05,
          ease: 'power2.out'
        }
      )

      // Pricing section highlight animation - Only animate once when entering viewport
      gsap.fromTo('.pricing-card', 
        { y: 20 },
        {
          scrollTrigger: {
            trigger: '.pricing-section',
            start: 'top 85%',
            toggleActions: 'play none none none'
          },
          y: 0,
          duration: 0.6,
          ease: 'power2.out'
        }
      )

      // Button hover animations
      gsap.utils.toArray('.animate-button').forEach((button: any) => {
        const hoverTl = gsap.timeline({ paused: true })
        
        hoverTl
          .to(button, {
            scale: 1.05,
            duration: 0.3,
            ease: 'power2.out'
          })
          .to(button.querySelector('.button-text'), {
            y: -2,
            duration: 0.3,
            ease: 'power2.out'
          }, 0)

        button.addEventListener('mouseenter', () => hoverTl.play())
        button.addEventListener('mouseleave', () => hoverTl.reverse())
      })

    }, containerRef)

    return () => {
      ctx.revert()
      document.body.classList.remove('gsap-enabled')
    }
  }, [])

  return containerRef
}