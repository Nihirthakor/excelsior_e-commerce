import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import div1Img1 from "../image/homeDiv1Img1.webp";

import div2img1 from "../image/div2Img1webp.webp";
import div2img2 from "../image/div2Img2.jpg";
import div2img3 from "../image/div2Img3.jpg";
import section3 from "../image/plantImg1.webp";

import section5 from "../image/banner-4.webp";
import sectionImg2 from "../image/banner-5.jpg";

import { FaTruck } from "react-icons/fa";
import { FaSquareWebAwesome } from "react-icons/fa6";
import { TbPlant } from "react-icons/tb";
import axios from "axios";

import { BsFillBoxFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { SlReload } from "react-icons/sl";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { FaHeadphonesSimple } from "react-icons/fa6";
<link
  href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&display=swap"
  rel="stylesheet"
/>;

const Home = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => { 
    getProduct();
  }, []);

  const getProduct = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/category/");
      console.log(res.data);

      setProduct(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const div1Swiper = [
    {
      id: 1,
      description: "Plants",
      title: "made easy",
      img: div1Img1,
    },
    {
      id: 2,
      description: "Fresh",
      title: "Collection",
      img: div1Img1,
    },
    {
      id: 3,
      description: "Green",
      title: "Living",
      img: div1Img1,
    },
  ];

  const div2Swiper = [
    {
      id: 1,
      img: div2img1,
      title: "New Arrivals",
    },
    {
      id: 2,
      img: div2img2,
      title: "Gift Green",
    },
    {
      id: 3,
      img: div2img3,
      title: "Home Grown",
    },
  ];

  const lastSection = [
    {
      id: 1,
      logo: <BsFillBoxFill />,
      title: "Free delivery",
      desc: "For all orders above $45",
    },
    {
      id: 2,
      logo: <MdEmail />,
      title: "Free delivery",
      desc: "For all orders above $45",
    },
    {
      id: 3,
      logo: <FaHeadphonesSimple />,
      title: "Free delivery",
      desc: "For all orders above $45",
    },
    {
      id: 4,
      logo: <SlReload />,
      title: "Free delivery",
      desc: "For all orders above $45",
    },
  ];
  const section3 = [
    {
      id: 1,
      logo: <FaSquareWebAwesome />,
      title: "Unbeatable quality",
      desc: "Greater productivity and relaxation",
    },
    {
      id: 2,
      logo: <FaTruck />,
      title: "Delivery to your door",
      desc: "Better mental wellbeing and happiness",
    },
    {
      id: 3,
      logo: <TbPlant />,
      title: "Bring nature into your life",
      desc: "Greater productivity and relaxation",
    },
  ];

  return (
    <>
      <div className="pt-20">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
        >
          {div1Swiper.map((e) => (
            <SwiperSlide key={e.id}>
              <div className="relative h-[550px] w-full sm:h-[650px] md:h-[750px] lg:h-screen">
                {/* Image */}
                <img
                  src={e.img}
                  alt="Hero"
                  className="h-full w-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30" />

                {/* Content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="mx-auto max-w-4xl px-4 text-center text-white sm:px-6">
                    <span className="text-xs font-medium uppercase tracking-[3px] sm:text-sm sm:tracking-[5px] md:text-base md:tracking-[8px]">
                      Sale up to 30% off
                    </span>

                    <h1 className="mt-4 font-serif text-4xl leading-tight sm:mt-5 sm:text-5xl md:text-6xl lg:mt-6 lg:text-7xl xl:text-8xl">
                      {e.description}{" "}
                      <span className="font-light italic">{e.title}</span>
                    </h1>

                    <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-gray-100 sm:mt-6 sm:text-base sm:leading-7 md:mt-8 md:text-lg md:leading-8 lg:text-xl lg:leading-9">
                      Patch helps you discover the best plants for your space,
                      delivers them to your door and helps you look after them.
                    </p>

                    {/* Buttons */}
                    <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6 md:mt-10 lg:mt-12 lg:gap-8">
                      <a
                        href="#"
                        className="w-full max-w-[220px] bg-white px-6 py-3 text-xs font-semibold uppercase tracking-wider text-black transition duration-300 hover:bg-green-950 hover:text-white sm:w-auto sm:px-8 sm:py-4 md:px-10 lg:px-12 lg:py-5"
                      >
                        Shop Indoor
                      </a>

                      <a
                        href="#"
                        className="w-full max-w-[220px] bg-white px-6 py-3 text-xs font-semibold uppercase tracking-wider text-black transition duration-300 hover:bg-green-950 hover:text-white sm:w-auto sm:px-8 sm:py-4 md:px-10 lg:px-12 lg:py-5"
                      >
                        Shop Outdoor
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <section className="px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {div2Swiper.map((e) => (
            <div
              key={e.id}
              className="relative overflow-hidden group cursor-pointer "
            >
              {/* Image */}
              <img
                src={e.img}
                alt={e.title}
                className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
              />

              {/* Content */}
              <div className="absolute bottom-22 left-12">
                <h2 className="text-3xl font-serif text-gray-800">{e.title}</h2>

                <a
                  href="#"
                  className="inline-block mt-3 text-md text-gray-700 border-b border-gray-700 hover:text-green-800 hover:border-green-800 transition"
                >
                  Shop Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#F6F1EA] px-5 py-10">
        <div className="max-w-8xl mx-auto px-3 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <div>
            <h1 className="text-5xl leading-tight font-serif text-[#2F2F2F]">
              Decorate your <br />
              home <span className="italic">with plants</span>
            </h1>

            <p className="mt-6 text-gray-500 leading-8 max-w-xl">
              Praesent egestas tristique nibh. Sed mollis, eros et ultrices
              tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a
              orci. Fusce convallis metus id felis luctus adipiscing.
            </p>

            <div className="mt-6 space-y-4">
              {section3.map((e) => (
                <div
                  key={e.id}
                  className="flex items-center bg-white shadow-md rounded-sm px-4 py-2"
                >
                  {/* Icon */}
                  <div className="w-20 h-20 rounded-full bg-[#214F34] flex items-center justify-center text-white text-3xl flex-shrink-0">
                    {e.logo}
                  </div>

                  {/* Text */}
                  <div className="ml-8">
                    <h2 className="text-xl font-serif text-[#2F2F2F]">
                      {e.title}
                    </h2>

                    <p className="text-gray-500 mt-2 text-lg">{e.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center items-center  ">
            <img src={div2img2} alt="Plant" className="h-fit w-[800px]" />
          </div>
        </div>
      </section>

      <section>
        <div className="flex justify-center gap-6 capitalize text-3xl font-libre py-10">
          <h1>top rating</h1>
          <h1>best selling</h1>
        </div>
        <div className="w-full">
          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
              type: "progressbar",
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              480: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
          >
            {product.map((item) => (
              <SwiperSlide key={item.id} className="py-10">
                <div className="my-10 overflow-hidden rounded-xl bg-white shadow-2xl shadow-gray-800 transition-all duration-300 hover:shadow-2xl">
                  <div className="relative group">
                    <div className="flex flex-col items-center justify-center overflow-hidden">
                      <img
                        src={`http://localhost:4000${item.image}`}
                        alt={item.name}
                        className="h-56 w-fit object-cover transition-transform duration-300 hover:scale-110"
                      />

                      
                    </div>
                  </div>

                  <div className="p-4">
                    <h2 className="text-xl font-bold capitalize">
                      {item.name}
                    </h2>

                    <p className="mt-1 text-gray-500">{item.slug}</p>

                    <ul className="flex text-orange-400">
                      <li>
                        <FaStar />
                      </li>
                      <li>
                        <FaStar />
                      </li>
                      <li>
                        <FaStar />
                      </li>
                      <li>
                        <FaStar />
                      </li>
                      <li>
                        <CiStar />
                      </li>
                    </ul>

                    <Link
                      to="/Category"
                      className="mt-4 block w-full rounded-lg bg-green-600 py-2 text-center text-white hover:bg-green-700"
                    >
                      View Category
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 md:px-10 lg:px-20 lg:py-20">
        <div className="grid grid-cols-1 overflow-hidden md:min-h-[650px] md:grid-cols-12">
          {/* Image */}
          <div className="h-[350px] sm:h-[450px] md:col-span-6 md:h-auto">
            <img
              src={section5}
              className="h-full w-full object-cover"
              alt="Plants for offices"
            />
          </div>

          {/* Content */}
          <div className="flex items-center bg-white md:col-span-6">
            <div className="max-w-[700px] px-0 py-12 sm:py-16 md:px-10 lg:px-16 xl:px-24">
              <h1 className="mb-6 font-serif text-4xl font-medium leading-[1.05] text-[#333] sm:text-5xl md:text-6xl lg:mb-8 lg:text-[64px]">
                Plants for <span className="italic">offices</span>
              </h1>

              <p className="mb-8 text-sm leading-[1.7] text-[#777] sm:text-base md:text-lg lg:mb-10">
                Praesent egestas tristique nibh. Sed mollis, eros et ultrices
                tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a
                orci. Fusce convallis metus id felis luctus adipiscing. Integer
                tincidunt. Etiam imperdiet imperdiet orci.
              </p>

              <a
                href="#"
                className="inline-block bg-[#1e472d] px-7 py-3 text-sm font-semibold capitalize text-white transition duration-300 hover:bg-[#163722] sm:px-9 sm:py-4 sm:text-base"
              >
                Shop Collection
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 md:px-10 lg:px-20 lg:py-20">
        <div className="grid min-h-[650px] grid-cols-1 overflow-hidden md:grid-cols-12">
          {/* Content */}
          <div className="flex items-center bg-white md:col-span-6">
            <div className="max-w-[700px] py-12 sm:py-16 md:px-8 lg:px-16 xl:px-24">
              <h1 className="mb-6 font-serif text-4xl font-medium leading-[1.05] text-[#333] sm:text-5xl md:text-6xl lg:mb-8 lg:text-[64px]">
                Sets for all styles
                <span className="italic"></span>
              </h1>

              <p className="mb-8 text-sm leading-[1.7] text-[#777] sm:text-base md:text-lg lg:mb-10">
                Praesent egestas tristique nibh. Sed mollis, eros et ultrices
                tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a
                orci. Fusce convallis metus id felis luctus adipiscing. Integer
                tincidunt. Etiam imperdiet imperdiet orci.
              </p>

              <a
                href="#"
                className="inline-block bg-[#1e472d] px-7 py-3 text-sm font-semibold capitalize text-white transition duration-300 hover:bg-[#163722] sm:px-9 sm:py-4 sm:text-base"
              >
                Shop Collection
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="h-[350px] sm:h-[450px] md:col-span-6 md:h-auto">
            <img
              src={sectionImg2}
              className="h-full w-full object-cover"
              alt="Plants for offices"
            />
          </div>
        </div>
      </section>

      <section className="w-full bg-[#e9e6ed] py-28 px-4">
        <div className="mx-auto max-w-[900px] text-center">
          {/* Heading */}
          <h1 className="font-serif text-4xl md:text-5xl text-[#111] leading-tight">
            Sign Up To <span className="italic">Our Newsletter</span>
          </h1>

          {/* Description */}
          <p className="mt-4 text-base md:text-lg text-[#8b8b8b]">
            Stay up to date on the latest news with our carefully curated
            newsletters.
          </p>

          {/* Form */}
          <div className="mt-12">
            <form className="flex w-full h-[75px]">
              <input
                type="email"
                placeholder="Email adress..."
                className="flex-1 bg-white px-9 text-base md:text-lg
                     text-[#555] outline-none
                     placeholder:text-[#888]"
              />

              <button
                type="submit"
                className="w-[130px] bg-[#303030] text-white
                     font-semibold text-sm
                     hover:bg-green-900 transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="py-10">
        {/* Heading */}
        <div className="flex flex-col items-center justify-center px-4 py-8 text-center sm:py-10">
          <h1 className="text-2xl capitalize sm:text-3xl md:text-4xl">
            #bringlifein
          </h1>

          <p className="mt-2 text-sm text-gray-600 sm:text-base md:text-lg">
            Our community has a thing for plant styling. Get inspired.
          </p>
        </div>

        {/* Swiper */}
        <div className="px-4 sm:px-6 lg:px-10">
          <Swiper
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper pb-10"
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              480: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
            }}
          >
            {product.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="overflow-hidden">
                  <img
                    src={`http://localhost:4000${item.image}`}
                    alt={item.name}
                    className="h-56 p-3 shadow-olive-500 shadow-2xl w-fit object-cover transition duration-700 hover:scale-110 sm:h-64 md:h-72 lg:h-80"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section className="mt-10 border-t border-gray-300 px-4 py-10 sm:px-6 md:px-10 lg:px-20">
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {lastSection.map((e) => (
            <div
              key={e.id}
              className="flex items-center justify-center gap-4 sm:justify-start lg:gap-5"
            >
              {/* Logo */}
              <div>
                <span className="text-3xl text-gray-700 opacity-75 sm:text-4xl">
                  {e.logo}
                </span>
              </div>

              {/* Content */}
              <div>
                <h1 className="text-lg sm:text-xl lg:text-2xl">{e.title}</h1>

                <p className="mt-1 text-sm text-gray-800 sm:text-base lg:text-lg">
                  {e.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
