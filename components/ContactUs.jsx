import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { GrLocation } from "react-icons/gr";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";

function ContactUs() {
  // Validation Schema
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    phone: Yup.string().required("Phone number is required"),
    subject: Yup.string().required("Subject is required"),
    address: Yup.string().required("Address is required"),
    message: Yup.string(),
    typeofenquires: Yup.string().required("Type of enquiry is required"),
  });

  // Initial values for the form fields
  const initialValues = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    address: '',
    message: '',
    typeofenquires: ''
  };

  // Custom input style
  const inputStyle = "bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5";
  return (
    <div className="mx-6">
      <h1 className="font-semibold text-center text-4xl mt-14 ">
        Do you need legal advice?{" "}
      </h1>
      <div className="flex justify-center">
        <hr className="w-24 h-0.5 mt-5 mb-8 bg-yellow-600 border-0 rounded" />
      </div>{" "}
      <p className="my-3 text-center font-sans text-xs">
        We understand that you may need help, but aren’t yet ready to enter into
        a retainer
      </p>
      <p className="my-3 text-center font-sans text-xs">
        If you need a confidential obligation-free consultation, contact us
        today.
      </p>
      <div className="md:flex gap-6  md:w-[75%] mx-auto md:mt-8">
        <Formik

        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >

{() => (
          <Form className="basis-1/2">
              <div className="md:grid grid-cols-2 gap-6">
                {/* Fields for the form */}
                <div className="my-3">
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">
                    Name
                  </label>
                  <Field name="name" type="text" className={inputStyle} placeholder="Full Name" />
                  <ErrorMessage name="name" component="p" className="text-red-600" />
                </div>
                <div className="my-3">
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                    Email
                  </label>
                  <Field name="email" type="email" className={inputStyle} placeholder="example@gmail.com" />
                  <ErrorMessage name="email" component="p" className="text-red-600" />
                </div>
                <div className="my-3">
                  <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900">
                    Phone Number
                  </label>
                  <Field name="phone" type="text" className={inputStyle} placeholder="Phone Number" />
                  <ErrorMessage name="phone" component="p" className="text-red-600" />
                </div>
                <div className="my-3">
                  <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900">
                    Subject
                  </label>
                  <Field name="subject" type="text" className={inputStyle} placeholder="Mail Subject" />
                  <ErrorMessage name="subject" component="p" className="text-red-600" />
                </div>
                <div className="my-3">
                  <label htmlFor="typeofenquires" className="block mb-2 text-sm font-medium text-gray-900">
                    Type of Enquiries
                  </label>
                  <Field as="select" name="typeofenquires" className={inputStyle}>
                    <option value="">Select a type</option>
                    <option value="Family law">Family law</option>
                    <option value="Property law">Property law</option>
                    <option value="Insurance law">Insurance law</option>
                    <option value="Dispute resolution">Dispute resolution</option>
                    <option value="Building and Construction">Building and Construction</option>
                  </Field>
                  <ErrorMessage name="typeofenquires" component="p" className="text-red-600" />
                </div>
                <div className="my-3">
                  <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900">
                    Address
                  </label>
                  <Field name="address" type="text" className={inputStyle} placeholder="Address" />
                  <ErrorMessage name="address" component="p" className="text-red-600" />
                </div>
                <div className="my-3">
                  <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">
                    Your message
                  </label>
                  <Field as="textarea" name="message" rows="4" className={inputStyle} placeholder="Write your thoughts here..." />
                </div>
              </div>
              <div className="md:flex justify-center">
                <button type="submit" className="bg-cyan-600 hover:bg-cyan-900 py-2.5 w-full md:max-w-sm text-white font-bold rounded-lg mt-4">
                  Submit
                </button>
              </div>
          </Form>
        )}


        </Formik>
        <div className="basis-1/2">
          <h1 className="mt-10 md:m-0 text-center font-semibold text-xl">
            Get In Touch
          </h1>
          <p className="text-justify mt-3">
            Our team of experienced Lawyers is here to provide you with expert
            guidance and support. Whether you have questions about a specific
            case, need advice on legal matters, or want to schedule a
            consultation, we're here to help. Let's work together to find the
            best solution for your legal needs!
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
      </div>
    </div>
  );
}

export default ContactUs;
