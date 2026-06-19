import { motion, AnimatePresence } from "motion/react";
import { Heart, Info, BookOpen, MessageCircle, Puzzle, Sun, Users, Menu, X, Star, Sparkles, Instagram, Facebook, Youtube } from "lucide-react";
import React, { useState, useEffect, ReactNode } from "react";
import heroImage from "./assets/images/regenerated_image_1781743310131.jpg";
import storyImage from "./assets/images/regenerated_image_1781744502725.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "py-2 px-4" : "py-6 px-6"}`}>
      <nav className={`mx-auto max-w-7xl flex items-center justify-between glass-nav rounded-[2rem] px-6 py-3 ${isScrolled ? "shadow-lg" : ""}`}>
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-brand-blue rounded-2xl flex items-center justify-center text-white shadow-lg rotate-3 hover:rotate-0 transition-transform">
            <Puzzle size={24} />
          </div>
          <span className="font-kids text-2xl font-bold text-brand-blue-dark">Mundo Azul</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-600 font-kids">
          <a href="#inicio" className="hover:text-brand-blue transition-colors">Início</a>
          <a href="#sobre" className="hover:text-brand-blue transition-colors">História</a>
          <a href="#recursos" className="hover:text-brand-blue transition-colors">Dicas</a>
          <div className="flex items-center gap-3 border-l pl-6 border-slate-200">
             <a href="https://instagram.com/ianzinhopaterraoficial" target="_blank" className="text-slate-400 hover:text-brand-blue transition-colors"><Instagram size={20} /></a>
             <a href="https://wa.me" target="_blank" className="text-slate-400 hover:text-green-500 transition-colors"><MessageCircle size={20} /></a>
          </div>
          <a href="#comunidade" className="blob-button bg-brand-blue text-white hover:bg-brand-blue-dark !py-2 !px-6 shadow-brand-blue/20">
            Participar
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-slate-600 hover:text-brand-blue transition-colors"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-4 right-4 bg-white/95 backdrop-blur-2xl rounded-[2.5rem] p-8 shadow-2xl z-40 border border-brand-blue/10 md:hidden"
          >
            <div className="flex flex-col gap-6 text-center font-kids text-xl font-bold">
              <a href="#inicio" onClick={() => setIsMenuOpen(false)} className="text-slate-700 hover:text-brand-blue">Início</a>
              <a href="#sobre" onClick={() => setIsMenuOpen(false)} className="text-slate-700 hover:text-brand-blue">Nossa História</a>
              <a href="#recursos" onClick={() => setIsMenuOpen(false)} className="text-slate-700 hover:text-brand-blue">Recursos</a>
              <a href="#comunidade" onClick={() => setIsMenuOpen(false)} className="blob-button bg-brand-blue text-white inline-block">Comunidade</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Hero = () => (
  <section id="inicio" className="relative min-h-screen flex items-center pt-32 pb-12 px-4 md:px-6 overflow-hidden bg-brand-blue-light/30">
    {/* Animated Background Circles */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-brand-blue/5 rounded-full blur-3xl -z-10" />
    <motion.div 
      animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
      transition={{ duration: 8, repeat: Infinity }}
      className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-yellow/20 rounded-full blur-3xl -z-10" 
    />

    <div className="mx-auto max-w-7xl w-full">
      <div className="flex flex-col items-center text-center mb-16 md:mb-24">
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="relative mb-12"
        >
          {/* The Spotlight Circle */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
            <div className="absolute inset-0 bg-brand-blue rounded-full animate-ping opacity-20" />
            <div className="absolute -inset-4 bg-gradient-to-tr from-brand-blue via-brand-yellow to-brand-pink rounded-full p-2 shadow-2xl">
              <div className="w-full h-full bg-white rounded-full p-2 overflow-hidden">
                <img 
                  src={heroImage} 
                  alt="Meu Pequeno Herói" 
                  className="w-full h-full object-cover object-center rounded-full"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            {/* Playful Stickers around photo */}
            <motion.div 
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute -top-4 -right-4 w-16 h-16 bg-brand-yellow rounded-2xl flex items-center justify-center shadow-lg border-4 border-white"
            >
              <Star className="text-orange-500 fill-orange-500" size={32} />
            </motion.div>
            <div className="absolute -bottom-2 -left-4 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-white">
              <Heart className="text-[#5a8cd7] fill-[#5a8cd7]" size={24} />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-white rounded-full shadow-sm text-brand-blue-dark font-kids font-bold text-sm mb-8 border border-brand-blue/10">
            <Sparkles size={18} className="text-brand-yellow" /> ESPAÇO DEDICADO AO MEU FILHO
          </div>
          <h1 className="text-5xl md:text-8xl font-black mb-8 text-slate-900 leading-tight font-kids tracking-tighter">
            Um mundo de <span className="text-brand-blue underline decoration-brand-yellow decoration-8 underline-offset-8">cores</span> e histórias.
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-12 leading-relaxed font-medium max-w-2xl mx-auto italic">
            Transformando o autismo em uma jornada extraordinária de amor, descoberta e muita superação a cada dia.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="#sobre" className="blob-button bg-brand-blue text-white py-5 px-12 shadow-brand-blue/40 flex items-center justify-center gap-3">
              Conheça Nossa História <Heart size={20} fill="white" />
            </a>
            <a href="#recursos" className="blob-button bg-white text-slate-700 border-2 border-slate-100 py-5 px-12 hover:border-brand-yellow transition-all flex items-center justify-center gap-3">
              Dicas e Apoio <BookOpen size={20} />
            </a>
          </div>
        </motion.div>
      </div>
    </div>

    {/* Floating Icons Background */}
    <div className="absolute top-1/2 left-10 md:left-24 text-brand-blue/20 rotate-12 -z-10 hidden lg:block">
      <Puzzle size={80} />
    </div>
    <div className="absolute bottom-20 right-20 text-brand-yellow/30 -rotate-12 -z-10 hidden lg:block">
      <Sun size={120} />
    </div>
  </section>
);

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  desc: string;
  color: string;
  key?: React.Key;
}

const FeatureCard = ({ icon, title, desc, color }: FeatureCardProps) => (
  <motion.div 
    whileHover={{ y: -10, rotate: 1 }}
    className="kid-card h-full"
  >
    <div className={`w-16 h-16 ${color} rounded-3xl flex items-center justify-center mb-6 shadow-sm`}>
      {icon}
    </div>
    <h3 className="text-2xl font-black mb-3 font-kids">{title}</h3>
    <p className="text-slate-600 leading-relaxed font-medium">{desc}</p>
  </motion.div>
);

const Features = () => {
  const items = [
    {
      icon: <Info className="text-brand-blue-dark" size={32} />,
      title: "O que é o TEA?",
      desc: "Guia simplificado para pais que acabaram de receber o diagnóstico, focado no acolhimento.",
      color: "bg-brand-blue-light"
    },
    {
      icon: <Puzzle className="text-brand-blue-dark" size={32} />,
      title: "Dicas de Estímulo",
      desc: "Atividades lúdicas de baixo custo para fazer em casa e estimular o desenvolvimento sensorial.",
      color: "bg-brand-yellow/30"
    },
    {
      icon: <Users className="text-brand-blue-dark" size={32} />,
      title: "Rede de Carinho",
      desc: "Conecte-se com outros pais e profissionais para trocar experiências reais sem julgamentos.",
      color: "bg-brand-mint"
    }
  ];

  return (
    <section id="recursos" className="py-24 px-4 md:px-6 bg-white relative">
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-brand-warm to-white" />
      <div className="mx-auto max-w-7xl pt-12">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black mb-4 font-kids text-slate-900"
          >
            Vamos brincar e <span className="text-brand-blue">aprender</span>?
          </motion.h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto font-medium">Recursos preparados com todo o amor do mundo para ajudar o seu pequeno a brilhar.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <FeatureCard 
              key={i} 
              icon={item.icon} 
              title={item.title} 
              desc={item.desc} 
              color={item.color} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const StorySection = () => (
  <section id="sobre" className="py-24 px-4 md:px-6 bg-brand-warm/30 overflow-hidden">
    <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 items-center">
      <div className="relative group p-4">
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="aspect-square rounded-[3.5rem] overflow-hidden bg-white shadow-2xl relative border-4 border-white"
        >
          <img 
            src={storyImage} 
            alt="História do meu pequeno - Autismo" 
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        {/* Decorations */}
        <div className="absolute -top-8 -left-8 w-32 h-32 bg-brand-yellow rounded-full -z-10 blur-2xl opacity-60" />
        <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-brand-blue rounded-full -z-10 blur-2xl opacity-40" />
      </div>

      <div className="space-y-8">
        <div className="inline-block px-4 py-1 bg-brand-pink text-pink-700 rounded-full font-bold text-sm uppercase tracking-widest">
          Nossa História
        </div>
        <h2 className="text-4xl md:text-6xl font-black font-kids text-slate-900 leading-tight">O que aprendi com o <span className="text-brand-blue">meu herói</span>.</h2>
        <div className="space-y-6 text-lg md:text-xl text-slate-600 font-medium leading-relaxed">
          <p>
            Quando o diagnóstico chegou, confesso que houve medo. Mas logo esse medo foi substituído por uma vontade gigante de entender aquele universo particular.
          </p>
          <p>
            Aprendi que o silêncio fala, que o balançar das mãos é alegria e que o tempo do meu filho é o tempo mais precioso que existe.
          </p>
          <div className="flex gap-4 p-6 bg-white rounded-[2rem] border-2 border-brand-yellow/50 shadow-sm relative">
             <Heart className="text-brand-blue shrink-0 animate-bounce" size={28} fill="#38bdf8" />
             <p className="text-brand-blue-dark font-bold italic font-kids text-lg">
                "Não é sobre cura, é sobre amor, paciência e aceitação total."
             </p>
             <div className="absolute -top-3 -right-3 w-8 h-8 bg-brand-yellow rounded-full flex items-center justify-center">
                <Sparkles size={16} className="text-orange-500" />
             </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="pt-24 pb-12 px-4 md:px-6 bg-slate-900 text-white rounded-t-[4rem] relative overflow-hidden">
    {/* Background blobs in footer */}
    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/10 rounded-full blur-3xl" />
    <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-yellow/5 rounded-full blur-3xl" />

    <div className="mx-auto max-w-7xl relative">
      <div className="grid md:grid-cols-3 gap-12 mb-16">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <Puzzle className="text-brand-blue" size={32} />
            <span className="font-kids text-3xl font-bold">Mundo Azul</span>
          </div>
          <p className="text-slate-400 font-medium leading-relaxed italic">
            Um cantinho de afeto e informação para quem caminha lado a lado com o Transtorno do Espectro Autista.
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-8 md:col-span-2">
          <div className="space-y-4">
            <h4 className="font-kids text-xl text-brand-blue">Links Felizes</h4>
            <ul className="space-y-2 text-slate-400 font-medium font-kids">
              <li><a href="#inicio" className="hover:text-white transition-colors">Início</a></li>
              <li><a href="#sobre" className="hover:text-white transition-colors">Nossa História</a></li>
              <li><a href="#recursos" className="hover:text-white transition-colors">Recursos</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-kids text-xl text-brand-yellow">Nossa Rede</h4>
            <ul className="space-y-2 text-slate-400 font-medium font-kids">
              <li><a href="mailto:oi@mundoazul.kids" className="hover:text-white transition-colors">E-mail: oi@mundoazul.kids</a></li>
              <li><a href="https://instagram.com/ianzinhopaterraoficial" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram: @ianzinhopaterraoficial</a></li>
              <li><a href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">WhatsApp da Comunidade</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-sm font-medium">
        <p className="text-center md:text-left">© 2026 Mundo Azul. Feito com muito carinho para todos os pequenos.</p>
        <div className="flex gap-4">
          <motion.a 
            href="https://instagram.com/ianzinhopaterraoficial" 
            target="_blank"
            whileHover={{ scale: 1.1, y: -2 }} 
            className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-brand-blue hover:text-white transition-all"
          >
            <Instagram size={24} />
          </motion.a>
          <motion.a 
            href="https://facebook.com" 
            target="_blank"
            whileHover={{ scale: 1.1, y: -2 }} 
            className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-brand-blue hover:text-white transition-all"
          >
            <Facebook size={24} />
          </motion.a>
          <motion.a 
            href="https://youtube.com" 
            target="_blank"
            whileHover={{ scale: 1.1, y: -2 }} 
            className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-brand-blue hover:text-white transition-all"
          >
            <Youtube size={24} />
          </motion.a>
          <motion.a 
            href="https://wa.me" 
            target="_blank"
            whileHover={{ scale: 1.1, y: -2 }} 
            className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-green-500 hover:text-white transition-all"
          >
            <MessageCircle size={24} />
          </motion.a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-blue selection:text-white font-sans bg-brand-warm/10">
      <Header />
      <Hero />
      <StorySection />
      <Features />
      
      {/* Community Section */}
      <section id="comunidade" className="py-24 px-4 md:py-32">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-5xl bg-white p-8 md:p-20 rounded-[4rem] relative overflow-hidden shadow-xl border-b-8 border-brand-blue/20"
        >
          {/* Decorative shapes */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-brand-mint/30 rounded-br-[100px] -z-10" />
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-brand-pink/20 rounded-tl-[100px] -z-10" />
          
          <div className="text-center relative">
            <div className="w-20 h-20 bg-brand-blue/10 rounded-3xl flex items-center justify-center mx-auto mb-8 text-brand-blue">
               <Sparkles size={40} />
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-6 font-kids text-slate-900 leading-tight">Juntos somos <span className="text-brand-blue">mais fortes</span>!</h2>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto font-medium italic">
              Receba um abraço virtual toda semana com dicas práticas, atividades e histórias que aquecem o coração.
            </p>
            <div className="max-w-2xl mx-auto flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Seu melhor e-mail..." 
                className="flex-1 px-8 py-5 rounded-[2rem] bg-slate-50 border-2 border-transparent focus:border-brand-blue focus:bg-white focus:outline-none transition-all font-bold text-lg"
              />
              <button className="blob-button bg-brand-blue text-white shadow-xl shadow-brand-blue/20">
                Quero Participar!
              </button>
            </div>
            <p className="mt-8 text-slate-400 font-bold text-sm uppercase tracking-widest">
              Join +500 famílias no Mundo Azul
            </p>
          </div>
        </motion.div>
      </section>
      
      <Footer />
    </div>
  );
}
