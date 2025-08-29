import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import "./Gallery.css";
import { Link } from "react-router-dom";

const ministries = [
  { img: "/Gell1.jpg" },
  { img: "/Gell2.jpg" },
  { img: "/Gell3.jpg" },
  { img: "/Gell4.jpg" },
  { img: "/Gell5.jpg" },
  { img: "/Gell20.jpg" },
  { img: "/Gell7.jpg" },
  { img: "/Gell8.jpg" },
  { img: "/Gell9.jpg" },
  { img: "/Gell10.jpg" },
  { img: "/Gell11.jpg" },
  { img: "/Gell12.jpg" },
  { img: "/Gell13.jpg" },
  { img: "/Gell14.jpg" },
  { img: "/Gell15.jpg" },
  { img: "/Gell16.jpg" },
  { img: "/Gell17.jpg" },
  { img: "/Gell18.jpg" },
  { img: "/Gell19.jpg" },
  { img: "/Gell21.jpg" },
  { img: "/Gell22.jpg" },
];

const Home = () => {
  return (
    <div className="bg-white text-[#001F54]">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[80vh] flex items-center justify-center"
        style={{ backgroundImage: "url('/banner.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-white bg-opacity-60"></div>

        {/* Hero Content */}
        <div className="relative text-center text-[#001F54] max-w-3xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Welcome to <br />
            RevivalHub Global Center
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white">
            An Apostolic & Prophetic Equipping Base with a Global Vision
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md">
              Patner With Us
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 text-center px-6">
        <h2 className="text-2xl md:text-3xl font-semibold max-w-2xl mx-auto">
          We are called to raise, equip, and release believers for global
          revival.
        </h2>

        <Link to="/about">
          <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md">
            Read More About Us
          </button>
        </Link>
      </section>

      {/* Ministries Gallery */}
      <div className="mt-8">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          navigation
          autoplay={{ delay: 3000 }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {ministries.map((m, index) => (
            <SwiperSlide key={index}>
              <img
                src={m.img}
                alt={`Ministry ${index + 1}`}
                className="gallery-image"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Teachings + Giving */}
      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 py-12">
        {/* Latest Teachings */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Latest Teachings</h3>
          <div className="space-y-4">
            <div className="bg-gray-100 p-4 rounded-md">
              <p className="font-medium">
                The Anointing That Breaks Yokes – Isaiah 19:27
              </p>
              <div className="text-sm text-blue-700">Watch | Read</div>
            </div>
            <div className="bg-gray-100 p-4 rounded-md">
              <p className="font-medium">
                The Power of Forgiveness – Matthew 3:14-15
              </p>
              <div className="text-sm text-blue-700">Watch | Read</div>
            </div>
          </div>
          <button className="mt-4 bg-blue-700 text-white px-4 py-2 rounded-md">
            View All Teachings
          </button>
        </div>

        {/* Giving / Partner */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Giving / Partner</h3>
          <div className="bg-gray-100 p-4 rounded-md">
            <p className="text-sm">
              Each one must give as he has decided in his heart, not reluctantly
              or under compulsion, for God loves a cheerful giver. (2 Cor. 8:7)
            </p>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <button className="bg-blue-700 text-white px-4 py-2 rounded-md">
              Give via M-Pesa
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
              Give Now
            </button>
            <button className="col-span-2 bg-blue-800 text-white px-4 py-2 rounded-md">
              Bank Transfer
            </button>
          </div>
        </div>
      </section>

      {/* Visit Us */}
      <section className="text-center py-16 bg-gray-50">
        <h3 className="text-xl font-semibold mb-4">Visit Us</h3>
        <p>123 Revival S, City, Country</p>
        <p>Sunday – 5:00 AM & Midweek – 6:30 PM</p>
        <p className="mt-2 text-blue-700">(193) 455-7929</p>
      </section>
    </div>
  );
};

export default Home;
