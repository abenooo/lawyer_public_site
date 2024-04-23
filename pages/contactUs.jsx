import ContactUs from "@/components/ContactUs";

const contactUs = () => {
  return (
    <>
      <div className="bg-[url('https://slflawyers.com.au/wp-content/uploads/2023/02/Untitled-design-2023-02-03T120344.159.png')] h-[50vh] bg-cover">
        <div className="text-white flex  justify-center items-center h-full text-center">
          <h1 className=" font-sans text-white font-semibold text-4xl md:6xl lg:6xl">
            Contact US
          </h1>
        </div>
      </div>
      <div className="text-center my-5">
        <div className="-mt-20 shadow-2xl w-11/12 mx-auto rounded-3xl md:w-3/5">
          <div className="bg-white rounded-t-3xl py-3 md:flex-row justify-around md:p-10">
          <div class="w-full bg-white h-full lg:mx-10 px-5">
        <h1 className="mt-10 md:m-0 text-center font-semibold text-xl">
          Get In Touch
        </h1>
        <p className="text-justify mt-3">
          Our team of experienced Lawyers is here to provide you with expert
          guidance and support. Whether you have questions about a specific
          case, need advice on legal matters, or want to schedule a
          consultation, we're here to help. Let's work together to find the best
          solution for your legal needs!
        </p>
        </div>
          </div>
        </div>
      </div>
      <ContactUs />
    </>
  );
};

export default contactUs;
