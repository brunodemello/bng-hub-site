import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const ServiceOverviewSection = (): JSX.Element => {
  // Data for service statistics cards
  const serviceStats = [
    {
      value: "+300",
      description: "unidades de saúde com gestão otimizada",
    },
    {
      value: "+10 mil",
      description: "profissionais da saúde conectados",
    },
    {
      value: "+300 mil",
      description: "vidas impactadas todos os meses",
    },
    {
      value: "10 anos",
      description: "de inovação em gestão assistencial",
    },
  ];

  return (
    <section className="flex w-full justify-center bg-white">
      <div className="flex flex-wrap justify-center gap-[7.08vw]">
        {serviceStats.map((stat, index) => (
          <Card
            key={`stat-card-${index}`}
            className="flex flex-col w-[20.69vw] h-[27.36vw] items-center justify-center bg-no-repeat bg-cover bg-[url('./frame-15.png')]"
          >
            <CardContent className="flex flex-col items-center gap-[0.39vw] px-[0.47vw] py-[4.94vw]">
              <h2 className="w-[19.65vw] font-BNG-display-02 font-[number:var(--BNG-display-02-font-weight)] text-white text-[3.33vw] text-center tracking-[var(--BNG-display-02-letter-spacing)] leading-[var(--BNG-display-02-line-height)] [font-style:var(--BNG-display-02-font-style)]">
                {stat.value}
              </h2>
              <p className="w-[15.63vw] font-BNG-subt-tulo font-[number:var(--BNG-subt-tulo-font-weight)] text-white text-[1.25vw] text-center tracking-[var(--BNG-subt-tulo-letter-spacing)] leading-[var(--BNG-subt-tulo-line-height)] [font-style:var(--BNG-subt-tulo-font-style)]">
                {stat.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
