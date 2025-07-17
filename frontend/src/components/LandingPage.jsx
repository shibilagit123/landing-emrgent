import React from 'react';
import { motion } from 'motion/react';
import { Star, Users, TrendingUp, Calendar, Mail, Phone, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">SC</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Success Coach</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors">Testimonials</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
            </nav>
            <Button className="bg-gradient-to-r from-gray-800 to-black text-white hover:from-gray-900 hover:to-gray-800 rounded-full px-6">
              Book Free Session
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 via-pink-50/30 to-blue-50/30"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <Badge className="mb-6 bg-blue-100 text-blue-800 border-blue-200">
                Transforming Leaders Since 2018
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Unlock Your Full
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Potential</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Build the business you love while becoming the leader you're meant to be. 
                You don't have to do this alone. Join 500+ entrepreneurs who've transformed their lives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-gradient-to-r from-gray-800 to-black text-white hover:from-gray-900 hover:to-gray-800 rounded-full px-8 py-4 text-lg">
                  Book Your Free Strategy Session
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8 py-4 text-lg border-gray-300 hover:bg-gray-50">
                  Watch Success Stories
                </Button>
              </div>
              <div className="mt-12 flex items-center justify-center lg:justify-start space-x-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">500+</div>
                  <div className="text-sm text-gray-600">Clients Coached</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">200%</div>
                  <div className="text-sm text-gray-600">Avg Revenue Growth</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">95%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1696960456960-d28ade09ef0e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvYWNofGVufDB8fHx8MTc1MjczNjMxNnww&ixlib=rb-4.1.0&q=85"
                  alt="Professional business coach in action"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              {/* Floating Stats Card */}
              <div className="absolute -bottom-8 -left-8 bg-white rounded-xl p-4 shadow-xl border">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-600">This Month</div>
                    <div className="text-lg font-bold text-gray-900">12 New Success Stories</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWx8ZW58MHx8fHwxNzUyNzM2MzIzfDA&ixlib=rb-4.1.0&q=85"
                  alt="Your Success Coach"
                  className="w-full h-[400px] object-cover rounded-2xl shadow-xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-xl border">
                  <div className="flex items-center space-x-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm font-medium text-gray-600">5.0 Rating</span>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Badge className="mb-6 bg-blue-100 text-blue-800 border-blue-200">
                Meet Your Coach
              </Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Hi, I'm Alex Thompson
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                For over 8 years, I've helped ambitious entrepreneurs and executives break through their limitations 
                and build businesses that align with their deepest values and highest potential.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                After scaling my own company from $0 to $10M and experiencing both the highs and lows of 
                entrepreneurship, I discovered that success isn't just about strategy—it's about mindset, 
                clarity, and authentic leadership.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Users className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">500+ Clients</div>
                    <div className="text-sm text-gray-600">Coached to Success</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">$50M+</div>
                    <div className="text-sm text-gray-600">Revenue Generated</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">My Mission</h3>
                <p className="text-gray-700 italic">
                  "To empower visionary leaders to create businesses that not only generate wealth but also 
                  contribute meaningfully to the world, while maintaining authentic relationships and personal well-being."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Badge className="mb-6 bg-blue-100 text-blue-800 border-blue-200">
              Transformation Outcomes
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              How I Help You Win
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every coaching journey is unique, but here are the key areas where my clients 
              consistently see breakthrough results.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "Revenue Growth",
                description: "Scale your business beyond 7-figures with proven strategies and systems that compound over time.",
                results: ["200% average revenue increase", "Streamlined operations", "Predictable growth systems"]
              },
              {
                icon: Users,
                title: "Leadership Clarity",
                description: "Develop the confidence and vision to lead your team through any challenge with authentic authority.",
                results: ["Enhanced decision-making", "Stronger team dynamics", "Clear communication skills"]
              },
              {
                icon: CheckCircle,
                title: "Personal Mastery",
                description: "Build unshakeable confidence and overcome limiting beliefs that hold you back from your potential.",
                results: ["Improved work-life balance", "Stress management", "Authentic self-expression"]
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-0 shadow-sm">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mb-6">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <div className="space-y-2">
                      {service.results.map((result, i) => (
                        <div key={i} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm text-gray-600">{result}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Badge className="mb-6 bg-blue-100 text-blue-800 border-blue-200">
              Client Success Stories
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Real Results, Real People
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take my word for it. Here's what successful entrepreneurs say about 
              their transformation journey.
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Mitchell",
                role: "CEO, TechFlow Solutions",
                image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwyfHxidXNpbmVzcyUyMGNvYWNofGVufDB8fHx8MTc1MjczNjMxNnww&ixlib=rb-4.1.0&q=85",
                testimonial: "Working with Alex completely transformed how I approach leadership. In just 6 months, we scaled from $2M to $5M ARR while I gained the confidence to lead my team through our biggest challenges.",
                result: "150% Revenue Growth"
              },
              {
                name: "Marcus Rodriguez",
                role: "Founder, Rodriguez Consulting",
                image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwyfHxwcm9mZXNzaW9uYWx8ZW58MHx8fHwxNzUyNzM2MzIzfDA&ixlib=rb-4.1.0&q=85",
                testimonial: "Alex helped me break through the limiting beliefs that were keeping me stuck at $500K revenue. His approach is both strategic and deeply personal. I finally feel like the leader I always knew I could be.",
                result: "Breakthrough to 7-Figures"
              },
              {
                name: "Jennifer Chen",
                role: "Executive Director, Innovation Hub",
                image: "https://images.pexels.com/photos/8761549/pexels-photo-8761549.jpeg",
                testimonial: "The clarity and confidence I gained through coaching with Alex has been life-changing. Not only did our organization double in size, but I've never felt more aligned with my purpose and values.",
                result: "200% Team Growth"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-0 shadow-sm">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-4 mb-6">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-semibold text-gray-900">{testimonial.name}</div>
                        <div className="text-sm text-gray-600">{testimonial.role}</div>
                      </div>
                    </div>
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 italic">"{testimonial.testimonial}"</p>
                    <Badge className="bg-green-100 text-green-800 border-green-200">
                      {testimonial.result}
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Success by the Numbers
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              These aren't just statistics—they represent real transformations and breakthrough moments.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Clients Coached", icon: Users },
              { number: "$50M+", label: "Revenue Generated", icon: TrendingUp },
              { number: "200%", label: "Average Growth", icon: CheckCircle },
              { number: "95%", label: "Success Rate", icon: Star }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-lg text-blue-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Badge className="mb-6 bg-blue-100 text-blue-800 border-blue-200">
              Ready to Start?
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Book Your Free Strategy Session
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Let's explore how we can unlock your potential and build the business you've always dreamed of. 
              No pressure, just clarity.
            </p>
          </motion.div>
          
          <Card className="shadow-xl border-0">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <Input 
                      placeholder="Enter your full name"
                      className="rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <Input 
                      type="email"
                      placeholder="Enter your email"
                      className="rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Current Business Goals
                  </label>
                  <Textarea 
                    placeholder="Tell me about your current challenges and what you'd like to achieve..."
                    rows={4}
                    className="rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                
                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-gray-800 to-black text-white hover:from-gray-900 hover:to-gray-800 rounded-full py-4 text-lg"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule My Free Session
                </Button>
              </form>
              
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="flex items-center justify-center space-x-8">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Mail className="h-5 w-5" />
                    <span>alex@successcoach.com</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Phone className="h-5 w-5" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">SC</span>
                </div>
                <span className="text-xl font-bold">Success Coach</span>
              </div>
              <p className="text-gray-400">
                Empowering visionary leaders to create businesses that matter.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
                <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Success Stories</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Free Resources</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Podcast</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <p>alex@successcoach.com</p>
                <p>+1 (555) 123-4567</p>
                <p>San Francisco, CA</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 Success Coach. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-6 left-6 right-6 md:hidden z-50">
        <Button 
          size="lg"
          className="w-full bg-gradient-to-r from-gray-800 to-black text-white hover:from-gray-900 hover:to-gray-800 rounded-full py-4 text-lg shadow-2xl"
        >
          <Calendar className="mr-2 h-5 w-5" />
          Book Free Session
        </Button>
      </div>
    </div>
  );
};

export default LandingPage;