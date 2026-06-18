import React, { useState, useEffect } from 'react';
import { ChevronRight, Check, Award, BookOpen, Cpu, Stethoscope, Star } from 'lucide-react';

// ============================================================================
// COMPONENTS
// ============================================================================

const AuthModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[#0f172a]/80 backdrop-blur-sm z-[9999] flex items-center justify-center p-5 animate-in fade-in duration-300">
      <div className="bg-white rounded-3xl p-8 w-full max-w-[420px] text-center shadow-2xl border-t-4 border-[#FF6B00] relative">
        <div className="w-16 h-16 bg-[#FF6B00]/10 text-[#FF6B00] rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
          🔐
        </div>
        <h2 className="text-2xl font-extrabold text-[#0f172a] mb-2 tracking-tight">Login Required</h2>
        <p className="text-[#475569] text-sm mb-6 leading-relaxed">
          You must be logged in to attempt tests, save your progress, and view rankings.
        </p>
        
        <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-2xl p-5 mb-4">
          <p className="text-[#475569] text-[13px] font-semibold mb-3">If you are a registered user</p>
          <button onClick={() => { sessionStorage.setItem("redirectAfterLogin", window.location.href); window.location.href = 'login.html'; }} className="w-full bg-[#0f172a] text-white border-none p-3 rounded-xl font-bold text-[15px] hover:bg-[#1e293b] hover:-translate-y-0.5 hover:shadow-md transition-all cursor-pointer">
            Sign In securely
          </button>
        </div>
        
        <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-2xl p-5 mb-5">
          <p className="text-[#475569] text-[13px] font-semibold mb-3">If you don't have an account</p>
          <button onClick={() => { sessionStorage.setItem("redirectAfterLogin", window.location.href); window.location.href = 'signup.html'; }} className="w-full bg-white text-[#c2410c] border border-[#c2410c] p-3 rounded-xl font-bold text-[15px] hover:bg-[#fff7ed] hover:-translate-y-0.5 hover:shadow-md transition-all cursor-pointer">
            Register for free
          </button>
        </div>
        
        <button onClick={onClose} className="bg-transparent text-[#475569] border-none p-2 font-semibold text-[14px] hover:text-[#0f172a] transition-all cursor-pointer underline decoration-transparent hover:decoration-[#0f172a]">
          Cancel and go back
        </button>
      </div>
    </div>
  );
};

const Navbar = ({ onLoginClick }: { onLoginClick: () => void }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen]);

  const toggleDropdown = (name: string, e: React.MouseEvent) => {
    e.preventDefault();
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-[#FF6B4A] to-[#F85A36] shadow-[0_4px_10px_rgba(0,0,0,0.05)]">
      <div className="flex items-center justify-between px-6 lg:px-12 h-[80px]">
        {/* Left: Logo */}
        <a href="/" className="flex items-center gap-3 cursor-pointer min-w-0 flex-1 no-underline">
          <img src="favicon.png" alt="OlympiadQuiz Logo" className="w-8 h-8 object-contain" onError={(e) => { e.currentTarget.style.display='none' }} />
          <span className="font-extrabold text-[1.35rem] tracking-tight text-[#1A1A1A] truncate">
            OlympiadQuiz
          </span>
        </a>

        {/* Center: Links */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-semibold text-[#1A1A1A]">
          <a href="#" className="text-white border-b-2 border-white pb-[20px] pt-[22px]">Home</a>
          <a href="#" className="hover:text-white border-b-2 border-transparent hover:border-white pb-[20px] pt-[22px] transition-all duration-300">Students Zone</a>
          <a href="#" className="hover:text-white border-b-2 border-transparent hover:border-white pb-[20px] pt-[22px] transition-all duration-300">Syllabus</a>
          <a href="#" className="hover:text-white border-b-2 border-transparent hover:border-white pb-[20px] pt-[22px] transition-all duration-300">Live Arena</a>
          <a href="#" className="hover:text-white border-b-2 border-transparent hover:border-white pb-[20px] pt-[22px] transition-all duration-300">Senior Exams</a>
        </div>

        {/* Right: CTA & Mobile Toggle */}
        <div className="flex items-center gap-4 shrink-0">
          <button onClick={onLoginClick} className="hidden lg:block bg-[#1A1A1A] text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-[#2A2A2A] shadow-sm transition-all duration-200 cursor-pointer">
            Login
          </button>
          
          {/* Hamburger Icon */}
          <button 
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] cursor-pointer bg-transparent border-none relative z-[1005]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className={`block w-[24px] h-[2px] bg-[#1A1A1A] rounded-none transition-all duration-300 ${isMenuOpen ? 'translate-y-[7px] rotate-45' : ''}`}></span>
            <span className={`block w-[24px] h-[2px] bg-[#1A1A1A] rounded-none transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-[24px] h-[2px] bg-[#1A1A1A] rounded-none transition-all duration-300 ${isMenuOpen ? '-translate-y-[7px] -rotate-45' : ''}`}></span>
          </button>
        </div>
      </div>
      
      {/* Overlay */}
      {isMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-[#0f172a]/60 backdrop-blur-sm z-[49]"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Side Drawer */}
      <div className={`lg:hidden fixed top-0 right-0 h-screen w-[50vw] bg-gradient-to-b from-[#FF6B4A] to-[#F85A36] shadow-2xl z-[1002] transform transition-transform duration-300 ease-out flex flex-col ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-end p-6">
          <button onClick={() => setIsMenuOpen(false)} className="text-3xl text-[#1A1A1A] leading-none" aria-label="Close Menu">&times;</button>
        </div>
        <div className="flex flex-col px-6 gap-0 text-sm font-semibold text-[#1A1A1A] overflow-y-auto pb-8">
          <a href="/" className="py-3 text-white border-b border-[#1A1A1A]/10 block">Home</a>
          
          <div className="border-b border-[#1A1A1A]/10 w-full">
            <button onClick={(e) => toggleDropdown('students', e)} className={`w-full flex justify-between items-center py-3 font-semibold transition-colors ${openDropdown === 'students' ? 'text-white' : 'text-[#1A1A1A]'}`}>
              Students Zone
              <span className={`transform transition-transform duration-300 text-lg leading-none ${openDropdown === 'students' ? 'rotate-180 text-white' : 'text-[#1A1A1A]'}`}>▾</span>
            </button>
            <div className={`overflow-hidden transition-all duration-300 bg-black/5 ${openDropdown === 'students' ? 'max-h-[1500px] py-1 mb-1' : 'max-h-0'}`}>
              <div className="flex flex-col pl-3 border-l-2 border-[#c2410c] ml-0">
                <a href="mock.html" className="py-2.5 px-2 text-[#1A1A1A] hover:text-white font-semibold block">Mock Tests</a>
                <a href="chapterwise.html" className="py-2.5 px-2 text-[#1A1A1A] hover:text-white font-semibold block">Chapterwise</a>
                <a href="study.html" className="py-2.5 px-2 text-[#1A1A1A] hover:text-white font-semibold block">Study Material</a>
              </div>
            </div>
          </div>

          <a href="olympiad-syllabus.html" className="py-3 hover:text-white border-b border-[#1A1A1A]/10 block">Syllabus</a>
          <a href="live.html" className="py-3 hover:text-white border-b border-[#1A1A1A]/10 block">Live Arena</a>
          <a href="#" className="py-3 hover:text-white block">Senior Exams</a>
          
          <button onClick={() => { setIsMenuOpen(false); onLoginClick(); }} className="w-full bg-[#1A1A1A] hover:bg-[#2A2A2A] transition-colors text-white px-6 py-3.5 rounded-xl text-[15px] font-bold mt-6 text-center cursor-pointer shadow-md">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

const Hero = ({ onStartTest }: { onStartTest: (url: string) => void }) => (
  <section className="pt-[120px] pb-[100px] px-6 lg:px-12 max-w-[1400px] mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      {/* Left Column */}
      <div className="max-w-xl">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#FF6B00]/10 text-[#c2410c] text-xs font-bold uppercase tracking-wider mb-8">
          India's Smart Olympiad Practice Platform
        </div>
        
        <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tighter mb-6 leading-[1.1]">
          <span className="block text-[#0F172A]">Free Olympiad, JEE & NEET Mock Tests</span>
          <span className="block text-[#c2410c]">with Instant Results and Performance Analysis</span>
        </h1>
        
        <p className="text-lg text-[#475569] mb-10 leading-relaxed max-w-lg">
          Practice IMO, NSO, IEO, IGKO, JEE Main, JEE Advanced and NEET with real exam-level mock tests, detailed solutions, All India ranking, AI-proctored exams and chapter-wise practice for Classes 1–10.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <button onClick={() => onStartTest('mock.html')} className="bg-[#c2410c] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#9a3412] hover:shadow-[0_8px_30px_rgba(194,65,12,0.2)] transition-all duration-200 cursor-pointer">
            Start Free Mock Test
          </button>
          <button onClick={() => onStartTest('mock.html')} className="bg-white text-[#0F172A] px-8 py-4 rounded-xl font-bold border border-[#E5E7EB] hover:border-[#0F172A] hover:bg-[#F8FAFC] shadow-sm transition-all duration-200 cursor-pointer">
            Explore Tests
          </button>
        </div>
        
        <div className="flex items-center gap-4 text-sm font-medium text-[#475569] mt-6">
          <div className="flex -space-x-2">
            <div className="w-8 h-8 rounded-full border-2 border-white bg-blue-100 flex items-center justify-center text-xs">👱🏼‍♂️</div>
            <div className="w-8 h-8 rounded-full border-2 border-white bg-green-100 flex items-center justify-center text-xs">👩🏻‍🦰</div>
            <div className="w-8 h-8 rounded-full border-2 border-white bg-purple-100 flex items-center justify-center text-xs">👨🏽‍🎓</div>
          </div>
          <p>100K+ Students Across India</p>
        </div>
      </div>

      {/* Right Column (Medium Image + Single Floating Card) */}
      <div className="relative flex justify-center lg:justify-end mt-12 lg:mt-0">
        <div className="w-[65%] max-w-[400px] relative">
           {/* Premium Abstract Backdrop */}
           <div className="absolute inset-0 bg-gradient-to-tr from-orange-100 to-blue-50 rounded-[32px] transform rotate-3 scale-105 -z-10 blur-xl opacity-70"></div>
           <div className="absolute inset-0 bg-gradient-to-tr from-[#FF6B00]/10 to-transparent rounded-[32px] transform -rotate-2 scale-105 -z-10"></div>
           
           {/* Main Image */}
           <img 
             src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80" 
             alt="Smiling Student Preparing" 
             className="rounded-[32px] shadow-[0_20px_40px_rgba(0,0,0,0.08)] relative z-0 object-cover aspect-[4/5] border border-[#E5E7EB]/50"
           />
           
           {/* Floating Floating Card - Clean & Minimal */}
           <div className="absolute -bottom-6 -left-8 sm:-left-16 bg-white p-5 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.12)] border border-[#E5E7EB] flex items-center gap-4 z-10 w-max">
             <div className="w-12 h-12 rounded-full bg-[#FF6B00]/10 flex items-center justify-center text-2xl shadow-inner">
               🏆
             </div>
             <div>
               <p className="text-[#475569] text-xs font-bold uppercase tracking-wider mb-0.5">AIR Rank</p>
               <p className="text-[#0F172A] font-extrabold text-2xl leading-none mb-1">#142</p>
               <p className="text-[#475569] text-xs font-medium">Top 1% of students</p>
             </div>
           </div>
        </div>
      </div>
    </div>
  </section>
);

const FeatureStrip = () => (
  <div className="border-y border-[#E5E7EB] bg-white py-8">
    <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
      {['100% Free Access', 'Smart Analysis', 'Improve Your Rank', 'Trusted by Students'].map((text, i) => (
        <div key={i} className="flex items-center gap-3">
          <div className="w-5 h-5 rounded-full bg-[#0F172A] text-white flex items-center justify-center shadow-sm">
            <Check size={12} strokeWidth={4} />
          </div>
          <span className="font-semibold text-[#0F172A] text-sm tracking-tight">{text}</span>
        </div>
      ))}
    </div>
  </div>
);

const QuizCard = ({ title, description, icon: Icon, questions, onStart }: { title: string, description: string, icon: any, questions: string, onStart: () => void }) => (
  <div onClick={onStart} className="group bg-white border border-[#E5E7EB] p-8 rounded-[24px] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:border-[#c2410c]/30 transition-all duration-300 cursor-pointer flex flex-col h-full">
    <div className="w-12 h-12 rounded-xl bg-[#F8FAFC] border border-[#E5E7EB] flex items-center justify-center text-[#0F172A] mb-8 group-hover:bg-[#c2410c] group-hover:text-white group-hover:border-[#c2410c] transition-colors duration-300 shadow-sm">
      <Icon size={22} strokeWidth={2.5} />
    </div>
    
    <h3 className="text-xl font-bold text-[#0F172A] mb-3 tracking-tight">{title}</h3>
    <p className="text-[#475569] text-sm leading-relaxed mb-10 flex-grow">{description}</p>
    
    <div className="flex items-center justify-between mt-auto pt-6 border-t border-[#E5E7EB]">
      <span className="text-xs font-bold text-[#475569] uppercase tracking-wider bg-[#F8FAFC] px-3 py-1 rounded-md">{questions}</span>
      <div className="text-[#0F172A] group-hover:text-[#c2410c] transition-colors flex items-center gap-1 text-sm font-bold tracking-tight">
        Start <ChevronRight size={16} strokeWidth={3} className="group-hover:translate-x-1 transition-transform" />
      </div>
    </div>
  </div>
);

const QuizSection = ({ onStartTest }: { onStartTest: (url: string) => void }) => {
  const quizzes = [
    {
      title: "Olympiad",
      description: "Master logical reasoning and scientific aptitude with comprehensive IMO & NSO mock tests.",
      icon: Award,
      questions: "50+ Tests"
    },
    {
      title: "JEE Main",
      description: "Real CBT interface tests following the exact latest NTA exam pattern and syllabus.",
      icon: Cpu,
      questions: "100+ Tests"
    },
    {
      title: "JEE Advanced",
      description: "Rigorous multi-correct and advanced numerical problems crafted for IIT aspirants.",
      icon: BookOpen,
      questions: "40+ Tests"
    },
    {
      title: "NEET",
      description: "High-yield full syllabus biology, physics, and chemistry practice tests.",
      icon: Stethoscope,
      questions: "80+ Tests"
    }
  ];

  return (
    <section className="py-[120px] px-6 lg:px-12 max-w-[1400px] mx-auto">
      <div className="mb-16">
        <h2 className="text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight mb-4">Choose Your Quiz</h2>
        <p className="text-lg text-[#475569] font-medium">Select your exam and start practicing instantly.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {quizzes.map((quiz, idx) => (
          <QuizCard key={idx} {...quiz} onStart={() => onStartTest('mock.html')} />
        ))}
      </div>
    </section>
  );
};

const TestimonialCard = ({ name, role, text, avatar }: { name: string, role: string, text: string, avatar: string }) => (
  <div className="bg-white border border-[#E5E7EB] p-8 rounded-[24px] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all duration-300 flex flex-col h-full">
    <div className="flex gap-1 mb-6 text-[#c2410c]">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={18} fill="currentColor" strokeWidth={0} />
      ))}
    </div>
    <p className="text-[#0F172A] font-medium leading-relaxed mb-8 flex-grow">"{text}"</p>
    <div className="flex items-center gap-4 mt-auto pt-6 border-t border-[#E5E7EB]">
      <div className="w-12 h-12 rounded-full bg-[#F8FAFC] border border-[#E5E7EB] flex items-center justify-center text-xl overflow-hidden shadow-sm">
        {avatar}
      </div>
      <div>
        <h4 className="font-bold text-[#0F172A] tracking-tight">{name}</h4>
        <p className="text-[#475569] text-xs font-bold uppercase tracking-wider">{role}</p>
      </div>
    </div>
  </div>
);

const TestimonialSection = () => {
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const { initializeApp, getApps, getApp } = await import("firebase/app");
        const { getFirestore, collection, query, orderBy, limit, getDocs } = await import("firebase/firestore");

        const firebaseConfig = {
          apiKey: "AIzaSyB49W61ggHHJcAJ5WyYTmX13I8NofsggSY",
          authDomain: "olympiad-portal-d2a5e.firebaseapp.com",
          projectId: "olympiad-portal-d2a5e"
        };

        const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
        const db = getFirestore(app);

        // Removed orderBy to prevent Firebase Index errors which force the fallback silently
        const q = query(collection(db, "feedbacks"), limit(100));
        const snap = await getDocs(q);
        let realFeedbacks: any[] = [];
        
        snap.forEach(doc => {
          const data = doc.data();
          if(data.suggestion && data.suggestion.trim().length > 10) {
            realFeedbacks.push(data);
          }
        });

        // Sort by timestamp descending in memory to guarantee no index failures
        realFeedbacks.sort((a, b) => {
            const timeA = a.timestamp?.toMillis ? a.timestamp.toMillis() : 0;
            const timeB = b.timestamp?.toMillis ? b.timestamp.toMillis() : 0;
            return timeB - timeA;
        });
        realFeedbacks = realFeedbacks.slice(0, 25);

        const fallbacks = [
          { name: "Ananya Sharma", suggestion: "The mock tests are exactly like the real NSO exam. The detailed solutions helped me clear my doubts and secure an international rank.", rating: "5", class: "AIR 12, SOF NSO" },
          { name: "Rahul Verma", suggestion: "I loved the chapter-wise practice feature. It allowed me to focus on my weak areas in Mathematics before taking the full IMO mock tests.", rating: "5", class: "Class 8 Student" },
          { name: "Priya Kapoor", suggestion: "The JEE Advanced mock tests are incredibly challenging and perfectly simulate the actual CBT environment. Highly recommended!", rating: "5", class: "JEE Aspirant" },
          { name: "Vikram Singh", suggestion: "The analytical reports helped me identify my weak subjects. My scores improved significantly after practicing the chapter-wise questions.", rating: "4", class: "Class 10 Student" },
          { name: "Sneha Reddy", suggestion: "OlympiadQuiz's HOTS section is a game-changer. The complexity of the questions really prepares you for the toughest exams.", rating: "5", class: "Class 9 Student" }
        ];

        let mixed: any[] = [];
        let fallbackIndex = 0;
        
        if (realFeedbacks.length === 0) {
            mixed = fallbacks;
        } else {
            realFeedbacks.forEach((t, i) => {
                mixed.push(t);
                if ((i + 1) % 2 === 0 && fallbackIndex < fallbacks.length) {
                    mixed.push(fallbacks[fallbackIndex]);
                    fallbackIndex++;
                }
            });
            while (fallbackIndex < fallbacks.length && mixed.length < 3) {
                mixed.push(fallbacks[fallbackIndex]);
                fallbackIndex++;
            }
        }
        
        setTestimonials(mixed);
      } catch (e) {
        console.error("Error loading testimonials:", e);
        setTestimonials([
          { name: "Ananya Sharma", suggestion: "The mock tests are exactly like the real NSO exam. The detailed solutions helped me clear my doubts and secure an international rank.", rating: "5", class: "AIR 12, SOF NSO" },
          { name: "Rahul Verma", suggestion: "I loved the chapter-wise practice feature. It allowed me to focus on my weak areas in Mathematics before taking the full IMO mock tests.", rating: "5", class: "Class 8 Student" },
          { name: "Priya Kapoor", suggestion: "The JEE Advanced mock tests are incredibly challenging and perfectly simulate the actual CBT environment. Highly recommended!", rating: "5", class: "JEE Aspirant" }
        ]);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <section className="py-[120px] px-6 lg:px-12 max-w-[1400px] mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight mb-4">Student Success Stories</h2>
        <p className="text-lg text-[#475569] font-medium max-w-2xl mx-auto">Real experiences from students using OlympiadQuiz.</p>
      </div>
      
      {!expanded ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.slice(0, 3).map((t, idx) => {
            let ratingNum = 5;
            if (t.rating) {
                const parsed = parseInt(t.rating);
                if (!isNaN(parsed)) ratingNum = parsed;
            }
            let stars = Array.from({ length: 5 }, (_, i) => i < ratingNum ? "★" : "☆").join("");
            
            let grade = "Student";
            if (t.class) grade = t.class.toString().includes("class") ? t.class.toString().replace("class", "Class ") : t.class;
            
            const shortName = t.name ? t.name.charAt(0).toUpperCase() : "S";

            return (
              <div key={idx} className="bg-white border border-[#E5E7EB] p-8 rounded-[24px] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all duration-300 flex flex-col h-full relative overflow-hidden">
                <div className="absolute top-5 right-5 opacity-5">
                    <svg width="45" height="45" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
                </div>
                <div className="flex gap-1 mb-6 text-[#c2410c] text-xl tracking-widest">{stars}</div>
                <p className="text-[#0F172A] font-medium leading-relaxed mb-8 flex-grow relative z-10">"{t.suggestion}"</p>
                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-[#E5E7EB] relative z-10">
                  <div className="w-12 h-12 rounded-full bg-[#F8FAFC] border border-[#E5E7EB] flex items-center justify-center text-xl shadow-sm text-[#0F172A] font-bold">
                    {shortName}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0F172A] tracking-tight">{t.name || 'Student'}</h4>
                    <p className="text-[#475569] text-xs font-bold uppercase tracking-wider">{grade}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 lg:p-8 max-w-[900px] mx-auto h-[600px] overflow-y-auto shadow-inner" style={{ scrollbarWidth: 'thin' }}>
          {testimonials.map((t, idx) => {
            let ratingNum = 5;
            if (t.rating) {
                const parsed = parseInt(t.rating);
                if (!isNaN(parsed)) ratingNum = parsed;
            }
            let stars = Array.from({ length: 5 }, (_, i) => i < ratingNum ? "★" : "☆").join("");
            
            let grade = "Student";
            if (t.class) grade = t.class.toString().includes("class") ? t.class.toString().replace("class", "Class ") : t.class;
            
            const shortName = t.name ? t.name.charAt(0).toUpperCase() : "S";

            return (
              <div key={idx} className="flex gap-5 p-6 border-b border-[#E5E7EB] items-start last:border-b-0">
                <div className="w-12 h-12 rounded-full bg-[#F8FAFC] border border-[#E5E7EB] flex items-center justify-center text-xl shadow-sm flex-shrink-0 text-[#0F172A] font-bold">
                  {shortName}
                </div>
                <div>
                  <div className="text-[#c2410c] text-lg tracking-widest mb-1">{stars}</div>
                  <h4 className="font-extrabold text-[#0F172A] mb-2">{t.name || 'Student'} <span className="text-xs text-[#475569] font-semibold ml-2">- {grade}</span></h4>
                  <p className="text-[#475569] text-[15px] leading-relaxed m-0">"{t.suggestion}"</p>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {testimonials.length > 3 && (
        <div className="text-center mt-10">
          <button 
            onClick={() => setExpanded(!expanded)} 
            className="bg-white text-[#0F172A] border border-[#E5E7EB] px-6 py-3 rounded-xl font-bold hover:bg-[#F8FAFC] hover:border-[#0F172A] shadow-sm transition-all duration-200 cursor-pointer"
          >
            {expanded ? 'See Less' : 'See More Reviews'}
          </button>
        </div>
      )}
    </section>
  );
};

export default function Home() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [targetUrl, setTargetUrl] = useState('');

  const handleStartTest = (url: string) => {
    const isLoggedIn = typeof window !== 'undefined' ? localStorage.getItem('isLoggedIn') === 'true' : false;
    if (isLoggedIn) {
      window.location.href = url;
    } else {
      setTargetUrl(url);
      setIsAuthModalOpen(true);
    }
  };

  const handleLoginClick = () => {
    const isLoggedIn = typeof window !== 'undefined' ? localStorage.getItem('isLoggedIn') === 'true' : false;
    if (isLoggedIn) {
      window.location.href = 'dashboard.html';
    } else {
      setIsAuthModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans selection:bg-[#FF6B00] selection:text-white">
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
      <Navbar onLoginClick={handleLoginClick} />
      <main>
        <Hero onStartTest={handleStartTest} />
        <FeatureStrip />
        <QuizSection onStartTest={handleStartTest} />
        <TestimonialSection />
      </main>
    </div>
  );
}