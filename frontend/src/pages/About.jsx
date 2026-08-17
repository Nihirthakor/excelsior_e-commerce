import React from "react";
import About from "../image/about1.webp";
import aboutSection from "../image/aboutSection.webp";
import aboutSection1Bg from "../image/aboutSection1Bg.webp";
import section2img1 from "../image/section2img1.webp";
import section2img2 from "../image/section2img2.webp";
import section2img3 from "../image/section2img3.webp";
import { RiPlantFill } from "react-icons/ri";

import { FaBox } from "react-icons/fa";
import { TbPlant2 } from "react-icons/tb";

import section3img1 from "../image/section3img1.avif";
import section3img2 from "../image/section3img2.avif";
// import section3img3 from "../image/section3img3.avif";
import section3img4 from "../image/section3img4.avif";

const about = () => {
  return (
    <>
      <div className="pb-10 sm:pb-16 md:pb-20">
        <div className="relative">
          <img
            src={About}
            alt="About Us"
            className="h-52 w-full object-cover sm:h-64 md:h-72"
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-3xl font-bold text-black sm:text-5xl md:text-6xl">
              About Us
            </h1>
          </div>
        </div>
      </div>

      <section className="relative pb-20 sm:pb-28 md:pb-40">
        <div className="relative h-[400px] sm:h-[500px] md:h-[600px]">
          {/* Background */}
          <img
            src={aboutSection1Bg}
            alt=""
            className="h-full w-full object-cover"
          />

          {/* Center Image */}
          <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-8 md:px-16">
            <img
              src={aboutSection}
              alt="About section"
              className="
          w-full
          max-w-[300px]
          object-cover
          sm:max-w-[450px]
          md:max-w-[600px]
          lg:max-w-[750px]
        "
            />
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 sm:py-16 md:px-10 lg:px-20 lg:py-24">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-5 text-center sm:gap-6 md:gap-8">
          {/* Subtitle */}
          <p className="text-sm font-medium tracking-wider text-gray-500 sm:text-lg md:text-2xl">
            FLACIO PHOTOSYNTHESIS STORIES
          </p>

          {/* Heading */}
          <h1 className="font-[var(--font-family-second)] text-3xl leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
            We connect buyers and sellers with suitable, eco-friendly products
          </h1>

          {/* Description */}
          <p className="max-w-5xl text-sm leading-7 text-gray-600 sm:text-base sm:leading-8 md:text-lg md:leading-9">
            Nothing adds more beauty and comfort to our homes and offices than
            the lush flowers and foliage of indoor plants. Bedrooms, bathrooms,
            kitchens, cubicles… There really isn’t a space a houseplant can’t
            enliven. Just add light and water, and you’ve got a growing indoor
            oasis. Bringing plants into your home is aesthetically pleasing and
            amazingly, plants can offer strong health benefits as well!
          </p>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-10">
          <div className="group overflow-hidden md:mb-20 lg:mb-28">
            <img
              src={section2img1}
              alt=""
              className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
            />
          </div>

          <div className="group overflow-hidden md:mt-20 lg:mt-28">
            <img
              src={section2img2}
              alt=""
              className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
            />
          </div>

          {/* Image 3 */}
          <div className="group overflow-hidden md:mb-20 lg:mb-28 sm:col-span-2 lg:col-span-1">
            <img
              src={section2img3}
              alt=""
              className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
            />
          </div>
        </div>
      </section>

      <section className="bg-pink-100 px-4 py-12 sm:px-6 sm:py-16 md:px-10 lg:px-20 lg:py-20">
        <div className="flex items-center justify-center text-center">
          <h1 className="text-3xl font-medium sm:text-2xl md:text-4xl">
            Here's How It Works
          </h1>
        </div>

        <div className="mx-auto my-12 grid max-w-[1400px] grid-cols-1 gap-10 sm:grid-cols-2 md:my-16 lg:grid-cols-4 lg:gap-8 xl:my-20">
          <div className="flex flex-col items-center justify-center gap-3 text-center sm:gap-4">
            <span className="text-5xl sm:text-6xl md:text-7xl">
              <RiPlantFill />
            </span>

            <h2 className="text-xl sm:text-2xl md:text-3xl">Pick your plant</h2>
          </div>

          <div className="flex flex-col items-center justify-center gap-3 text-center sm:gap-4">
            <span className="text-5xl sm:text-6xl md:text-7xl">
              <TbPlant2 />
            </span>

            <h2 className="text-xl sm:text-2xl md:text-3xl">Choose your pot</h2>
          </div>

          <div className="flex flex-col items-center justify-center gap-3 text-center sm:gap-4">
            <span className="text-5xl sm:text-6xl md:text-7xl">
              <FaBox />
            </span>

            <h2 className="text-xl sm:text-2xl md:text-3xl">We deliver it</h2>
          </div>

          <div className="flex flex-col items-center justify-center gap-3 text-center sm:gap-4">
            <span className="text-5xl sm:text-6xl md:text-7xl">
              <RiPlantFill />
            </span>

            <h2 className="text-xl sm:text-2xl md:text-3xl">
              Enjoy your plant
            </h2>
          </div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 sm:py-16 md:px-10 lg:px-20 lg:py-20">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-10">
          <div className="overflow-hidden">
            <img
              src={section3img1}
              alt=""
              className="h-auto w-full object-cover transition duration-500 hover:scale-105"
            />
          </div>

          <div className="overflow-hidden">
            <img
              src={section3img2}
              alt=""
              className="h-auto w-full object-cover transition duration-500 hover:scale-105"
            />
          </div>

          <div className="overflow-hidden sm:col-span-2 lg:col-span-1">
            <img
              src={section3img4}
              alt=""
              className="h-auto w-full object-cover transition duration-500 hover:scale-105"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default about;
