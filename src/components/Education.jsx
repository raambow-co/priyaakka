import { useState } from 'react';
import { 
  GraduationCap, 
  Award, 
  Calendar, 
  CheckCircle2, 
  BookOpen, 
  MapPin, 
  Sparkles, 
  RotateCw, 
  Clock, 
  ShieldCheck, 
  BookMarked,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

export default function Education() {
  const [flippedCard, setFlippedCard] = useState({ 0: false, 1: false });
  const [showAllEducation, setShowAllEducation] = useState(false);

  const toggleFlip = (index) => {
    setFlippedCard(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const educationTimeline = [
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'Shanmugha Arts, Science, Technology & Research Academy (SASTRA)',
      location: 'Thanjavur, Tamil Nadu',
      duration: 'February 2022 – March 2024',
      badge: 'Postgraduate Degree',
      highlights: ['Program Management', 'Cloud Computing', 'Project Planning'],
      icon: GraduationCap,
      color: 'from-purple-500 to-indigo-500 text-white shadow-purple-500/20'
    },
    {
      degree: 'Bachelor of Science – Computer Science',
      institution: "St. Ann's College for Women",
      location: 'Hyderabad, Telangana',
      duration: '2018 – 2021',
      badge: 'Graduation',
      grade: 'CGPA: 8.16',
      highlights: ['C Programming', 'C++', 'Computer Science Fundamentals'],
      icon: GraduationCap,
      color: 'from-blue-500 to-cyan-500 text-white shadow-blue-500/20'
    },
    {
      degree: 'Intermediate (MPC)',
      institution: 'Sri Gayatri Junior College',
      location: 'Hyderabad, Telangana',
      duration: '2016 – 2018',
      badge: 'Academic Excellence',
      grade: 'Score: 96.8%',
      highlights: [],
      icon: BookOpen,
      color: 'from-orange-500 to-amber-500 text-white shadow-orange-500/20'
    },
    {
      degree: 'Secondary School Education',
      institution: 'Sri Sai Shiva High School',
      location: 'Hyderabad, Telangana',
      duration: '2007 – 2016',
      badge: 'Strong Foundation',
      grade: 'Grade: 9.5 GPA',
      highlights: [],
      icon: BookMarked,
      color: 'from-emerald-500 to-teal-500 text-white shadow-emerald-500/20'
    }
  ];

  const certifications = [
    {
      title: 'ITIL® V4 Foundation',
      org: 'PeopleCert',
      issued: 'March 2024',
      valid: 'March 2027',
      desc: 'Industry-recognized certification focused on IT Service Management principles, service lifecycle, operational excellence, and customer-centric service delivery.',
      skills: ['ITIL Service Operations', 'ITIL Implementation', 'Service Strategy', 'Service Improvement'],
      icon: ShieldCheck,
      color: 'bg-indigo-500/10 text-indigo-700 border-indigo-500/20'
    },
    {
      title: 'PROZM Certified Professional – IT SAM',
      org: 'PROZM Knowledge Services Pvt Ltd',
      issued: 'May 2024',
      valid: 'May 2027',
      desc: 'Professional certification focused on IT Software Asset Management, compliance monitoring, software governance, and optimization.',
      skills: ['IT Asset Management', 'Software Compliance', 'Governance', 'Risk Management'],
      icon: Award,
      color: 'bg-emerald-500/10 text-emerald-700 border-emerald-500/20'
    }
  ];

  const stats = [
    { label: 'Total Certifications', val: '8+', icon: Sparkles },
    { label: 'Featured Certifications', val: '2 Featured', icon: Award },
    { label: 'Highest Qualification', val: 'MCA', icon: GraduationCap },
    { label: 'Academic Journey', val: '17+ Years', icon: Clock }
  ];

  return (
    <section className="relative w-full py-20 px-4 md:px-8 lg:px-16 overflow-hidden bg-light-bg/10 border-t border-secondary/10">
      {/* Background Blobs */}
      <div className="absolute top-[30%] left-[-10%] w-[450px] h-[450px] rounded-full bg-secondary/10 blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-[20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-primary/15 blur-3xl animate-pulse-slow"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* Section Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16 border-b border-secondary/10 pb-10">
          <div className="lg:col-span-4 text-left">
            <h2 className="text-sm font-bold tracking-wider text-secondary uppercase font-display mb-2">
              Education & Credentials
            </h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-dark-accent font-display tracking-tight leading-tight">
              Qualifications
            </h3>
            <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full mt-4"></div>
          </div>
          <div className="lg:col-span-8 text-left">
            <p className="text-lg md:text-xl text-dark-accent/90 leading-relaxed font-normal font-sans">
              A strong blend of academic excellence and industry-recognized certifications that support continuous professional growth.
            </p>
          </div>
        </div>

        {/* Two-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT COLUMN: Academic Timeline */}
          <div className="lg:col-span-6 space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="w-6 h-6 text-secondary" />
              <h4 className="text-xl md:text-2xl font-extrabold text-dark-accent font-display">
                Education Timeline
              </h4>
            </div>

            <div className="relative border-l-2 border-secondary/20 ml-6 space-y-12 text-left">
              {educationTimeline.slice(0, showAllEducation ? undefined : 2).map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div key={idx} className="relative pl-10 group transition-all duration-300">
                    {/* Interactive timeline nodes */}
                    <div className={`absolute -left-[21px] top-1.5 w-10 h-10 rounded-full border-4 border-white flex items-center justify-center bg-gradient-to-r ${item.color} z-10 shadow-md transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                      <IconComp className="w-4 h-4" />
                    </div>

                    {/* Timeline card */}
                    <div className="glass-card rounded-2xl border border-white/30 shadow-md p-6 transition-all duration-300 hover:shadow-xl hover:bg-white/45">
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-secondary/10 pb-3 mb-3">
                        <span className="inline-block px-2.5 py-0.5 rounded-full bg-secondary/10 text-secondary text-[10px] font-bold tracking-wide uppercase border border-secondary/20">
                          {item.badge}
                        </span>
                        <span className="flex items-center gap-1 text-xs font-semibold text-muted">
                          <Calendar className="w-3.5 h-3.5" />
                          {item.duration}
                        </span>
                      </div>

                      <h5 className="text-lg font-extrabold text-dark-accent font-display">
                        {item.degree}
                      </h5>

                      <div className="flex flex-col gap-1 mt-2 mb-3 text-xs md:text-sm font-semibold text-secondary/80">
                        <span>{item.institution}</span>
                        {item.location && (
                          <span className="flex items-center gap-1 text-[11px] text-muted">
                            <MapPin className="w-3 h-3" />
                            {item.location}
                          </span>
                        )}
                      </div>

                      {item.grade && (
                        <div className="inline-block mb-3 px-3 py-1 rounded-lg bg-white/40 border border-white/50 text-xs font-bold text-dark-accent font-display">
                          {item.grade}
                        </div>
                      )}

                      <div className="flex flex-wrap gap-2 pt-1">
                        {item.highlights.map((high, hIdx) => (
                          <span 
                            key={hIdx}
                            className="inline-block px-2 py-0.5 rounded bg-white/60 border border-white/40 text-[10px] md:text-xs font-bold text-dark-accent/80 font-display"
                          >
                            {high}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* View More / View Less Button */}
            <div className="pt-8 text-left ml-6">
              <button 
                onClick={() => setShowAllEducation(!showAllEducation)}
                className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-display font-semibold text-dark-accent bg-white/40 border border-white/50 hover:bg-white/60 hover:border-secondary/40 transition-all duration-300 hover:scale-[1.03] active:scale-95 shadow-sm cursor-pointer"
              >
                {showAllEducation ? (
                  <>
                    View Less
                    <ChevronUp className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
                  </>
                ) : (
                  <>
                    View More
                    <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" />
                  </>
                )}
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: Certifications Showcase */}
          <div className="lg:col-span-6 space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-6 h-6 text-secondary" />
              <h4 className="text-xl md:text-2xl font-extrabold text-dark-accent font-display">
                Certifications Showcase
              </h4>
            </div>

            {/* Certifications Grid (Flip Cards) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {certifications.map((cert, idx) => {
                const IconComp = cert.icon;
                const isFlipped = !!flippedCard[idx];
                return (
                  <div 
                    key={idx}
                    onClick={() => toggleFlip(idx)}
                    className="group perspective w-full h-[320px] cursor-pointer"
                  >
                    <div className={`relative w-full h-full duration-700 preserve-3d transition-transform ${isFlipped ? 'rotate-y-180' : ''}`}>
                      
                      {/* Front Side */}
                      <div className="absolute inset-0 backface-hidden rounded-2xl glass-card border border-white/40 p-6 flex flex-col justify-between shadow-md hover:shadow-lg transition-shadow">
                        <div>
                          <div className="flex justify-between items-start mb-4">
                            <div className={`p-3 rounded-xl border flex items-center justify-center shrink-0 h-12 w-12 shadow-inner ${cert.color}`}>
                              <IconComp className="w-6 h-6" />
                            </div>
                            <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-600 bg-emerald-500/10 px-2 py-1 rounded-full border border-emerald-500/20">
                              <CheckCircle2 className="w-3.5 h-3.5" />
                              Active
                            </span>
                          </div>

                          <h5 className="font-extrabold text-dark-accent text-base md:text-lg font-display leading-snug">
                            {cert.title}
                          </h5>
                          <p className="text-xs font-bold text-secondary mt-1">{cert.org}</p>
                        </div>

                        <div className="border-t border-secondary/10 pt-4 mt-auto">
                          <div className="flex items-center justify-between text-[11px] font-semibold text-muted">
                            <span>Issued: {cert.issued}</span>
                            <span>Expires: {cert.valid}</span>
                          </div>
                          
                          <div className="flex items-center justify-center gap-1.5 mt-3 text-[10px] font-bold text-secondary/70 group-hover:text-secondary transition-colors uppercase tracking-wider">
                            <RotateCw className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '6s' }} />
                            Click to View Skills
                          </div>
                        </div>
                      </div>

                      {/* Back Side */}
                      <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl glass-card border border-white/40 p-6 flex flex-col justify-between shadow-md bg-gradient-to-br from-white/60 to-white/35">
                        <div>
                          <h6 className="font-bold text-dark-accent text-[11px] uppercase tracking-wider mb-2 text-secondary">
                            Skills & Knowledge
                          </h6>
                          <p className="text-xs text-dark-accent/90 leading-relaxed font-normal mb-4">
                            {cert.desc}
                          </p>
                        </div>

                        <div>
                          <div className="flex flex-wrap gap-1.5 mb-4">
                            {cert.skills.map((skill, sIdx) => (
                              <span 
                                key={sIdx}
                                className="inline-block px-2 py-0.5 rounded-lg bg-secondary/10 border border-secondary/20 text-[10px] font-bold text-dark-accent"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>

                          <div className="flex items-center justify-center gap-1 text-[10px] font-bold text-secondary uppercase tracking-wider border-t border-secondary/10 pt-3">
                            <RotateCw className="w-3 h-3" />
                            Click to Flip back
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>

            {/* Certification Stats Grid */}
            <div className="w-full glass-panel py-6 px-6 rounded-3xl shadow-md border border-white/40">
              <h5 className="text-xs font-extrabold text-secondary tracking-widest uppercase mb-4 text-center md:text-left">
                Education & Certification Statistics
              </h5>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, i) => {
                  const IconComp = stat.icon;
                  return (
                    <div 
                      key={i} 
                      className="flex items-center gap-3 p-3 rounded-xl bg-white/20 hover:bg-white/40 border border-white/30 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] cursor-default text-left"
                    >
                      <div className="p-2 rounded-lg bg-primary/20 text-dark-accent shrink-0">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-base md:text-lg font-extrabold text-dark-accent font-display leading-none">{stat.val}</div>
                        <div className="text-[9px] md:text-[10px] font-bold text-secondary uppercase tracking-wider mt-1">{stat.label}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>



      </div>
    </section>
  );
}
