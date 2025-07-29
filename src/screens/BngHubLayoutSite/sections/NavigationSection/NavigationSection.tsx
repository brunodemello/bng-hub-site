import React from "react";
import { Button } from "../../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

export const NavigationSection = (): JSX.Element => {
  // Navigation menu items data
  const navItems = [
    { label: "Home", active: true },
    { label: "Quem Somos", active: false },
    { label: "Pessoas", active: false },
    { label: "Contato", active: false },
  ];

  return (
    <header className="flex w-full items-center justify-between px-[6.94vw] py-[1.67vw]">
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
                    className={`flex flex-col items-center justify-center gap-[0.21vw] p-[0.69vw] font-bold text-white text-[1.11vw] ${
                      item.active ? "border-b-[0.14vw] border-white" : ""
                    }`}
                  >
                    {item.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Hub News Button */}
          <Button className="bg-[#0c46e6] hover:bg-[#0c46e6]/90 rounded-[6.94vw] px-[1.67vw] py-[0.35vw]">
            <span className="text-white font-semibold text-[0.97vw] leading-[1.45vw]">
              Hub News
            </span>
          </Button>
        </div>
      </div>
    </header>
  );
};
