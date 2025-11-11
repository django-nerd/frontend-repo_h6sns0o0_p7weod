import { useEffect, useState } from 'react'
import Spline from '@splinetool/react-spline'
import { Github, Linkedin, Mail, ExternalLink, Code2, Sparkles, Cpu, Palette } from 'lucide-react'

function Badge({ icon: Icon, children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-white/10 text-white/90 px-3 py-1 text-xs md:text-sm border border-white/10 backdrop-blur">
      {Icon && <Icon className="w-4 h-4" />} {children}
    </span>
  )
}

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
      {eyebrow && (
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 text-cyan-300 px-3 py-1 text-xs border border-white/10 mb-4">
          <Sparkles className="w-3.5 h-3.5" /> {eyebrow}
        </div>
      )}
      <h2 className="text-2xl md:text-4xl font-bold text-white tracking-tight">{title}</h2>
      {subtitle && <p className="text-white/70 mt-3 text-sm md:text-base leading-relaxed">{subtitle}</p>}
    </div>
  )
}

function ProjectCard({ title, description, tags, href, image }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="group block">
      <div className="relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all shadow-lg hover:shadow-cyan-500/10">
        {image && (
          <div className="aspect-video w-full bg-gradient-to-br from-cyan-400/10 to-fuchsia-500/10" />
        )}
        <div className="p-5 md:p-6">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-lg md:text-xl font-semibold text-white group-hover:text-cyan-200 transition-colors">{title}</h3>
            <ExternalLink className="w-4 h-4 text-white/60 group-hover:text-white" />
          </div>
          <p className="text-white/70 text-sm md:text-base mt-2 leading-relaxed">{description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((t) => (
              <span key={t} className="text-xs bg-white/5 border border-white/10 text-white/80 px-2 py-1 rounded-md">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </a>
  )
}

export default function App() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div id="home" className="min-h-screen bg-[#0a0c10]">
      {/* Top gradient glows */}
      <div className="pointer-events-none fixed inset-0 -z-0">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[520px] w-[520px] rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute top-20 -left-10 h-[300px] w-[300px] rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-40">
        <div className="backdrop-blur supports-[backdrop-filter]:bg-white/5 border-b border-white/10">
          <div className="max-w-7xl mx-auto h-16 flex items-center justify-between px-4 md:px-6">
            <a href="#home" className="text-white font-semibold tracking-wide">
              <span className="text-cyan-400">{'<'}</span>Shaif<span className="text-cyan-400">{'/>'}</span>
            </a>
            <nav className="hidden md:flex items-center gap-1">
              <a href="#about" className="px-3 py-2 text-white/80 hover:text-white">About</a>
              <a href="#projects" className="px-3 py-2 text-white/80 hover:text-white">Projects</a>
              <a href="#skills" className="px-3 py-2 text-white/80 hover:text-white">Skills</a>
              <a href="#contact" className="px-3 py-2 text-white/80 hover:text-white">Contact</a>
              <a href="#contact" className="ml-2 inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white rounded-full px-4 py-2 transition-colors border border-white/10">
                Download CV
              </a>
            </nav>
            <div className="flex md:hidden items-center gap-3">
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="text-white/80 hover:text-white"><Github className="w-5 h-5" /></a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="text-white/80 hover:text-white"><Linkedin className="w-5 h-5" /></a>
              <a href="#contact" className="text-white/80 hover:text-white"><Mail className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative pt-28 md:pt-32 pb-8 md:pb-12 overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center px-4 md:px-6">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 text-cyan-300 px-3 py-1 text-xs border border-white/10 mb-4">
              <Sparkles className="w-3.5 h-3.5" /> Building delightful products
            </div>
            <h1 className="text-3xl md:text-6xl font-bold text-white leading-tight tracking-tight">
              Hi, I’m Shaif.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-indigo-300">Full‑Stack Developer</span>
            </h1>
            <p className="text-white/70 mt-4 md:mt-6 text-sm md:text-lg max-w-xl">
              I craft modern web experiences with a focus on performance, accessibility, and playful interactions.
            </p>
            <div className="mt-6 md:mt-8 flex flex-wrap items-center gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-black font-medium rounded-full px-5 py-2.5 transition-colors">
                <Code2 className="w-4 h-4" /> View Projects
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white rounded-full px-5 py-2.5 transition-colors border border-white/10">
                Contact Me
              </a>
            </div>
            <div className="mt-6 flex items-center gap-2">
              <Badge icon={Cpu}>TypeScript</Badge>
              <Badge icon={Palette}>Design Systems</Badge>
              <Badge>Fast & Accessible</Badge>
            </div>
          </div>

          <div className="relative h-[360px] md:h-[520px] rounded-2xl overflow-hidden border border-white/10 bg-white/5">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -inset-20 bg-gradient-to-br from-cyan-400/10 via-transparent to-fuchsia-400/10" />
            </div>
            {mounted && (
              <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            )}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <SectionTitle
            eyebrow="About"
            title="A bit about me"
            subtitle="I enjoy turning complex problems into simple, beautiful, and intuitive designs. When I’m not pushing pixels, you’ll find me exploring new 3D interactions and motion design."
          />
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl p-6 bg-white/5 border border-white/10 text-white/80">
              <h3 className="text-white font-semibold mb-2">What I do</h3>
              <p>End‑to‑end product development: UX, UI, frontend, backend, and a pinch of 3D.</p>
            </div>
            <div className="rounded-2xl p-6 bg-white/5 border border-white/10 text-white/80">
              <h3 className="text-white font-semibold mb-2">How I work</h3>
              <p>Systems‑first with reusable components, clean APIs, and performance as a feature.</p>
            </div>
            <div className="rounded-2xl p-6 bg-white/5 border border-white/10 text-white/80">
              <h3 className="text-white font-semibold mb-2">Currently</h3>
              <p>Exploring WebGL, Spline, and micro‑interactions to make interfaces feel alive.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <SectionTitle
            eyebrow="Work"
            title="Selected projects"
            subtitle="A few highlights that showcase design craft, engineering rigor, and playful details."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <ProjectCard
              title="Neon Commerce"
              description="A performant e‑commerce experience with delightful motion and design system foundations."
              tags={["React", "Tailwind", "Framer Motion"]}
              href="https://example.com"
            />
            <ProjectCard
              title="Realtime Collab"
              description="Multi‑cursor collaboration with optimistic updates and CRDT‑inspired syncing."
              tags={["TypeScript", "WebSockets", "Design System"]}
              href="https://example.com"
            />
            <ProjectCard
              title="3D Portfolio"
              description="Interactive 3D scenes powered by Spline to elevate storytelling and brand."
              tags={["Spline", "Three.js", "Performance"]}
              href="https://example.com"
            />
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <SectionTitle
            eyebrow="Skills"
            title="Tools and technologies"
            subtitle="I pick the right tool for the job and keep my toolkit sharp."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              ["TypeScript", "Expert"],
              ["React / Next.js", "Advanced"],
              ["Node / FastAPI", "Advanced"],
              ["Tailwind / Design Systems", "Advanced"],
              ["Framer Motion", "Advanced"],
              ["Spline / Three.js", "Intermediate"],
              ["MongoDB / SQL", "Advanced"],
              ["Testing & CI", "Advanced"],
            ].map(([name, level]) => (
              <div key={name} className="rounded-xl p-5 bg-white/5 border border-white/10">
                <div className="flex items-center justify-between">
                  <p className="text-white font-medium">{name}</p>
                  <span className="text-xs text-white/60">{level}</span>
                </div>
                <div className="mt-3 h-2 w-full bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-cyan-400 to-fuchsia-400" style={{ width: level === 'Expert' ? '95%' : level === 'Advanced' ? '80%' : '65%' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <SectionTitle
            eyebrow="Contact"
            title="Let’s build something great"
            subtitle="Have a project in mind, or just want to say hi? My inbox is always open."
          />
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl p-6 bg-white/5 border border-white/10 text-white/80">
              <h3 className="text-white font-semibold mb-3">Say hello</h3>
              <p className="text-white/70 mb-4">I’m available for freelance work, collaborations, or full‑time roles.</p>
              <div className="flex items-center gap-3">
                <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-black font-medium rounded-full px-5 py-2.5 transition-colors">
                  <Mail className="w-4 h-4" /> Email Me
                </a>
                <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white rounded-full px-5 py-2.5 transition-colors border border-white/10">
                  <Github className="w-4 h-4" /> GitHub
                </a>
                <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white rounded-full px-5 py-2.5 transition-colors border border-white/10">
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </a>
              </div>
            </div>
            <form
              className="rounded-2xl p-6 bg-white/5 border border-white/10"
              onSubmit={(e) => {
                e.preventDefault()
                alert('Thanks! I will get back to you soon.')
              }}
            >
              <div className="grid grid-cols-1 gap-4">
                <input className="bg-white/10 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/50" placeholder="Your name" required />
                <input type="email" className="bg-white/10 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/50" placeholder="Your email" required />
                <textarea rows="4" className="bg-white/10 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/50" placeholder="Your message" required />
                <button className="inline-flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-black font-medium rounded-lg px-5 py-3 transition-colors">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-white/60">
          <p>© {new Date().getFullYear()} Shaif. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-white"><Github className="w-5 h-5" /></a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-white"><Linkedin className="w-5 h-5" /></a>
            <a href="mailto:hello@example.com" className="hover:text-white"><Mail className="w-5 h-5" /></a>
          </div>
        </div>
      </footer>
    </div>
  )
}
