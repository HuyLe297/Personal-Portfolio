function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 py-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Tên + Copyright */}
        <p className="text-gray-400 text-sm mb-3">
          © {new Date().getFullYear()} <span className="text-sky-400 font-medium">Le Duc Huy</span>. All rights reserved.
        </p>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          className="text-sky-400 hover:text-sky-300 text-sm font-medium transition-all flex items-center mx-auto gap-1 group"
        >
          Back to Top
          <svg
            className="w-4 h-4 group-hover:translate-y-[-3px] transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>

      </div>
    </footer>
  );
}

export default Footer;