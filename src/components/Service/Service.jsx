import React, { useState } from "react";
import { RiComputerLine } from "react-icons/ri";
import { CiMobile3 } from "react-icons/ci";
import { TbWorldWww } from "react-icons/tb";
import { IoMdHappy } from "react-icons/io";
import { BiSupport } from "react-icons/bi";
import { IoPulseOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const ServicesData = [
  {
    id: 1,
    title: "Instruction and Teaching",
    link: "#",
    icon: <TbWorldWww />,
    description: "Providing quality instruction and teaching methodologies to enhance learning experiences.",
    delay: 0.2,
  },
  {
    id: 2,
    title: "Curriculum Development and Delivery",
    link: "#",
    icon: <CiMobile3 />,
    description: "Designing and implementing an effective curriculum for diverse learning needs.",
    delay: 0.3,
  },
  {
    id: 3,
    title: "Research and Development",
    link: "#",
    icon: <RiComputerLine />,
    description: "Engaging in research and innovation to drive academic and technological advancements.",
    delay: 0.4,
  },
  {
    id: 4,
    title: "24x7 Doubt Solving",
    link: "#",
    icon: <IoMdHappy />,
    description: "Offering round-the-clock assistance to clarify doubts and enhance understanding.",
    delay: 0.5,
  },
  {
    id: 5,
    title: "Assessment and Evaluation",
    link: "#",
    icon: <IoPulseOutline />,
    description: "Providing assessment tools and evaluation metrics to measure learning outcomes.",
    delay: 0.6,
  },
  {
    id: 6,
    title: "Student Support Service",
    link: "#",
    icon: <BiSupport />,
    description: "Guiding students through academic and non-academic challenges for a better learning experience.",
    delay: 0.7,
  },
];

const SlideLeft = (delay) => {
  return {
    initial: {
      opacity: 0,
      x: 50,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};

const Services = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleDescription = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <section className="bg-white">
      <div className="container pb-14 pt-16">
        <h1 className="text-4xl font-bold text-left pb-10">
          Services we provide
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
          {ServicesData.map((service) => (
            <motion.div
              key={service.id}
              variants={SlideLeft(service.delay)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="bg-[#f4f4f4] rounded-2xl flex flex-col gap-4 items-center justify-center p-4 py-7 hover:bg-white hover:scale-110 duration-300 hover:shadow-2xl cursor-pointer"
              onClick={() => toggleDescription(service.id)}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h1 className="text-lg font-semibold text-center px-3">
                {service.title}
              </h1>
              {expanded === service.id && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                  className="text-sm text-center px-3 mt-2"
                >
                  {service.description}
                </motion.p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
