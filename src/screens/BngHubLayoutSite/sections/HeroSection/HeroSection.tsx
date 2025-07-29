import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

// Define the stats data for mapping
const statsData = [
  {
    value: "10 anos",
    description: "de inovação em gestão assistencial",
  },
  {
    value: "+300",
    description: "unidades de saúde com gestão otimizada",
  },
  {
    value: "+10 mil",
    description: "profissionais da saúde conectados ao propósito",
  },
  {
    value: "+300 mil",
    description: "vidas impactadas todos os meses",
  },
];

export const HeroSection = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full items-center gap-[1.39vw] py-[2.22vw]">
      <div className="flex flex-col items-center justify-center">
        <h3 className="font-marca-o font-[number:var(--marca-o-font-weight)] text-white text-[0.97vw] text-center tracking-[var(--marca-o-letter-spacing)] leading-[var(--marca-o-line-height)] [font-style:var(--marca-o-font-style)]">
          NOSSOS NÚMEROS
        </h3>
        <Separator className="w-[6.94vw] h-[0.14vw] bg-[#fedc0b] rounded-sm mt-[0.28vw]" />
      </div>

      <div className="flex flex-col items-center justify-center gap-[3.96vw] w-full">
        <div className="flex flex-col items-center gap-[0.07vw]">
          <h2 className="font-BNG-t-tulo-02-h2 font-[number:var(--BNG-t-tulo-02-h2-font-weight)] text-white text-[1.94vw] text-center tracking-[var(--BNG-t-tulo-02-h2-letter-spacing)] leading-[var(--BNG-t-tulo-02-h2-line-height)] [font-style:var(--BNG-t-tulo-02-h2-font-style)]">
            Construindo conexões para gerar crescimento
          </h2>
        </div>

        <div className="flex flex-wrap items-center justify-center w-full gap-0">
          {statsData.map((stat, index) => (
            <Card
              key={index}
              className="w-[20.39vw] h-[22.85vw] bg-transparent border-none"
            >
              <CardContent className="p-0 relative w-[20.14vw] h-[22.85vw]">
                <img
                  className="absolute w-[17.71vw] h-[22.85vw] top-0 left-[1.25vw]"
                  alt="Vector"
                  src="./vector-3.svg"
                />
                <div className="absolute w-[20.14vw] top-[4.65vw] left-0 font-BNG-display-02 font-[number:var(--BNG-display-02-font-weight)] text-white text-[3.33vw] text-center tracking-[var(--BNG-display-02-letter-spacing)] leading-[var(--BNG-display-02-line-height)] [font-style:var(--BNG-display-02-font-style)]">
                  {stat.value}
                </div>
                <div className="absolute w-[15.97vw] top-[10.07vw] left-[2.08vw] font-BNG-subt-tulo font-[number:var(--BNG-subt-tulo-font-weight)] text-white text-[1.25vw] text-center tracking-[var(--BNG-subt-tulo-letter-spacing)] leading-[var(--BNG-subt-tulo-line-height)] [font-style:var(--BNG-subt-tulo-font-style)]">
                  {stat.description.includes("todos os meses") ? (
                    <>
                      vidas impactadas <br />
                      todos os meses
                    </>
                  ) : stat.description.includes("unidades de saúde") ? (
                    <>
                      unidades de saúde <br />
                      com gestão otimizada
                    </>
                  ) : stat.description.includes("inovação") ? (
                    <>
                      de inovação em <br />
                      gestão assistencial
                    </>
                  ) : (
                    stat.description
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
