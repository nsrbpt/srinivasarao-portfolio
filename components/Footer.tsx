export default function Footer() {
  return (
    <footer className="relative py-8 z-10 border-t border-white/10 mt-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-mono text-xs text-gray-500">
          © {new Date().getFullYear()} Srinivasa Rao Neelamraju. All rights reserved.
        </p>
        <div className="flex gap-6 font-mono text-xs text-gray-400">
          <a href="#" className="hover:text-neon-teal transition-colors">Reg: AP24110011524</a>
          <a href="#" className="hover:text-neon-blue transition-colors">B.Tech CSE &apos;28</a>
        </div>
      </div>
    </footer>
  );
}
