import HeroSlider from "../components/sections/HeroSlider";
import CourseCard from "../components/blocks/CourseCard";
import SearchFilterCard from "../components/blocks/SearchFilterCard";
import Heading from "../components/base/Heading";
import TestimonialSlider from "../components/blocks/TestimonialSlider";
import AboutImg from "../assets/images/About_1.png";

const testimonialsData = [
  {
    message:
      "Sansiddhi helped us connect with experienced professionals who delivered value from day one.",
    name: "Amit Verma",
    role: "HR Manager, Private Firm",
  },
  {
    message:
      "After retirement, I found meaningful work through Sansiddhi without stress or long commitments.",
    name: "R. K. Sharma",
    role: "Retired Banking Professional",
  },
  {
    message: "The platform is simple, respectful, and truly values experience.",
    name: "Sunita Rao",
    role: "Former School Principal",
  },
  {
    message: "The platform is simple, respectful, and truly values experience.",
    name: "Sunita Rao",
    role: "Former School Principal",
  },
  {
    message: "The platform is simple, respectful, and truly values experience.",
    name: "Sunita Rao",
    role: "Former School Principal",
  },
  {
    message: "The platform is simple, respectful, and truly values experience.",
    name: "Sunita Rao",
    role: "Former School Principal",
  },
  {
    message: "The platform is simple, respectful, and truly values experience.",
    name: "Sunita Rao",
    role: "Former School Principal",
  },
];

const Home = () => {
  return (
    <div className="mb-5">
      <div className="">
        <HeroSlider />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 px-5 sm:px-10 gap-5 p-5 ">
        <CourseCard
          className=""
          title="For Companies"
          description="Connect with skilled and reliable retired professionals who bring years of hands-on experience, discipline, and industry knowledge to your organization—without long-term hiring commitments."
        />
        <CourseCard
          className=""
          title="For Experts"
          description="Sansiddhi helps retired professionals find meaningful work opportunities where their experience is valued, skills stay active, and earnings continue—on flexible and comfortable terms."
        />
        <SearchFilterCard className="col-span-1 sm:col-span-2 lg:col-span-1" />
      </div>
      <div className="p-5 px-5 sm:px-10">
        <Heading title="Our Premium Memebers" />
        <div className="mt-5">
          <TestimonialSlider testimonials={testimonialsData} />
        </div>
      </div>
      <div className="p-5 px-5 sm:px-10">
        <Heading title="About Us" />
        <div className="flex max-[1100px]:flex-col-reverse mt-5 gap-8 items-start justify-between">
          <div className="w-[55%] max-[1100px]:w-full p-4 rounded-xl bg-background">
            <h4 className="text-xl font-semibold text-primary">
              Rediscover Your Second Career
            </h4>
            <p className="text-justify text-text">
              Sansiddhi is a purpose-driven professional platform designed to
              bridge the gap between experienced, retired individuals who are
              willing and able to work and organizations seeking dependable,
              skilled talent. We recognize that retirement does not mark the end
              of professional capability, but the beginning of a new phase where
              experience, wisdom, and discipline can continue to create value.
              Our platform enables companies, institutions, and service
              providers to connect with verified professionals across diverse
              domains—offering access to reliable expertise without the
              constraints of traditional long-term hiring. At the same time,
              Sansiddhi empowers retired professionals by providing meaningful,
              flexible work opportunities that respect their experience,
              preferences, and pace of engagement.
            </p>
          </div>

          <div className="w-[40%] max-[1100px]:hidden max-[700px]:block max-[700px]:w-full">
            <img
              className="h-full rounded-xl border border-lime-300"
              src={AboutImg}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
