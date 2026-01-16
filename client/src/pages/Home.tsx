import { motion } from "framer-motion";
import { LucideIcon, Github, Linkedin, Mail, Shield, Terminal, Lock, Cpu, Wrench } from "lucide-react";

interface Skill {
  name: string;
  value: number;
  label: string;
  color: string;
}

const skills: Skill[] = [
  { name: "Cybersecurity A1", value: 86, label: "86%", color: "text-blue-500" },
  { name: "Texnikani tushunish", value: 96, label: "96%", color: "text-emerald-500" },
  { name: "Kompyuter tuzatish", value: 65, label: "65%", color: "text-orange-500" },
];

const interests = [
  {
    title: "Network Security",
    description: "Learning how to secure networks and understand common vulnerabilities.",
    tags: ["Security", "Networking"],
    icon: Shield
  },
  {
    title: "Ethical Hacking",
    description: "Exploring the fundamentals of penetration testing and system defense.",
    tags: ["Cybersecurity", "Ethics"],
    icon: Terminal
  },
  {
    title: "Digital Privacy",
    description: "Understanding data protection and how to stay safe in the digital world.",
    tags: ["Privacy", "Encryption"],
    icon: Lock
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white selection:bg-primary/30">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[128px] animate-pulse" />
          <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[128px] animate-pulse delay-700" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-50 contrast-150 pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-sm font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Cybersecurity Enthusiast
            </div>
            <h1 className="text-6xl md:text-9xl font-display font-bold tracking-tighter mb-8 bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent">
              Muhammadali
            </h1>
            <p className="text-lg md:text-xl text-white/50 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
              13 yoshli kiber-xavfsizlikka qiziquvchi yosh tadqiqotchi. Raqamli dunyoni xavfsizroq qilish va tizimlar qanday ishlashini o'rganish yo'lidaman.
            </p>
            <div className="flex items-center justify-center gap-6">
              <SocialLink href="#" icon={Github} label="Github" />
              <SocialLink href="#" icon={Linkedin} label="LinkedIn" />
              <SocialLink href="#" icon={Mail} label="Email" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Progress Section */}
      <section className="py-24 px-4 relative bg-white/[0.01]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Mahoratlarim</h2>
            <p className="text-white/40">O'z ustimda ishlash natijasida erishilgan ko'rsatkichlar</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {skills.map((skill, index) => (
              <SkillCircle key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section className="py-32 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 tracking-tight">Qiziqishlarim</h2>
              <p className="text-white/40 text-lg">
                Hozirda men kiber-xavfsizlikning turli yo'nalishlarini o'rganmoqdaman.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {interests.map((item, index) => (
              <InterestCard key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 px-4 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-display font-bold mb-8">Men haqimda</h2>
              <div className="space-y-6 text-white/60 leading-relaxed text-lg font-light">
                <p>
                  Salom! Mening ismim Muhammadali. Men 13 yoshdaman va Cybersecurity sohasiga juda qiziqaman.
                </p>
                <p>
                  Hozircha katta loyihalarda qatnashmagan bo'lsam-da, har kuni o'z bilimlarimni oshirish ustida ishlayapman.
                </p>
              </div>
            </motion.div>
            <div className="aspect-[4/5] bg-white/5 rounded-3xl overflow-hidden relative group border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-transparent to-transparent z-10" />
              <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center space-y-4">
                <Shield className="w-16 h-16 text-blue-500/50 mb-4" />
                <div className="text-white/20 font-mono text-sm tracking-widest uppercase">Security Profile</div>
                <div className="w-full h-px bg-white/10" />
                <div className="text-white/40 font-light italic">"Hali hammasi oldinda..."</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-32 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 tracking-tighter">Muloqot uchun</h2>
          <a
            href="mailto:contact@muhammadali.me"
            className="inline-flex items-center justify-center px-10 py-5 bg-white text-black rounded-full font-bold hover:bg-white/90 hover:scale-105 transition-all duration-300"
          >
            Xabar yuboring
          </a>
        </div>
      </footer>
    </div>
  );
}

function SkillCircle({ skill, index }: { skill: Skill; index: number }) {
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (skill.value / 100) * circumference;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      className="flex flex-col items-center group"
    >
      <div className="relative w-40 h-40 mb-6">
        <svg className="w-full h-full -rotate-90">
          <circle
            cx="80"
            cy="80"
            r={radius}
            fill="transparent"
            stroke="currentColor"
            strokeWidth="8"
            className="text-white/5"
          />
          <motion.circle
            cx="80"
            cy="80"
            r={radius}
            fill="transparent"
            stroke="currentColor"
            strokeWidth="8"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset: offset }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className={skill.color}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center flex-col">
          <span className="text-2xl font-bold font-display">{skill.label}</span>
        </div>
      </div>
      <span className="text-lg font-medium text-white/60 group-hover:text-white transition-colors">
        {skill.name}
      </span>
    </motion.div>
  );
}

function InterestCard({ item, index }: { item: any; index: number }) {
  const Icon = item.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      className="group p-8 bg-white/[0.03] border border-white/10 rounded-[32px] hover:bg-white/[0.06] transition-all duration-500"
    >
      <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6">
        <Icon className="w-6 h-6 text-white/60" />
      </div>
      <h3 className="text-xl font-bold mb-3">{item.title}</h3>
      <p className="text-white/40 leading-relaxed font-light mb-6">{item.description}</p>
      <div className="flex flex-wrap gap-2">
        {item.tags.map((tag: string) => (
          <span key={tag} className="text-[10px] uppercase tracking-widest font-bold px-2 py-1 bg-white/5 rounded-full text-white/40">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

function SocialLink({ href, icon: Icon, label }: { href: string; icon: LucideIcon; label: string }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="w-14 h-14 flex items-center justify-center bg-white/5 border border-white/10 text-white/40 hover:text-white hover:bg-white/10 rounded-2xl transition-all duration-300 hover:-translate-y-1"
    >
      <Icon size={24} strokeWidth={1.5} />
    </a>
  );
}
