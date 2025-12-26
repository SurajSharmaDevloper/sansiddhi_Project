import React from "react";
import banner from "../assets/images/officebanner.jpg";
import AboutImg from "../assets/images/About_1.png";
import needs from "../assets/images/needs.png";
import expertise from "../assets/images/expertise.png";
import engagement from "../assets/images/engagement.png";
import security from "../assets/images/security.png";
import Heading from "../components/base/Heading";
import Founder from "../assets/images/founder.png";

const AboutUs = () => {
  return (
    <section className="about-us-section bg-light">
      <div className="">
        <div
          className="relative w-full min-h-50 bg-center bg-cover bg-no-repeat text-center flex justify-center items-center-safe"
          style={{
            backgroundImage: `
                        linear-gradient(
                                to right,
                                rgba(0, 0, 0, 0.75),
                                rgba(10, 40, 80, 0.6),
                                rgba(99, 179, 67, 0.7)
                                ),
                        url(${banner})
                      `,
          }}
        >
          <div>
            <h2 className="fw-bold text-5xl font-semibold text-[#c7c7c7]">
              About Us
            </h2>
            <p className="text-muted text-[#c7c7c7]">
              Empowering experience. Creating second careers.
            </p>
          </div>
        </div>
        <div className=" mx-auto md:px-10 sm:px-5 px-4 mt-5">
          <Heading title="About Us" />
          <div className="flex max-[1100px]:flex-col-reverse mt-5 gap-8 items-start justify-between">
            <div className="w-full p-4 rounded-xl bg-background">
              <h4 className="text-xl font-semibold text-primary">
                Rediscover Your Second Career
              </h4>
              <p className="text-justify text-text">
                Sansiddhi has been conceived, designed, and developed with a
                clear understanding of the evolving needs of retired and senior
                professionals who are willing and able to continue working. The
                platform focuses on enabling meaningful engagement through
                part-time, project-based, consulting, and full-time
                opportunities, where experience and reliability are valued.
                Recognizing that organizations often depend on seasoned
                professionals for guidance, execution, and decision-making,
                Sansiddhi acts as a bridge between experienced individuals and
                companies seeking dependable expertise. The platform supports
                flexible work models that respect the preferences, pace, and
                availability of senior professionals while meeting real business
                requirements. A sincere effort has been made to create a
                platform that is practical, respectful, and beneficial—shaped
                through interactions with senior professionals and insights
                gained from professional experience over time. It is our
                endeavour to ensure that Sansiddhi remains meaningful, useful,
                and empowering for every experienced individual looking to begin
                a fulfilling second career.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-5 md:px-10 sm:px-5 px-4">
          <div className="container mx-auto">
            <Heading title="Why Sansiddhi Exists" />
            <div className="grid mt-6 grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 rounded-xl bg-background shadow-sm">
                <h4 className="font-semibold text-lg mb-2 text-primary">
                  For Senior Professionals
                </h4>
                <p className="text-gray-600">
                  Flexible, dignified opportunities that respect experience,
                  availability, and personal pace of engagement.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-background shadow-sm">
                <h4 className="font-semibold text-lg mb-2 text-primary">
                  For Organisations
                </h4>
                <p className="text-gray-600">
                  Access to reliable, mature, and skilled professionals without
                  the risks of traditional hiring.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-background shadow-sm">
                <h4 className="font-semibold text-lg mb-2 text-primary">
                  For Society
                </h4>
                <p className="text-gray-600">
                  Retention of knowledge, promotion of active ageing, and
                  inclusive workforce participation.
                </p>
              </div>
            </div>
          </div>
        </div>
        <section className="w-full mt-10 md:px-10 sm:px-5 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-6 ">
              <Heading title="Founder & Leadership" />
            </div>

            {/* Content */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Founder Image */}
              <div className="lg:col-span-4 bg-green-300/20 py-6 rounded-2xl flex justify-center">
                <img
                  src={Founder} /* replace with actual image */
                  alt="Founder"
                  className="w-64 h-64 rounded-full bg-green-500/40  object-cover shadow-md"
                />
              </div>

              {/* Founder Text */}
              <div className="lg:col-span-8 bg-background p-8 rounded-2xl shadow-sm">
                <h3 className="text-2xl font-semibold text-gray-800">
                  Prakash Sharma
                </h3>
                <p className="text-sm text-primary font-medium mt-1">
                  Founder & Managing Partner
                </p>

                <p className="mt-2 text-gray-700 leading-relaxed">
                  Prakash Sharma brings over three decades of leadership
                  experience across India and global markets. A Chartered
                  Accountant with an MBA from SPJIMR, he has held senior
                  leadership roles including CFO at leading organisations,
                  driving strategic growth, financial excellence, and strong
                  corporate governance.
                </p>

                <p className="mt-3 text-gray-700 leading-relaxed">
                  Through Sansiddhi, he is committed to enabling organisations
                  and experienced professionals to create sustainable value and
                  long-term impact.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full md:px-10 sm:px-5 px-4 py-5">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* MISSION */}
              <div className="relative bg-background rounded-2xl p-8 shadow-md overflow-hidden">
                {/* Circles */}
                <span className="absolute -top-14 -left-14 w-44 h-44 bg-green-300/30 rounded-full"></span>
                <span className="absolute top-6 left-38 w-28 h-28 bg-pink-300/20 rounded-full"></span>
                <span className="absolute bottom-10 right-10 w-20 h-20 bg-green-300/30 rounded-full"></span>
                <span className="absolute -bottom-5 left-15 w-30 h-30 bg-red-300/30 rounded-full"></span>

                {/* Content */}
                <div className="relative z-10">
                  <div className="text-green-600 text-4xl mb-4">
                    <i className="fa-solid fa-bullseye"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    Our Mission
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We deliver high-quality consultancy services that create
                    measurable value, helping organisations achieve their goals
                    through tailored, sustainable, and innovative solutions
                    built on strong governance and long-term partnerships.
                  </p>
                </div>
              </div>

              {/* VISION */}
              <div className="relative bg-background rounded-2xl p-8 shadow-md overflow-hidden">
                {/* Circles */}
                <span className="absolute -top-14 -right-14 w-44 h-44 bg-gray-400/50 rounded-full"></span>
                <span className="absolute top-0 right-42 w-28 h-28 bg-yellow-200/40 rounded-full"></span>
                <span className="absolute bottom-12 left-10 w-20 h-20 bg-purple-500/10 rounded-full"></span>
                <span className="absolute -bottom-8.5 right-20 w-25 h-25 bg-green-400/20 rounded-full"></span>

                {/* Content */}
                <div className="relative z-10">
                  <div className="text-gray-700 text-4xl mb-4">
                    <i className="fa-regular fa-eye"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    Our Vision
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We empower organisations to achieve their goals by enabling
                    access to funding, talent, reach, and recognition, while
                    serving as a trusted partner with the tools and resources to
                    help them excel.
                  </p>
                </div>
              </div>

              {/* VALUES */}
              <div className="relative bg-background rounded-2xl p-8 shadow-md overflow-hidden">
                {/* Circles */}
                <span className="absolute -bottom-14 -left-14 w-44 h-44 bg-blue-300/35 rounded-full"></span>
                <span className="absolute bottom-20 left-32 w-28 h-28 bg-yellow-100/60 rounded-full"></span>
                <span className="absolute top-12 right-10 w-20 h-20 bg-lime-300/40 rounded-full"></span>
                <span className="absolute -top-4.5 left-20 w-16 h-16 bg-green-200/50 rounded-full"></span>

                {/* Content */}
                <div className="relative z-10">
                  <div className="text-green-700 text-4xl mb-4">
                    <i className="fa-regular fa-gem"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    Our Values
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We empower organisations to achieve their goals by enabling
                    access to funding, talent, reach, and recognition, while
                    serving as a trusted partner with the tools and resources to
                    help them excel.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* OUR APPROACH */}
        <div className=" mt-5 mb-10 md:px-10 sm:px-5 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto text-center">
            <Heading title="Our Approach" />

            <div className="grid mt-5 grid-cols-1 md:grid-cols-4 gap-6">
              <div className="p-5 bg-background rounded-xl shadow-sm flex flex-col justify-center items-center">
                <img className="w-32" src={needs} alt="" />
                <h4 className="text-xl font-semibold text-primary">
                  Understand Needs
                </h4>
              </div>
              <div className="p-5 bg-background rounded-xl shadow-sm flex flex-col justify-center items-center">
                <img className="w-32" src={expertise} alt="" />
                <h4 className="text-xl font-semibold text-primary">
                  Match Expertise
                </h4>
              </div>
              <div className="p-5 bg-background rounded-xl shadow-sm flex flex-col justify-center items-center">
                <img className="w-32" src={engagement} alt="" />
                <h4 className="text-xl font-semibold text-primary">
                  Enable Engagement
                </h4>
              </div>
              <div className="p-5 bg-background rounded-xl shadow-sm flex flex-col justify-center items-center">
                <img className="w-32" src={security} alt="" />
                <h4 className="text-xl font-semibold text-primary">
                  Ensure Security
                </h4>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-blue-200/80 py-14 md:px-10 sm:px-5 px-4 text-center text-white">
          <h2 className="text-2xl font-bold text-gray-700">
            Ready to Begin a Meaningful Second Career?
          </h2>
          <p className="mt-2 text-gray-700">
            Or looking for experienced professionals you can trust?
          </p>
          <div className="mt-6 flex flex-wrap md:px-10 sm:px-5 px-4 justify-center gap-4">
            <button className="bg-white text-gray-700 px-6 py-2 rounded-lg font-medium">
              Join as Professional
            </button>
            <button className="bg-secondary px-6 py-2 rounded-lg font-medium">
              Partner With Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
