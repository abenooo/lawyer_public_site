import { IoMdArrowDropdown } from "react-icons/io";
const ReviewItem = ({ header, text, onClick, active }) => {
  return (
    <div className="mb-8 w-full rounded-lg bg-white p-4 shadow-[0px_20px_95px_0px_rgba(201,203,204,0.30)] dark:bg-dark-2 dark:shadow-[0px_20px_95px_0px_rgba(0,0,0,0.30)] sm:p-8 lg:px-6 xl:px-8">
      <button className="faq-btn flex w-full items-center justify-between text-left" onClick={onClick}>
        <h4 className="text-lg font-semibold text-dark dark:text-white">
          {header}
        </h4>
        <span className={`material-icons ${active ? 'rotate-180' : ''}`}>
         <IoMdArrowDropdown />
        </span>
      </button>
      <div className={`duration-200 ease-in-out ${active ? "block" : "hidden"}`}>
        <p className="py-3 text-base leading-relaxed text-body-color dark:text-dark-6">
          {text}
        </p>
      </div>
    </div>
  );
};

export default ReviewItem;
