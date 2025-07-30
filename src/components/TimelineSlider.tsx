import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
    "./public/quemSomos_timeLine.png",
    "https://placehold.co/1440x600?text=Slide+2",
    "https://placehold.co/1440x600?text=Slide+3",
    "https://placehold.co/1440x600?text=Slide+4",
];

export default function TimelineSlider() {
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        loop: false,
        slides: {
            perView: 1,
        },
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel);
        },
    });

    const [currentSlide, setCurrentSlide] = React.useState(0);

    const isFirst = currentSlide === 0;
    const isLast = currentSlide === slides.length - 1;

    return (
        <div className="relative w-full">
            <div ref={sliderRef} className="keen-slider">
                {slides.map((slide, index) => (
                    <div key={index} className="keen-slider__slide">
                        <img src={slide} alt={`Slide ${index + 1}`} className="w-full h-auto" />
                    </div>
                ))}
            </div>

            {/* Botões lado a lado no canto inferior direito */}
            <div className="absolute top-[27%] left-[6%] flex gap-2 z-10">
                <button
                    onClick={() => instanceRef.current?.prev()}
                    disabled={isFirst}
                >
                    <ChevronLeft
                        style={{ width: "9vw", height: "9vw", position: "relative", left: "45%" }}
                        color={isFirst ? "#001A70" : "#FEDC0B"}
                        className="transition-colors duration-200"
                    />
                </button>

                <button
                    onClick={() => instanceRef.current?.next()}
                    disabled={isLast}
                >
                    <ChevronRight
                        style={{ width: "9vw", height: "9vw" }}
                        color={isLast ? "#001A70" : "#FEDC0B"}
                        className="transition-colors duration-200"
                    />
                </button>
            </div>
        </div>
    );
}
