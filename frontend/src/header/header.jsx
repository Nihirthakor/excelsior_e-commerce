import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import logoHeader from "../image/logoMain.avif";

import { CiSearch, CiHeart } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";

import headerImg1 from "../image/headerImg1.webp";
import headerImg2 from "../image/headerImg2.webp";
import headerImg3 from "../image/headerImg3.webp";
import headerImg4 from "../image/headerImg4.webp";
import headerImg5 from "../image/headerImg5.webp";
import headerImg6 from "../image/headerImg6.webp";

import headerImg11 from "../image/headerImg11.webp";
import headerImg12 from "../image/headerImg12.webp";
import axios from "axios";

const Header = () => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];

      const totalQuantity = cart.reduce(
        (total, item) => total + item.quantity,
        0,
      );

      setCartCount(totalQuantity);
    };

    // Get count when page loads
    updateCartCount();

    // Get count immediately when Add to Cart is clicked
    window.addEventListener("cartUpdated", updateCartCount);

    return () => {
      window.removeEventListener("cartUpdated", updateCartCount);
    };
  }, []);

  const [order, setOrder] = useState([]);

  useEffect(() => {
    getOrder();
  }, []);

  const getOrder = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        "http://localhost:4000/api/orders/admin/all",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      console.log(res.data);

      setOrder(res.data.data.order);
    } catch (error) {
      console.log(error.response?.data || error.message);
    }
  };

  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      <header className="fixed left-0 top-0 z-50 w-full bg-white">
        <div className="mx-auto flex h-20 max-w-[1800px] items-center px-4 sm:px-6 lg:px-10">
          <div className="flex flex-1 items-center lg:hidden">
            <button
              onClick={() => setMobileMenu(true)}
              className="text-2xl text-black"
              aria-label="Open menu"
            >
              <FiMenu />
            </button>
          </div>

          {/* ================= DESKTOP NAVIGATION ================= */}
          <nav className="hidden flex-1 lg:block">
            <ul className="flex items-center gap-6 xl:gap-10">
              {/* HOME */}
              <li className="group relative">
                <Link
                  to="/home"
                  className="flex items-center gap-1 py-7 text-sm font-semibold uppercase tracking-widest"
                >
                  Home
                  <FiChevronDown className="text-xs" />
                </Link>

                {/* Home Mega Menu */}
                <div
                  className="
                    invisible absolute left-0 top-full z-50
                    w-[850px]
                    bg-white shadow-2xl
                    opacity-0
                    transition-all duration-300
                    group-hover:visible group-hover:opacity-100
                  "
                >
                  <div className="grid grid-cols-3 gap-6 p-8">
                    <div>
                      <img
                        src={headerImg5}
                        alt="Home Modern"
                        className="h-44 w-full object-cover transition duration-300 hover:scale-105"
                      />
                      <h3 className="mt-3 text-sm font-medium">Home Modern</h3>
                    </div>

                    <div>
                      <img
                        src={headerImg1}
                        alt="Home Flat"
                        className="h-44 w-full object-cover transition duration-300 hover:scale-105"
                      />
                      <h3 className="mt-3 text-sm font-medium">Home Flat</h3>
                    </div>

                    <div>
                      <img
                        src={headerImg2}
                        alt="Home Collection"
                        className="h-44 w-full object-cover transition duration-300 hover:scale-105"
                      />
                      <h3 className="mt-3 text-sm font-medium">
                        Home Collection
                      </h3>
                    </div>

                    <div>
                      <img
                        src={headerImg3}
                        alt="Home Green"
                        className="h-44 w-full object-cover transition duration-300 hover:scale-105"
                      />
                      <h3 className="mt-3 text-sm font-medium">Home Green</h3>
                    </div>

                    <div>
                      <img
                        src={headerImg4}
                        alt="Home Plant"
                        className="h-44 w-full object-cover transition duration-300 hover:scale-105"
                      />
                      <h3 className="mt-3 text-sm font-medium">Home Plant</h3>
                    </div>

                    <div>
                      <img
                        src={headerImg6}
                        alt="Home Flower"
                        className="h-44 w-full object-cover transition duration-300 hover:scale-105"
                      />
                      <h3 className="mt-3 text-sm font-medium">Home Flower</h3>
                    </div>
                  </div>
                </div>
              </li>

              {/* SHOP */}
              <li className="group relative">
                <Link
                  to="/shop"
                  className="flex items-center gap-1 py-7 text-sm font-semibold uppercase tracking-widest"
                >
                  Shop
                  <FiChevronDown className="text-xs" />
                </Link>

                {/* Shop Mega Menu */}
                <div
                  className="
                    invisible fixed left-0 top-20 z-50
                    w-screen bg-white shadow-xl
                    opacity-0
                    transition-all duration-300
                    group-hover:visible group-hover:opacity-100
                  "
                >
                  <div className="mx-auto grid max-w-[1600px] grid-cols-5 gap-8 px-8 py-10 xl:px-12">
                    {/* IMAGE 1 */}
                    <div className="overflow-hidden">
                      <div className="relative">
                        <img
                          src={headerImg12}
                          alt="New Arrivals"
                          className="h-[360px] w-full object-cover transition duration-500 hover:scale-105"
                        />

                        <button className="absolute bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white px-7 py-3 text-xs uppercase tracking-widest">
                          New Arrivals
                        </button>
                      </div>
                    </div>

                    {/* IMAGE 2 */}
                    <div className="overflow-hidden">
                      <div className="relative">
                        <img
                          src={headerImg11}
                          alt="Best Sellers"
                          className="h-[360px] w-full object-cover transition duration-500 hover:scale-105"
                        />

                        <button className="absolute bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white px-7 py-3 text-xs uppercase tracking-widest">
                          Best Sellers
                        </button>
                      </div>
                    </div>

                    {/* LAYOUT */}
                    <MegaColumn
                      title="Layout"
                      items={[
                        "Standard",
                        "Standard With Banner",
                        "Categories Image 1",
                        "Categories Image 2",
                        "Fullwidth",
                        "List View",
                        "Simple",
                        "Masonry",
                        "Overlay Header",
                        "Collection List 1",
                        "Collection List 2",
                        "Collection Slider",
                      ]}
                      badges={{
                        Masonry: "Hot",
                        "Collection List 2": "New",
                      }}
                    />

                    {/* FILTER */}
                    <MegaColumn
                      title="Filter"
                      items={[
                        "On top",
                        "Dropdown",
                        "Side out",
                        "Drawer",
                        "Sidebar Style 1",
                        "Sidebar Style 2",
                        "Sidebar Style 3",
                        "Sidebar Style 4",
                        "Filter Scroll",
                      ]}
                      badges={{
                        "Sidebar Style 2": "Hot",
                        "Sidebar Style 4": "Hot",
                      }}
                    />

                    {/* LOADER */}
                    <MegaColumn
                      title="Loader & Cart"
                      items={[
                        "Shop Pagination",
                        "Shop Load more button",
                        "Shop Infinite scrolling",
                        "Cart Dropdown",
                        "Cart Side out",
                        "Cart Page",
                      ]}
                    />
                  </div>
                </div>
              </li>

              {/* PRODUCT */}
              <li>
                <Link
                  to="/Product"
                  className="py-7 text-sm font-semibold uppercase tracking-widest"
                >
                  Product
                </Link>
              </li>

              {/* BLOG */}
              <li className="group relative">
                <Link
                  to="/blog"
                  className="flex items-center gap-1 py-7 text-sm font-semibold uppercase tracking-widest"
                >
                  Blog
                  <FiChevronDown className="text-xs" />
                </Link>

                {/* Blog Mega Menu */}
                <div
                  className="
                    invisible fixed left-0 top-20 z-50
                    w-screen bg-white shadow-2xl
                    opacity-0
                    transition-all duration-300
                    group-hover:visible group-hover:opacity-100
                  "
                >
                  <div className="mx-auto grid max-w-[1100px] grid-cols-2 gap-10 px-8 py-10">
                    {/* BLOG LINKS */}
                    <MegaColumn
                      title="Layout & Post"
                      items={[
                        "Blog Standard",
                        "Blog Grid",
                        "Blog Grid Mix",
                        "List",
                        "Post Sidebar",
                        "Post One Column",
                        "Post Prallax Image",
                        "Post Sticky",
                        "Post Simple Title",
                      ]}
                    />

                    {/* BLOG IMAGES */}
                    <div className="space-y-5">
                      <div className="group/blog relative overflow-hidden">
                        <img
                          src={headerImg12}
                          alt="Traveling Solo"
                          className="h-40 w-full object-cover transition duration-500 group-hover/blog:scale-105"
                        />

                        <div className="absolute inset-0 bg-black/20" />

                        <div className="absolute bottom-5 left-5 text-white">
                          <p className="text-xs uppercase tracking-wider">
                            News
                          </p>

                          <h3 className="mt-2 font-serif text-xl">
                            Traveling Solo Is Awesome
                          </h3>
                        </div>
                      </div>

                      <div className="group/blog relative overflow-hidden">
                        <img
                          src={headerImg11}
                          alt="Indoor Plants"
                          className="h-40 w-full object-cover transition duration-500 group-hover/blog:scale-105"
                        />

                        <div className="absolute inset-0 bg-black/20" />

                        <div className="absolute bottom-5 left-5 text-white">
                          <p className="text-xs uppercase tracking-wider">
                            News
                          </p>

                          <h3 className="mt-2 font-serif text-xl">
                            Indoor Plants Are Good For Health.
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              {/* FEATURED */}
              <li className="group relative">
                <Link
                  to="/about"
                  className="flex items-center gap-1 py-7 text-sm font-semibold uppercase tracking-widest"
                >
                  Featured
                  <FiChevronDown className="text-xs" />
                </Link>

                <div
                  className="
                    invisible fixed left-0 top-20 z-50
                    w-screen bg-white shadow-xl
                    opacity-0
                    transition-all duration-300
                    group-hover:visible group-hover:opacity-100
                  "
                >
                  <div className="mx-auto grid max-w-[1600px] grid-cols-5 gap-8 px-8 py-10 xl:px-12">
                    <MegaColumn
                      title="Page"
                      items={[
                        "About Us",
                        "Contact Us",
                        "Faqs",
                        "Faqs 2",
                        "Wishlist",
                        "404 Error",
                      ]}
                    />

                    <MegaColumn
                      title="Portfolio"
                      items={[
                        "2 Columns",
                        "3 Columns",
                        "4 Columns",
                        "Masonry Layout",
                      ]}
                      badges={{
                        "Masonry Layout": "New",
                      }}
                    />

                    <MegaColumn
                      title="Featured"
                      items={[
                        "Announcement bar",
                        "Popup Newsletter",
                        "Popup Compare",
                        "Cookies law info",
                        "RTL Layout",
                      ]}
                      badges={{
                        "Popup Compare": "New",
                      }}
                    />

                    <MegaColumn
                      title="Lookbook"
                      items={[
                        "Lookbook Single",
                        "Lookbook In Page",
                        "Lookbook Simple",
                      ]}
                    />

                    <MegaColumn
                      title="Instagram Shop"
                      items={[
                        "Instagram Shop Slider",
                        "Instagram Shop Grid Modern",
                        "Instagram Shop in Page",
                      ]}
                    />
                  </div>
                </div>
              </li>
            </ul>
          </nav>

          <div className="flex flex-1 justify-center lg:flex-none lg:w-1/3">
            <Link to="/">
              <img
                src={logoHeader}
                alt="Logo"
                className="h-8 w-auto object-contain sm:h-9 lg:h-10"
              />
            </Link>
          </div>

          <div className="hidden flex-1 justify-end lg:flex">
            <div className="flex items-center gap-5 text-3xl">
              <button>
                <CiSearch />
              </button>

              <Link to="/login">
                <IoPersonOutline />
              </Link>

              <button className="relative">
                <Link to="/cart">
                  <CiHeart />

                  <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-green-900 text-[9px] text-white">
                    {cartCount}
                  </span>
                </Link>
              </button>

              <Link to="/orders" className="relative">
                <MdOutlineShoppingCart />

                <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-green-900 text-[9px] text-white">
                  0
                </span>
              </Link>
            </div>
          </div>

          <div className="flex flex-1 justify-end lg:hidden">
            <div className="flex items-center gap-3 text-2xl">
              <button>
                <CiSearch />
              </button>

              <Link to="/orders">
                <MdOutlineShoppingCart />
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div
        className={`
          fixed inset-0 z-[100]
          lg:hidden
          ${mobileMenu ? "visible" : "invisible"}
        `}
      >
        <div
          onClick={() => setMobileMenu(false)}
          className={`
            absolute inset-0 bg-black/40
            transition-opacity duration-300
            ${mobileMenu ? "opacity-100" : "opacity-0"}
          `}
        />

        {/* Drawer */}
        <div
          className={`
            absolute left-0 top-0 h-full
            w-[85%] max-w-sm
            bg-white
            p-6
            shadow-2xl
            transition-transform duration-300
            ${mobileMenu ? "translate-x-0" : "-translate-x-full"}
          `}
        >
          <div className="mb-8 flex items-center justify-between border-b pb-5">
            <img src={logoHeader} alt="Logo" className="h-8 w-auto" />

            <button onClick={() => setMobileMenu(false)} className="text-2xl">
              <FiX />
            </button>
          </div>

          <nav>
            <ul className="divide-y">
              <MobileLink
                to="/"
                text="Home"
                closeMenu={() => setMobileMenu(false)}
              />

              <MobileLink
                to="/shop"
                text="Shop"
                closeMenu={() => setMobileMenu(false)}
              />

              <MobileLink
                to="/Product"
                text="Product"
                closeMenu={() => setMobileMenu(false)}
              />

              <MobileLink
                to="/blog"
                text="Blog"
                closeMenu={() => setMobileMenu(false)}
              />

              <MobileLink
                to="/featured"
                text="Featured"
                closeMenu={() => setMobileMenu(false)}
              />
            </ul>
          </nav>

          <div className="mt-10 border-t pt-6">
            <Link
              to="/login"
              onClick={() => setMobileMenu(false)}
              className="mb-5 flex items-center gap-3 text-gray-600"
            >
              <IoPersonOutline />
              Account
            </Link>

            <Link
              to="/orders"
              onClick={() => setMobileMenu(false)}
              className="flex items-center gap-3 text-gray-600"
            >
              <MdOutlineShoppingCart />
              Cart
            </Link>
          </div>
        </div>
      </div>

      <div className="h-20" />
    </>
  );
};

const MegaColumn = ({ title, items, badges = {} }) => {
  return (
    <div>
      <h2 className="mb-5 border-b border-gray-200 pb-4 text-lg font-normal xl:text-xl">
        {title}
      </h2>

      <ul className="space-y-3 xl:space-y-4">
        {items.map((item) => (
          <li
            key={item}
            className="flex cursor-pointer items-center gap-2 text-sm text-gray-500 transition hover:text-black xl:text-base"
          >
            {item}

            {badges[item] && (
              <span
                className={`
                  px-2 py-1 text-[10px]
                  ${
                    badges[item] === "Hot"
                      ? "bg-red-100 text-red-500"
                      : "bg-gray-200 text-gray-600"
                  }
                `}
              >
                {badges[item]}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

const MobileLink = ({ to, text, closeMenu }) => {
  return (
    <li>
      <Link
        to={to}
        onClick={closeMenu}
        className="flex items-center justify-between py-5 text-base font-medium uppercase tracking-wider"
      >
        {text}

        <span className="text-gray-400">→</span>
      </Link>
    </li>
  );
};

export default Header;
