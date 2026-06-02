import React from 'react';
import { ChevronRight, Check, Award, BookOpen, Cpu, Stethoscope } from 'lucide-react';

// ============================================================================
// COMPONENTS
// ============================================================================

const Navbar = () => (
  <nav className="sticky top-0 z-50 h-[80px] bg-white/80 backdrop-blur-md border-b border-[#E5E7EB] flex items-center justify-between px-6 lg:px-12">
    {/* Left: Logo */}
    <div className="flex items-center gap-3 cursor-pointer">
      <div className="w-8 h-8 bg-[#FF6B00] rounded-lg shadow-sm flex items-center justify-center">
        <span className="text-white font-bold text-lg leading-none">O</span>
      </div>
      <span className="font-extrabold text-xl tracking-tight text-[#0F172A]">
        OLYMPIAD PORTAL
      </span>
    </div>

    {/* Center: Links */}
    <div className="hidden lg:flex items-center gap-8 text-sm font-semibold text-[#64748B]">
      <a href="#" className="text-[#0F172A] transition-colors">Home</a>
      <a href="#" className="hover:text-[#0F172A] transition-colors">Students Zone</a>
      <a href="#" className="hover:text-[#0F172A] transition-colors">Syllabus</a>
      <a href="#" className="hover:text-[#0F172A] transition-colors">Live Arena</a>
      <a href="#" className="hover:text-[#0F172A] transition-colors">Senior Exams</a>
    </div>

    {/* Right: CTA */}
    <div>
      <button className="bg-[#0F172A] text-white px-6 py-2.5 rounded-xl text-sm font-semibold hover:bg-[#1e293b] shadow-sm transition-all duration-200">
        Login
      </button>
    </div>
  </nav>
);

const Hero = () => (
  <section className="pt-[120px] pb-[100px] px-6 lg:px-12 max-w-[1400px] mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      {/* Left Column */}
      <div className="max-w-xl">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#FF6B00]/10 text-[#FF6B00] text-xs font-bold uppercase tracking-wider mb-8">
          India's Smart Olympiad Practice Platform
        </div>
        
        <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tighter mb-6 leading-[1.1]">
          <span className="block text-[#0F172A]">Practice Smart.</span>
          <span className="block text-[#FF6B00]">Achieve Greatness.</span>
        </h1>
        
        <p className="text-lg text-[#64748B] mb-10 leading-relaxed max-w-lg">
          Free mock tests for Olympiads, JEE Main, JEE Advanced and NEET with real exam experience, instant analysis and smart performance tracking.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <button className="bg-[#FF6B00] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#e66000] hover:shadow-[0_8px_30px_rgba(255,107,0,0.2)] transition-all duration-200">
            Start Free Mock Test
          </button>
          <button className="bg-white text-[#0F172A] px-8 py-4 rounded-xl font-bold border border-[#E5E7EB] hover:border-[#0F172A] hover:bg-[#F8FAFC] shadow-sm transition-all duration-200">
            Explore Tests
          </button>
        </div>
        
        <div className="flex items-center gap-4 text-sm font-medium text-[#64748B] mt-6">
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
               <p className="text-[#64748B] text-xs font-bold uppercase tracking-wider mb-0.5">AIR Rank</p>
               <p className="text-[#0F172A] font-extrabold text-2xl leading-none mb-1">#142</p>
               <p className="text-[#64748B] text-xs font-medium">Top 1% of students</p>
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

const QuizCard = ({ title, description, icon: Icon, questions }: { title: string, description: string, icon: any, questions: string }) => (
  <div className="group bg-white border border-[#E5E7EB] p-8 rounded-[24px] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:border-[#FF6B00]/30 transition-all duration-300 cursor-pointer flex flex-col h-full">
    <div className="w-12 h-12 rounded-xl bg-[#F8FAFC] border border-[#E5E7EB] flex items-center justify-center text-[#0F172A] mb-8 group-hover:bg-[#FF6B00] group-hover:text-white group-hover:border-[#FF6B00] transition-colors duration-300 shadow-sm">
      <Icon size={22} strokeWidth={2.5} />
    </div>
    
    <h3 className="text-xl font-bold text-[#0F172A] mb-3 tracking-tight">{title}</h3>
    <p className="text-[#64748B] text-sm leading-relaxed mb-10 flex-grow">{description}</p>
    
    <div className="flex items-center justify-between mt-auto pt-6 border-t border-[#E5E7EB]">
      <span className="text-xs font-bold text-[#64748B] uppercase tracking-wider bg-[#F8FAFC] px-3 py-1 rounded-md">{questions}</span>
      <div className="text-[#0F172A] group-hover:text-[#FF6B00] transition-colors flex items-center gap-1 text-sm font-bold tracking-tight">
        Start <ChevronRight size={16} strokeWidth={3} className="group-hover:translate-x-1 transition-transform" />
      </div>
    </div>
  </div>
);

const QuizSection = () => {
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
        <p className="text-lg text-[#64748B] font-medium">Select your exam and start practicing instantly.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {quizzes.map((quiz, idx) => (
          <QuizCard key={idx} {...quiz} />
        ))}
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans selection:bg-[#FF6B00] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <FeatureStrip />
        <QuizSection />
      </main>
    </div>
  );
}