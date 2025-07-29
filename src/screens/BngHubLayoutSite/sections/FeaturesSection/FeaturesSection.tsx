import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const FeaturesSection = (): JSX.Element => {
  return (
    <section className="w-full bg-[#0c46e6] py-[0.83vw] mt-[4.44vw]">
      <div className="relative w-full">
        <Card className="w-full bg-[#00009b] border-none rounded-none">
          <CardContent className="flex flex-row items-center justify-between p-0">
            <div className="flex flex-col w-full max-w-[32.01vw] gap-[1.67vw] px-[10.42vw] py-[3.06vw]">
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

            <div className="relative">
              <img
                className="w-[40.49vw] h-[24.03vw] object-cover"
                alt="Healthcare professionals"
                src="./rectangle-187.png"
              />
              <img
                className="absolute w-[9.31vw] h-[6.67vw] bottom-0 right-0"
                alt="Decorative vector"
                src="./vector-24.svg"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
