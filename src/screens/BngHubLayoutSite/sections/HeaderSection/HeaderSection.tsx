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

  // Navigation menu items data
  const navItems = [
    { label: "Home", active: location.pathname === "/", href: "/" },
    { label: "Quem Somos", active: location.pathname === "/quem-somos", href: "/quem-somos" },
    { label: "Pessoas", active: false, href: "/pessoas" },
    { label: "Contato", active: location.pathname === "/contato", href: "/contato" },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
      !isScrolled 
        ? 'bg-transparent'
        : 'bg-white shadow-md'
    }`}>
      <div className="flex w-full items-center justify-between px-[6.94vw] py-[1.67vw]">
        <div className="flex items-center gap-[22.71vw]">
          {/* Logo */}
          <Link to="/">
            <img
              className="w-[3.82vw] h-[3.82vw] object-contain"
              alt="BNG Hub Logo"
              src="/ativo-2dgbcvn-1.png"
            />
          </Link>

          {/* Navigation and Button Container */}
          <div className="flex items-center justify-between w-[52.36vw]">
            {/* Navigation Menu */}
            <NavigationMenu>
              <NavigationMenuList className="flex items-center gap-[2.78vw]">
                {navItems.map((item, index) => (
                  <NavigationMenuItem key={index}>
                    <Link to={item.href}>
                      <NavigationMenuLink
                        className={`flex flex-col items-center justify-center gap-[0.21vw] p-[0.69vw] font-bold text-[1.11vw] transition-all duration-300 ease-in-out ${
                          !isScrolled 
                            ? `text-white hover:text-white ${item.active ? "border-b-[0.14vw] border-white" : ""}`
                            : `text-[#0c46e6] hover:text-[#0c46e6] ${item.active ? "border-b-[0.14vw] border-[#0c46e6]" : ""}`
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
    </header>
  );
};