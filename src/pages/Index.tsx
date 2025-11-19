import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Mail, Phone, MapPin, Github, Linkedin, Send, Code, Database, Server, Layout, Download, ArrowUp, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Index = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const skills = [
    { name: 'PHP & Laravel', icon: <Server className="w-8 h-8" />, percentage: 95, color: 'from-purple to-blue' },
    { name: 'MySQL & Database', icon: <Database className="w-8 h-8" />, percentage: 92, color: 'from-blue to-cyan' },
    { name: 'RESTful APIs', icon: <Code className="w-8 h-8" />, percentage: 90, color: 'from-cyan to-pink' },
    { name: 'Frontend (HTML/CSS/JS)', icon: <Layout className="w-8 h-8" />, percentage: 93, color: 'from-pink to-purple' },
  ];

  const projects = [
    {
      title: 'Custom Content Management System',
      description: 'A powerful, user-friendly CMS that allows clients to manage content, media, and SEO effortlessly. Built for both technical and non-technical users with high reusability and performance optimization. Features include role-based access control, real-time previews, and automated backups.',
      technologies: ['Laravel', 'MySQL', 'Blade', 'Ajax', 'REST API'],
    },
    {
      title: 'E-Commerce Web Application',
      description: 'Complete scalable e-commerce platform with secure payment integration, advanced search functionality, order management, inventory tracking, and automated SEO optimization. Includes admin dashboard with analytics, customer management, and multi-vendor support capabilities.',
      technologies: ['Laravel', 'Bootstrap', 'jQuery', 'Payment Gateway', 'MySQL'],
    },
  ];

  const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      {/* Particles Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-light to-dark"></div>
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple/30 rounded-full blur-[120px] animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan/20 rounded-full blur-[120px] animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-blue/20 rounded-full blur-[120px] animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'glass-effect shadow-custom-lg py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-3xl font-black text-gradient-primary animate-glow"
          >
            MA
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollToSection(link.toLowerCase())}
                className="text-foreground hover:text-primary transition-all duration-300 font-medium relative group"
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-foreground z-50"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden glass-effect mt-4 mx-4 rounded-2xl p-6 space-y-4"
          >
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollToSection(link.toLowerCase())}
                className="block w-full text-left text-foreground hover:text-primary transition-colors py-2"
              >
                {link}
              </button>
            ))}
          </motion.div>
        )}
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-20 pb-10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Hero Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block glass-effect px-5 py-2 rounded-full border border-primary/30"
              >
                <span className="text-primary font-semibold">🚀 Available for Opportunities</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-7xl font-black leading-tight"
              >
                Hi, I'm{' '}
                <span className="block text-gradient-hero mt-2">Mohamed Azarudeen</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-2xl md:text-3xl font-semibold text-muted-foreground"
              >
                I craft{' '}
                <TypeAnimation
                  sequence={[
                    'elegant web solutions',
                    2000,
                    'scalable applications',
                    2000,
                    'Laravel expertise',
                    2000,
                    'seamless user experiences',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  className="text-gradient-primary"
                  repeat={Infinity}
                />
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-lg text-graytext leading-relaxed"
              >
                Backend Developer specializing in PHP Laravel & modern server-side technologies. Based in
                UAE with 2+ years of experience building scalable, high-performance backend systems and RESTful APIs.
              </motion.p>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="flex flex-wrap gap-8 py-6"
              >
                {[
                  { number: '2+', label: 'Years Experience' },
                  { number: '7+', label: 'Projects Completed' },
                  { number: '95%', label: 'Client Satisfaction' },
                ].map((stat, index) => (
                  <div key={index} className="text-left">
                    <div className="text-4xl font-black text-gradient-primary">{stat.number}</div>
                    <div className="text-sm text-graytext mt-1">{stat.label}</div>
                  </div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1 }}
                className="flex flex-wrap gap-4"
              >
                <Button
                  size="lg"
                  className="bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 rounded-full px-8"
                  onClick={() => window.location.href = 'mailto:azar78740@gmail.com'}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Hire Me
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary hover:bg-primary/10 rounded-full px-8"
                  onClick={() => scrollToSection('projects')}
                >
                  <Code className="w-5 h-5 mr-2" />
                  View Work
                </Button>
              </motion.div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative flex justify-center"
            >
              <div className="relative w-80 h-80 md:w-96 md:h-96">
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-purple via-cyan to-blue opacity-30 blur-2xl"
                ></motion.div>
                <motion.div
                  animate={{
                    rotate: -360,
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className="absolute inset-4 rounded-full bg-gradient-to-r from-pink via-purple to-cyan opacity-20 blur-xl"
                ></motion.div>
                <img
                  src="https://files.catbox.sh/0v7t5k.png"
                  alt="Mohamed Azarudeen"
                  className="relative z-10 w-full h-full rounded-full object-cover border-4 border-primary/30 shadow-glow-primary animate-float"
                />
                
                {/* Floating Tech Icons */}
                {[
                  { icon: <Server className="w-8 h-8" />, position: 'top-10 -left-10', delay: 0 },
                  { icon: <Database className="w-8 h-8" />, position: 'bottom-20 -left-14', delay: 1 },
                  { icon: <Code className="w-8 h-8" />, position: 'top-20 -right-10', delay: 2 },
                  { icon: <Layout className="w-8 h-8" />, position: 'bottom-10 -right-14', delay: 3 },
                ].map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.5 + tech.delay * 0.2 }}
                    className={`absolute ${tech.position} glass-effect p-4 rounded-2xl border border-primary/30 text-primary hidden md:block animate-float`}
                    style={{ animationDelay: `${tech.delay}s` }}
                  >
                    {tech.icon}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black text-gradient-primary mb-4">About Me</h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative group"
            >
              <div className="absolute -inset-4 bg-gradient-primary opacity-20 blur-2xl group-hover:opacity-30 transition-opacity rounded-3xl"></div>
              <img
                src="https://files.catbox.sh/0v7t5k.png"
                alt="Azarudeen"
                className="relative rounded-3xl w-full border-2 border-primary/30 shadow-custom-lg group-hover:scale-105 transition-transform duration-500"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-bold text-gradient-primary">
                Passionate Backend Developer | Laravel Specialist
              </h3>
              <p className="text-graytext text-lg leading-relaxed">
                I'm a dedicated <strong className="text-foreground">Backend Web Developer</strong> with{' '}
                <strong className="text-foreground">2+ years of professional experience</strong> building scalable,
                secure, and high-performance server-side applications using{' '}
                <strong className="text-foreground">PHP Laravel</strong> and modern backend technologies.
              </p>
              <p className="text-graytext text-lg leading-relaxed">
                Currently based in <strong className="text-foreground">Sharjah, UAE</strong>, I specialize in
                server-side development — from database architecture and API design to business logic implementation
                and server optimization. I've successfully delivered robust backend systems for custom CMS platforms
                and full-featured e-commerce applications.
              </p>
              <p className="text-graytext text-lg leading-relaxed">
                I thrive on solving complex backend challenges with clean, efficient code and am always eager to take
                on new projects that push my server-side development skills forward. My approach combines technical
                excellence with systematic problem-solving to deliver reliable and performant backend solutions.
              </p>
              <Button
                size="lg"
                className="bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 rounded-full px-8 mt-6"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative">
        <div className="absolute inset-0 glass-effect"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black text-gradient-primary mb-4">Skills & Expertise</h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="glass-effect border border-primary/20 p-8 text-center hover:scale-105 hover:shadow-glow-primary transition-all duration-500 group">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`inline-block bg-gradient-to-br ${skill.color} p-4 rounded-2xl mb-6 text-white group-hover:shadow-glow-cyan`}
                  >
                    {skill.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold mb-4 text-foreground">{skill.name}</h3>
                  <div className="text-5xl font-black text-gradient-primary mb-4">{skill.percentage}%</div>
                  <div className="w-full h-3 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.5 + index * 0.1 }}
                      className={`h-full bg-gradient-to-r ${skill.color} relative`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                    </motion.div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black text-gradient-primary mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="glass-effect border border-primary/20 p-8 h-full hover:scale-105 hover:shadow-glow-primary transition-all duration-500 group relative overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity"
                    initial={false}
                  ></motion.div>
                  <h3 className="text-2xl font-bold text-gradient-primary mb-4 relative z-10">
                    <Code className="w-6 h-6 inline mr-2" />
                    {project.title}
                  </h3>
                  <p className="text-graytext leading-relaxed mb-6 relative z-10">{project.description}</p>
                  <div className="flex flex-wrap gap-3 relative z-10">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="glass-effect px-4 py-2 rounded-full text-sm font-semibold text-primary border border-primary/30 hover:bg-primary/10 hover:-translate-y-1 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="absolute inset-0 glass-effect"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black text-gradient-primary mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-graytext">Available for Backend Development Opportunities in UAE</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            {[
              { icon: <Mail className="w-8 h-8" />, title: 'Email', content: 'azar78740@gmail.com', link: 'mailto:azar78740@gmail.com' },
              { icon: <Phone className="w-8 h-8" />, title: 'Phone', content: '+971 55 788 3407', link: 'tel:+971557883407' },
              { icon: <MapPin className="w-8 h-8" />, title: 'Location', content: 'Al-naaba, Sharjah, UAE', link: null },
            ].map((contact, index) => (
              <motion.div
                key={contact.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="glass-effect border border-primary/20 p-8 text-center hover:scale-105 hover:shadow-glow-primary transition-all duration-500 group">
                  <div className="inline-block bg-gradient-primary p-4 rounded-2xl mb-4 text-white group-hover:shadow-glow-cyan">
                    {contact.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-foreground">{contact.title}</h4>
                  {contact.link ? (
                    <a href={contact.link} className="text-graytext hover:text-primary transition-colors">
                      {contact.content}
                    </a>
                  ) : (
                    <p className="text-graytext">{contact.content}</p>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center gap-6"
          >
            {[
              { icon: <Linkedin className="w-6 h-6" />, link: 'https://linkedin.com/in/md-azarudeen-m', label: 'LinkedIn' },
              { icon: <Github className="w-6 h-6" />, link: 'https://github.com/yourusername', label: 'GitHub' },
              { icon: <Mail className="w-6 h-6" />, link: 'mailto:azar78740@gmail.com', label: 'Email' },
              { icon: <Send className="w-6 h-6" />, link: 'https://wa.me/971557883407', label: 'WhatsApp' },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -10 }}
                className="glass-effect w-16 h-16 rounded-full flex items-center justify-center border-2 border-primary/30 text-primary hover:bg-gradient-primary hover:text-white hover:shadow-glow-primary transition-all duration-300"
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-primary/10 glass-effect">
        <div className="container mx-auto px-6 text-center">
          <p className="text-graytext mb-2">© 2025 Mohamed Azarudeen M</p>
          <p className="text-graytext">
            Crafted with <span className="text-pink">❤</span> in Sharjah, UAE
          </p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-primary rounded-full flex items-center justify-center text-white shadow-glow-primary hover:scale-110 transition-transform z-50"
        >
          <ArrowUp className="w-6 h-6" />
        </motion.button>
      )}
    </div>
  );
};

export default Index;
