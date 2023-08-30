import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.jpg";
import project3 from "../assets/images/project3.jpg";
import project4 from "../assets/images/project4.jpg";
import project5 from "../assets/images/project-5.png";
import project_person from "../assets/images/project_person1.png";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Project = () => {
  const projects = [
    {
      img: project1,
      name: "Travel-Agency",
      github_link: "https://github.com/BokangLeangoabala/Travel-Agency.git",
      live_link: "https://travel-agency-nu.vercel.app",
    },
    {
      img: project2,
      name: "Resturaunt",
      github_link: "https://github.com/BokangLeangoabala/Resturaunt-Website.git",
      live_link: "https://resturaunt-website.vercel.app",
    },
    {
      img: project3,
      name: "Real Estate",
      github_link: "https://github.com/BokangLeangoabala/Real-Estate.git",
      live_link: "https://real-estate-website-alpha.vercel.app",
    },
    {
      img: project4,
      name: "Music Streaming",
      github_link:
        "https://github.com/BokangLeangoabala",
      live_link: "https://splendid-liger-2576bc.netlify.app",
    },
    {
      img: project5,
      name: "Learning Platform",
      github_link: "https://github.com/BokangLeangoabala/Learning-Platform-E-commerce.git",
      live_link: "https://learning-platform-e-commerce.vercel.app",
    },
  ];
  return (
    <section id="projects" className="py-10 text-black">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-green-700">Projects</span>
        </h3>
        <p className="text-green-500 mt-3 text-lg">My work</p>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
        <div className="lg:w-2/3 w-full">
          <Swiper
            slidesPerview={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 2000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-green-900 rounded-2xl">
                  <img src={project_info.img} alt="" className="rounded-lg" />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      className="text-green-700 bg-black px-2 py-1 inline-block"
                    >
                      Github
                    </a>
                    <a
                      href={project_info.live_link}
                      target="_blank"
                      className="text-green-700 bg-black px-2 py-1 inline-block"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="lg:block hidden">
          <img src={project_person} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Project;
