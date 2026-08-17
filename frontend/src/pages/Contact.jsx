import React from "react";
import About from "../image/about1.webp";

import { FaFacebookF, FaXTwitter, FaWhatsapp, FaTiktok } from "react-icons/fa6";

const Contact = () => {
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
            <h1 className="capitalize text-3xl font-bold text-black sm:text-5xl md:text-6xl">
              contact Us
            </h1>
          </div>
        </div>
      </div>


      <section className="px-4 py-10 sm:px-6 md:px-10 lg:px-16 xl:px-20">
        <div className="grid grid-cols-1 overflow-hidden lg:grid-cols-[32%_68%]">
          <div className="bg-[#f7f7f5] px-6 py-10 sm:px-10 md:px-14 lg:px-16 lg:py-12">
            <h1 className="mb-10 font-serif text-4xl text-[#333] sm:text-5xl">
              Contact Details
            </h1>

            <div className="border-b border-gray-300 py-5 first:pt-0">
              <h2 className="mb-2 font-serif text-2xl text-[#333]">Address</h2>
              <p className="text-base text-gray-500 sm:text-lg">
                8331 Indian Spring Street Ames, IA 30010
              </p>
            </div>

            <div className="border-b border-gray-300 py-5">
              <h2 className="mb-2 font-serif text-2xl text-[#333]">Phone</h2>
              <p className="text-base text-gray-500 sm:text-lg">
                (+84) 123 567 712
              </p>
            </div>

            <div className="border-b border-gray-300 py-5">
              <h2 className="mb-2 font-serif text-2xl text-[#333]">Email</h2>
              <p className="text-base text-gray-500 sm:text-lg">
                support@flacio.com
              </p>
            </div>

            <div className="border-b border-gray-300 py-5">
              <h2 className="mb-2 font-serif text-2xl text-[#333]">
                Opening Time
              </h2>
              <p className="text-base text-gray-500 sm:text-lg">
                8:00Am – 10:00Pm, Sunday Close
              </p>
            </div>

            <div className="pt-10">
              <h2 className="mb-5 font-serif text-2xl text-[#333]">
                Follow Us On
              </h2>

              <ul className="flex items-center gap-4">
                <li>
                  <a
                    href="#"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 text-gray-700 transition hover:bg-[#1e472d] hover:text-white"
                  >
                    <FaFacebookF />
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 text-gray-700 transition hover:bg-[#1e472d] hover:text-white"
                  >
                    <FaXTwitter />
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 text-gray-700 transition hover:bg-[#1e472d] hover:text-white"
                  >
                    <FaWhatsapp />
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 text-gray-700 transition hover:bg-[#1e472d] hover:text-white"
                  >
                    <FaTiktok />
                  </a>
                </li>
              </ul>
            </div>
          </div>

         
          <div className="h-[400px] sm:h-[500px] lg:h-auto lg:min-h-[700px]">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps?q=San%20Francisco&output=embed"
              className="h-full w-full border-0"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <section className="bg-[#f7f7f7] px-4 py-12 sm:px-6 sm:py-16 md:px-10 lg:px-20 lg:py-20">
        <div className="mx-auto max-w-[1200px]">
          {/* Heading */}
          <div className="mb-10 text-center sm:mb-14">
            <h1 className="font-serif text-4xl text-[#333] sm:text-5xl md:text-6xl">
              Send Us Your Questions!
            </h1>

            <p className="mt-2 text-sm text-gray-500 sm:text-base md:text-lg">
              We'll get back to you within two days.
            </p>
          </div>

          {/* Form */}
          <form className="space-y-8">
            {/* Name & Email */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-5">
              {/* Name */}
              <div>
                <label className="mb-3 block text-base font-medium text-[#333]">
                  Name
                </label>

                <div className="relative">
                  <input
                    type="text"
                    className="h-14 w-full border border-gray-500 bg-transparent px-4 pr-10 outline-none transition focus:border-black sm:h-16"
                  />

                  <span className="absolute right-5 top-1/2 -translate-y-1/2 text-xl text-red-600">
                    *
                  </span>
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="mb-3 block text-base font-medium text-[#333]">
                  Email
                </label>

                <div className="relative">
                  <input
                    type="email"
                    className="h-14 w-full border border-gray-500 bg-transparent px-4 pr-10 outline-none transition focus:border-black sm:h-16"
                  />

                  <span className="absolute right-5 top-1/2 -translate-y-1/2 text-xl text-red-600">
                    *
                  </span>
                </div>
              </div>
            </div>

       
            <div>
              <label className="mb-3 block text-base font-medium text-[#333]">
                Message
              </label>

              <textarea
                rows="8"
                className="w-full resize-none border border-gray-500 bg-transparent p-4 outline-none transition focus:border-black"
              />
            </div>

            
            <div className="flex justify-center pt-4">
              <button
                type="submit"
                className="bg-[#333] px-12 py-4 text-sm font-semibold tracking-[5px] text-white transition duration-300 hover:bg-[#1e472d] sm:px-16 sm:py-5"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
