import React from "react";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <section className="bg-[#1f482b] text-white px-8 md:px-16 lg:px-[70px] py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* COMPANY */}
          <div>
            <h3 className="text-[16px] tracking-[3px] font-medium mb-10">
              COMPANY
            </h3>

            <ul className="space-y-5">
              <li>
                <a href="#" className="text-[17px] hover:opacity-70 transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-[17px] hover:opacity-70 transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-[17px] hover:opacity-70 transition">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="text-[17px] hover:opacity-70 transition">
                  Corporate Orders
                </a>
              </li>
              <li>
                <a href="#" className="text-[17px] hover:opacity-70 transition">
                  Refer a Friend
                </a>
              </li>
              <li>
                <a href="#" className="text-[17px] hover:opacity-70 transition">
                  Our Guarantee
                </a>
              </li>
            </ul>
          </div>

      
          <div>
            <h3 className="text-[16px] tracking-[3px] font-medium mb-10">
              SUPPORT
            </h3>

            <ul className="space-y-5">
              <li>
                <a href="#" className="text-[17px] hover:opacity-70 transition">
                  Help + FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-[17px] hover:opacity-70 transition">
                  Track Your Order
                </a>
              </li>
              <li>
                <a href="#" className="text-[17px] hover:opacity-70 transition">
                  Shipping
                </a>
              </li>
              <li>
                <a href="#" className="text-[17px] hover:opacity-70 transition">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-[17px] hover:opacity-70 transition">
                  Contact Support
                </a>
              </li>
            </ul>
          </div>

          {/* PLANT QUESTIONS */}
          <div>
            <h3 className="text-[16px] tracking-[3px] font-medium mb-10">
              PLANT QUESTIONS?
            </h3>

            <ul className="space-y-5">
              <li>
                <a href="#" className="text-[17px] hover:opacity-70 transition">
                  Plant Care Tips
                </a>
              </li>
              <li>
                <a href="#" className="text-[17px] hover:opacity-70 transition">
                  Plant Life Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-[17px] hover:opacity-70 transition">
                  Vera Plant Care App
                </a>
              </li>
              <li>
                <a href="#" className="text-[17px] hover:opacity-70 transition">
                  Meet Plant Mom
                </a>
              </li>
              <li>
                <a href="#" className="text-[17px] hover:opacity-70 transition">
                  Contact the Grow-How™ Team
                </a>
              </li>
            </ul>
          </div>

          {/* STAY IN THE LOOP */}
          <div>
            <h3 className="text-[16px] tracking-[3px] font-medium mb-10">
              STAY IN THE LOOP
            </h3>

            <p className="text-[17px] leading-7 mb-9">
              Stay in the loop with special offers, plant-parenting tips, and
              more.
            </p>

            <form className="flex items-center border-b border-white pb-3">
              <input
                type="email"
                placeholder="Email address..."
                className="flex-1 bg-transparent outline-none
                     placeholder:text-white text-white text-[16px]"
              />

              <button type="submit" className="text-2xl ml-3">
                <MdEmail />
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
