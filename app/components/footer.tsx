export default function Footer() {
  return (
    <footer className="bg-primary text-quaternary py-8">
      <div className="container mx-auto px-6 text-center">
        <div className="flex flex-col gap-3 items-center">
          <div className="flex flex-wrap justify-center gap-4 text-sm text-tertiary/80">
            <a href="#services" className="hover:text-tertiary transition-colors">Services</a>
            <a href="#projects" className="hover:text-tertiary transition-colors">Projects</a>
            <a href="#skills" className="hover:text-tertiary transition-colors">Skills</a>
            <a href="#experience" className="hover:text-tertiary transition-colors">Experience</a>
            <a href="#about" className="hover:text-tertiary transition-colors">About</a>
            <a href="#contact" className="hover:text-tertiary transition-colors">Contact</a>
            <a href="/resume" className="hover:text-tertiary transition-colors">Resume</a>
          </div>
          <p className="text-tertiary">&copy; {new Date().getFullYear()} Yiğit Can Özdemir. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
