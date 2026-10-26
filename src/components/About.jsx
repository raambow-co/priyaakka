import { useState, useEffect } from 'react';
import { 
  Award, 
  ShieldCheck, 
  Zap, 
  Users, 
  FileCheck, 
  Smile, 
  MessageSquareQuote,
  RefreshCw,
  AlertTriangle,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

export default function About() {


  const strengths = [
    {
      title: 'Incident Management',
      desc: 'Managing and resolving critical incidents efficiently.',
      icon: AlertTriangle,
      color: 'bg-red-500/10 text-red-700 border-red-500/20'
    },
    {
      title: 'Change Management',
      desc: 'Ensuring smooth implementation of organizational changes.',
      icon: RefreshCw,
      color: 'bg-blue-500/10 text-blue-700 border-blue-500/20'
    },
    {
      title: 'Service Delivery',
      desc: 'Maintaining SLA and operational excellence.',
      icon: Zap,
      color: 'bg-amber-500/10 text-amber-700 border-amber-500/20'
    },
    {
      title: 'Team Leadership',
      desc: 'Supporting and guiding teams toward shared goals.',
      icon: Users,
      color: 'bg-emerald-500/10 text-emerald-700 border-emerald-500/20'
    },
    {
      title: 'Software Compliance',
      desc: 'Monitoring software governance and compliance processes.',
      icon: FileCheck,
      color: 'bg-indigo-500/10 text-indigo-700 border-indigo-500/20'
    },
    {
      title: 'Customer Satisfaction',
      desc: 'Delivering high-quality support experiences.',
      icon: Smile,
      color: 'bg-pink-500/10 text-pink-700 border-pink-500/20'
    }
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  // Auto-play feature: changes slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % strengths.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [strengths.length]);

  const handlePrev = () => {
    setActiveSlide((prev) => (prev - 1 + strengths.length) % strengths.length);
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % strengths.length);
  };

  return (
    <section className="relative w-full py-20 px-4 md:px-8 lg:px-16 overflow-hidden bg-light-bg/30">
      {/* Background Blobs */}
      <div className="absolute top-[20%] left-[-15%] w-[400px] h-[400px] rounded-full bg-primary/10 blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-[10%] right-[-15%] w-[500px] h-[500px] rounded-full bg-secondary/15 blur-3xl animate-pulse-slow"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* Section Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16 border-b border-secondary/10 pb-10">
          <div className="lg:col-span-4 text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-dark-accent font-display tracking-tight">
              About Me
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full mt-4"></div>
          </div>
          <div className="lg:col-span-8 text-left">
            <div className="relative glass-card p-6 rounded-2xl shadow-inner border border-white/40 overflow-hidden bg-gradient-to-r from-primary/10 to-secondary/10">
              <div className="absolute -right-4 -bottom-4 text-primary/10 select-none">
                <MessageSquareQuote className="w-24 h-24 rotate-12" />
              </div>
              <div className="flex gap-4 items-start relative z-10">
                <MessageSquareQuote className="w-8 h-8 text-secondary shrink-0 mt-1" />
                <p className="text-base md:text-lg italic font-medium text-dark-accent leading-relaxed font-display">
                  "Success in IT is not only about technology; it is about enabling people, improving processes, and delivering consistent value."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT SIDE: Professional Image, Certifications, Highlights */}
          <div className="lg:col-span-5 flex flex-col items-center space-y-8">
            
            {/* Image Card Container */}
            <div className="relative w-full max-w-sm rounded-3xl p-4 glass-panel shadow-xl group">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/40 shadow-md">
                <img 
                  src="/portrait.png" 
                  alt="Gouri Priya - IT Operations Lead" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Floating Certifications Overlay */}
                <div className="absolute -top-3 -right-3 glass-card px-3 py-2 rounded-2xl flex items-center gap-1.5 shadow-md border border-white/40 animate-float-slow">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span className="text-[10px] sm:text-xs font-bold text-dark-accent">ITIL® V4 Foundation</span>
                </div>

                <div className="absolute -bottom-3 -left-3 glass-card px-3 py-2 rounded-2xl flex items-center gap-1.5 shadow-md border border-white/40 animate-float-medium" style={{ animationDelay: '1.5s' }}>
                  <Award className="w-4 h-4 text-purple-600" />
                  <span className="text-[10px] sm:text-xs font-bold text-dark-accent">PROZM Certified – IT SAM</span>
                </div>
              </div>
            </div>



          </div>

          {/* RIGHT SIDE: Story, Strengths Slideshow, Quote */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Bio Text (no background section/card wrapper) - Styled Large */}
            <div className="space-y-4 text-dark-accent/90 text-lg sm:text-xl md:text-2xl leading-relaxed font-medium font-sans">
              <p>
                I am an IT professional with over five years of experience in IT Operations, Service Desk Management, Incident Handling, Change Management, and Software Compliance. Starting my journey at Tata Consultancy Services across technical and leadership roles, I now serve as a Technical Lead at Cognizant, focused on driving service excellence and operational efficiency.
              </p>
            </div>

            {/* Core Strengths Slideshow */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-bold text-dark-accent font-display uppercase tracking-wider">
                  Core Strengths & Expertise
                </h4>
                
                {/* Manual Navigation Controls */}
                <div className="flex gap-2">
                  <button 
                    onClick={handlePrev}
                    className="p-2 rounded-xl bg-white/40 hover:bg-white/70 border border-white/40 text-dark-accent transition-all duration-300 hover:scale-105 active:scale-95"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={handleNext}
                    className="p-2 rounded-xl bg-white/40 hover:bg-white/70 border border-white/40 text-dark-accent transition-all duration-300 hover:scale-105 active:scale-95"
                    aria-label="Next slide"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Slider Card Container */}
              <div className="relative min-h-[140px] w-full overflow-hidden rounded-2xl glass-card p-6 border border-white/30 shadow-md flex gap-5 items-center transition-all duration-500">
                {strengths.map((str, idx) => {
                  const IconComp = str.icon;
                  const isActive = idx === activeSlide;
                  return (
                    <div 
                      key={idx}
                      className={`absolute inset-0 p-6 flex gap-5 items-center transition-all duration-500 ease-in-out ${
                        isActive 
                          ? 'opacity-100 translate-x-0 pointer-events-auto' 
                          : 'opacity-0 translate-x-8 pointer-events-none'
                      }`}
                    >
                      <div className={`p-4 rounded-2xl border flex items-center justify-center shrink-0 h-16 w-16 shadow-inner transition-transform duration-500 ${isActive ? 'scale-100' : 'scale-75'} ${str.color}`}>
                        <IconComp className="w-8 h-8" />
                      </div>
                      
                      <div className="space-y-2">
                        <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">
                          Strength {idx + 1} of {strengths.length}
                        </span>
                        <h5 className="font-extrabold text-dark-accent text-lg md:text-xl font-display">
                          {str.title}
                        </h5>
                        <p className="text-sm text-dark-accent/80 leading-relaxed font-normal font-sans">
                          {str.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Slider Indicator Dots */}
              <div className="flex justify-center gap-2 pt-2">
                {strengths.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveSlide(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === activeSlide ? 'w-6 bg-secondary' : 'w-2 bg-secondary/30 hover:bg-secondary/50'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
