import { X, Menu } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  isScrolled: boolean;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  handleNavClick: (id: string) => void;
  navSections: Array<{ id: string; label: string; enabled: boolean }>;
}

const Header = ({ activeSection, isScrolled, mobileMenuOpen, setMobileMenuOpen, handleNavClick, navSections }: HeaderProps) => {
    const navLinks = navSections;
  
    return (
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto flex justify-between items-center px-4">
          <a 
            href="#hero" 
            className={`text-2xl font-bold tracking-tight transition-colors flex items-center ${
              isScrolled ? 'text-blue-800' : 'text-white'
            }`}
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setMobileMenuOpen(false);
            }}
          >
            <span className="bg-blue-600 text-white px-3 py-1.5 rounded mr-2 text-lg">IEEE</span>
            ICFEC 2026
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.id);
                    }}
                    className={`transition-colors text-sm font-medium tracking-wide ${
                      isScrolled 
                        ? activeSection === link.id
                          ? 'text-blue-600 border-b-2 border-blue-600 pb-1.5'
                          : 'text-gray-700 hover:text-blue-600 hover:border-b-2 hover:border-blue-600 hover:pb-1.5'
                        : 'text-white hover:text-blue-200 hover:border-b-2 hover:border-white/70 hover:pb-1.5'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden focus:outline-none p-2 rounded-full ${
              isScrolled 
                ? 'text-blue-800 hover:bg-blue-50' 
                : 'text-white hover:bg-white/10'
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 md:hidden bg-white shadow-lg z-50 transition-all duration-300 ease-in-out rounded-b-lg mx-4 mt-1 overflow-hidden">
            <ul className="py-4">
              {navLinks.map((link) => (
                <li key={link.id} className="border-b border-gray-100 last:border-b-0">
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.id);
                    }}
                    className={`block py-4 px-6 transition-all text-base ${
                      activeSection === link.id
                        ? 'text-blue-600 bg-blue-50 font-medium'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>
    );
  };

export default Header;