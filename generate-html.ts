import fs from 'fs';
import path from 'path';

function getBase64Image(filePath: string): string {
  try {
    const fileBuffer = fs.readFileSync(filePath);
    const extension = path.extname(filePath).substring(1);
    const mimeType = extension === 'jpg' || extension === 'jpeg' ? 'image/jpeg' : `image/${extension}`;
    return `data:${mimeType};base64,${fileBuffer.toString('base64')}`;
  } catch (error) {
    console.error(`Erro ao ler imagem ${filePath}:`, error);
    return '';
  }
}

function generate() {
  const heroPath = './src/assets/images/ian.jpg';
  const storyPath = './src/assets/images/ianfone.png';

  const heroBase64 = getBase64Image(heroPath);
  const storyBase64 = getBase64Image(storyPath);

  // HTML Template with placeholders for images
  const createHtml = (heroSrc: string, storySrc: string) => `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mundo Azul - Um Mundo de Cores e Histórias</title>
  
  <!-- Fontes do Google -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap" rel="stylesheet">
  
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  
  <!-- Lucide Icons CDN -->
  <script src="https://unpkg.com/lucide@latest"></script>

  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            kids: ['Fredoka', 'sans-serif'],
            sans: ['Nunito', 'sans-serif'],
          },
          colors: {
            brand: {
              blue: '#38bdf8',
              'blue-dark': '#0284c7',
              'blue-light': '#e0f2fe',
              yellow: '#fef08a',
              pink: '#fbcfe8',
              mint: '#ccfbf1',
              warm: '#fffbeb',
            }
          }
        }
      }
    }
  </script>

  <style>
    html {
      scroll-behavior: smooth;
    }
    .kid-card {
      background-color: white;
      padding: 2rem;
      border-radius: 3rem;
      border-width: 2px;
      border-color: rgba(241, 245, 249, 0.8);
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
      transition-property: all;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 300ms;
      position: relative;
      overflow: hidden;
    }
    .kid-card:hover {
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
      border-color: rgba(56, 189, 248, 0.3);
      transform: translateY(-10px) rotate(1deg);
    }
    .blob-button {
      border-radius: 2rem;
      padding-left: 2.5rem;
      padding-right: 2.5rem;
      padding-top: 1rem;
      padding-bottom: 1rem;
      font-family: 'Fredoka', sans-serif;
      font-size: 1.25rem;
      font-weight: 900;
      transition-property: all;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 300ms;
      user-select: none;
      cursor: pointer;
      text-align: center;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
    }
    .blob-button:hover {
      transform: scale(1.05);
    }
    .blob-button:active {
      transform: scale(0.95);
    }
    .glass-nav {
      background-color: rgba(255, 255, 255, 0.7);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border: 1px solid rgba(255, 255, 255, 0.5);
    }
    
    /* Custom keyframes for float */
    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }
    .animate-float {
      animation: float 4s ease-in-out infinite;
    }
  </style>
</head>
<body class="min-h-screen selection:bg-brand-blue selection:text-white font-sans bg-brand-warm/10 overflow-x-hidden">

  <!-- Header / Navigation -->
  <header id="main-header" class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-6 px-6">
    <nav class="mx-auto max-w-7xl flex items-center justify-between glass-nav rounded-[2rem] px-6 py-3 transition-all duration-300">
      <div class="flex items-center gap-2">
        <div class="w-10 h-10 bg-brand-blue rounded-2xl flex items-center justify-center text-white shadow-lg rotate-3 hover:rotate-0 transition-transform">
          <i data-lucide="puzzle" class="w-6 h-6"></i>
        </div>
        <span class="font-kids text-2xl font-bold text-brand-blue-dark">Mundo Azul</span>
      </div>

      <!-- Desktop Menu -->
      <div class="hidden md:flex items-center gap-8 text-sm font-bold text-slate-600 font-kids">
        <a href="#inicio" class="hover:text-brand-blue transition-colors">Início</a>
        <a href="#sobre" class="hover:text-brand-blue transition-colors">História</a>
        <a href="#recursos" class="hover:text-brand-blue transition-colors">Dicas</a>
        <div class="flex items-center gap-3 border-l pl-6 border-slate-200">
          <a href="https://instagram.com/ianzinhopaterraoficial" target="_blank" class="text-slate-400 hover:text-brand-blue transition-colors">
            <i data-lucide="instagram" class="w-5 h-5"></i>
          </a>
          <a href="https://wa.me" target="_blank" class="text-slate-400 hover:text-green-500 transition-colors">
            <i data-lucide="message-circle" class="w-5 h-5"></i>
          </a>
        </div>
        <a href="#comunidade" class="blob-button bg-brand-blue text-white hover:bg-brand-blue-dark !py-2 !px-6 shadow-brand-blue/20">
          Participar
        </a>
      </div>

      <!-- Mobile Toggle -->
      <button id="menu-toggle" class="md:hidden p-2 text-slate-600 hover:text-brand-blue transition-colors">
        <i data-lucide="menu" class="w-7 h-7"></i>
      </button>
    </nav>

    <!-- Mobile Menu -->
    <div id="mobile-menu" class="hidden absolute top-20 left-4 right-4 bg-white/95 backdrop-blur-2xl rounded-[2.5rem] p-8 shadow-2xl z-40 border border-brand-blue/10">
      <div class="flex flex-col gap-6 text-center font-kids text-xl font-bold">
        <a href="#inicio" class="mobile-link text-slate-700 hover:text-brand-blue">Início</a>
        <a href="#sobre" class="mobile-link text-slate-700 hover:text-brand-blue">Nossa História</a>
        <a href="#recursos" class="mobile-link text-slate-700 hover:text-brand-blue">Recursos</a>
        <a href="#comunidade" class="mobile-link blob-button bg-brand-blue text-white inline-block">Comunidade</a>
      </div>
    </div>
  </header>

  <!-- Hero Section -->
  <section id="inicio" class="relative min-h-screen flex items-center pt-32 pb-12 px-4 md:px-6 overflow-hidden bg-brand-blue-light/30">
    <!-- Animated Background Circles -->
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-brand-blue/5 rounded-full blur-3xl -z-10"></div>
    <div class="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-yellow/20 rounded-full blur-3xl -z-10 animate-pulse"></div>

    <div class="mx-auto max-w-7xl w-full">
      <div class="flex flex-col items-center text-center mb-16 md:mb-24">
        
        <!-- The Spotlight Circle -->
        <div class="relative mb-12">
          <div class="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
            <div class="absolute inset-0 bg-brand-blue rounded-full animate-ping opacity-10"></div>
            <div class="absolute -inset-4 bg-gradient-to-tr from-brand-blue via-brand-yellow to-brand-pink rounded-full p-2 shadow-2xl">
              <div class="w-full h-full bg-white rounded-full p-2 overflow-hidden">
                <img 
                  src="${heroSrc}" 
                  alt="Meu Pequeno Herói" 
                  class="w-full h-full object-cover object-center rounded-full"
                >
              </div>
            </div>
            
            <!-- Playful Stickers around photo -->
            <div class="absolute -top-4 -right-4 w-16 h-16 bg-brand-yellow rounded-2xl flex items-center justify-center shadow-lg border-4 border-white transform rotate-6 animate-float">
              <i data-lucide="star" class="w-8 h-8 text-orange-500 fill-orange-500"></i>
            </div>
            <div class="absolute -bottom-2 -left-4 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-white">
              <i data-lucide="heart" class="w-6 h-6 text-[#5a8cd7] fill-[#5a8cd7]"></i>
            </div>
          </div>
        </div>

        <div class="max-w-4xl">
          <div class="inline-flex items-center gap-2 px-6 py-2 bg-white rounded-full shadow-sm text-brand-blue-dark font-kids font-bold text-sm mb-8 border border-brand-blue/10">
            <i data-lucide="sparkles" class="w-[18px] h-[18px] text-brand-yellow fill-brand-yellow"></i> ESPAÇO DEDICADO AO MEU FILHO
          </div>
          <h1 class="text-5xl md:text-8xl font-black mb-8 text-slate-900 leading-tight font-kids tracking-tighter">
            Um mundo de <span class="text-brand-blue underline decoration-brand-yellow decoration-8 underline-offset-8">cores</span> e histórias.
          </h1>
          <p class="text-xl md:text-2xl text-slate-600 mb-12 leading-relaxed font-medium max-w-2xl mx-auto italic">
            Transformando o autismo em uma jornada extraordinária de amor, descoberta e muita superação a cada dia.
          </p>
          <div class="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="#sobre" class="blob-button bg-brand-blue text-white py-5 px-12 shadow-brand-blue/40">
              Conheça Nossa História <i data-lucide="heart" class="w-5 h-5 fill-white"></i>
            </a>
            <a href="#recursos" class="blob-button bg-white text-slate-700 border-2 border-slate-100 py-5 px-12 hover:border-brand-yellow transition-all">
              Dicas e Apoio <i data-lucide="book-open" class="w-5 h-5"></i>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Floating Icons Background -->
    <div class="absolute top-1/2 left-10 md:left-24 text-brand-blue/20 rotate-12 -z-10 hidden lg:block animate-float">
      <i data-lucide="puzzle" class="w-20 h-20"></i>
    </div>
    <div class="absolute bottom-20 right-20 text-brand-yellow/30 -rotate-12 -z-10 hidden lg:block animate-pulse">
      <i data-lucide="sun" class="w-32 h-32"></i>
    </div>
  </section>

  <!-- Story Section -->
  <section id="sobre" class="py-24 px-4 md:px-6 bg-brand-warm/30 overflow-hidden">
    <div class="mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 items-center">
      <div class="relative p-4">
        <div class="aspect-square rounded-[3.5rem] overflow-hidden bg-white shadow-2xl relative border-4 border-white transition-transform duration-500 hover:scale-[1.02]">
          <img 
            src="${storySrc}" 
            alt="História do meu pequeno - Autismo" 
            class="w-full h-full object-cover object-center"
          >
        </div>
        <!-- Decorations -->
        <div class="absolute -top-8 -left-8 w-32 h-32 bg-brand-yellow rounded-full -z-10 blur-2xl opacity-60"></div>
        <div class="absolute -bottom-8 -right-8 w-32 h-32 bg-brand-blue rounded-full -z-10 blur-2xl opacity-40"></div>
      </div>

      <div class="space-y-8">
        <div class="inline-block px-4 py-1 bg-brand-pink text-pink-700 rounded-full font-bold text-sm uppercase tracking-widest font-kids">
          Nossa História
        </div>
        <h2 class="text-4xl md:text-6xl font-black font-kids text-slate-900 leading-tight">O que aprendi com o <span class="text-brand-blue">meu herói</span>.</h2>
        <div class="space-y-6 text-lg md:text-xl text-slate-600 font-medium leading-relaxed">
          <p>
            Quando o diagnóstico chegou, confesso que houve medo. Mas logo esse medo foi substituído por uma vontade gigante de entender aquele universo particular.
          </p>
          <p>
            Aprendi que o silêncio fala, que o balançar das mãos é alegria e que o tempo do meu filho é o tempo mais precioso que existe.
          </p>
          <div class="flex gap-4 p-6 bg-white rounded-[2rem] border-2 border-brand-yellow/50 shadow-sm relative">
             <i data-lucide="heart" class="text-brand-blue shrink-0 animate-bounce w-7 h-7 fill-[#38bdf8]"></i>
             <p class="text-brand-blue-dark font-bold italic font-kids text-lg">
                "Não é sobre cura, é sobre amor, paciência e aceitação total."
             </p>
             <div class="absolute -top-3 -right-3 w-8 h-8 bg-brand-yellow rounded-full flex items-center justify-center">
                <i data-lucide="sparkles" class="w-4 h-4 text-orange-500"></i>
             </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Features Section -->
  <section id="recursos" class="py-24 px-4 md:px-6 bg-white relative">
    <div class="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-brand-warm to-white"></div>
    <div class="mx-auto max-w-7xl pt-12">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-6xl font-black mb-4 font-kids text-slate-900">
          Vamos brincar e <span class="text-brand-blue">aprender</span>?
        </h2>
        <p class="text-lg text-slate-500 max-w-2xl mx-auto font-medium">Recursos preparados com todo o amor do mundo para ajudar o seu pequeno a brilhar.</p>
      </div>
      
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Card 1 -->
        <div class="kid-card">
          <div class="w-16 h-16 bg-brand-blue-light rounded-3xl flex items-center justify-center mb-6 shadow-sm text-brand-blue-dark">
            <i data-lucide="info" class="w-8 h-8"></i>
          </div>
          <h3 class="text-2xl font-black mb-3 font-kids text-slate-900">O que é o TEA?</h3>
          <p class="text-slate-600 leading-relaxed font-medium">Guia simplificado para pais que acabaram de receber o diagnóstico, focado no acolhimento.</p>
        </div>

        <!-- Card 2 -->
        <div class="kid-card">
          <div class="w-16 h-16 bg-brand-yellow/30 rounded-3xl flex items-center justify-center mb-6 shadow-sm text-brand-blue-dark">
            <i data-lucide="puzzle" class="w-8 h-8"></i>
          </div>
          <h3 class="text-2xl font-black mb-3 font-kids text-slate-900">Dicas de Estímulo</h3>
          <p class="text-slate-600 leading-relaxed font-medium">Atividades lúdicas de baixo custo para fazer em casa e estimular o desenvolvimento sensorial.</p>
        </div>

        <!-- Card 3 -->
        <div class="kid-card">
          <div class="w-16 h-16 bg-brand-mint rounded-3xl flex items-center justify-center mb-6 shadow-sm text-brand-blue-dark">
            <i data-lucide="users" class="w-8 h-8"></i>
          </div>
          <h3 class="text-2xl font-black mb-3 font-kids text-slate-900">Rede de Carinho</h3>
          <p class="text-slate-600 leading-relaxed font-medium">Conecte-se com outros pais e profissionais para trocar experiências reais sem julgamentos.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Community Section -->
  <section id="comunidade" class="py-24 px-4 md:py-32">
    <div class="mx-auto max-w-5xl bg-white p-8 md:p-20 rounded-[4rem] relative overflow-hidden shadow-xl border-b-8 border-brand-blue/20">
      <!-- Decorative shapes -->
      <div class="absolute top-0 left-0 w-32 h-32 bg-brand-mint/30 rounded-br-[100px] -z-10"></div>
      <div class="absolute bottom-0 right-0 w-40 h-40 bg-brand-pink/20 rounded-tl-[100px] -z-10"></div>
      
      <div class="text-center relative">
        <div class="w-20 h-20 bg-brand-blue/10 rounded-3xl flex items-center justify-center mx-auto mb-8 text-brand-blue">
           <i data-lucide="sparkles" class="w-10 h-10 fill-brand-blue"></i>
        </div>
        <h2 class="text-4xl md:text-6xl font-black mb-6 font-kids text-slate-900 leading-tight">Juntos somos <span class="text-brand-blue">mais fortes</span>!</h2>
        <p class="text-xl text-slate-600 mb-10 max-w-2xl mx-auto font-medium italic">
          Receba um abraço virtual toda semana com dicas práticas, atividades e histórias que aquecem o coração.
        </p>
        <div class="max-w-2xl mx-auto flex flex-col sm:flex-row gap-4">
          <input 
            type="email" 
            placeholder="Seu melhor e-mail..." 
            class="flex-1 px-8 py-5 rounded-[2rem] bg-slate-50 border-2 border-transparent focus:border-brand-blue focus:bg-white focus:outline-none transition-all font-bold text-lg text-slate-800"
          >
          <button class="blob-button bg-brand-blue text-white shadow-xl shadow-brand-blue/20">
            Quero Participar!
          </button>
        </div>
        <p class="mt-8 text-slate-400 font-bold text-sm uppercase tracking-widest">
          Join +500 famílias no Mundo Azul
        </p>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="pt-24 pb-12 px-4 md:px-6 bg-slate-900 text-white rounded-t-[4rem] relative overflow-hidden">
    <!-- Background blobs in footer -->
    <div class="absolute top-0 right-0 w-64 h-64 bg-brand-blue/10 rounded-full blur-3xl"></div>
    <div class="absolute bottom-0 left-0 w-64 h-64 bg-brand-yellow/5 rounded-full blur-3xl"></div>

    <div class="mx-auto max-w-7xl relative">
      <div class="grid md:grid-cols-3 gap-12 mb-16">
        <div class="col-span-1">
          <div class="flex items-center gap-2 mb-6">
            <i data-lucide="puzzle" class="text-brand-blue w-8 h-8"></i>
            <span class="font-kids text-3xl font-bold">Mundo Azul</span>
          </div>
          <p class="text-slate-400 font-medium leading-relaxed italic">
            Um cantinho de afeto e informação para quem caminha lado a lado com o Transtorno do Espectro Autista.
          </p>
        </div>
        
        <div class="grid grid-cols-2 gap-8 md:col-span-2">
          <div class="space-y-4">
            <h4 class="font-kids text-xl text-brand-blue">Links Felizes</h4>
            <ul class="space-y-2 text-slate-400 font-medium font-kids">
              <li><a href="#inicio" class="hover:text-white transition-colors">Início</a></li>
              <li><a href="#sobre" class="hover:text-white transition-colors">Nossa História</a></li>
              <li><a href="#recursos" class="hover:text-white transition-colors">Recursos</a></li>
            </ul>
          </div>
          <div class="space-y-4">
            <h4 class="font-kids text-xl text-brand-yellow">Nossa Rede</h4>
            <ul class="space-y-2 text-slate-400 font-medium font-kids">
              <li><a href="mailto:oi@mundoazul.kids" class="hover:text-white transition-colors">E-mail: oi@mundoazul.kids</a></li>
              <li><a href="https://instagram.com/ianzinhopaterraoficial" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors">Instagram: @ianzinhopaterraoficial</a></li>
              <li><a href="https://wa.me" class="hover:text-white transition-colors">WhatsApp da Comunidade</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-sm font-medium">
        <p class="text-center md:text-left">© 2026 Mundo Azul. Feito com muito carinho para todos os pequenos.</p>
        <div class="flex gap-4">
          <a href="https://instagram.com/ianzinhopaterraoficial" target="_blank" class="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-brand-blue hover:text-white transition-all transform hover:-translate-y-1">
            <i data-lucide="instagram" class="w-6 h-6"></i>
          </a>
          <a href="https://facebook.com" target="_blank" class="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-brand-blue hover:text-white transition-all transform hover:-translate-y-1">
            <i data-lucide="facebook" class="w-6 h-6"></i>
          </a>
          <a href="https://youtube.com" target="_blank" class="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-brand-blue hover:text-white transition-all transform hover:-translate-y-1">
            <i data-lucide="youtube" class="w-6 h-6"></i>
          </a>
          <a href="https://wa.me" target="_blank" class="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-green-500 hover:text-white transition-all transform hover:-translate-y-1">
            <i data-lucide="message-circle" class="w-6 h-6"></i>
          </a>
        </div>
      </div>
    </div>
  </footer>

  <script>
    // Inicializar Ícones Lucide
    lucide.createIcons();

    // Menu Mobile Interativo
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      const icon = menuToggle.querySelector('i');
      if (mobileMenu.classList.contains('hidden')) {
        menuToggle.innerHTML = '<i data-lucide="menu" class="w-7 h-7"></i>';
      } else {
        menuToggle.innerHTML = '<i data-lucide="x" class="w-7 h-7"></i>';
      }
      lucide.createIcons();
    });

    // Fechar menu mobile ao clicar em um link
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        menuToggle.innerHTML = '<i data-lucide="menu" class="w-7 h-7"></i>';
        lucide.createIcons();
      });
    });

    // Header Scroll Shadow & Padding
    const header = document.getElementById('main-header');
    const nav = header.querySelector('nav');

    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        header.classList.remove('py-6', 'px-6');
        header.classList.add('py-2', 'px-4');
        nav.classList.add('shadow-lg');
      } else {
        header.classList.remove('py-2', 'px-4');
        header.classList.add('py-6', 'px-6');
        nav.classList.remove('shadow-lg');
      }
    });
  </script>
</body>
</html>`;

  // 1. Relative paths version for Hostinger deployment
  const hostingerHtml = createHtml('assets/images/ian.jpg', 'assets/images/ianfone.png');
  fs.writeFileSync('./index_hostinger.html', hostingerHtml);
  console.log('Criado file index_hostinger.html com links relativos.');

  // 2. Fully self-contained version with embedded Base64 images
  const singleHtml = createHtml(heroBase64, storyBase64);
  fs.writeFileSync('./index_single.html', singleHtml);
  console.log('Criado file index_single.html com imagens embutidas (Base64).');
}

generate();
