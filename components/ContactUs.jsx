import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import emailjs from "@emailjs/browser";
import { contactSchema } from "./contactSchema"; // Assuming this is the path
import { GrLocation } from "react-icons/gr";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
function ContactUs() {
  const form = useRef();
  const [result, showResult] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(contactSchema),
  });

  const sendEmail = (data, e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_jckawjr",
        "template_0ip03ik",
        form.current,
        "ZPz30qjv2GNETKh1m"
      )
      .then(
        (result) => {
          console.log(result.text);
          showResult(true);
          reset(); // Reset the form after submission
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const inputStyle =
    "bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5";

  return (
    <div className="flex flex-col md:flex-row mb-4 lg:mx-20">
       <div class="w-full bg-white h-full lg:mx-10 px-5">
        <h1 className="mt-10 lg:mt-5 md:m-0 text-center font-semibold text-xl">
          How can you find us?
        </h1>
        <p className="text-justify mt-3">
          Our seasoned team of attorneys is dedicated to providing you with the
          professional advice and assistance you need. With a breadth of
          knowledge in various legal domains, we're well-equipped to address
          your queries, offer sound legal counsel, or arrange a detailed
          consultation at your convenience. We’re committed to collaborating
          with you to secure the most favorable outcome for your legal concerns.
          Visit us today at our central location in Addis Ababa, Lideta,
          directly opposite Landmark, and discover how we can support your
          journey towards justice.
        </p>
        <div className="my-6 md:grid grid-cols-2">
          <div className="flex items-center gap-3 my-3">
            <GrLocation className="text-2xl text-cyan-600" />
            <div className="text-xs">
              <p className="text-sm font-semibold">Location</p>
              <p>Addis Ababa lideta infront of xxx</p>
            </div>
          </div>
          <div className="flex items-center gap-3 my-3">
            <FiPhoneCall className="text-2xl text-cyan-600" />
            <div className="text-xs">
              <p className="text-sm font-semibold">Phone Number</p>
              <p>+251911111111</p>
              <p>+251911111111</p>
            </div>
          </div>
          <div className="flex items-center gap-3 my-3">
            <MdOutlineEmail className="text-2xl text-cyan-600" />
            <div>
              <p className="text-sm font-semibold">Email</p>
              <p className="text-xs">support@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center gap-3 my-3">
            <FaRegClock className="text-2xl text-cyan-600" />
            <div className="text-xs">
              <p className="text-sm font-semibold">Timing</p>
              <p>Mon - Fri 2:00- 11:00 LT</p>
              <p>Saturday 2:00- 11:00 LT</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white h-full px-5">
        <form ref={form} onSubmit={handleSubmit(sendEmail)}>
          <div className="md:grid grid-cols-2 gap-6 lg:mt-5">
            {/* Name Field */}
            <div className="my-3 ">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Name
              </label>
              <input
                type="text"
                placeholder="Full Name"
                {...register("name")}
                className={inputStyle}
              />
              {errors.name && (
                <p style={{ color: "red" }}>{errors.name.message}</p>
              )}
            </div>

            {/* Email Field */}
            <div className="my-3">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Email
              </label>
              <input
                type="email"
                placeholder="example@gmail.com"
                {...register("email")}
                className={inputStyle}
              />
              {errors.email && (
                <p style={{ color: "red" }}>{errors.email.message}</p>
              )}
            </div>

            {/* Phone Number Field */}
            <div className="my-3">
              <label
                htmlFor="phone"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Phone Number
              </label>
              <input
                type="text"
                placeholder="Phone Number"
                {...register("phone")}
                className={inputStyle}
              />
              {errors.phone && (
                <p style={{ color: "red" }}>{errors.phone.message}</p>
              )}
            </div>

            {/* Subject Field */}
            <div className="my-3">
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Subject
              </label>
              <input
                type="text"
                placeholder="Mail Subject"
                {...register("subject")}
                className={inputStyle}
              />
              {errors.subject && (
                <p style={{ color: "red" }}>{errors.subject.message}</p>
              )}
            </div>

            {/* Type of Enquiries Field */}
            <div className="my-3">
              <label
                htmlFor="typeofenquires"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Type of Enquiries
              </label>
              <select {...register("typeofenquires")} className={inputStyle}>
                <option value="">Select a type</option>
                <option value="Family law">Family law</option>
                <option value="Property law">Property law</option>
                <option value="Insurance law">Insurance law</option>
                <option value="Dispute resolution">Dispute resolution</option>
                <option value="Building and Construction">
                  Building and Construction
                </option>
              </select>
              {errors.typeofenquires && (
                <p style={{ color: "red" }}>{errors.typeofenquires.message}</p>
              )}
            </div>

            {/* Address Field */}
            <div className="my-3">
              <label
                htmlFor="address"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Address
              </label>
              <input
                type="text"
                placeholder="Address"
                {...register("address")}
                className={inputStyle}
              />
              {errors.address && (
                <p style={{ color: "red" }}>{errors.address.message}</p>
              )}
            </div>

            {/* Message Field */}
            <div className="my-3">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Your message
              </label>
              <textarea
                {...register("message")}
                rows="4"
                placeholder="Write your thoughts here..."
                className={inputStyle}
              ></textarea>
              {errors.message && (
                <p style={{ color: "red" }}>{errors.message.message}</p>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <div className="md:flex justify-center">
            <button
              type="submit"
              className="bg-cyan-600 hover:bg-cyan-900 py-2.5 w-full md:max-w-sm text-white font-bold rounded-lg mt-4"
            >
              Submit
            </button>
          </div>

          {result ? <p>Email successfully sent!</p> : null}
        </form>
      </div>
     
    </div>
  );
}

export default ContactUs;
