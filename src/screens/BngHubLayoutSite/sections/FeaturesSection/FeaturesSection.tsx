import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const FeaturesSection = (): JSX.Element => {
  return (
    <section className="w-full bg-[#00009b] py-[3vw] relative overflow-hidden">
      <div className="container mx-auto relative">
        <div className="flex flex-row items-center justify-between gap-[4vw]">
          <div className="flex flex-col gap-[1.67vw] flex-1 max-w-[45%] z-10">
            <h2 className="font-BNG-t-tulo-02-h2 font-[number:var(--BNG-t-tulo-02-h2-font-weight)] text-white text-[1.94vw] tracking-[var(--BNG-t-tulo-02-h2-letter-spacing)] leading-[var(--BNG-t-tulo-02-h2-line-height)] [font-style:var(--BNG-t-tulo-02-h2-font-style)]">
              Conheça as nossas soluções
            </h2>

            <p className="font-['Poppins',Helvetica] font-normal text-white text-[1.11vw] tracking-[0] leading-[1.66vw]">
              Descubra como podemos alavancar a performance assistencial da
              sua unidade de saúde com gestão médica eficiente e outras
              soluções que aliam cuidado e tecnologia.
            </p>

            <Button className="w-fit bg-[#fedc0b] hover:bg-[#fedc0b]/90 text-[#00009b] rounded-[6.94vw] px-[1.67vw] py-[0.35vw] h-auto">
              <span className="font-['Poppins',Helvetica] font-semibold text-[0.97vw] text-center tracking-[0] leading-[1.45vw]">
                Saiba mais
              </span>
            </Button>
          </div>

          <div className="relative flex-1 max-w-[50%] z-10">
            <img
              className="w-full h-[24.03vw] object-cover rounded-[1.11vw]"
              alt="Healthcare professionals"
              src="./rectangle-187.png"
            />
          </div>
        </div>
        
        {/* Elemento decorativo verde - formato circular curvo */}
        <div className="absolute top-[2vw] right-[2vw] w-[12vw] h-[12vw] z-0">
          <div 
            className="w-full h-full opacity-90"
            style={{
              background: 'linear-gradient(135deg, #0dffc0 0%, #00b894 100%)',
              borderRadius: '50% 20% 50% 20%',
              transform: 'rotate(45deg)'
            }}
          />
        </div>
      </div>
    </section>
  );
};
