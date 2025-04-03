import React, { useState } from "react";
import { FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { motion } from "framer-motion";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail("ekaksharitf@gmail.com");
  };

  return (
    <footer className="py-28 bg-[#f7f7f7]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="container"
      >
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-8 md:gap-6 lg:gap-4 w-full">
          {/* First Section */}
          <div className="space-y-4 max-w-full sm:max-w-[350px] md:max-w-[300px]">
            <h1 className="text-2xl font-bold">Our Aim & Objective</h1>
            <p className="text-dark2 text-sm sm:text-base">
              Ekakshari fosters students' holistic growth, emphasizing
              character, spirituality, and excellence. We encourage
              responsibility, strong principles, and selfless service to
              society. Open to all, we nurture intellectual competence, moral
              integrity, and national commitment. Our goal is to shape
              individuals dedicated to justice, growth, and positive change.
              <br />
              <strong>Director's Desk – Aryan Verma</strong>
            </p>
          </div>

          {/* Second Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 w-full">
            <div className="space-y-4">
              <h1 className="text-2xl font-bold">Courses</h1>
              <ul className="space-y-2 text-lg">
                <li className="cursor-pointer hover:text-secondary duration-200">
                  Foundation Classes - 6,7 and 8.
                </li>
                <li className="cursor-pointer hover:text-secondary duration-200">
                  School Preparation - 9,10 and 11.
                </li>
                <li className="cursor-pointer hover:text-secondary duration-200">
                  National Science Olympiad Prep.
                </li>
                <li className="cursor-pointer hover:text-secondary duration-200">
                  Geogenius, NTSE
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h1 className="text-2xl font-bold">Links</h1>
              <ul className="space-y-2 text-lg">
                <li className="cursor-pointer hover:text-secondary duration-200">
                  <a
                    href="https://drive.google.com/drive/folders/1RbvWlk4pryTIUgT9T1jkmZNSpcE5cev9"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Photos
                  </a>
                </li>

                <li className="cursor-pointer hover:text-secondary duration-200">
                  <a
                    href="https://drive.google.com/file/d/1R_aYoyZS5OLbWQytcPZDwODpf5C6Gja_/view?usp=drivesdk"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Fee Structure
                  </a>
                </li>

                <li className="cursor-pointer hover:text-secondary duration-200">
                  <a
                    href="https://youtu.be/gGPF6ShtVeU?si=YUwBAlk2aJOsyZFb"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Video
                  </a>
                </li>

                <li className="cursor-pointer hover:text-secondary duration-200 group relative">
                  Contact
                  <div className="absolute left-0 mt-2 hidden group-hover:block bg-white shadow-lg p-2 rounded-md">
                    <a
                      href="tel:9708306245"
                      className="block hover:text-primary p-1"
                    >
                      9708306245
                    </a>
                    <a
                      href="tel:9153308844"
                      className="block hover:text-primary p-1"
                    >
                      9153308844
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Third Section */}
          <div className="space-y-4 max-w-full sm:max-w-[350px] md:max-w-[300px]">
            <h1 className="text-2xl font-bold">Get In Touch</h1>
            <div className="flex items-center w-full">
              <input
                type="text"
                placeholder="Enter your email"
                value={email}
                onChange={handleChange}
                className="p-3 rounded-s-xl bg-white w-full py-4 focus:ring-0 focus:outline-none placeholder:text-dark2"
              />
              <button className="bg-primary text-white font-semibold py-4 px-6 rounded-e-xl">
                Go
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-6 py-3">
              <a href="https://chat.whatsapp.com/J9KlrOxfr5S3P18dIzBYw0">
                <FaWhatsapp className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
              </a>
              <a href="https://www.instagram.com/_ariyskiy/">
                <FaInstagram className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
              </a>
              <a href="https://youtube.com/@ekaksharitf?si=Xzh-am8HveskiuFC">
                <TbWorldWww className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
              </a>
              <a href="https://youtube.com/@ekaksharitf?si=Xzh-am8HveskiuFC">
                <FaYoutube className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
