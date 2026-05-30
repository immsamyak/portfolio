const Footer = () => (
  <footer className="border-t border-deep-graphite py-8 px-6">
    <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
      <span className="text-caption text-faded-steel">
        Samyak Chaudhary — Kathmandu, Nepal
      </span>
      <div className="flex gap-6">
        <a href="https://github.com/immsamyak" target="_blank" rel="noopener noreferrer" className="text-caption text-faded-steel hover:text-frosted-canvas transition-colors">GitHub</a>
        <a href="https://www.linkedin.com/in/samyakchy/" target="_blank" rel="noopener noreferrer" className="text-caption text-faded-steel hover:text-frosted-canvas transition-colors">LinkedIn</a>
        <a href="mailto:samyakchy1@gmail.com" className="text-caption text-faded-steel hover:text-frosted-canvas transition-colors">Email</a>
      </div>
    </div>
  </footer>
);

export default Footer;
