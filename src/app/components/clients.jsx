import React, { useCallback, useEffect, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const items = [
  { id: 1, src: '/fan.png', alt: 'Fan Courier', link: '/portofoliu#fan-stefanesti' },
  { id: 2, src: '/client2.png', alt: 'Eurial', link: '/portofoliu#eurial' },
  { id: 3, src: '/client3.png', alt: 'Client 3', link: '/portofoliu#client3' },
  { id: 4, src: '/client4.png', alt: 'Client 4', link: '/portofoliu#client4' },
  { id: 5, src: '/client5.png', alt: 'Client 5', link: '/portofoliu#client5' },
  { id: 6, src: '/client6.png', alt: 'Client 6', link: '/portofoliu#client6' },
  { id: 7, src: '/client7.png', alt: 'Client 7', link: '/portofoliu#client7' },
];

function CarouselItem({ item }) {
  return (
    <div className="embla__slide flex-shrink-0 w-1/3 sm:w-1/3 md:w-1/3 lg:w-1/4  h-34 flex justify-center items-center">
      <Link href={item.link}>
        <img
          src={item.src}
          alt={item.alt}
          className="object-cover sm:p-3 md:p-7 w-full rounded-lg transition-transform duration-300 hover:scale-105"
        />
      </Link>
    </div>
  );
}


function NavigationButton({ onClick, direction }) {
  const Icon = direction === 'prev' ? ChevronLeft : ChevronRight;
  return (
    <button
      onClick={onClick}
      className={`
        
        ${direction === 'prev' ? 'sm:pl-5 pl-1' : 'sm:pr-5 pr-1'}
        pt-5
        text-white
        transition-transform
        duration-300
        hover:scale-110
        active:scale-90
        z-10
      `}
      style={{
        marginTop: '-12px', // Vertical alignment margin
      }}
    >
      <Icon size={40} />
    </button>
  );
}

function EmblaCarouselViewport({ items, emblaRef, onScrollPrev, onScrollNext }) {
  return (
    <div className='flex mx-auto lg:hidden overflow-hidden'>
    <NavigationButton onClick={onScrollPrev} direction="prev" />
    <div className="embla  relative overflow-hidden w-5/6 mx-auto">
      <div ref={emblaRef} className="embla__viewport">
        <div className="embla__container flex">
          {items.map((item) => (
            <CarouselItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
    <NavigationButton onClick={onScrollNext} direction="next" />
    </div>
  );
}

function DesktopGrid({ items }) {
  return (
    <div className="hidden lg:grid grid-cols-7 xl:max-w-[1500px] mx-auto px-10 py-6">
      {items.map((item) => (
        <div key={item.id} className="flex justify-center items-center">
          <Link href={item.link}>
            <img
              src={item.src}
              alt={item.alt}
              className="object-cover max-w-full max-h-full rounded-lg transition-transform duration-300 hover:scale-105"
            />
          </Link>
        </div>
      ))}
    </div>
  );
}


export default function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      slidesToScroll: 1,
      skipSnaps: false,
    },
    [
      Autoplay({
        delay: 4000, // Default delay of 4 seconds
        stopOnInteraction: false,
      }),
    ]
  );

  const autoplayPlugin = useRef(null);

  useEffect(() => {
    if (emblaApi) {
      autoplayPlugin.current = emblaApi.plugins().autoplay;
    }
  }, [emblaApi]);

  const resetAutoplayTimer = useCallback(() => {
    if (autoplayPlugin.current) {
      autoplayPlugin.current.stop();
      autoplayPlugin.current.play(); // Restart autoplay with default delay
    }
  }, []);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
    resetAutoplayTimer();
  }, [emblaApi, resetAutoplayTimer]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
    resetAutoplayTimer();
  }, [emblaApi, resetAutoplayTimer]);

  return (
    <div className='mt-20 grid text-white text-center'>
      <h1 className='sm:text-4xl text-2xl font-semibold mb-5 lg:mb-9'>Clientii Nostri</h1>
      <EmblaCarouselViewport
        items={items}
        emblaRef={emblaRef}
        onScrollPrev={scrollPrev}
        onScrollNext={scrollNext}
      />
      <DesktopGrid items={items} />
    </div>
  );
}
