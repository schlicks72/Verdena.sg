import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import verdenaTree from '../assets/bebf6597e16254ec6a193c4f4208d51ea66c8886.png';
import ccoc from '../assets/2e44a174095588209a7d143405b4e651771cbb99.png';
import maskforge from '../assets/c1758f93fed1a9921f5cf29fe778bda06ba45946.png';
import zoomout from '../assets/f0920058df1d2116b868235cd6b521fad6f481e1.png';
import brandGuidelines from '../assets/3f55126ab4be5a53363111be5975ec6628d49600.png';

// Photography images
import photo1 from '../assets/carousel-photography/Image 1.jpg';
import photo2 from '../assets/carousel-photography/Image 2.jpg';
import photo3 from '../assets/carousel-photography/Image 3.jpg';
import photo4 from '../assets/carousel-photography/Image 4.jpg';
import photo5 from '../assets/carousel-photography/Image 5.jpg';
import photo6 from '../assets/carousel-photography/Image 6.jpg';
import photo7 from '../assets/carousel-photography/Image 7.jpg';
import photo8 from '../assets/carousel-photography/Image 8.jpg';
import photo9 from '../assets/carousel-photography/Image 9.jpg';
import photo10 from '../assets/carousel-photography/Image 10.jpg';

const photoImages = [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9, photo10];

// Model car images
import model1 from '../assets/carousel-models/Image 1.jpg';
import model2 from '../assets/carousel-models/Image 2.jpg';
import model3 from '../assets/carousel-models/Image 3.jpg';
import model4 from '../assets/carousel-models/Image 4.jpg';
import model5 from '../assets/carousel-models/Image 5.jpg';
import model6 from '../assets/carousel-models/Image 6.jpg';
import model7 from '../assets/carousel-models/Image 7.jpg';
import model8 from '../assets/carousel-models/Image 8.jpg';
import model9 from '../assets/carousel-models/Image 9.jpg';
import model10 from '../assets/carousel-models/Image 10.jpg';

const modelImages = [model1, model2, model3, model4, model5, model6, model7, model8, model9, model10];

// Watch images
import watch1 from '../assets/carousel-watches/Watch 1.jpeg';
import watch2 from '../assets/carousel-watches/Watch 2.jpeg';
import watch3 from '../assets/carousel-watches/Watch 3.jpeg';
import watch4 from '../assets/carousel-watches/Watch 4.jpeg';
import watch5 from '../assets/carousel-watches/Watch 5.jpeg';
import watch6 from '../assets/carousel-watches/Watch 6.jpeg';
import watch7 from '../assets/carousel-watches/Watch 7.jpeg';
import watch8 from '../assets/carousel-watches/Watch 8.jpeg';
import watch9 from '../assets/carousel-watches/Watch 9.jpeg';
import watch10 from '../assets/carousel-watches/Watch 10.jpeg';

const watchImages = [watch1, watch2, watch3, watch4, watch5, watch6, watch7, watch8, watch9, watch10];

// Pick a random hero photo once on page load
// Portrait
import portraitBW from '../assets/CS Pic (B&W).jpg';

const heroPhoto = photoImages[Math.floor(Math.random() * photoImages.length)];

import { ArrowUpRight, Mail, Linkedin, MessageCircle, X, ChevronDown } from 'lucide-react';
import * as Dialog from '@radix-ui/react-dialog';
import ChatDrawer from './components/ChatDrawer';
import ContactForm from './components/ContactForm';

export default function App() {
  const heroRef = useRef(null);
  const [chatOpen, setChatOpen] = useState(false);
  const [careerExpanded, setCareerExpanded] = useState(false);
  const [educationExpanded, setEducationExpanded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="min-h-screen bg-[#fafafa] text-[#1a1a1a]">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#e0e0e0]"
      >
        <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src={verdenaTree} alt="Verdena" className="h-10 w-10 object-contain" />
          </div>
          <div className="flex gap-8 items-center">
            <a href="#about" className="text-sm font-medium hover:text-[#53354a] transition-colors">About</a>
            <a href="#work" className="text-sm font-medium hover:text-[#53354a] transition-colors">Current Work</a>
            <a href="#projects" className="text-sm font-medium hover:text-[#53354a] transition-colors">Projects</a>
            <a href="#creative" className="text-sm font-medium hover:text-[#53354a] transition-colors">Creative</a>
            <button
              onClick={() => setChatOpen(true)}
              className="text-sm font-medium hover:text-[#53354a] transition-colors flex items-center gap-1"
            >
              <MessageCircle className="w-4 h-4" />
              Talk to me
            </button>
            <a href="#contact" className="bg-[#53354a] text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-[#6b4460] transition-colors">
              Connect
            </a>
          </div>
        </div>
      </motion.nav>

      {/* Hero - Full bleed with image */}
      <section ref={heroRef} className="relative min-h-screen flex items-end" style={{ position: 'relative' }}>
        {/* Background Image with Parallax */}
        <motion.div
          style={{ y: heroY }}
          className="absolute inset-0 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-10" />
          <img
            src={heroPhoto}
            alt="Photography by Caspar Schlickum"
            className="w-full h-full object-cover scale-110"
          />
        </motion.div>

        {/* Hero Content */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-20 w-full pb-32 pt-40"
        >
          <div className="max-w-7xl mx-auto px-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="max-w-4xl"
            >
              <div className="flex items-center gap-4 mb-8">
                <img src={verdenaTree} alt="Verdena Tree" className="h-16 w-16 brightness-0 invert opacity-90" />
                <div className="h-16 w-px bg-white/40" />
                <span className="text-white/80 text-lg font-medium">Verdena</span>
              </div>

              <h1 className="text-7xl md:text-9xl font-black text-white mb-8 tracking-tight leading-[0.9]">
                Growth<br />
                at the intersection of strategy, technology and creativity
              </h1>

              <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl leading-relaxed">
                30+ years leading businesses across EMEA and Asia Pacific, grounded by a constant return to my growing list of creative passions.
              </p>

              <div className="flex gap-4">
                <a
                  href="#projects"
                  className="bg-white text-[#53354a] px-8 py-4 rounded-full hover:bg-white/90 transition-all font-bold inline-flex items-center gap-2 group"
                >
                  See my work
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
                <button
                  onClick={() => setChatOpen(true)}
                  className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-[#53354a] transition-all font-bold inline-flex items-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Talk to me
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20"
        >
          <ChevronDown className="w-8 h-8 text-white/60 animate-bounce" />
        </motion.div>
      </section>

      {/* About - Split Editorial Layout */}
      <section id="about" className="relative z-10 pt-32 pb-16 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-16 items-center"
          >
            {/* Left: Image */}
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-2xl">
                <img
                  src={portraitBW}
                  alt="Caspar Schlickum"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 opacity-20">
                <img src={verdenaTree} alt="" className="w-full h-full object-contain" />
              </div>
            </div>

            {/* Right: Content */}
            <div className="space-y-8">
              <div>
                <span className="text-[#53354a] font-bold text-sm tracking-wider uppercase mb-4 block">
                  Who I am
                </span>
                <h2 className="text-5xl md:text-6xl font-black text-[#1a1a1a] mb-6 leading-tight">
                  A bit about me and what I do.
                </h2>
              </div>

              <div className="space-y-6 text-lg leading-relaxed text-[#4a4a4a]">
                <p>
                  I'm a business leader and entrepreneur with <strong className="text-[#1a1a1a]">30+ years of experience</strong> across EMEA and APAC, with a passion for bringing technology and creativity to strategy.
                </p>
                <p>
                  From co-founding one of the world's first programmatic media platforms (Xaxis) to leading large EMEA and APAC practices at Accenture and WPP, I've spent my career helping companies in the technology and creative industries accelerate growth.
                </p>
                <p>
                  I founded <strong className="text-[#53354a]">Verdena</strong> in 2025 to help organizations across Asia Pacific align technology and strategy with commercial strategy and real-world execution.
                </p>
                <p className="italic text-[#53354a] border-l-4 border-[#53354a] pl-6">
                  That's all well and good – but you should check out the projects I'm working on now. They are really cool.
                </p>
              </div>

              {/* Career Toggle */}
              <button
                onClick={() => setCareerExpanded(!careerExpanded)}
                className="flex items-center gap-2 text-[#53354a] font-semibold hover:gap-4 transition-all group"
              >
                <span>View career timeline</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>

              {careerExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-4 pt-6 border-t border-[#e0e0e0]"
                >
                  <CareerItem
                    role="Managing Director, Enterprise B2B Practice Lead"
                    company="Accenture Song APAC"
                    years="2019–2025"
                  />
                  <CareerItem
                    role="CEO, APAC"
                    company="Wunderman (WPP)"
                    years="2016–2019"
                  />
                  <CareerItem
                    role="Co-Founder & CEO, EMEA"
                    company="Xaxis (WPP)"
                    years="2010–2016"
                  />
                  <CareerItem
                    role="Partner"
                    company="Mindshare Worldwide (WPP)"
                    years="2006–2010"
                  />
                  <CareerItem
                    role="Vice President, Project Finance & Advisory Practice"
                    company="Deutsche Bank Australia"
                    years="1995–2003"
                  />
                </motion.div>
              )}

              {/* Education Toggle */}
              <button
                onClick={() => setEducationExpanded(!educationExpanded)}
                className="flex items-center gap-2 text-[#53354a] font-semibold hover:gap-4 transition-all group"
              >
                <span>View education</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>

              {educationExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-4 pt-6 border-t border-[#e0e0e0]"
                >
                  <CareerItem
                    role="Transform Your Business with AI"
                    company="INSEAD"
                    years="2025–2026"
                  />
                  <CareerItem
                    role="Mini MBA in Marketing"
                    company="Mark Ritson / MiniMBA"
                    years="2025–2026"
                  />
                  <CareerItem
                    role="Blockchain Strategy Programme"
                    company="Saïd Business School, University of Oxford"
                    years="2022"
                  />
                  <CareerItem
                    role="MBA"
                    company="London Business School (exchange at Kellogg, Northwestern)"
                    years="2003–2005"
                  />
                  <CareerItem
                    role="Graduate Diploma in Applied Finance"
                    company="Securities Institute of Australia"
                    years="1996–2000"
                  />
                  <CareerItem
                    role="Bachelor of Economics (Hons)"
                    company="Monash University, Melbourne"
                    years="1992–1995"
                  />
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Current Work - Professional Focus */}
      <section id="work" className="relative z-10 pt-20 pb-32 bg-[#fafafa] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-16">
              <span className="text-[#53354a] font-bold text-sm tracking-wider uppercase mb-4 block">
                Current Work
              </span>
              <h2 className="text-5xl md:text-6xl font-black text-[#1a1a1a] mb-6 leading-tight max-w-4xl">
                Advisory, board roles, and strategic consulting
              </h2>
              <p className="text-xl text-[#4a4a4a] max-w-3xl">
                Today, I work with organisations and leadership teams across Asia Pacific to unlock growth.
              </p>
            </div>

            <div className="space-y-12 mb-12">
              <WorkPanel
                title="Verdena"
                role="Founder & Principal"
                description="Strategic consulting for businesses across APAC. Aligning technology and strategy with commercial strategy and real-world execution."
                highlights={["Growth Strategy", "Data & Technology", "Commercial Execution"]}
                image={photo7}
              />

              <WorkPanel
                title="The Scale Factory"
                role="Advisor"
                description="Helping industrial technology brands from North America and Europe scale and grow across Asia Pacific through strategic advisory, go-to-market acceleration, and operational excellence."
                highlights={["APAC Expansion", "Client Growth", "Market Strategy"]}
                image={photo8}
                reversed
              />

              <WorkPanel
                title="The Marketing Society"
                role="Board Member (Singapore Chapter)"
                description="Contributing to the advancement of marketing leadership and practice across the industry through governance and strategic direction."
                highlights={["Industry Leadership", "Professional Development", "Strategic Governance"]}
                image={photo9}
              />
            </div>

            {/* Additional Advisory */}
            <div className="bg-white rounded-3xl p-10 border border-[#e0e0e0] shadow-sm">
              <h3 className="text-2xl font-black text-[#1a1a1a] mb-6">Additional Advisory Work</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="font-semibold text-[#53354a] mb-2">WGI Singapore – Advisory Board Member</p>
                  <p className="text-[#4a4a4a]">Founded by the then 14-year old Chance Wilson who had seen the impact of illiteracy on kids around him, WGI helps promote literacy now in seven countries around the world through a variety of engagements.</p>
                </div>
                <div>
                  <p className="font-semibold text-[#53354a] mb-2">Industry Speaking & Writing</p>
                  <p className="text-[#4a4a4a]">Author, keynote speaker, and panelist on AI, technology and creativity, and their impact on business growth.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects - Immersive Cards */}
      <section id="projects" className="pt-20 pb-16 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-16">
              <span className="text-[#53354a] font-bold text-sm tracking-wider uppercase mb-4 block">
                Projects
              </span>
              <h2 className="text-5xl md:text-6xl font-black text-[#1a1a1a] mb-6 leading-tight max-w-3xl">
                Bringing my ideas (and procrastinations) to life
              </h2>
              <p className="text-xl text-[#4a4a4a] max-w-2xl">
                I love that with technology today, it no longer matters if I am procrastinating or building. Being lazy or being efficient. The lines have blurred to the point that they no longer exist. Here are some of the projects I am spending time on right now, from writing books, to building products.
              </p>
            </div>

            <div className="space-y-12">
              <ImmersiveProjectCard
                image={maskforge}
                title="MaskForge.ai"
                category="AI × Motorcycles"
                description="AI-powered platform that creates custom decals for motorcycles. Everyone hates their OBU (it's a Singapore thing!). With Maskforge.ai you can create a generative design that is unique to your bike and style."
                url="https://maskforge.ai"
                stats={["AI Design Tool", "Custom Decals", "Live Platform"]}
                imageContain
              />

              <ImmersiveProjectCard
                image={ccoc}
                title="Caspar's Cabinet of Curiosities"
                category="AI × Curation & Discovery"
                description="A curated repository of things I find interesting, meaningful, and worth sharing. My own personal digital cabinet of wonder."
                url="https://www.ccoc.info"
                stats={["Weekly Updates", "Curated Collection", "Live Site"]}
                reversed
              />

              <ImmersiveProjectCard
                image={zoomout}
                title="ZoomOut Project"
                category="Education × Future of work"
                description="A series of picture-story books that inspire and engage kids around the future and structure of work. Building context early."
                url="https://zoomoutproject.com"
                stats={["Picture Books", "Work & Future", "In Development"]}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Creative Work - Gallery */}
      <section id="creative" className="pt-20 pb-16 bg-[#fafafa] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-16">
              <span className="text-[#53354a] font-bold text-sm tracking-wider uppercase mb-4 block">
                Creativity
              </span>
              <h2 className="text-5xl md:text-6xl font-black text-[#1a1a1a] mb-6 leading-tight max-w-3xl">
                Craft and patience
              </h2>
              <p className="text-xl text-[#4a4a4a] max-w-2xl">
                AI is enabling me to create business and products like I could never have done before. But for me that makes it more important than ever to dedicated some of my time to creating things in the "real world".
              </p>
            </div>

            {/* Three Panel Carousels - Staggered like projects */}
            <div className="space-y-12">
              <CreativePanel
                images={photoImages}
                title="Photography"
                description="Travel, architecture, landscapes, and street photography. There's something satisfying about finding the right frame, the moment where light, place, and timing align."
                url="https://schlicks.com"
                linkText="View photography portfolio"
                intervalMs={4000}
              />

              <CreativePanel
                images={modelImages}
                title="Model Cars"
                description="1:24 scale builds. Meditative, precise, and nerdy in the best way. Hours spent getting tiny details right, with no Ctrl-Z. The perfect counterbalance to the digital world."
                url="https://bc4fmodels.com"
                linkText="View model car gallery"
                intervalMs={4000}
                offsetMs={1300}
                reversed
              />

              <CreativePanel
                images={watchImages}
                title="Watches"
                description="A passion for watches, their engineering, the design, the history behind each piece. I photograph the ones I find most interesting and share them on my watch blog."
                url="https://www.instagram.com/watch_schlicks/"
                linkText="View my watch blog"
                intervalMs={4000}
                offsetMs={2600}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Investments */}
      <section id="investments" className="pt-20 pb-16 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-16">
              <span className="text-[#53354a] font-bold text-sm tracking-wider uppercase mb-4 block">
                Investments
              </span>
              <h2 className="text-5xl md:text-6xl font-black text-[#1a1a1a] mb-6 leading-tight max-w-3xl">
                Backing founders and ideas I believe in
              </h2>
              <p className="text-xl text-[#4a4a4a] max-w-2xl">
                I invest in people and businesses across technology, food, and experience: founders with conviction and ideas worth backing.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              <InvestmentCard
                name="375ai"
                description="Decentralised edge data intelligence network leveraging AI and blockchain."
                since="2022"
              />
              <InvestmentCard
                name="CogX"
                description="AI and leadership knowledge platform connecting the world's top thinkers."
                since="2019"
              />
              <InvestmentCard
                name="TiNDLE Foods (exited)"
                description="Plant-based food company on a mission to make sustainable eating delicious."
                since="2021"
              />
              <InvestmentCard
                name="Fira BeachClub Group"
                description="Experience-led hospitality brand in Phuket, Thailand — and the only investment I have made where I can drink a beer and watch my favourite DJs."
                since="2024"
                role="Investor & Advisor"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Chat CTA Section */}
      <section className="pt-20 pb-16 bg-[#fafafa]">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white rounded-3xl p-16 shadow-xl border border-[#e0e0e0]">
              <div className="bg-[#53354a]/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8">
                <MessageCircle className="w-10 h-10 text-[#53354a]" />
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-[#1a1a1a] mb-6">
                Want to talk?
              </h2>
              <p className="text-xl text-[#4a4a4a] mb-10 max-w-2xl mx-auto leading-relaxed">
                Chat with an AI version of me. No telling what it's going to tell you! Ask about my work, get my take on a topic, or explore ideas together.
              </p>
              <button
                onClick={() => setChatOpen(true)}
                className="bg-[#53354a] text-white px-10 py-5 rounded-full hover:bg-[#6b4460] transition-all font-bold text-lg inline-flex items-center gap-3 group"
              >
                <MessageCircle className="w-6 h-6" />
                Start a conversation
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="pt-20 pb-16 bg-[#53354a] text-white scroll-mt-24">
        <div className="max-w-4xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-12">
              <img src={verdenaTree} alt="Verdena Tree" className="h-20 w-20 mx-auto mb-8 brightness-0 invert opacity-80" />
              <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">Let's connect</h2>
              <p className="text-xl mb-4 opacity-90 max-w-2xl mx-auto">
                Whether you're looking for advisory support, want to discuss a project, or just want to say hello — I'd love to hear from you.
              </p>
            </div>

            <ContactForm />

            <div className="flex gap-6 justify-center flex-wrap mt-12 pt-12 border-t border-white/20">
              <a
                href="mailto:caspar.schlickum@verdena.sg"
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors text-sm group"
              >
                <Mail className="w-4 h-4" />
                caspar.schlickum@verdena.sg
              </a>
              <a
                href="https://www.linkedin.com/in/casparschlickum"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors text-sm group"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
              <span className="text-white/50 text-sm">Singapore</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] text-white py-12">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <img src={verdenaTree} alt="Verdena" className="h-12 w-12 brightness-0 invert opacity-60" />
              <div className="text-left">
                <p className="font-bold text-sm">Verdena Pte Ltd</p>
                <p className="text-xs opacity-60">Growing businesses across APAC</p>
              </div>
            </div>

            <div className="flex gap-8 text-sm opacity-75">
              <a href="#about" className="hover:opacity-100 transition-opacity">About</a>
              <a href="#work" className="hover:opacity-100 transition-opacity">Work</a>
              <a href="#projects" className="hover:opacity-100 transition-opacity">Projects</a>
              <a href="#creative" className="hover:opacity-100 transition-opacity">Creative</a>
              <a href="#contact" className="hover:opacity-100 transition-opacity">Contact</a>
            </div>

            <p className="text-xs opacity-60">© 2026 Verdena. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating Chat Button */}
      <motion.button
        onClick={() => setChatOpen(true)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-8 right-8 bg-[#53354a] text-white px-6 py-4 rounded-full shadow-2xl hover:shadow-[#53354a]/50 transition-shadow z-50 flex items-center gap-3 font-bold"
      >
        <MessageCircle className="w-5 h-5" />
        <span>Talk to me</span>
      </motion.button>

      {/* Chat Drawer */}
      <ChatDrawer open={chatOpen} onOpenChange={setChatOpen} />
    </div>
  );
}

// Career Item Component
function CareerItem({ role, company, years }: { role: string; company: string; years: string }) {
  return (
    <div className="flex justify-between items-start py-3 border-b border-[#e0e0e0] last:border-0">
      <div>
        <p className="font-semibold text-[#1a1a1a]">{role}</p>
        <p className="text-sm text-[#4a4a4a]">{company}</p>
      </div>
      <span className="text-sm text-[#53354a] font-medium">{years}</span>
    </div>
  );
}

// Immersive Project Card Component
function ImmersiveProjectCard({
  image,
  title,
  category,
  description,
  url,
  stats,
  reversed = false,
  imageContain = false,
}: {
  image: string;
  title: string;
  category: string;
  description: string;
  url: string;
  stats: string[];
  reversed?: boolean;
  imageContain?: boolean;
}) {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className={`group grid md:grid-cols-2 gap-8 items-center bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ${
        reversed ? 'md:grid-flow-dense' : ''
      }`}
    >
      <div className={`aspect-[16/10] overflow-hidden ${reversed ? 'md:col-start-2' : ''}`}>
        <img
          src={image}
          alt={title}
          className={`w-full h-full ${imageContain ? 'object-contain' : 'object-cover'} group-hover:scale-110 transition-transform duration-700`}
        />
      </div>

      <div className={`p-10 ${reversed ? 'md:col-start-1 md:row-start-1' : ''}`}>
        <span className="text-[#53354a] font-bold text-xs tracking-widest uppercase mb-3 block">
          {category}
        </span>
        <h3 className="text-3xl font-black text-[#1a1a1a] mb-4 group-hover:text-[#53354a] transition-colors">
          {title}
        </h3>
        <p className="text-[#4a4a4a] leading-relaxed mb-6">{description}</p>

        <div className="flex gap-3 flex-wrap mb-6">
          {stats.map((stat, i) => (
            <span
              key={i}
              className="text-xs font-medium bg-[#53354a]/10 text-[#53354a] px-3 py-1 rounded-full"
            >
              {stat}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-2 text-[#53354a] font-bold group-hover:gap-4 transition-all">
          <span>Visit project</span>
          <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </div>
      </div>
    </motion.a>
  );
}

// Work Panel Component - split editorial layout
function WorkPanel({
  title,
  role,
  description,
  highlights,
  image,
  reversed = false,
}: {
  title: string;
  role: string;
  description: string;
  highlights: string[];
  image: string;
  reversed?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className={`group grid md:grid-cols-2 gap-8 items-start bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ${
        reversed ? 'md:grid-flow-dense' : ''
      }`}
    >
      <div className={`aspect-[16/10] overflow-hidden ${reversed ? 'md:col-start-2' : ''}`}>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
      </div>

      <div className={`p-10 flex flex-col justify-between h-full ${reversed ? 'md:col-start-1 md:row-start-1' : ''}`}>
        <div>
          <span className="text-[#53354a] font-bold text-xs tracking-widest uppercase mb-3 block">
            {role}
          </span>
          <h3 className="text-3xl font-black text-[#1a1a1a] mb-4 group-hover:text-[#53354a] transition-colors">
            {title}
          </h3>
          <p className="text-[#4a4a4a] leading-relaxed mb-6">{description}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {highlights.map((highlight, i) => (
            <span
              key={i}
              className="text-xs font-medium bg-[#53354a]/10 text-[#53354a] px-3 py-1 rounded-full"
            >
              {highlight}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// Creative Carousel Component - crossfades through images
function CreativeCarousel({
  images,
  intervalMs = 4000,
  offsetMs = 0,
}: {
  images: string[];
  intervalMs?: number;
  offsetMs?: number;
}) {
  const [index, setIndex] = useState(0);
  const [started, setStarted] = useState(offsetMs === 0);

  useEffect(() => {
    if (offsetMs > 0) {
      const timeout = setTimeout(() => setStarted(true), offsetMs);
      return () => clearTimeout(timeout);
    }
  }, [offsetMs]);

  useEffect(() => {
    if (!started) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, intervalMs);
    return () => clearInterval(timer);
  }, [started, images.length, intervalMs]);

  return (
    <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-lg relative bg-[#1a1a1a]">
      <AnimatePresence mode="sync">
        <motion.img
          key={index}
          src={images[index]}
          alt="Creative work"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>
      {/* Progress dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              i === index ? 'bg-white w-4' : 'bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

// Investment Card Component
function InvestmentCard({
  name,
  description,
  since,
  role = 'Investor',
  logo,
}: {
  name: string;
  description: string;
  since: string;
  role?: string;
  logo?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="bg-[#fafafa] rounded-2xl p-8 border border-[#e0e0e0] hover:border-[#53354a] hover:shadow-lg transition-all duration-300 group flex flex-col"
    >
      {logo ? (
        <div className="h-12 mb-6 flex items-center">
          <img src={logo} alt={name} className="h-full w-auto object-contain" />
        </div>
      ) : (
        <div className="h-12 mb-6 flex items-center">
          <span className="text-2xl font-black text-[#1a1a1a] group-hover:text-[#53354a] transition-colors">{name}</span>
        </div>
      )}
      <p className="text-[#4a4a4a] leading-relaxed mb-6 flex-1 text-sm">{description}</p>
      <div className="flex justify-between items-center text-xs">
        <span className="font-medium text-[#53354a] bg-[#53354a]/10 px-3 py-1 rounded-full">{role}</span>
        <span className="text-[#4a4a4a]">Since {since}</span>
      </div>
    </motion.div>
  );
}

// Creative Panel Component - staggered layout with carousel
function CreativePanel({
  images,
  title,
  description,
  url,
  linkText,
  intervalMs = 4000,
  offsetMs = 0,
  reversed = false,
}: {
  images: string[];
  title: string;
  description: string;
  url: string;
  linkText: string;
  intervalMs?: number;
  offsetMs?: number;
  reversed?: boolean;
}) {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className={`group grid md:grid-cols-2 gap-8 items-center bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ${
        reversed ? 'md:grid-flow-dense' : ''
      }`}
    >
      <div className={`${reversed ? 'md:col-start-2' : ''}`}>
        <CreativeCarousel images={images} intervalMs={intervalMs} offsetMs={offsetMs} />
      </div>

      <div className={`p-10 ${reversed ? 'md:col-start-1 md:row-start-1' : ''}`}>
        <h3 className="text-3xl font-black text-[#1a1a1a] mb-4 group-hover:text-[#53354a] transition-colors">
          {title}
        </h3>
        <p className="text-[#4a4a4a] leading-relaxed mb-6">{description}</p>
        <div className="flex items-center gap-2 text-[#53354a] font-bold group-hover:gap-4 transition-all">
          <span>{linkText}</span>
          <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </div>
      </div>
    </motion.a>
  );
}