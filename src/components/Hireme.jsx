import React from "react";
import hireMe from "../assets/images/hireMe.png";
const Hireme = () => {
  return (
    <section id="hireme" className="py-10 px-3 text-black">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          Hire <span className="text-green-700">Me</span>
        </h3>
        <p className="text-green-500 mt-3 text-lg">Do you have any work?</p>
      </div>
      <div className="bg-green-900 relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-24 flex gap-6 lg:flex-row flex-col-reverse items-center">
        <div>
          <h2 className="text-2xl font-semibold">
            Do you want any work from me?
          </h2>
          <p className="lg:text-left text-justify max-w-lg text-sm mt-4 text-gray-200 leading-6">
            If you have any job offers or opportunities that you would like to discuss with me, feel free to reach out to me on whatsapp or via email.I am
            always open to new challenges and collaborations, so don't hesitate to get in touch.I look forward to hearing from you!
          </p>
          <button className="btn-primary mt-10">Say Hello</button>
        </div>
        <img
          src={hireMe}
          alt=""
          className="lg:h-[32rem] h-80 lg:absolute bottom-0 -right-3 object-cover"
        />
      </div>
    </section>
  );
};

export default Hireme;
