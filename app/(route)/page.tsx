"use client";
import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import Autoplay from "embla-carousel-autoplay";
// import useEmblaCarousel from "embla-carousel-react";

import {
  faSquareFacebook,
  faLinkedin,
  faXTwitter,
  // faStackOverflow,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  const plugin = React.useRef(
    Autoplay({ delay: 1500, stopOnInteraction: true })
  );
  return (
    <div className="flex md:justify-between justify-around items-center md:h-[90vh] h-[100vh] lg:px-36 md:px-6 px-4 md:gap-x-5 gap-x-0 md:flex-row flex-col md:mt-0 mt-10">
      <div className="md:w-[70%] md:text-start text-center md:mt-0 mt-5">
        <h2 className="md:text-6xl text-5xl font-bold">Muhammad Sualeh</h2>
        <p className="my-2 text-[#d1d1d1] md:text-xl text-lg font-light">
          A dedicated and industrious developer, who is eager to advance his
          career by contributing to innovative projects and dynamic teams. With
          a strong work ethic and a passion for cutting-edge technologies, I aim
          to deliver meaningful solutions and drive success within any tech
          stack.
        </p>
        <div className="flex text-gray-300 gap-x-3 text-xl items-center md:justify-start justify-center">
          <a href="mailto:muhammadslh297@gmail.com">
            <FontAwesomeIcon icon={faAt} />
          </a>
          <a href="https://github.com/OddCodeCrafter">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://x.com/M_Sualeh10">
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
          <a href="https://www.linkedin.com/in/muhammad-sualeh/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://web.facebook.com/sualeh10">
            <FontAwesomeIcon icon={faSquareFacebook} />
          </a>
          {/*<a><FontAwesomeIcon icon={faStackOverflow} /></a> */}
        </div>
      </div>
      <div className="md:w-[20%] sm:w-[30%] w-[45%] md:mr-10">
        <Carousel plugins={[plugin.current]}>
          <CarouselContent>
            <CarouselItem>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center  bg-black">
                    <img className="w-40" src="html5.svg" alt="" />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center  bg-black ">
                    <img className="w-40" src="css3.svg" alt="" />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center  bg-black">
                    <img className="w-40" src="javascript.svg" alt="" />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center  bg-black">
                    <img className="w-40" src="typescript.svg" alt="" />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center  bg-black">
                    <img className="w-40" src="react.svg" alt="" />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center  bg-black">
                    <img className="w-40" src="Nextjs.svg" alt="" />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center  bg-black">
                    <img className="w-40" src="tailwind-css-2.svg" alt="" />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="bg-black text-white" />
          <CarouselNext className="bg-black text-white" />
        </Carousel>
      </div>
    </div>
  );
}
