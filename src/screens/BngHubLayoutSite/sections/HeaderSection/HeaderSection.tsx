import React, { useEffect, useState } from "react";
import { Button } from "../../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

export const HeaderSection = (): JSX.Element => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Detecta se saiu da área do hero banner (45.07vw + padding top 5.56vw)
      const heroHeight = (window.innerWidth * 0.4507) + (window.innerWidth * 0.0556);
      setIsScrolled(window.scrollY > heroHeight);
    };

    window.addEventListener('scroll', handleScroll);
    // Chama uma vez para definir o estado inicial correto
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation menu items data
  const navItems = [
    { label: "Home", active: true },
    { label: "Quem Somos", active: false },
    { label: "Pessoas", active: false },
    { label: "Contato", active: false },
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
          <img
            className="w-[3.82vw] h-[3.82vw] object-contain"
            alt="BNG Hub Logo"
            src="./ativo-2dgbcvn-1.png"
          />

          {/* Navigation and Button Container */}
          <div className="flex items-center justify-between w-[52.36vw]">
            {/* Navigation Menu */}
            <NavigationMenu>
              <NavigationMenuList className="flex items-center gap-[2.78vw]">
                {navItems.map((item, index) => (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuLink
                      className={`flex flex-col items-center justify-center gap-[0.21vw] p-[0.69vw] font-bold text-[1.11vw] transition-all duration-300 ease-in-out ${
                        !isScrolled 
                          ? `text-white hover:text-white ${item.active ? "border-b-[0.14vw] border-white" : ""}`
                          : `text-[#0c46e6] hover:text-[#0c46e6] ${item.active ? "border-b-[0.14vw] border-[#0c46e6]" : ""}`
                      }`}
                    >
                      {item.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            {/* Hub News Button */}
            <Button className="bg-[#0c46e6] hover:bg-[#0c46e6]/90 rounded-[6.94vw] px-[1.67vw] py-[0.35vw] transition-all duration-300">
              <span className="text-white font-semibold text-[0.97vw] leading-[1.45vw]">
                Hub News
              </span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};