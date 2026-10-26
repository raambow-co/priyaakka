import { useState } from 'react';
import { 
  Shield, 
  Server, 
  ShieldCheck, 
  Users, 
  Smile, 
  Cpu, 
  Sparkles, 
  Clock, 
  Briefcase, 
  Award, 
  CheckCircle2, 
  MessageSquareQuote,
  ChevronRight,
  TrendingUp
} from 'lucide-react';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeStrength, setActiveStrength] = useState(0);

  const categories = [
    {
      id: 'itsm',
      title: 'IT Service Management',
      icon: Shield,
      color: 'bg-red-500/10 text-red-700 border-red-500/20',
      glow: 'shadow-red-500/5',
      skills: ['Incident Management', 'Change Management', 'Problem Management', 'Service Desk Operations', 'SLA Management', 'ITIL Practices']
    },
    {
      id: 'techops',
      title: 'Technical Operations',
      icon: Server,
      color: 'bg-blue-500/10 text-blue-700 border-blue-500/20',
      glow: 'shadow-blue-500/5',
      skills: ['Technical Support', 'IT Operations', 'System Administration', 'Enterprise Software Support', 'Software Installation', 'Troubleshooting']
    },
    {
      id: 'compliance',
      title: 'Software Compliance & Governance',
      icon: ShieldCheck,
      color: 'bg-emerald-500/10 text-emerald-700 border-emerald-500/20',
      glow: 'shadow-emerald-500/5',
      skills: ['Software Compliance', 'IT Asset Management', 'Audit Support', 'License Management', 'Governance Processes', 'Risk Monitoring']
    },
    {
      id: 'leadership',
      title: 'Leadership & Management',
      icon: Users,
      color: 'bg-indigo-500/10 text-indigo-700 border-indigo-500/20',
      glow: 'shadow-indigo-500/5',
      skills: ['Team Leadership', 'Stakeholder Management', 'Project Coordination', 'Service Delivery', 'Operational Planning', 'Decision Making']
    },
    {
      id: 'customer',
      title: 'Customer Success',
      icon: Smile,
      color: 'bg-pink-500/10 text-pink-700 border-pink-500/20',
      glow: 'shadow-pink-500/5',
      skills: ['Customer Satisfaction', 'Communication', 'Client Relationship Management', 'Escalation Handling', 'Service Improvement', 'User Support']
    },
    {
      id: 'foundation',
      title: 'Technical Foundation',
      icon: Cpu,
      color: 'bg-amber-500/10 text-amber-700 border-amber-500/20',
      glow: 'shadow-amber-500/5',
      skills: ['Microsoft Azure', 'C Programming', 'C++', 'Python', 'System Configuration', 'Enterprise Tools']
    }
  ];

  const coreStrengths = [
    {
      title: 'Service Desk Operations',
      desc: 'Managing enterprise support environments while ensuring operational efficiency and customer satisfaction.',
      stat: '98% SLA Compliance'
    },
    {
      title: 'Incident Management',
      desc: 'Resolving critical issues and operational bottlenecks with minimal business and user impact.',
      stat: 'Minimized MTTR'
    },
    {
      title: 'Change Management',
      desc: 'Planning and executing controlled organizational changes to reduce business risks and system downtime.',
      stat: 'Zero Change Failures'
    },
    {
      title: 'Software Compliance',
      desc: 'Maintaining software governance, regulatory compliance, audits, and asset license management.',
      stat: '100% Audit Readiness'
    },
    {
      title: 'Team Leadership',
      desc: 'Leading and supporting cross-functional teams to achieve service excellence and reach goals.',
      stat: 'Technical Lead Experience'
    }
  ];

  const stats = [
    { label: 'Experience', val: '5+ Years', icon: Clock },
    { label: 'Professional Roles', val: '6 Roles', icon: Briefcase },
    { label: 'Organizations Worked', val: '2 Major', icon: TrendingUp },
    { label: 'Credentials & Certs', val: '8+ Certs', icon: Award }
  ];

  const filteredCategories = selectedCategory === 'all' 
    ? categories 
    : categories.filter(c => c.id === selectedCategory);

  return (
    <section className="relative w-full py-20 px-4 md:px-8 lg:px-16 overflow-hidden bg-main-bg/15 border-t border-secondary/10">
      {/* Background blobs */}
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-primary/15 blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-[30%] left-[-15%] w-[450px] h-[450px] rounded-full bg-secondary/10 blur-3xl animate-pulse-slow"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* Section Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12 border-b border-secondary/10 pb-10">
          <div className="lg:col-span-4 text-left">
            <h2 className="text-sm font-bold tracking-wider text-secondary uppercase font-display mb-2">
              Professional Expertise
            </h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-dark-accent font-display tracking-tight leading-tight">
              Skills
            </h3>
            <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full mt-4"></div>
          </div>
          <div className="lg:col-span-8 text-left">
            <p className="text-lg md:text-xl text-dark-accent/90 leading-relaxed font-normal font-sans">
              A comprehensive skill set developed through years of experience in enterprise IT environments, service management, and technical leadership.
            </p>
          </div>
        </div>

        {/* Dashboard Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT SIDE: Skill Grid and Category Filtering */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 pb-2 border-b border-secondary/5">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer ${
                  selectedCategory === 'all' 
                    ? 'bg-dark-accent text-white shadow-md' 
                    : 'bg-white/40 hover:bg-white/70 text-dark-accent border border-white/40'
                }`}
              >
                All Expertise
              </button>
              {categories.map(cat => {
                const IconComp = cat.icon;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer ${
                      selectedCategory === cat.id 
                        ? 'bg-dark-accent text-white shadow-md' 
                        : 'bg-white/40 hover:bg-white/70 text-dark-accent border border-white/40'
                    }`}
                  >
                    <IconComp className="w-3.5 h-3.5" />
                    {cat.title.split(' & ')[0].split(' - ')[0]}
                  </button>
                );
              })}
            </div>

            {/* Categories Skill Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredCategories.map(cat => {
                const IconComp = cat.icon;
                return (
                  <div 
                    key={cat.id}
                    className={`glass-card rounded-3xl border border-white/40 p-6 flex flex-col justify-between shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ${cat.glow}`}
                  >
                    <div>
                      {/* Card Header */}
                      <div className="flex items-center justify-between border-b border-secondary/10 pb-4 mb-4">
                        <h4 className="font-extrabold text-dark-accent text-base md:text-lg font-display">
                          {cat.title}
                        </h4>
                        <div className={`p-2.5 rounded-xl border flex items-center justify-center shrink-0 h-10 w-10 shadow-inner ${cat.color}`}>
                          <IconComp className="w-5 h-5" />
                        </div>
                      </div>

                      {/* Skills Grid */}
                      <div className="grid grid-cols-2 gap-2">
                        {cat.skills.map((skill, sIdx) => (
                          <div 
                            key={sIdx} 
                            className="flex items-center gap-2 p-2 rounded-xl bg-white/20 border border-white/30 hover:bg-white/50 transition-all duration-300"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-secondary shrink-0" />
                            <span className="text-xs font-bold text-dark-accent/90 truncate">{skill}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

          {/* RIGHT SIDE: Featured Expertise Panel & Stats */}
          <div className="lg:col-span-4 space-y-8 text-left">
            
            {/* Core Strengths Interactive Panel */}
            <div className="glass-card rounded-3xl border border-white/45 p-6 shadow-lg">
              <div className="flex items-center gap-2 mb-4 border-b border-secondary/10 pb-3">
                <Sparkles className="w-5 h-5 text-secondary" />
                <h4 className="font-extrabold text-dark-accent text-lg font-display">
                  Core Strength Areas
                </h4>
              </div>

              {/* Strength selector list */}
              <div className="space-y-3">
                {coreStrengths.map((str, idx) => {
                  const isActive = idx === activeStrength;
                  return (
                    <div 
                      key={idx}
                      onClick={() => setActiveStrength(idx)}
                      className={`p-4 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                        isActive 
                          ? 'bg-dark-accent text-white border-dark-accent shadow-md scale-[1.01]' 
                          : 'bg-white/30 border-white/40 text-dark-accent hover:bg-white/50 hover:border-secondary/20'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-bold font-display">{str.title}</span>
                        {isActive ? (
                          <span className="text-[10px] font-bold bg-white/25 text-white px-2 py-0.5 rounded border border-white/25">
                            Active
                          </span>
                        ) : (
                          <ChevronRight className="w-4 h-4 text-secondary/60" />
                        )}
                      </div>

                      {/* Expandable details */}
                      <div className={`transition-all duration-500 overflow-hidden ${isActive ? 'max-h-[120px] opacity-100 mt-2 pt-2 border-t border-white/10' : 'max-h-0 opacity-0'}`}>
                        <p className="text-xs text-white/90 font-normal leading-relaxed font-sans">
                          {str.desc}
                        </p>
                        <div className="mt-2.5 inline-block text-[10px] font-extrabold bg-primary/25 border border-primary/20 text-white px-2.5 py-0.5 rounded-lg">
                          Impact: {str.stat}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Professional Stats */}
            <div className="glass-panel py-6 px-6 rounded-3xl shadow-md border border-white/40">
              <h5 className="text-xs font-extrabold text-secondary tracking-widest uppercase mb-4">
                Professional Overview
              </h5>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, i) => {
                  const IconComp = stat.icon;
                  return (
                    <div 
                      key={i} 
                      className="flex items-center gap-3 p-3 rounded-xl bg-white/20 hover:bg-white/40 border border-white/30 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] cursor-default"
                    >
                      <div className="p-2 rounded-lg bg-primary/20 text-dark-accent shrink-0">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-base font-extrabold text-dark-accent font-display leading-none">{stat.val}</div>
                        <div className="text-[9px] font-bold text-secondary uppercase tracking-wider mt-1">{stat.label}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

        {/* BOTTOM STATEMENT */}
        <div className="relative glass-card p-6 md:p-8 rounded-2xl shadow-inner border border-white/45 overflow-hidden bg-gradient-to-r from-primary/10 to-secondary/10 mt-16 max-w-4xl mx-auto">
          <div className="absolute -right-4 -bottom-4 text-primary/10 select-none">
            <MessageSquareQuote className="w-24 h-24 rotate-12" />
          </div>
          <div className="flex gap-4 items-start relative z-10">
            <MessageSquareQuote className="w-8 h-8 text-secondary shrink-0 mt-1" />
            <p className="text-base md:text-lg lg:text-xl italic font-medium text-dark-accent leading-relaxed font-display text-left">
              "Technology expertise combined with leadership and service excellence creates sustainable business impact."
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
