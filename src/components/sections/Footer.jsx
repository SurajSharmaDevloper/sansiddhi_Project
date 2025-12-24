import React from "react";
import LocationMap from "../blocks/LocationMap";

const Footer = () => {
  return (
    <footer className="bg-secondary">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 py-12 flex justify-between items-start flex-wrap ">
        {/* Brand + Description */}
        <div className="w-1/4 max-[1150px]:w-1/2">
          <div className="flex items-center gap-3 mb-4">
            {/* Replace with your logo */}
            <div className="h-24 w-24 rounded-full bg-white flex items-start justify-center text-white font-semibold">
              <img src="/NoBack_Logo.png" alt="" />
            </div>
          </div>

          <p className="text-sm text-gray-200 leading-relaxed mb-6">
            Is your organisation in search of sustainable growth and increased
            success? Sansiddhi connects organisations with experienced
            professionals who deliver value through knowledge, discipline, and
            reliability.
          </p>

          {/* Subscribe */}
          <div className="flex w-full max-w-sm">
            <input
              type="email"
              placeholder="Type email"
              className="w-full rounded-l-xl border border-gray-300 px-4 py-2 text-sm
                         focus:outline-none focus:ring-2 focus:ring-[#35B357] placeholder:text-gray-300"
            />
            <button
              className="rounded-r-xl bg-[#35B357] px-5 text-sm font-medium text-white
                         hover:bg-[#2fa14f] transition"
            >
              Subscribe
            </button>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex max-[1150px]:w-1/2 max-[1150px]:justify-around w-1/4 justify-between flex-wrap">
          <div>
            <h4 className="text-sm font-semibold text-gray-100 mb-4">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm text-gray-300">
              {["Home", "About", "Engagement", "Inheritance"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-[#35B357] transition flex items-center gap-2"
                  >
                    <span className="text-[#35B357]">›</span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-100 mb-4">
              Support
            </h4>
            <ul className="space-y-3 text-sm text-gray-300">
              {[
                "Contact Us",
                "Get In Quote",
                "Terms of Services",
                "Privacy Policy",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-[#35B357] transition flex items-center gap-2"
                  >
                    <span className="text-[#35B357]">›</span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full mt-15 flex flex-col max-[1150px]:items-center ">
            <h4 className="text-sm font-semibold text-gray-100 mb-4">
              Our Social Media's
            </h4>
            <div className="text-2xl w-full  text-gray-200 flex gap-10 justify-start max-[1150px]:">
              <i class="fa-brands fa-facebook hover:text-green-600"></i>
              <i class="fa-brands fa-linkedin hover:text-green-600"></i>
              <i class="fa-brands fa-square-x-twitter hover:text-green-600"></i>
              <i class="fa-brands fa-instagram hover:text-green-600"></i>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <div>
            <LocationMap />
          </div>
          <div className="space-y-3 mt-5 text-sm text-gray-300">
            <p className="text-gray-300">
              <span className="font-medium text-gray-100">Location:</span>{" "}
              Delhi, Mumbai, Gurugram, Faridabad, Lucknow, Kolkata
            </p>

            <p>
              <span className="font-medium text-gray-100">Tel:</span>{" "}
              <a
                href="tel:+919899210941"
                className="text-[#35B357] font-semibold"
              >
                +91-9899210941
              </a>
            </p>

            <p>
              <span className="font-medium text-gray-100">Email:</span>{" "}
              <a
                href="mailto:support@sansiddhi.co.in"
                className="text-[#35B357] font-semibold"
              >
                support@sansiddhi.co.in
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-primary">
        <p className="text-center text-xs sm:text-sm text-gray-100 py-4">
          © {new Date().getFullYear()}{" "}
          <span className="font-medium">Sansiddhi Consultancy Services</span>{" "}
          All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
