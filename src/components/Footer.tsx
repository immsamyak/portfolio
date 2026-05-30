const Footer = () => {
  return (
    <footer className="bg-charcoal py-6 px-6 lg:px-8">
      <div className="max-w-[1080px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="font-mono text-xs text-steel">
          Samyak Chaudhary — Full-Stack Developer — Kathmandu, Nepal
        </span>
        <div className="flex gap-6">
          <a href="https://github.com/immsamyak" target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-steel hover:text-snow transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/samyakchy/" target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-steel hover:text-snow transition-colors">LinkedIn</a>
          <a href="mailto:samyakchy1@gmail.com" className="font-mono text-xs text-steel hover:text-snow transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
