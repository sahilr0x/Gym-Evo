import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "./types";


type Props = {
    children :React.ReactNode;
    setSelectedPage: (value: SelectedPage) => void;
}

const ActionButton = ({children, setSelectedPage}: Props) => {
  return (
    <AnchorLink
    className="group relative overflow-hidden rounded-full bg-gradient-to-r from-secondary-500 to-primary-500 px-8 py-3 font-semibold text-white shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:from-primary-500 hover:to-secondary-400"
    onClick={() => setSelectedPage(SelectedPage.ContactUs)}
    href= {`#${SelectedPage.ContactUs}`}>
        <span className="relative z-10">{children}</span>
        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
    </AnchorLink>
  )
}

export default ActionButton


{/* background hover color */}