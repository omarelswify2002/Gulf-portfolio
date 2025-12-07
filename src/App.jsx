import { useState, useEffect } from 'react'
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion'
import { FaMoon, FaSun, FaWhatsapp, FaLinkedin, FaBehance, FaTimes, FaArrowUp, FaCrown, FaChevronLeft, FaChevronRight, FaFilePdf, FaBars } from 'react-icons/fa'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [navOpen, setNavOpen] = useState(false)
  const [worksTab, setWorksTab] = useState('photos')

  // Handle scroll to top visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Toggle dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  // Designer profile data
  const profile = {
    name: 'محمد ابوالفتوح',
    title: 'مصمم جرافيك',
    image: '/WhatsApp Image 2025-10-31 at 16.58.59_4b758495.jpg',
    bio: 'مصمم جرافيك متخصص في الهوية البصرية والتصميم الإبداعي. أجمع بين الأصالة العربية والحداثة لخلق تصاميم فريدة تعكس الفخامة والإبداع الخليجي.',
    experience: '٨+ سنوات خبرة',
  }

  // Projects data with multiple images for each project
  const projects = [
    {
      id: 1,
      name: 'Illustration-style',
      category: 'هوية بصرية',
      description: 'تصميم هوية بصرية متكاملة لمؤسسة فاخرة تجمع بين الأصالة والحداثة',
      images: [
        '/IMG-20251207-WA0011.jpg',
        '/IMG-20251207-WA0010.jpg',
        '/IMG-20251207-WA0009.jpg',
        '/IMG-20251207-WA0008.jpg',
        '/IMG-20251207-WA0007.jpg',
        '/IMG-20251207-WA0006.jpg',
        '/IMG-20251207-WA0005.jpg',
        '/IMG-20251207-WA0004.jpg',
        '/IMG-20251207-WA0003.jpg',
        '/IMG-20251207-WA0002.jpg', 
      ]
    },
    {
      id: 2,
      name: 'تصميمات عيادات طبية',
      category: 'شعارات',
      description: 'شعار مبتكر يعبر عن الهوية التجارية بلمسة عصرية',
      images: [
        '/media.jpg',
        '/slogan1.jpg',
        '/slogan2.jpg',
        '/slogan3.jpg',
        '/slogan4.jpg',
        '/slogan5.jpg',
        '/slogan6.jpg',
      ]
    },
    {
      id: 3,
      name: 'تصميمات العاب رياضية',
      category: 'إعلانات',
      description: 'بوستر إعلاني جذاب يلفت الانتباه ويوصل الرسالة بشكل فعال',
      images: [
        '/poster.jpg',
        '/poster1.jpg',
        '/poster2.jpg',
        '/poster3.jpg',
        '/poster4.jpg',
        '/poster5.jpg',
      ]
    },
    {
      id: 4,
      name: 'Social Media With AI',
      category: 'مطبوعات',
      description: 'غلاف مجلة أنيق يعكس محتواها بطريقة فنية مبتكرة',
      images: [
        '/WhatsApp Image 2025-12-06 at 17.09.16_e6e6003e.jpg',
        '/WhatsApp Image 2025-12-06 at 17.08.50_92ed4bcb.jpg',
        '/WhatsApp Image 2025-12-06 at 17.08.50_3e8c3cd5.jpg',
        '/IMG-20251207-WA0020.jpg',
        '/IMG-20251207-WA0018.jpg',
        '/IMG-20251207-WA0015.jpg',
        '/IMG-20251207-WA0013.jpg',
        '/IMG-20251207-WA0012.jpg'
      ]
    },
    {
      id: 5,
      name: 'تصميم بطاقة عمل',
      category: 'هوية بصرية',
      description: 'بطاقة عمل احترافية تعكس الهوية البصرية للمؤسسة',
      images: [
        'WhatsApp Image 2025-12-06 at 17.01.13_d276f8c2.jpg',
        'IMG-20251117-WA0010.jpg',
        'IMG-20251117-WA0009.jpg',
        'IMG-20251117-WA0008.jpg',
        'IMG-20251117-WA0007.jpg',
      ]
    },
    // {
    //   id: 6,
    //   name: 'تصميم سوشيال ميديا',
    //   category: 'سوشيال ميديا',
    //   description: 'تصاميم مخصصة لوسائل التواصل الاجتماعي تجذب الجمهور',
    //   images: [
    //     'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
    //     'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=600&fit=crop',
    //     'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
    //     'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop'
    //   ]
    // },
  ]

  // Videos data for 'My Works' -> Videos tab
  const videos = [
    {
      id: 1,
      title: 'CGI AI products',
      src: 'https://www.youtube.com/embed/8_JwCn2A0aQ'
    },
    {
      id: 2,
      title: 'Animation AI',
      src: 'https://www.youtube.com/embed/xshHsGzh1S0'
    },
    // {
    //   id: 3,
    //   title: 'Motion Design Reel',
    //   src: 'https://www.youtube.com/embed/YE7VzlLtp-4'
    // },
  ]

  // Contact information
  const contact = {
    whatsapp: '+2001553432371',
    linkedin: 'https://www.linkedin.com/in/mohamedaboalfotoh?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    behance: 'https://www.behance.net/mohamedashraf620',
  }

  // Open lightbox for a specific project and image
  const openLightbox = (projectIndex, imageIndex = 0) => {
    setCurrentProjectIndex(projectIndex)
    setCurrentImageIndex(imageIndex)
    setLightboxOpen(true)
  }

  // Navigate to previous image
  const prevImage = () => {
    const currentProject = projects[currentProjectIndex]
    setCurrentImageIndex((prev) => 
      prev === currentProject.images.length - 1 ? 0 : prev + 1
    )
  }


  // Navigate to next image
  const nextImage = () => {
    const currentProject = projects[currentProjectIndex]
    setCurrentImageIndex((prev) => 
      prev === 0 ? currentProject.images.length - 1 : prev - 1
    )
  }

  // Navigate to next project
  const nextProject = () => {
    setCurrentProjectIndex((prev) => 
      prev === projects.length - 1 ? 0 : prev + 1
    )
    setCurrentImageIndex(0)
  }

  // Navigate to previous project
  const prevProject = () => {
    setCurrentProjectIndex((prev) => 
      prev === 0 ? projects.length - 1 : prev - 1
    )
    setCurrentImageIndex(0)
  }

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return
      
      switch(e.key) {
        case 'ArrowLeft':
          prevImage()
          break
        case 'ArrowRight':
          nextImage()
          break
        case 'Escape':
          setLightboxOpen(false)
          break
        default:
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightboxOpen, currentProjectIndex, currentImageIndex])

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode
        ? 'bg-gradient-to-br from-luxury-black via-gray-900 to-luxury-black text-beige-100'
        : 'bg-gradient-to-br from-beige-50 via-white to-beige-100 text-gray-900'
    }`}>

      {/* Navigation Bar (responsive: desktop links, mobile hamburger) */}
      <nav className={`fixed top-0 right-0 left-0 z-40 backdrop-blur-lg transition-colors duration-300 ${
        darkMode
          ? 'bg-luxury-black/80 border-b border-gold-500/20'
          : 'bg-white/80 border-b border-gold-300/30'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <button onClick={() => { scrollToTop(); setNavOpen(false); }} className="font-arabic text-xl font-bold">
              {profile.name}
            </button>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-8 font-arabic">
              <button onClick={() => scrollToSection('about')} className={`hover:text-gold-500 transition-colors ${
                darkMode ? 'text-beige-100' : 'text-gray-900'
              }`}>عني</button>
              <button onClick={() => scrollToSection('education')} className={`hover:text-gold-500 transition-colors ${
                darkMode ? 'text-beige-100' : 'text-gray-900'
              }`}>التعليم</button>
              <button onClick={() => scrollToSection('projects')} className={`hover:text-gold-500 transition-colors ${
                darkMode ? 'text-beige-100' : 'text-gray-900'
              }`}>أعمالي</button>
              <button onClick={() => scrollToSection('contact')} className={`hover:text-gold-500 transition-colors ${
                darkMode ? 'text-beige-100' : 'text-gray-900'
              }`}>تواصل</button>

              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setDarkMode(!darkMode)}
                aria-label="Toggle dark mode"
                className={`z-50 p-3 rounded-full shadow-lg transition-all duration-300 ${
                  darkMode
                    ? 'bg-gold-500 text-luxury-black hover:bg-gold-400'
                    : 'bg-luxury-black text-gold-500 hover:bg-gray-800'
                }`}
              >
                {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
              </motion.button>
            </div>

            {/* Mobile hamburger */}
            <div className="md:hidden">
              <button
                onClick={() => setNavOpen(!navOpen)}
                aria-label={navOpen ? 'Close menu' : 'Open menu'}
                className={`p-3 rounded-md transition-colors ${darkMode ? 'text-beige-100' : 'text-gray-900'}`}
              >
                {navOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {navOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className={`fixed inset-0 z-50 md:hidden ${darkMode ? 'bg-luxury-black/95' : 'bg-white/95'} p-6`}
          >
            <div className="flex justify-between items-center mb-8">
              <button onClick={() => { scrollToTop(); setNavOpen(false); }} className="font-arabic text-xl font-bold">
                {profile.name}
              </button>
              <button onClick={() => setNavOpen(false)} aria-label="Close menu" className="p-2">
                <FaTimes size={22} />
              </button>
            </div>

            <nav className="flex flex-col gap-6 text-right">
              <button onClick={() => { scrollToSection('about'); setNavOpen(false); }} className={`text-2xl font-arabic ${darkMode ? 'text-beige-100' : 'text-gray-900'}`}>عني</button>
              <button onClick={() => { scrollToSection('education'); setNavOpen(false); }} className={`text-2xl font-arabic ${darkMode ? 'text-beige-100' : 'text-gray-900'}`}>التعليم</button>
              <button onClick={() => { scrollToSection('projects'); setNavOpen(false); }} className={`text-2xl font-arabic ${darkMode ? 'text-beige-100' : 'text-gray-900'}`}>أعمالي</button>
              <button onClick={() => { scrollToSection('contact'); setNavOpen(false); }} className={`text-2xl font-arabic ${darkMode ? 'text-beige-100' : 'text-gray-900'}`}>تواصل</button>

              <div className="pt-4 border-t mt-4 border-gold-300/20">
                <button onClick={() => { setDarkMode(!darkMode); }} className={`flex items-center gap-3 px-4 py-2 rounded-md ${darkMode ? 'text-beige-200' : 'text-gray-800'}`}>
                  {darkMode ? <FaSun /> : <FaMoon />}
                  <span className="font-arabic">تبديل الوضع</span>
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-6 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="relative w-48 h-48 mx-auto mb-8"
            >
              <img
                src={profile.image}
                alt={profile.name}
                className="w-full h-full object-cover rounded-full ring-4 ring-gold-500"
              />
              <div className={`absolute inset-0 rounded-full shadow-xl ${darkMode ? 'hover:shadow-gold-600/70' : 'hover:shadow-gray-600/50'} transition-shadow duration-300 ${
                darkMode ? 'shadow-gold-500/20' : 'shadow-gold-500/30'
              }`} />
              <motion.div 
                className="absolute -bottom-2 -right-2 bg-gold-500 text-luxury-black p-3 rounded-full shadow-lg"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <FaCrown size={24} />
              </motion.div>
            </motion.div>

            <h1 className={`text-6xl md:text-8xl font-bold mb-4 font-arabic ${
              darkMode ? 'text-gold-400' : 'text-luxury-black'
            }`}>
              {profile.name}
            </h1>

            <p className={`text-2xl md:text-3xl mb-6 font-arabic font-light ${
              darkMode ? 'text-gold-300' : 'text-gold-700'
            }`}>
              {profile.title}
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className={`max-w-2xl mx-auto mb-8 p-6 rounded-2xl backdrop-blur-sm ${
                darkMode
                  ? 'bg-white/5 border border-gold-500/20'
                  : 'bg-white/60 border border-gold-300/30'
              }`}
            >
              <p className={`text-lg md:text-xl leading-relaxed font-arabic ${
                darkMode ? 'text-beige-200' : 'text-gray-700'
              }`}>
                {profile.bio}
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className={`text-xl font-arabic font-semibold ${
                darkMode ? 'text-gold-400' : 'text-gold-600'
              }`}
            >
              {profile.experience}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className={`text-5xl md:text-6xl font-bold mb-4 font-arabic ${
              darkMode ? 'text-gold-400' : 'text-luxury-black'
            }`}>
              التعليم
            </h2>
            <div className={`w-24 h-1 mx-auto mb-8 rounded-full ${
              darkMode ? 'bg-gold-500' : 'bg-gold-600'
            }`} />
            <p className={`max-w-2xl mx-auto text-lg font-arabic ${
              darkMode ? 'text-beige-200' : 'text-gray-700'
            }`}>سجل تعليمي يجمع بين الأساليب التقليدية والمهارات الرقمية المتقدمة، يشمل تدريبات وشهادات مهنية مرتبطة بالتصميم.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Degree Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, y: -6 }}
              transition={{ duration: 0.5 }}
              className={`p-6 rounded-2xl border transition-all hover:shadow-2xl transform-gpu ${
                darkMode ? 'bg-gray-800/40 border-gold-500/20 hover:border-gold-400/40' : 'bg-white shadow-lg border-gold-200/30 hover:border-gold-500'
              }`}
              title="بكالوريوس فنون تصميم"
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${darkMode ? 'bg-gold-500 text-luxury-black' : 'bg-gold-500 text-white'}`}>
                  <FaCrown />
                </div>
                <div className="text-right">
                  <h3 className={`text-xl font-bold font-arabic ${darkMode ? 'text-gold-300' : 'text-luxury-black'}`}>دبلومة الجرافيك ديزاين</h3>
                  <p className={`text-sm font-arabic ${darkMode ? 'text-beige-300' : 'text-gray-600'}`}>المعهد القومي للاتصالات - NTI.</p>
                </div>
              </div>
              <p className={`mt-4 font-arabic ${darkMode ? 'text-beige-200' : 'text-gray-700'}`}>خصصت أكثر من 120 ساعة لتعلم الجرافيك، بما في ذلك Adobe Photoshop وIllustrator.</p>
            </motion.div>

            {/* Diploma / Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, y: -6 }}
              transition={{ duration: 0.55 }}
              className={`p-6 rounded-2xl border transition-all hover:shadow-2xl transform-gpu ${
                darkMode ? 'bg-gray-800/40 border-gold-500/20 hover:border-gold-400/40' : 'bg-white shadow-lg border-gold-200/30 hover:border-gold-500'
              }`}
              title="دبلوم التصميم التفاعلي"
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${darkMode ? 'bg-gold-500 text-luxury-black' : 'bg-gold-500 text-white'}`}>
                  <FaCrown />
                </div>
                <div className="text-right">
                  <h3 className={`text-xl font-bold font-arabic ${darkMode ? 'text-gold-300' : 'text-luxury-black'}`}>دبلومة الجرافيك ديزاين بتقنية الAI</h3>
                  <p className={`text-sm font-arabic ${darkMode ? 'text-beige-300' : 'text-gray-600'}`}>معهد تكنولوجيا المعلومات - ITI</p>
                </div>
              </div>
              <p className={`mt-4 font-arabic ${darkMode ? 'text-beige-200' : 'text-gray-700'}`}>التركيز على التصميم الإبداعي وإنتاج المحتوى الرقمي باستخدام Adobe Photoshop وIllustrator وPremiere.</p>
            </motion.div>

            {/* Short Courses */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, y: -6 }}
              transition={{ duration: 0.6 }}
              className={`p-6 rounded-2xl border transition-all hover:shadow-2xl transform-gpu ${
                darkMode ? 'bg-gray-800/40 border-gold-500/20 hover:border-gold-400/40' : 'bg-white shadow-lg border-gold-200/30 hover:border-gold-500'
              }`}
              title="دورات قصيرة ومكثفة"
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${darkMode ? 'bg-gold-500 text-luxury-black' : 'bg-gold-500 text-white'}`}>
                  <FaCrown />
                </div>
                <div className="text-right">
                  <h3 className={`text-xl font-bold font-arabic ${darkMode ? 'text-gold-300' : 'text-luxury-black'}`}>دبلومة تصميم واجهة المستخدم UI/UX.</h3>
                  <p className={`text-sm font-arabic ${darkMode ? 'text-beige-300' : 'text-gray-600'}`}>معهد تكنولوجيا المعلومات - ITI</p>
                </div>
              </div>
              <p className={`mt-4 font-arabic ${darkMode ? 'text-beige-200' : 'text-gray-700'}`}>المواضيع المغطاه :  UX Fundamentals, User Research, Design Principles, Wireframing, Prototyping, Visual Design (Web & Mobile).</p>
            </motion.div>

            {/* Short Courses */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, y: -6 }}
              transition={{ duration: 0.6 }}
              className={`p-6 rounded-2xl border transition-all hover:shadow-2xl transform-gpu ${
                darkMode ? 'bg-gray-800/40 border-gold-500/20 hover:border-gold-400/40' : 'bg-white shadow-lg border-gold-200/30 hover:border-gold-500'
              }`}
              title="دورات قصيرة ومكثفة"
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${darkMode ? 'bg-gold-500 text-luxury-black' : 'bg-gold-500 text-white'}`}>
                  <FaCrown />
                </div>
                <div className="text-right">
                  <h3 className={`text-xl font-bold font-arabic ${darkMode ? 'text-gold-300' : 'text-luxury-black'}`}>التسويق الرقمي بتقنية الAI.</h3>
                  <p className={`text-sm font-arabic ${darkMode ? 'text-beige-300' : 'text-gray-600'}`}>معهد تكنولوجيا المعلومات - ITI</p>
                </div>
              </div>
              <p className={`mt-4 font-arabic ${darkMode ? 'text-beige-200' : 'text-gray-700'}`}>كيفية استخدام الذكاء الاصطناعي لتحسين استراتيجيات التسويق الرقمي.</p>
            </motion.div>

            {/* Short Courses */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, y: -6 }}
              transition={{ duration: 0.6 }}
              className={`p-6 rounded-2xl border transition-all hover:shadow-2xl transform-gpu ${
                darkMode ? 'bg-gray-800/40 border-gold-500/20 hover:border-gold-400/40' : 'bg-white shadow-lg border-gold-200/30 hover:border-gold-500'
              }`}
              title="دورات قصيرة ومكثفة"
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${darkMode ? 'bg-gold-500 text-luxury-black' : 'bg-gold-500 text-white'}`}>
                  <FaCrown />
                </div>
                <div className="text-right">
                  <h3 className={`text-xl font-bold font-arabic ${darkMode ? 'text-gold-300' : 'text-luxury-black'}`}>اساسيات الفن الرقمي بال Photoshop.</h3>
                  <p className={`text-sm font-arabic ${darkMode ? 'text-beige-300' : 'text-gray-600'}`}>معهد تكنولوجيا المعلومات - ITI</p>
                </div>
              </div>
              <p className={`mt-4 font-arabic ${darkMode ? 'text-beige-200' : 'text-gray-700'}`}>التقنيات الأساسية للفن الرقمي باستخدام Adobe Photoshop.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className={`text-5xl md:text-6xl font-bold mb-4 font-arabic ${
              darkMode ? 'text-gold-400' : 'text-luxury-black'
            }`}>
              أعمالي
            </h2>
            <div className={`w-24 h-1 mx-auto rounded-full ${
              darkMode ? 'bg-gold-500' : 'bg-gold-600'
            }`} />
          </motion.div>

          {/* Tabs: Photos / Videos */}
          <div className="flex justify-center gap-4 mb-10">
            <button
              onClick={() => setWorksTab('photos')}
              className={`px-5 py-2 rounded-full font-arabic font-semibold transition-colors ${worksTab === 'photos' ? (darkMode ? 'bg-gold-500 text-luxury-black' : 'bg-gold-500 text-white') : (darkMode ? 'text-beige-100 bg-transparent' : 'text-gray-700 bg-white/40')}`}
            >
              الصور
            </button>
            <button
              onClick={() => setWorksTab('videos')}
              className={`px-5 py-2 rounded-full font-arabic font-semibold transition-colors ${worksTab === 'videos' ? (darkMode ? 'bg-gold-500 text-luxury-black' : 'bg-gold-500 text-white') : (darkMode ? 'text-beige-100 bg-transparent' : 'text-gray-700 bg-white/40')}`}
            >
              الفيديوهات
            </button>
          </div>

          {/* Photos grid (existing projects) */}
          {worksTab === 'photos' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, projectIndex) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: projectIndex * 0.08, duration: 0.5 }}
                  whileHover={{ y: -8 }}
                  onClick={() => openLightbox(projectIndex, 0)}
                  className={`group cursor-pointer rounded-2xl overflow-hidden shadow-xl transition-all duration-300 ${
                    darkMode
                      ? 'bg-gray-800/50 hover:shadow-gold-500/20 border border-gold-500/10'
                      : 'bg-white hover:shadow-2xl border border-gold-200/30'
                  }`}
                >
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img
                      src={project.images[0]}
                      alt={project.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100 ${
                      darkMode
                        ? 'bg-gradient-to-t from-luxury-black/90 via-luxury-black/50 to-transparent'
                        : 'bg-gradient-to-t from-luxury-black/80 via-luxury-black/40 to-transparent'
                    }`}>
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white text-right">
                        <p className="text-sm font-arabic mb-2 text-gold-300">{project.category}</p>
                        <h3 className="text-xl font-arabic font-bold mb-2">{project.name}</h3>
                        <p className="text-xs font-arabic text-beige-200">{project.description}</p>
                        <div className="flex gap-2 mt-3">
                          {project.images.slice(0, 4).map((_, index) => (
                            <div key={index} className="w-2 h-2 bg-gold-500 rounded-full"></div>
                          ))}
                          {project.images.length > 4 && (
                            <div className="text-xs text-gold-300">+{project.images.length - 4}</div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className={`text-2xl font-bold font-arabic ${
                      darkMode ? 'text-gold-300' : 'text-luxury-black'
                    }`}>
                      {project.name}
                    </h3>
                    <p className={`text-sm font-arabic mt-2 ${
                      darkMode ? 'text-beige-300' : 'text-gray-600'
                    }`}>
                      {project.images.length} صورة
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Videos grid */}
          {worksTab === 'videos' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {videos.map((video, idx) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08, duration: 0.45 }}
                  className={`p-4 rounded-2xl transition-shadow ${darkMode ? 'bg-gray-800/40 border border-gold-500/20' : 'bg-white shadow-lg border border-gold-200/30'}`}
                >
                  <div className="aspect-[16/9] w-full rounded overflow-hidden bg-black">
                    <iframe
                      title={video.title}
                      src={video.src}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                  <div className="mt-4 text-right">
                    <h3 className={`text-xl font-bold font-arabic ${darkMode ? 'text-gold-300' : 'text-luxury-black'}`}>{video.title}</h3>
                    <p className={`text-sm font-arabic mt-2 ${darkMode ? 'text-beige-300' : 'text-gray-600'}`}>مشاهدة عرض توضيحي</p>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

  {/* Contact Section */}
      <section id="contact" className="py-20 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={`text-5xl md:text-6xl font-bold mb-4 font-arabic ${
              darkMode ? 'text-gold-400' : 'text-luxury-black'
            }`}>
              تواصل معي
            </h2>
            <div className={`w-24 h-1 mx-auto mb-12 rounded-full ${
              darkMode ? 'bg-gold-500' : 'bg-gold-600'
            }`} />

            <div className="flex justify-center gap-8 flex-wrap">
              <motion.a
                href={`https://wa.me/${contact.whatsapp.replace(/\+/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className={`flex flex-col items-center gap-3 p-8 rounded-2xl transition-all duration-300 ${
                  darkMode
                    ? 'bg-gray-800/50 hover:bg-green-500/20 border border-gold-500/10 hover:border-green-500/30'
                    : 'bg-white hover:bg-green-50 border border-gold-200/30 hover:border-green-500/30 shadow-lg'
                }`}
              >
                <FaWhatsapp size={48} className="text-green-500" />
                <span className={`font-arabic font-semibold ${
                  darkMode ? 'text-beige-200' : 'text-gray-700'
                }`}>
                  واتساب
                </span>
                <span className={`text-sm font-arabic ${
                  darkMode ? 'text-gold-400' : 'text-gold-600'
                }`}>
                  {contact.whatsapp}
                </span>
              </motion.a>

              <motion.a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
                className={`flex flex-col items-center gap-3 p-8 rounded-2xl transition-all duration-300 ${
                  darkMode
                    ? 'bg-gray-800/50 hover:bg-blue-500/20 border border-gold-500/10 hover:border-blue-500/30'
                    : 'bg-white hover:bg-blue-50 border border-gold-200/30 hover:border-blue-500/30 shadow-lg'
                }`}
              >
                <FaLinkedin size={48} className="text-blue-500" />
                <span className={`font-arabic font-semibold ${
                  darkMode ? 'text-beige-200' : 'text-gray-700'
                }`}>
                  لينكد إن
                </span>
              </motion.a>

              <motion.a
                href={contact.behance}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className={`flex flex-col items-center gap-3 p-8 rounded-2xl transition-all duration-300 ${
                  darkMode
                    ? 'bg-gray-800/50 hover:bg-purple-500/20 border border-gold-500/10 hover:border-purple-500/30'
                    : 'bg-white hover:bg-purple-50 border border-gold-200/30 hover:border-purple-500/30 shadow-lg'
                }`}
              >
                <FaBehance size={48} className="text-purple-500" />
                <span className={`font-arabic font-semibold ${
                  darkMode ? 'text-beige-200' : 'text-gray-700'
                }`}>
                  بيهانس
                </span>
              </motion.a>
            </div>
            <motion.div 
              className={`mt-16 p-8 rounded-3xl ${
                darkMode 
                  ? 'bg-gold-500/10 border border-gold-500/30' 
                  : 'bg-gold-500/5 border border-gold-500/20'
              }`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              >             <h3 className={`text-2xl font-arabic font-bold mb-4 ${
                darkMode ? 'text-gold-300' : 'text-darkGold-700'
              }`}>
                📞 مستعد لخدمتك على مدار الساعة
              </h3>
              <p className={`font-arabic text-lg ${
                darkMode ? 'text-sand-300' : 'text-navy-700'
              }`}>
                تواصل معي الآن لمناقشة مشروعك وأعمل على تحويل رؤيتك إلى واقع ملموس
              </p>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* CV Button above footer */}
      <div className="w-full flex justify-center mb-12">
        <motion.a
          href="https://drive.google.com/file/d/1h6JjK5lH1zplTCFCcvja9R81lP7zglZi/view?usp=drivesdk"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.35 }}
          className={`inline-flex items-center gap-3 px-6 py-3 rounded-full font-arabic font-semibold shadow-md transition-colors ${
            darkMode ? 'bg-gold-500/20 text-gold-300 hover:bg-gold-500/30 border border-gold-500/20' : 'bg-gold-500/10 text-gold-700 hover:bg-gold-500/20 border border-gold-200'
          }`}
        >
          <FaFilePdf className={darkMode ? 'text-gold-300' : 'text-gold-700'} />
          <span>السيرة الذاتية</span>
        </motion.a>
      </div>

      {/* Footer */}
      <footer className={`py-12 text-center border-t ${
        darkMode ? 'border-gold-500/30' : 'border-gold-500/20'
      }`}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="flex items-center gap-2 text-2xl font-arabic font-bold">
              <FaCrown className="text-gold-500" />
              <span className={darkMode ? 'text-gold-400' : 'text-darkGold-600'}>
                {profile.name}
              </span>
            </div>
            <p className={`font-arabic text-lg ${
              darkMode ? 'text-sand-300' : 'text-navy-600'
            }`}>
              الإبداع الخليجي بلمسة عالمية
            </p>
            <p className={`font-arabic ${
              darkMode ? 'text-sand-400' : 'text-navy-500'
            }`}>
              © 2025 {profile.name} - جميع الحقوق محفوظة
            </p>
          </motion.div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-lg transition-all duration-300 ${
              darkMode
                ? 'bg-gold-500 text-luxury-black hover:bg-gold-400'
                : 'bg-luxury-black text-gold-500 hover:bg-gray-800'
            }`}
          >
            <FaArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Custom Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setLightboxOpen(false)}
          >
            <div className="relative max-w-6xl max-h-full" onClick={(e) => e.stopPropagation()}>
              {/* Close Button */}
              <button
                onClick={() => setLightboxOpen(false)}
                className="absolute top-4 right-4 z-10 text-white hover:text-gold-500 transition-colors"
              >
                <FaTimes size={32} />
              </button>

              {/* Project Info */}
              <div className="absolute top-4 left-4 z-10 text-white">
                <h3 className="text-2xl font-arabic font-bold">
                  {projects[currentProjectIndex]?.name}
                </h3>
                <p className="text-gold-400 font-arabic">
                  {projects[currentProjectIndex]?.category}
                </p>
                <p className="text-sm text-gray-300 font-arabic mt-1">
                  {currentImageIndex + 1} / {projects[currentProjectIndex]?.images.length}
                </p>
              </div>

              {/* Main Image */}
              <motion.img
                key={currentImageIndex}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                src={projects[currentProjectIndex]?.images[currentImageIndex]}
                alt={projects[currentProjectIndex]?.name}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />

              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gold-500 transition-colors p-4"
              >
                <FaChevronLeft size={32} />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gold-500 transition-colors p-4"
              >
                <FaChevronRight size={32} />
              </button>

              {/* Project Navigation */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4">
                <button
                  onClick={prevProject}
                  className={`text-white/90 transition-all font-arabic px-3 py-1.5 text-sm rounded-md ${darkMode ? 'bg-black/40 text-white/85' : 'bg-black/30 text-white/85'} opacity-75 hover:opacity-100 hover:scale-105 transform-gpu hover:bg-black/60`}
                  aria-label="المشروع السابق"
                >
                  المشروع السابق
                </button>
                <button
                  onClick={nextProject}
                  className={`text-white/90 transition-all font-arabic px-3 py-1.5 text-sm rounded-md ${darkMode ? 'bg-black/40 text-white/85' : 'bg-black/30 text-white/85'} opacity-75 hover:opacity-100 hover:scale-105 transform-gpu hover:bg-black/60`}
                  aria-label="المشروع التالي"
                >
                  المشروع التالي
                </button>
              </div>

              {/* Image dots indicator (replaces thumbnails) */}
              <div className="absolute bottom-1 sm:bottom-14 left-1/2 transform -translate-x-1/2 flex items-center gap-3">
                {projects[currentProjectIndex]?.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    aria-label={`الصورة ${index + 1}`}
                    className={`rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-gold-400 ${
                      index === currentImageIndex
                        ? `${darkMode ? 'bg-gold-400' : 'bg-gold-500'} w-3 h-3` 
                        : `${darkMode ? 'bg-white/30' : 'bg-black/20'} w-2.5 h-2.5 hover:${darkMode ? 'bg-white/60' : 'bg-black/40'}`
                    }`}
                    style={{
                      boxShadow: index === currentImageIndex ? '0 0 8px rgba(250, 204, 21, 0.6)' : 'none'
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App