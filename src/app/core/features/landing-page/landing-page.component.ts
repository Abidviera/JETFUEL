import {
  Component,
  HostListener,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import AOS from 'aos';
export interface Service {
  icon: string;
  title: string;
  description: string;
  features: string[];
  gradient: string;
  image: string;
}

export interface StatData {
  icon: string;
  value: number;        
  displayValue: number;   
  suffix: string;
  label: string;
  description: string;
  color1: string;
  color2: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  position: string;
  company: string;
  location: string;
  rating: number;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  gradient: string;
}

export interface AdditionalService {
  icon: string;
  title: string;
  description: string;
}

export interface Certification {
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface Stat {
  value: string;
  label: string;
}
@Component({
  selector: 'app-landing-page',
  standalone: false,
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {
   constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  isScrolled = false;
  isMobileMenuOpen = false;
  activeSection = 'home';

  contactForm = {
    name: '',
    email: '',
    phone: '',
    company: '',
    product: '',
    message: '',
  };

  
  navItems = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Products' },
    { id: 'services', label: 'Services' },
    { id: 'quality', label: 'Quality' },
    { id: 'contact', label: 'Contact' },
  ];


  productHighlights = [
    {
      title: 'Premium Diesel',
      desc: 'Ultra-low sulfur',
      color1: '#2563eb',
      color2: '#1e40af',
    },
    {
      title: 'SN 500/150',
      desc: 'Base oils',
      color1: '#9333ea',
      color2: '#7e22ce',
    },
    {
      title: 'Group 2',
      desc: 'High quality',
      color1: '#dc2626',
      color2: '#991b1b',
    },
    {
      title: 'Import/Export',
      desc: 'Global solutions',
      color1: '#ea580c',
      color2: '#c2410c',
    },
  ];


 statsData: StatData[] = [
    {
      icon: 'award',
      value: 2021,
      displayValue: 0,
      suffix: '',
      label: 'Year Established',
      description: 'Building trust since',
      color1: '#2563eb',
      color2: '#0891b2',
    },
    {
      icon: 'package',
      value: 100,
      displayValue: 0,
      suffix: 'K+',
      label: 'Tons Delivered',
      description: 'Annual capacity',
      color1: '#9333ea',
      color2: '#db2777',
    },
    {
      icon: 'globe',
      value: 25,
      displayValue: 0,
      suffix: '+',
      label: 'Countries Served',
      description: 'Global reach',
      color1: '#ea580c',
      color2: '#dc2626',
    },
    {
      icon: 'users',
      value: 500,
      displayValue: 0,
      suffix: '+',
      label: 'Trusted Clients',
      description: 'Worldwide partners',
      color1: '#16a34a',
      color2: '#059669',
    },
  ];

  private statsAnimated = false;


  achievements = [
    {
      icon: 'shield',
      title: 'ISO 9001:2015',
      description: 'Quality Management Certification',
      color: '#2563eb',
      color1: '#2563eb',
      color2: '#0891b2',
    },
    {
      icon: 'award',
      title: '100% Virgin Base Oil',
      description: 'Premium Quality Assurance',
      color: '#9333ea',
      color1: '#9333ea',
      color2: '#db2777',
    },
    {
      icon: 'trending',
      title: 'Licensed Trader',
      description: 'Trade License 106684, Ajman DED',
      color: '#dc2626',
      color1: '#dc2626',
      color2: '#ea580c',
    },
  ];

 
  products = [
    {
      name: 'Premium Diesel',
      subtitle: 'Ultra-Low Sulfur Diesel',
      description:
        'High-performance diesel fuel meeting international standards for industrial and commercial applications.',
      specifications: [
        'Ultra-low sulfur content (< 10 ppm)',
        'Optimized cetane number',
        'Superior cold flow properties',
        'Enhanced fuel stability',
      ],
      icon: 'zap',
      color1: '#2563eb',
      color2: '#0891b2',
      image:
        'https://images.unsplash.com/photo-1589002771170-9692b81b05da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmdWVsJTIwdGFua2VyfGVufDF8fHx8MTc2NDMzNDk2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      name: 'SN 500 Base Oil',
      subtitle: 'Solvent Neutral 500',
      description:
        'Premium quality base oil with excellent viscosity index, ideal for high-performance lubricant formulations.',
      specifications: [
        'Viscosity @ 100°C: 9.5-10.5 cSt',
        'High viscosity index (> 95)',
        'Low sulfur content',
        'Excellent thermal stability',
      ],
      icon: 'droplet',
      color1: '#9333ea',
      color2: '#db2777',
      image:
        'https://images.unsplash.com/photo-1726731782158-fcf6822b6ca4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXRyb2xldW0lMjBpbmR1c3RyeXxlbnwxfHx8fDE3NjQzMzQ5NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      name: 'SN 150 Base Oil',
      subtitle: 'Solvent Neutral 150',
      description:
        'Light viscosity base oil perfect for automotive and industrial lubricant applications requiring superior fluidity.',
      specifications: [
        'Viscosity @ 100°C: 4.2-4.8 cSt',
        'Excellent low-temperature flow',
        'High purity level',
        'Optimal oxidation stability',
      ],
      icon: 'shield',
      color1: '#ea580c',
      color2: '#dc2626',
      image:
        'https://images.unsplash.com/photo-1759311854002-5f2777967af9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZXhjZWxsZW5jZXxlbnwxfHx8fDE3NjQzMzQ5NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      name: 'Group 2 Base Oil',
      subtitle: 'Hydrotreated Base Stock',
      description:
        'Advanced hydroprocessed base oil offering superior performance characteristics and environmental benefits.',
      specifications: [
        'Saturates > 90%',
        'Sulfur content < 0.03%',
        'Viscosity Index 80-120',
        'Enhanced oxidative stability',
      ],
      icon: 'trending-up',
      color1: '#16a34a',
      color2: '#059669',
      image:
        'https://images.unsplash.com/photo-1655763161700-8f284f0ceca9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaWwlMjByZWZpbmVyeSUyMHN1bnNldHxlbnwxfHx8fDE3NjQzMjMwMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];


  contactInfo = [
    {
      icon: 'phone',
      title: 'Phone',
      details: ['+971 55 686 8029', '+971 52 376 8889'],
      color1: '#2563eb',
      color2: '#0891b2',
    },
    {
      icon: 'mail',
      title: 'Email',
      details: ['info@jetfueltrading.ae', 'sales@jetfueltrading.ae'],
      color1: '#9333ea',
      color2: '#db2777',
    },
    {
      icon: 'map-pin',
      title: 'Location',
      details: [
        'Shabra No. 1, Jurf Industrial Zone 2',
        'Ajman, United Arab Emirates',
      ],
      color1: '#ea580c',
      color2: '#dc2626',
    },
    {
      icon: 'clock',
      title: 'Business Hours',
      details: [
        'Monday - Friday: 8:00 AM - 6:00 PM',
        'Saturday: 9:00 AM - 2:00 PM',
      ],
      color1: '#16a34a',
      color2: '#059669',
    },
  ];

 
  productOptions = [
    'Premium Diesel',
    'SN 500 Base Oil',
    'SN 150 Base Oil',
    'Group 2 Base Oil',
    'JetLube Products',
    'Other',
  ];


  footerLinks = [
    {
      title: 'COMPANY',
      links: ['About Us', 'Our Team', 'Careers', 'News & Updates'],
    },
    {
      title: 'PRODUCTS',
      links: [
        'Premium Diesel',
        'SN 500 Base Oil',
        'SN 150 Base Oil',
        'Group 2 Base Oil',
        'JetLube Products',
      ],
    },
    {
      title: 'SERVICES',
      links: [
        'Global Trading',
        'Import Services',
        'Export Services',
        'Quality Assurance',
      ],
    },
    {
      title: 'RESOURCES',
      links: [
        'Product Catalog',
        'Safety Data Sheets',
        'Certifications',
        'Contact Us',
      ],
    },
  ];

 
  socialLinks = ['facebook', 'twitter', 'linkedin', 'instagram'];

  currentYear = new Date().getFullYear();
  servicesVisible = false;
  qualityVisible = false;


  services: Service[] = [
    {
      icon: 'globe',
      title: 'Global Trading',
      description:
        'Comprehensive international fuel products trading with expertise in market dynamics and competitive pricing.',
      features: [
        'Market Analysis',
        'Price Optimization',
        'Risk Management',
        'Trade Finance',
      ],
      gradient: 'blue-cyan',
      image:
        'https://images.unsplash.com/photo-1521791136064-7986c2920216?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGhhbmRzaGFrZXxlbnwxfHx8fDE3NjQzMTQwMjl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: 'ship',
      title: 'Import Services',
      description:
        'End-to-end import solutions for diesel, base oils, and specialty products from global suppliers.',
      features: [
        'Customs Clearance',
        'Documentation',
        'Quality Inspection',
        'Logistics Coordination',
      ],
      gradient: 'purple-pink',
      image:
        'https://images.unsplash.com/photo-1589002771170-9692b81b05da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmdWVsJTIwdGFua2VyfGVufDF8fHx8MTc2NDMzNDk2NXww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: 'truck',
      title: 'Export Services',
      description:
        'Professional export management ensuring timely delivery of premium fuel products to international markets.',
      features: [
        'Export Documentation',
        'Shipping Coordination',
        'Compliance Management',
        'Market Entry Support',
      ],
      gradient: 'orange-red',
      image:
        'https://images.unsplash.com/photo-1726731782158-fcf6822b6ca4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXRyb2xldW0lMjBpbmR1c3RyeXxlbnwxfHx8fDE3NjQzMzQ5NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: 'droplets',
      title: 'JetLube Products',
      description:
        'Premium lubricants and specialty products manufactured with 100% virgin base oil for superior performance.',
      features: [
        'Engine Oils',
        'ATF Products',
        'Hydraulic Oils',
        'Industrial Lubricants',
      ],
      gradient: 'green-emerald',
      image:
        'https://images.unsplash.com/photo-1655763161700-8f284f0ceca9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaWwlMjByZWZpbmVyeSUyMHN1bnNldHxlbnwxfHx8fDE3NjQzMjMwMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  testimonials: Testimonial[] = [
    {
      quote:
        'JetFuel Trading has been our trusted partner for premium diesel supply for over two years. Their commitment to quality and timely delivery is unmatched in the industry.',
      author: 'Ahmed Al-Mansouri',
      position: 'Procurement Director',
      company: 'Gulf Industries LLC',
      location: 'Dubai, UAE',
      rating: 5,
    },
    {
      quote:
        'The SN 500 base oil we source from JetFuel consistently meets our stringent specifications. Their ISO certification gives us confidence in every shipment.',
      author: 'Sarah Thompson',
      position: 'Quality Manager',
      company: 'Horizon Lubricants',
      location: 'Singapore',
      rating: 5,
    },
    {
      quote:
        'Exceptional import/export services with complete transparency. Their expertise in international fuel trading has helped us expand our operations globally.',
      author: 'Rajesh Kumar',
      position: 'Chief Operations Officer',
      company: 'Asian Petroleum Corp',
      location: 'Mumbai, India',
      rating: 5,
    },
  ];

  timeline: TimelineItem[] = [
    {
      year: '2021',
      title: 'Company Established',
      description:
        'JetFuel Trading L.L.C founded in Ajman, UAE with a vision to revolutionize fuel trading',
      gradient: 'blue-cyan',
    },
    {
      year: '2022',
      title: 'ISO Certification',
      description:
        'Achieved ISO 9001:2015 certification, establishing quality management excellence',
      gradient: 'purple-pink',
    },
    {
      year: '2023',
      title: 'Global Expansion',
      description:
        'Extended operations to 25+ countries with strategic partnerships worldwide',
      gradient: 'orange-red',
    },
    {
      year: '2024',
      title: 'JetLube Launch',
      description:
        'Introduced premium lubricants line with 100% virgin base oil products',
      gradient: 'green-emerald',
    },
  ];

  additionalServices: AdditionalService[] = [
    {
      icon: 'file-check',
      title: 'Quality Assurance',
      description: 'Rigorous testing and certification for all products',
    },
    {
      icon: 'shield',
      title: 'Compliance & Safety',
      description: 'Full regulatory compliance and safety standards',
    },
    {
      icon: 'zap',
      title: '24/7 Support',
      description: 'Round-the-clock customer service and technical support',
    },
    {
      icon: 'trending-up',
      title: 'Market Insights',
      description: 'Expert analysis and market intelligence',
    },
  ];

  certifications: Certification[] = [
    {
      icon: 'award',
      title: 'ISO 9001:2015',
      subtitle: 'Quality Management System',
      description:
        'Internationally recognized quality management certification ensuring consistent product excellence',
      features: [
        'Process Excellence',
        'Continuous Improvement',
        'Customer Satisfaction',
        'Risk Management',
      ],
    },
    {
      icon: 'shield',
      title: 'Trade License 106684',
      subtitle: 'Department of Economic Development, Ajman',
      description:
        'Fully licensed and regulated trading operations in the UAE with complete legal compliance',
      features: [
        'Legal Compliance',
        'Trade Authorization',
        'Import/Export Rights',
        'Regulatory Standards',
      ],
    },
    {
      icon: 'microscope',
      title: 'Laboratory Tested',
      subtitle: 'Quality Assurance',
      description:
        'Every product batch undergoes rigorous laboratory testing to meet international specifications',
      features: [
        'Chemical Analysis',
        'Performance Testing',
        'Purity Verification',
        'Specification Compliance',
      ],
    },
  ];

  qualityProcess: ProcessStep[] = [
    {
      step: '01',
      title: 'Source Selection',
      description: 'Carefully vetted suppliers and refineries worldwide',
    },
    {
      step: '02',
      title: 'Quality Testing',
      description: 'Comprehensive laboratory analysis and certification',
    },
    {
      step: '03',
      title: 'Compliance Check',
      description: 'Verification against international standards',
    },
    {
      step: '04',
      title: 'Delivery Assurance',
      description: 'Safe transport and handling to destination',
    },
  ];

  stats: Stat[] = [
    { value: '98%', label: 'Client Satisfaction' },
    { value: '100%', label: 'Quality Assurance' },
    { value: '24/7', label: 'Customer Support' },
    { value: '25+', label: 'Countries Served' },
  ];

  promiseItems: string[] = [
    'Third-party laboratory testing and verification',
    'Complete traceability from source to delivery',
    'Compliance with international quality standards',
    'Continuous monitoring and improvement processes',
  ];

  ngOnInit(): void {
   
   if (isPlatformBrowser(this.platformId)) {
      import('aos').then(aos => {
        aos.default.init({
          duration: 600,
          easing: 'ease-out-cubic',
          once: true,
          offset: 50,
          delay: 0,
          disable: false,
          anchorPlacement: 'top-bottom',
          mirror: false,
          throttleDelay: 99,
          debounceDelay: 50,
        });
      });
    }
    this.handleScroll();
  }

  ngOnDestroy(): void {

  
  }

  

  @HostListener('window:scroll')
  onWindowScroll() {
    if (isPlatformBrowser(this.platformId)) {
      this.isScrolled = window.pageYOffset > 20;
      this.updateActiveSection();
      this.handleScroll();
    }
  }

  updateActiveSection() {
    if (!isPlatformBrowser(this.platformId)) return;
    
    const sections = ['home', 'products', 'services', 'quality', 'contact'];
    const currentSection = sections.find((section) => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom > 100;
      }
      return false;
    });

    if (currentSection) {
      this.activeSection = currentSection;
    }
  }

   private handleScroll(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    
    const scrollPosition =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;


    if (scrollPosition > 100) {
      this.servicesVisible = true;
    }
    if (scrollPosition > 500) {
      this.qualityVisible = true;
    }


    if (!this.statsAnimated) {
      const statsSection = document.querySelector('.stats-section');
      if (statsSection) {
        const rect = statsSection.getBoundingClientRect();
        const isInView = rect.top <= window.innerHeight * 0.75 && rect.bottom >= 0;

        if (isInView) {
          this.statsAnimated = true;
          this.animateStats();
        }
      }
    }
  }

 scrollToSection(sectionId: string) {
    if (!isPlatformBrowser(this.platformId)) return;
    
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    this.isMobileMenuOpen = false;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  onSubmit() {
    console.log('Form submitted:', this.contactForm);
    alert('Thank you for your inquiry! We will get back to you soon.');

    this.contactForm = {
      name: '',
      email: '',
      phone: '',
      company: '',
      product: '',
      message: '',
    };
  }

  getStarArray(rating: number): number[] {
    return Array(rating).fill(0);
  }

  getProcessIcon(index: number): string {
    const icons = ['globe', 'microscope', 'shield', 'check'];
    return icons[index] || 'check';
  }


  private animateStats(): void {
  this.statsData.forEach((stat) => {
    const duration = 2000;
    const steps = 60;
    const increment = stat.value / steps;
    const stepDuration = duration / steps;
    let currentStep = 0;
    
    // Reset display value
    stat.displayValue = 0;

    const interval = setInterval(() => {
      currentStep++;
      if (currentStep <= steps) {
        stat.displayValue = Math.round(increment * currentStep);
      } else {
        stat.displayValue = stat.value;
        clearInterval(interval);
      }
    }, stepDuration);
  });
}

  
}
