// Mock data for the business coach landing page
// This file contains all the mock data used in the landing page components
// It will be replaced with actual backend API calls later

export const mockCoachData = {
  name: "Alex Thompson",
  title: "Business & Leadership Coach",
  email: "alex@successcoach.com",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA",
  
  bio: {
    intro: "For over 8 years, I've helped ambitious entrepreneurs and executives break through their limitations and build businesses that align with their deepest values and highest potential.",
    background: "After scaling my own company from $0 to $10M and experiencing both the highs and lows of entrepreneurship, I discovered that success isn't just about strategy—it's about mindset, clarity, and authentic leadership.",
    mission: "To empower visionary leaders to create businesses that not only generate wealth but also contribute meaningfully to the world, while maintaining authentic relationships and personal well-being."
  },
  
  achievements: {
    clientsCoached: "500+",
    revenueGenerated: "$50M+",
    averageGrowth: "200%",
    successRate: "95%",
    rating: 5.0,
    yearsExperience: 8
  },
  
  images: {
    profileMain: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWx8ZW58MHx8fHwxNzUyNzM2MzIzfDA&ixlib=rb-4.1.0&q=85",
    heroImage: "https://images.unsplash.com/photo-1696960456960-d28ade09ef0e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvYWNofGVufDB8fHx8MTc1MjczNjMxNnww&ixlib=rb-4.1.0&q=85"
  }
};

export const mockServices = [
  {
    id: 1,
    title: "Revenue Growth",
    description: "Scale your business beyond 7-figures with proven strategies and systems that compound over time.",
    icon: "TrendingUp",
    results: [
      "200% average revenue increase",
      "Streamlined operations", 
      "Predictable growth systems"
    ]
  },
  {
    id: 2,
    title: "Leadership Clarity",
    description: "Develop the confidence and vision to lead your team through any challenge with authentic authority.",
    icon: "Users",
    results: [
      "Enhanced decision-making",
      "Stronger team dynamics",
      "Clear communication skills"
    ]
  },
  {
    id: 3,
    title: "Personal Mastery",
    description: "Build unshakeable confidence and overcome limiting beliefs that hold you back from your potential.",
    icon: "CheckCircle",
    results: [
      "Improved work-life balance",
      "Stress management",
      "Authentic self-expression"
    ]
  }
];

export const mockTestimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "CEO, TechFlow Solutions",
    company: "TechFlow Solutions",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwyfHxidXNpbmVzcyUyMGNvYWNofGVufDB8fHx8MTc1MjczNjMxNnww&ixlib=rb-4.1.0&q=85",
    testimonial: "Working with Alex completely transformed how I approach leadership. In just 6 months, we scaled from $2M to $5M ARR while I gained the confidence to lead my team through our biggest challenges.",
    result: "150% Revenue Growth",
    rating: 5,
    beforeRevenue: 2000000,
    afterRevenue: 5000000,
    transformationTime: "6 months"
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    role: "Founder, Rodriguez Consulting",
    company: "Rodriguez Consulting",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwyfHxwcm9mZXNzaW9uYWx8ZW58MHx8fHwxNzUyNzM2MzIzfDA&ixlib=rb-4.1.0&q=85",
    testimonial: "Alex helped me break through the limiting beliefs that were keeping me stuck at $500K revenue. His approach is both strategic and deeply personal. I finally feel like the leader I always knew I could be.",
    result: "Breakthrough to 7-Figures",
    rating: 5,
    beforeRevenue: 500000,
    afterRevenue: 1200000,
    transformationTime: "9 months"
  },
  {
    id: 3,
    name: "Jennifer Chen",
    role: "Executive Director, Innovation Hub",
    company: "Innovation Hub",
    image: "https://images.pexels.com/photos/8761549/pexels-photo-8761549.jpeg",
    testimonial: "The clarity and confidence I gained through coaching with Alex has been life-changing. Not only did our organization double in size, but I've never felt more aligned with my purpose and values.",
    result: "200% Team Growth",
    rating: 5,
    beforeTeamSize: 15,
    afterTeamSize: 30,
    transformationTime: "12 months"
  }
];

export const mockStats = [
  {
    id: 1,
    number: "500+",
    label: "Clients Coached",
    icon: "Users",
    description: "Successful entrepreneurs and executives transformed"
  },
  {
    id: 2,
    number: "$50M+",
    label: "Revenue Generated",
    icon: "TrendingUp", 
    description: "Total revenue growth across all client businesses"
  },
  {
    id: 3,
    number: "200%",
    label: "Average Growth",
    icon: "CheckCircle",
    description: "Average revenue increase within 12 months"
  },
  {
    id: 4,
    number: "95%",
    label: "Success Rate",
    icon: "Star",
    description: "Clients who achieve their transformation goals"
  }
];

export const mockContactForm = {
  fields: [
    {
      id: "fullName",
      label: "Full Name",
      type: "text",
      placeholder: "Enter your full name",
      required: true
    },
    {
      id: "email",
      label: "Email Address", 
      type: "email",
      placeholder: "Enter your email",
      required: true
    },
    {
      id: "businessGoals",
      label: "Current Business Goals",
      type: "textarea",
      placeholder: "Tell me about your current challenges and what you'd like to achieve...",
      required: true,
      rows: 4
    }
  ],
  
  submitButton: {
    text: "Schedule My Free Session",
    icon: "Calendar"
  },
  
  contactInfo: {
    email: "alex@successcoach.com",
    phone: "+1 (555) 123-4567"
  }
};

export const mockNavigation = {
  logo: {
    text: "Success Coach",
    initials: "SC"
  },
  
  links: [
    { id: "about", label: "About", href: "#about" },
    { id: "services", label: "Services", href: "#services" },
    { id: "testimonials", label: "Testimonials", href: "#testimonials" },
    { id: "contact", label: "Contact", href: "#contact" }
  ],
  
  cta: {
    text: "Book Free Session",
    href: "#contact"
  }
};

export const mockFooter = {
  sections: [
    {
      title: "Quick Links",
      links: [
        { label: "About", href: "#about" },
        { label: "Services", href: "#services" },
        { label: "Testimonials", href: "#testimonials" },
        { label: "Contact", href: "#contact" }
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Success Stories", href: "#" },
        { label: "Free Resources", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Podcast", href: "#" }
      ]
    }
  ],
  
  copyright: "© 2024 Success Coach. All rights reserved."
};

// Mock form submission handler
export const mockFormSubmission = {
  submitContactForm: async (formData) => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock successful submission
    console.log("Form submitted with data:", formData);
    
    return {
      success: true,
      message: "Thank you! Your strategy session has been scheduled. You'll receive a confirmation email shortly.",
      confirmationNumber: `SS-${Date.now()}`
    };
  }
};

// Mock analytics/tracking functions
export const mockAnalytics = {
  trackPageView: (pageName) => {
    console.log(`Page view tracked: ${pageName}`);
  },
  
  trackButtonClick: (buttonName) => {
    console.log(`Button click tracked: ${buttonName}`);
  },
  
  trackFormSubmission: (formType) => {
    console.log(`Form submission tracked: ${formType}`);
  }
};

export default {
  mockCoachData,
  mockServices,
  mockTestimonials,
  mockStats,
  mockContactForm,
  mockNavigation,
  mockFooter,
  mockFormSubmission,
  mockAnalytics
};