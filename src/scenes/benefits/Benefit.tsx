import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const childVariant = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0 },
};

type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefit = ({ icon, title, description, setSelectedPage }: Props) => {
  return (
    <motion.div
      variants={childVariant}
      className="group mt-5 rounded-2xl bg-white border border-gray-100 px-6 py-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer backdrop-blur-sm"
    >
      <div className="mb-6 flex justify-center">
        <div className="rounded-full bg-gradient-to-br from-primary-300 to-secondary-400 p-4 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
          <div className="text-white">
            {icon}
          </div>
        </div>
      </div>

      <h4 className="font-bold text-xl text-gray-800 mb-3 group-hover:text-primary-500 transition-colors duration-300">{title}</h4>
      <p className="text-gray-600 leading-relaxed mb-4">{description}</p>
      <AnchorLink
        className="inline-flex items-center text-sm font-semibold text-primary-500 hover:text-secondary-500 group-hover:underline transition-all duration-200"
        onClick={() => setSelectedPage(SelectedPage.ContactUs)}
        href={`#${SelectedPage.ContactUs}`}
      >
        <span>Learn More</span>
        <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </AnchorLink>
    </motion.div>
  );
};

export default Benefit;