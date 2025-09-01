import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import "./Gallery.css";
import { Link } from "react-router-dom";
import "./Home.css";

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
      <section className="hero-section relative h-[80vh] flex items-center justify-center">
        {/* Overlay */}
        <div className="absolute inset-0 bg-white bg-opacity-40"></div>

        {/* Hero Content */}
        <div className="relative text-center text-[#001F54] max-w-3xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white">
            Welcome to <br />
            RevivalHub Global Center
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white">
            An Apostolic & Prophetic Equipping Base with a Global Vision
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link to="/giving">
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md transition-colors">
                Partner With Us
              </button>
            </Link>
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
          <h3 className="text-xl font-semibold mb-4 text-center">
            Latest Teachings
          </h3>
          <div className="mt-8 text-center max-w-xl mx-auto">
            <p className="text-lg font-medium text-gray-700 italic">
              “Faith comes by hearing, and hearing by the Word of God.”
            </p>
            <p className="text-gray-600 font-semibold mt-2">– Romans 10:17</p>
          </div>
          <div className="flex justify-center mt-8 items-center py-10">
            <Link
              to="/teachings"
              className="bg-[#000080] text-white px-6 py-2 rounded-full hover:bg-blue-900 transition text-center"
            >
              View All Teachings
            </Link>
          </div>
        </div>
        {/* Testimony */}
        <section
          className="fullwidth-background "
          style={{
            backgroundImage: "url('/Gell20.jpg')", // replace with your background image
          }}
        >
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          {/* Content */}
          <div className="relative container mx-auto px-6 md:px-12 flex justify-end text-right">
            <div className="max-w-lg text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                TESTIMONIES
              </h2>
              <p className="italic text-lg mb-6">(FAITH STORIES)</p>
              <p className="custom-text">
                Your stories inspire us! <br />
                If you’d like to share your testimony, <br />
                please reach out to us via: <br />{" "}
                <a
                  href="mailto:revivalhubglobalcenter@gmail.com"
                  className="font-semibold underline"
                >
                  revivalhubglobalcenter@gmail.com
                </a>
              </p>
              <a
                href="mailto:revivalhubglobalcenter@gmail.com?subject=Testimony"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-black text-white px-6 py-3 rounded-full border border-yellow-400 hover:bg-yellow-500 hover:text-black transition shadow-lg">
                  SEND TESTIMONY
                </button>
              </a>
            </div>
          </div>
        </section>

        {/* Giving / Partner */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-center">
            Giving / Partner
          </h3>
          <div className="bg-gray-100 p-4 rounded-md">
            <p className="text-sm text-center">
              Each one must give as he has decided in his heart, not reluctantly
              or under compulsion, for God loves a cheerful giver. (2 Cor. 8:7)
            </p>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-4">
            <Link
              to="/giving"
              className="bg-blue-700 text-white px-4 py-2 rounded-md text-center"
            >
              Give via M-Pesa
            </Link>
            <Link
              to="/giving"
              className="bg-blue-600 text-white px-4 py-2 rounded-md text-center"
            >
              Give Now
            </Link>
            <Link
              to="/giving"
              className="col-span-2 bg-blue-800 text-white px-4 py-2 rounded-md text-center"
            >
              Bank Transfer
            </Link>
          </div>
        </div>
      </section>

      {/* WhatsApp Prayer Contact */}
      <section className="text-center py-16 bg-gray-50">
        <h3 className="text-xl font-semibold mb-4">Need Prayer?</h3>
        <p className="mb-2">
          Send us a message on WhatsApp and our team will pray with you.
        </p>
        <a
          href="https://wa.me/254111755539?text=Hello%20Revival%20and%20Global%20Hub,%20I%20would%20like%20to%20request%20a%20prayer"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition"
        >
          Chat with Us on WhatsApp
        </a>
      </section>
    </div>
  );
};

export default Home;
