import { useState } from 'react';
import { 
  Briefcase, 
  Server, 
  RefreshCw, 
  ShieldCheck, 
  Monitor, 
  BookOpen, 
  MapPin, 
  Calendar,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

export default function Journey() {


  const timelineItems = [
    {
      role: 'Technical Lead (Service Desk)',
      company: 'Cognizant',
      duration: 'March 2026 – Present',
      location: 'Hyderabad, Telangana',
      summary: 'Leading service desk operations, incident management activities, and ensuring high service availability while maintaining exceptional customer satisfaction and operational efficiency.',
      badge: 'Current Position',
      icon: Briefcase,
      color: 'from-purple-500 to-indigo-500 text-white shadow-purple-500/20',
      responsibilities: [
        'Lead service desk teams and daily operations',
        'Monitor incident queues and escalations',
        'Ensure SLA and OLA compliance',
        'Improve service delivery processes',
        'Drive customer satisfaction initiatives'
      ],
      skills: ['Service Operations', 'Incident Management', 'SLA Governance', 'Team Leadership']
    },
    {
      role: 'System Administrator',
      company: 'Tata Consultancy Services (TCS)',
      duration: 'April 2024 – March 2026',
      location: 'Hyderabad, Telangana',
      summary: 'Managed enterprise IT systems, service operations, infrastructure support, and operational excellence initiatives.',
      icon: Server,
      color: 'from-blue-500 to-cyan-500 text-white shadow-blue-500/20',
      skills: [
        'IT Operations',
        'Technical Support',
        'Enterprise Software',
        'Team Leadership',
        'Service Delivery'
      ]
    },
    {
      role: 'Change Manager',
      company: 'Tata Consultancy Services (TCS)',
      duration: 'April 2023 – April 2024',
      location: 'Hyderabad, Telangana',
      summary: 'Managed organizational change requests, approvals, implementation planning, risk assessments, and change governance processes.',
      icon: RefreshCw,
      color: 'from-orange-500 to-amber-500 text-white shadow-orange-500/20',
      skills: [
        'Change Management',
        'Software Project Management',
        'Team Leadership',
        'Technical Support'
      ]
    },
    {
      role: 'Software Compliance SPOC',
      company: 'Tata Consultancy Services (TCS)',
      duration: 'May 2022 – April 2023',
      location: 'Hyderabad, Telangana',
      summary: 'Handled software asset compliance, licensing governance, software audits, stakeholder communication, and customer support activities.',
      icon: ShieldCheck,
      color: 'from-emerald-500 to-teal-500 text-white shadow-emerald-500/20',
      skills: [
        'Software Compliance',
        'Microsoft Azure',
        'Customer Satisfaction',
        'SLA Management',
        'Customer Service'
      ]
    },
    {
      role: 'Desktop Engineer',
      company: 'Tata Consultancy Services (TCS)',
      duration: 'October 2021 – May 2022',
      location: 'Hyderabad, Telangana',
      summary: 'Provided technical support, troubleshooting, incident resolution, endpoint management, and operational support.',
      icon: Monitor,
      color: 'from-indigo-500 to-pink-500 text-white shadow-indigo-500/20',
      skills: [
        'Troubleshooting',
        'Incident Management',
        'IT Operations',
        'Security Management',
        'Compliance Management'
      ]
    },
    {
      role: 'Graduate Trainee',
      company: 'Tata Consultancy Services (TCS)',
      duration: 'July 2021 – October 2021',
      location: 'Hyderabad, Telangana',
      summary: 'Started professional career by learning enterprise systems, technical support processes, customer service, and IT operational practices.',
      icon: BookOpen,
      color: 'from-gray-500 to-slate-700 text-white shadow-gray-500/20',
      skills: [
        'Problem Solving',
        'System Configuration',
        'C Programming',
        'C++',
        'Critical Thinking'
      ]
    }
  ];

  // Store expanded state for items, defaulting current position (index 0) to open
  const [expanded, setExpanded] = useState({ 0: true });

  const toggleExpand = (index) => {
    setExpanded(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <section className="relative w-full py-20 px-4 md:px-8 lg:px-16 bg-main-bg/25 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-[30%] right-[-10%] w-[450px] h-[450px] rounded-full bg-primary/10 blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-[20%] left-[-10%] w-[400px] h-[400px] rounded-full bg-secondary/10 blur-3xl animate-pulse-slow"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* Header */}
        <div className="border-b border-secondary/10 pb-10 mb-16 text-left">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-dark-accent font-display tracking-tight">
            Professional Journey
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full mt-4"></div>
        </div>



        {/* Timeline Roadmap */}
        <div className="relative border-l-2 border-secondary/20 ml-4 md:ml-32 space-y-12">
          {timelineItems.map((item, index) => {
            const IconComp = item.icon;
            const isExpanded = !!expanded[index];

            return (
              <div key={index} className="relative pl-8 md:pl-12 group transition-all duration-300">
                
                {/* Milestone Node Dot */}
                <div className={`absolute -left-[25px] top-1.5 w-12 h-12 rounded-full border-4 border-white flex items-center justify-center bg-gradient-to-r ${item.color} z-10 shadow-md transform transition-transform duration-300 group-hover:scale-110`}>
                  <IconComp className="w-5 h-5" />
                </div>

                {/* Date Side Label (Shown on desktop) */}
                <div className="hidden md:block absolute -left-36 top-4 w-28 text-right">
                  <span className="text-xs font-bold text-secondary tracking-tight block">
                    {item.duration.split(' – ')[0]}
                  </span>
                  <span className="text-[10px] font-semibold text-muted block mt-0.5">
                    {item.duration.split(' – ')[1]}
                  </span>
                </div>

                {/* Timeline Card */}
                <div className="glass-card rounded-2xl border border-white/30 shadow-md p-6 transition-all duration-300 hover:shadow-xl hover:bg-white/45 relative text-left">
                  
                  {/* Header info */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-secondary/10 pb-4 mb-4">
                    <div>
                      <h3 className="text-lg md:text-xl font-extrabold text-dark-accent font-display flex flex-wrap items-center gap-2">
                        {item.role}
                        {item.badge && (
                          <span className="inline-block px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-700 text-[10px] font-bold tracking-wide uppercase border border-emerald-500/20">
                            {item.badge}
                          </span>
                        )}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm font-semibold text-secondary/80 mt-1">
                        <span>{item.company}</span>
                        <span className="text-primary/60">&bull;</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {item.location}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-4">
                      {/* Date label for mobile */}
                      <span className="flex items-center gap-1.5 text-xs font-bold text-muted md:hidden">
                        <Calendar className="w-3.5 h-3.5" />
                        {item.duration}
                      </span>

                      {/* Expand / Collapse Actions */}
                      <button 
                        onClick={() => toggleExpand(index)}
                        className="p-1.5 rounded-lg bg-white/50 border border-white/30 text-dark-accent hover:bg-white/80 transition-all duration-300 flex items-center justify-center"
                        aria-label={isExpanded ? "Collapse details" : "Expand details"}
                      >
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Expandable details */}
                  <div className={`transition-all duration-500 overflow-hidden ${isExpanded ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                    
                    {/* Role Summary */}
                    <p className="text-sm md:text-base text-dark-accent/90 leading-relaxed font-normal font-sans mb-4">
                      {item.summary}
                    </p>
                    
                    {/* Key Responsibilities */}
                    {item.responsibilities && (
                      <div className="space-y-2 mb-4">
                        <h4 className="text-xs font-extrabold text-secondary tracking-widest uppercase">
                          Key Responsibilities:
                        </h4>
                        <ul className="space-y-1.5 pl-1">
                          {item.responsibilities.map((resp, rIdx) => (
                            <li key={rIdx} className="text-xs md:text-sm text-dark-accent/80 flex items-start gap-2 font-normal font-sans">
                              <span className="text-primary mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-primary" />
                              {resp}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Skill Chips */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-extrabold text-secondary tracking-widest uppercase">
                        Skills & Competencies:
                      </h4>
                      <div className="flex flex-wrap gap-2 pt-1">
                        {item.skills.map((skill, sIdx) => (
                          <span 
                            key={sIdx} 
                            className="inline-block px-2.5 py-1 rounded-lg bg-white/60 border border-white/40 text-xs font-bold text-dark-accent font-display transition-all duration-300 hover:bg-secondary hover:text-white"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>



      </div>
    </section>
  );
}
