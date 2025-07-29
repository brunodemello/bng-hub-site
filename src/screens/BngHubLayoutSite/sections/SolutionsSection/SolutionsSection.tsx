import React from "react";
import { Card } from "../../../../components/ui/card";

export const SolutionsSection = (): JSX.Element => {
  return (
    <section className="w-full max-w-[38.75vw] mx-auto my-[2.22vw]">
      <Card className="flex flex-row h-[22.29vw] overflow-hidden shadow-md">
        {/* Left side with logo */}
        <div className="w-[15.21vw] bg-[#f2f2f2] rounded-l-lg flex items-center justify-center">
          <img
            className="w-[8.75vw] h-[5.76vw] object-cover"
            alt="Solida saude"
            src="./solida-saude-1.png"
          />
        </div>

        {/* Right side with content */}
        <div className="w-[23.54vw] bg-white rounded-r-lg p-[3.33vw]">
          <div className="flex flex-col gap-[1.39vw]">
            <h3 className="font-bold text-[#666666] text-[1.39vw] leading-[2.08vw] font-['Poppins',Helvetica] tracking-[0]">
              Gestão de Equipes Médicas
            </h3>

            <p className="font-['Poppins',Helvetica] font-normal text-[#666666] text-[1.11vw] tracking-[0] leading-[1.66vw]">
              A Sólida Saúde se dedica a fazer a gestão de equipes médicas em
              centenas de unidades de saúde em todo o Brasil.
            </p>
          </div>
        </div>
      </Card>
    </section>
  );
};
