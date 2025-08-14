import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

export const HeaderSection = ({ isQuemSomosPage = false }: { isQuemSomosPage?: boolean }): JSX.Element => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Detecta se estamos em qualquer página do blog
  const isHubNewsPage = location.pathname.startsWith('/hub-news');

  useEffect(() => {
    // Se for página Quem Somos, sempre manter fundo branco
    if (isQuemSomosPage) {
      setIsScrolled(true);
      return;
    }
    
    const handleScroll = () => {
      // Detecta se saiu da área do hero banner (45.07vw + padding top 5.56vw)
      const heroHeight = (window.innerWidth * 0.4507) + (window.innerWidth * 0.0556);
      setIsScrolled(window.scrollY > heroHeight);
    };

    window.addEventListener('scroll', handleScroll);
    // Chama uma vez para definir o estado inicial correto
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isQuemSomosPage]);

  // Fecha o menu mobile quando a rota muda
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Previne scroll do body quando menu mobile está aberto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);
  // Navigation menu items data
  const navItems = [
    { label: "Home", active: location.pathname === "/", href: "/" },
    { label: "Quem Somos", active: location.pathname === "/quem-somos", href: "/quem-somos" },
    { label: "Pessoas", active: location.pathname === "/pessoas", href: "/pessoas" },
    { label: "Contato", active: location.pathname === "/contato", href: "/contato" },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
      !isScrolled 
        ? 'bg-black/10 backdrop-blur-sm'
        : 'bg-white shadow-md'
    }`}>
      <div className="flex w-full items-center justify-between px-[6.94vw] py-[1.67vw] md:px-[6.94vw] md:py-[1.67vw] px-4 py-3">
        <div className="flex items-center gap-[22.71vw] md:gap-[22.71vw] w-full justify-between md:justify-start">
          {/* Logo */}
          <Link to="/">
            <img
              className="w-[3.82vw] h-[3.82vw] md:w-[3.82vw] md:h-[3.82vw] w-12 h-12 object-contain"
              alt="BNG Hub Logo"
              src="/ativo-2dgbcvn-1.png"
            />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 transition-all duration-300 ${
              !isScrolled ? 'text-white' : 'text-[#0c46e6]'
            }`}
            aria-label="Menu"
          >
            <span className={`block w-6 h-0.5 transition-all duration-300 ${
              !isScrolled ? 'bg-white' : 'bg-[#0c46e6]'
            } ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 transition-all duration-300 ${
              !isScrolled ? 'bg-white' : 'bg-[#0c46e6]'
            } ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 transition-all duration-300 ${
              !isScrolled ? 'bg-white' : 'bg-[#0c46e6]'
            } ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
          {/* Navigation and Button Container */}
          <div className="hidden md:flex items-center justify-between w-[52.36vw]">
            {/* Navigation Menu */}
            <NavigationMenu>
              <NavigationMenuList className="flex items-center gap-[2.78vw]">
                {navItems.map((item, index) => (
                  <NavigationMenuItem key={index}>
                    <Link to={item.href}>
                      <NavigationMenuLink
                        className={`flex flex-col items-center justify-center gap-[0.21vw] py-[0.69vw] px-0 font-bold text-[1.11vw] transition-all duration-300 ease-in-out ${
                          !isScrolled 
                            ? `text-white hover:text-[#003CFF] ${item.active ? "border-b-[0.14vw] border-[#FEDC0B]" : ""}`
                            : `text-[#0c46e6] hover:text-[#0DFFC0] ${item.active ? "border-b-[0.14vw] border-[#FEDC0B]" : ""}`
                        }`}
                      >
                        {item.label}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            {/* Hub News Button */}
            <Link to="/hub-news">
              <Button className={`rounded-[6.94vw] px-[1.67vw] py-[0.35vw] transition-all duration-300 ${
                isHubNewsPage 
                  ? 'bg-[#fedc0b] text-[#0c46e6] hover:bg-[#fedc0b]/90' 
                  : 'bg-[#0c46e6] text-white hover:bg-[#0c46e6]/90'
              }`}>
                <span className="font-semibold text-[0.97vw] leading-[1.45vw]">
                  Hub News
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden fixed inset-0 transition-all duration-300 ${
        isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`} style={{ top: '0px' }}>
        {/* Menu Panel - 70% width from right */}
        <div className={`absolute right-0 top-0 w-[70%] h-full bg-[#003CFF] shadow-lg transition-all duration-300 transform ${
          isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}>
          {/* Header with Logo and Close Button */}
          <div className="flex items-center justify-between p-6 border-b border-white/20">
            {/* Logo */}
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <span className="text-[#003CFF] font-bold text-lg">b</span>
            </div>
            
            {/* Close Button */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-8 h-8 flex items-center justify-center text-white"
              aria-label="Fechar menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          <nav className="flex flex-col px-6 py-8">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                className={`py-4 text-xl font-semibold transition-all duration-200 relative ${
                  item.active 
                    ? 'text-white' 
                    : 'text-white/80 hover:text-white'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
                {item.active && (
                  <div className="absolute bottom-2 left-0 w-12 h-0.5 bg-[#FEDC0B]"></div>
                )}
              </Link>
            ))}
          </nav>
          
          {/* Separator Line */}
          <div className="mx-6 h-px bg-white/30"></div>
          
          {/* Mobile Hub News Button */}
          <div className="px-6 py-8">
            <Link to="/hub-news" onClick={() => setIsMobileMenuOpen(false)}>
              <button className="w-full bg-[#00009B] hover:bg-[#00009B]/90 text-white rounded-full py-4 px-6 font-semibold text-lg transition-all duration-300">
                Hub News
              </button>
            </Link>
          </div>
        </div>
        {/* Left side - clickable area to close menu */}
        <div 
          className="absolute left-0 top-0 w-[30%] h-full bg-black/20 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      </div>
    </header>
  );
};