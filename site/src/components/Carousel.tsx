import { useEffect, useRef, useState } from "preact/hooks";
import Siema from "siema";
import { ChevronLeft, ChevronRight } from "lucide-preact";
import { ImageAttributes } from "../types";

interface CarouselProps {
  images: ImageAttributes[];
  className?: string;
}

const Carousel = ({ images, className = "" }: CarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const siema = useRef<Siema>();

  useEffect(() => {
    siema.current = new Siema({
      selector: carouselRef.current,
      loop: true,
    });
  }, []);

  return (
    <div className={`overflow-hidden relative aspect-video  ${className}`}>
      <div className="absolute z-10 top-1/2 left-4 transform -translate-y-1/2 text-white cursor-pointer">
        <ChevronLeft size={48} onClick={() => siema.current.prev()} />
      </div>

      <div ref={carouselRef}>
        {images.map((image) => (
          <img src={image.url} key={image.alternativeText} className="object-cover aspect-video w-full" />
        ))}
      </div>

      <div className="absolute z-10 top-1/2 right-4 transform -translate-y-1/2 text-white cursor-pointer">
        <ChevronRight size={48} onClick={() => siema.current.next()} />
      </div>
    </div>
  );
};

export default Carousel;
