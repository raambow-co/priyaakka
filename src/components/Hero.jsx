import { useState } from 'react';
import { 
  Mail, 
  Phone, 
  Award, 
  Briefcase, 
  Users, 
  ShieldCheck,
  ChevronRight,
  Download,
  UserCheck,
  Cpu,
  Layers,
  HelpCircle,
  Settings,
  Smile
} from 'lucide-react';

const LinkedInIcon = (props) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export default function Hero() {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      alert("Resume download started! (Demo)");
    }, 1500);
  };

  return (
    <>
      <section className="relative min-h-screen w-full flex items-center justify-center py-16 px-4 md:px-8 lg:px-16 overflow-hidden bg-main-bg">
      {/* Background blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-primary/20 blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-secondary/30 blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-[30%] right-[20%] w-[350px] h-[350px] rounded-full bg-light-bg/40 blur-3xl animate-pulse-slow" style={{ animationDelay: '4s' }}></div>

      {/* Floating abstract decorative shapes */}
      <div className="absolute top-[15%] left-[45%] w-6 h-6 rounded-lg bg-primary/30 border border-white/20 rotate-45 animate-float-slow hidden md:block"></div>
      <div className="absolute bottom-[20%] left-[25%] w-8 h-8 rounded-full bg-secondary/20 border border-white/20 animate-float-medium hidden md:block" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-[40%] left-[10%] w-4 h-4 rounded-full bg-dark-accent/20 animate-float-fast hidden md:block" style={{ animationDelay: '3s' }}></div>

      <div className="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* LEFT SIDE CONTENT - Spans 7 columns on large screens */}
        <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6 md:space-y-8 animate-fade-up">
          
          {/* Small Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-badge text-xs md:text-sm font-semibold tracking-wide text-dark-accent transition-all duration-300 hover:scale-105 hover:bg-white/40 cursor-default">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
            </span>
            <span className="font-display font-medium">Technical Lead &bull; Cognizant</span>
          </div>

          {/* Main Heading & Subheadings */}
          <div className="space-y-4 w-full">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-dark-accent font-display leading-[1.1]">
              Hi, I'm <span className="bg-gradient-to-r from-secondary to-dark-accent bg-clip-text text-transparent drop-shadow-sm">Gouri Priya</span>
            </h1>
            
            <div className="space-y-2">
              <h2 className="text-xl md:text-2xl font-bold text-secondary font-display flex flex-wrap items-center gap-2">
                Technical Lead (Service Desk) at Cognizant
              </h2>
              <p className="text-sm md:text-base font-medium tracking-wide text-muted font-display uppercase">
                Ex-TCS Professional <span className="mx-2 text-primary">|</span> ITIL® V4 Foundation Certified
              </p>
            </div>
          </div>



          {/* Call to Actions & Social Connections */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
            {/* Primary Button */}
            <button className="relative group px-8 py-4 rounded-xl font-display font-bold text-white bg-dark-accent shadow-lg shadow-dark-accent/20 overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-dark-accent/30 active:scale-95 text-center">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-secondary via-primary to-secondary bg-[length:200%_auto] transition-all duration-500 group-hover:bg-right"></span>
              <span className="relative flex items-center justify-center gap-2 z-10">
                Explore My Journey
                <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </button>

            {/* Secondary Button */}
            <button 
              onClick={handleDownload}
              disabled={downloading}
              className="group px-8 py-4 rounded-xl font-display font-semibold text-dark-accent bg-transparent border-2 border-secondary/60 hover:border-secondary glass-panel transition-all duration-300 hover:bg-secondary/10 hover:scale-[1.03] active:scale-95 flex items-center justify-center gap-2"
            >
              {downloading ? (
                <>
                  <span className="animate-spin rounded-full h-5 w-5 border-2 border-dark-accent border-t-transparent"></span>
                  Downloading...
                </>
              ) : (
                <>
                  <Download className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-0.5" />
                  Download Resume
                </>
              )}
            </button>
            
            {/* Social Icons Container */}
            <div className="flex items-center justify-center gap-3 px-4 py-3 sm:py-0">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer"
                aria-label="LinkedIn Profile" 
                className="p-3 rounded-full bg-white/30 border border-white/40 text-dark-accent transition-all duration-300 hover:scale-110 hover:bg-secondary hover:text-white hover:shadow-md"
              >
                <LinkedInIcon className="w-5 h-5" />
              </a>
              <a 
                href="mailto:gouri.priya@example.com" 
                aria-label="Send Email" 
                className="p-3 rounded-full bg-white/30 border border-white/40 text-dark-accent transition-all duration-300 hover:scale-110 hover:bg-secondary hover:text-white hover:shadow-md"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="tel:+1234567890" 
                aria-label="Call Contact" 
                className="p-3 rounded-full bg-white/30 border border-white/40 text-dark-accent transition-all duration-300 hover:scale-110 hover:bg-secondary hover:text-white hover:shadow-md"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>
          
        </div>

        {/* RIGHT SIDE CONTENT - Spans 5 columns on large screens */}
        <div className="lg:col-span-5 flex justify-center items-center relative py-12 lg:py-0">
          
          {/* Main Portrait Frame with Animated Glowing Border */}
          <div className="relative w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] rounded-full p-2.5 animate-glow border-2 flex items-center justify-center bg-white/15 backdrop-blur-md z-20">
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-white/60 shadow-inner">
              <img 
                src="/portrait.png" 
                alt="Gouri Priya - Technical Lead" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Floating Skill Chips (Positioned absolutely around the circular frame) */}
            
            {/* IT Operations */}
            <div className="absolute -top-4 left-[15%] glass-card px-4 py-2 rounded-2xl flex items-center gap-1.5 shadow-sm text-xs sm:text-sm font-semibold text-dark-accent animate-float-slow border border-white/30 hover:scale-105 hover:bg-white/50 transition-all duration-300">
              <Settings className="w-3.5 h-3.5 text-secondary" />
              IT Operations
            </div>

            {/* Technical Support */}
            <div className="absolute top-[20%] -right-10 glass-card px-4 py-2 rounded-2xl flex items-center gap-1.5 shadow-sm text-xs sm:text-sm font-semibold text-dark-accent animate-float-medium border border-white/30 hover:scale-105 hover:bg-white/50 transition-all duration-300" style={{ animationDelay: '0.7s' }}>
              <Cpu className="w-3.5 h-3.5 text-secondary" />
              Technical Support
            </div>

            {/* Incident Management */}
            <div className="absolute bottom-[45%] -left-12 glass-card px-4 py-2 rounded-2xl flex items-center gap-1.5 shadow-sm text-xs sm:text-sm font-semibold text-dark-accent animate-float-fast border border-white/30 hover:scale-105 hover:bg-white/50 transition-all duration-300" style={{ animationDelay: '1.4s' }}>
              <HelpCircle className="w-3.5 h-3.5 text-secondary" />
              Incident Management
            </div>

            {/* Change Management */}
            <div className="absolute bottom-[10%] -right-12 glass-card px-4 py-2 rounded-2xl flex items-center gap-1.5 shadow-sm text-xs sm:text-sm font-semibold text-dark-accent animate-float-slow border border-white/30 hover:scale-105 hover:bg-white/50 transition-all duration-300" style={{ animationDelay: '2.1s' }}>
              <Layers className="w-3.5 h-3.5 text-secondary" />
              Change Management
            </div>

            {/* Service Desk */}
            <div className="absolute -bottom-5 left-[30%] glass-card px-4 py-2 rounded-2xl flex items-center gap-1.5 shadow-sm text-xs sm:text-sm font-semibold text-dark-accent animate-float-medium border border-white/30 hover:scale-105 hover:bg-white/50 transition-all duration-300" style={{ animationDelay: '2.8s' }}>
              <UserCheck className="w-3.5 h-3.5 text-secondary" />
              Service Desk
            </div>

            {/* Customer Satisfaction */}
            <div className="absolute top-[35%] -left-14 glass-card px-4 py-2 rounded-2xl flex items-center gap-1.5 shadow-sm text-xs sm:text-sm font-semibold text-dark-accent animate-float-slow border border-white/30 hover:scale-105 hover:bg-white/50 transition-all duration-300" style={{ animationDelay: '3.5s' }}>
              <Smile className="w-3.5 h-3.5 text-secondary" />
              Customer Satisfaction
            </div>

          </div>

          {/* Background circle graphic behind headshot */}
          <div className="absolute w-[340px] h-[340px] sm:w-[440px] sm:h-[440px] rounded-full border border-white/10 z-10 animate-pulse-slow"></div>
          <div className="absolute w-[380px] h-[380px] sm:w-[480px] sm:h-[480px] rounded-full border-2 border-dashed border-primary/20 z-10 animate-spin" style={{ animationDuration: '40s' }}></div>

        </div>

      </div>
    </section>

      {/* Full-Width Statistics Banner */}
      <section className="relative w-full py-12 px-4 md:px-8 lg:px-16 overflow-hidden bg-dark-accent shadow-xl border-t border-b border-white/10 z-20">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/10 via-primary/5 to-secondary/10 pointer-events-none"></div>
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Experience', val: '5+ Years', icon: Briefcase },
              { label: 'Top IT Corps', val: '2 Orgs', icon: Award },
              { label: 'Connections', val: '500+', icon: Users },
              { label: 'Certification', val: 'ITIL® V4', icon: ShieldCheck },
            ].map((stat, i) => {
              const IconComp = stat.icon;
              return (
                <div 
                  key={i} 
                  className="flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-white/10 hover:border-white/20 cursor-default"
                >
                  <div className="p-3 rounded-xl bg-primary/20 text-primary shrink-0">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-extrabold text-white font-display">{stat.val}</div>
                    <div className="text-[10px] md:text-xs font-bold text-primary-foreground/75 uppercase tracking-wider mt-0.5">{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
