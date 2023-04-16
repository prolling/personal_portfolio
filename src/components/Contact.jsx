import React from "react";
import { MdEmail } from "react-icons/md";
import { BsFillPhoneVibrateFill } from "react-icons/bs";

const Contact = () => {
  return (
    <div
      name="contact"
      className="bg-gradient-to-b from-timberwolf_light to-rose py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-screen-lg mx-auto relative px-4">
        <div>
          <h2 className="text-3xl font-extrabold text-dark_gray sm:text-4xl">
            Get in touch
          </h2>
          <p className="mt-3 max-w-2xl text-lg text-dark_gray">
            If you have any questions or want to collaborate on a project, feel
            free to reach out!
          </p>
          <dl className="mt-8 text-base text-dark_gray">
            <div className="py-2">
              <dt className="sr-only">Email</dt>
              <dd className="flex items-center">
                <MdEmail />
                <a
                  href="mailto:prolling@iastate.edu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-3"
                >
                  prolling@iastate.edu
                </a>
              </dd>
            </div>
            <div className="py-2">
              <dt className="sr-only">Phone number</dt>
              <dd className="flex items-center">
                <BsFillPhoneVibrateFill />
                <a href="tel:6425296778" className="ml-3">
                  (641) 529-6778
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Contact;
