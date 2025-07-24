import Intro from "../components/Common/Intro";
import Nav from "../components/Common/Nav/Nav";
import { FaBars, FaMousePointer, FaRegSmileWink } from "react-icons/fa";
import { SlOptionsVertical } from "react-icons/sl";
import { useState } from "react";

/**
 * * Layout component for the main page structure.
 * * Handles sidebar, intro modal, and navigation bar.
 *
 * @param {object} props
 * @param {React.ReactNode} props.children - The main content to render.
 * @returns {JSX.Element}
 */
export default function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [intro, setIntro] = useState(false);

  return (
    <div
      className={`h-screen lg:p-[0.8rem] flex flex-col select-none font-circular`}
    >
      <div className="lg:hidden">
        <div className=" bg-DeepNightBlack text-LightGray w-full h-10 flex items-center justify-between px-2 lg:hidden relative">
          <div
            className="icon flex items-center gap-x-2"
            onClick={() => setIntro(!intro)}
          >
            <span className="icon border-2 text-Green border-Green p-1 text-sm rounded-lg">
              <SlOptionsVertical />
            </span>
            <div className="text-Snow absolute -right-1 -bottom-1">
              <FaMousePointer />
            </div>
          </div>
          <div
            className="icon flex items-center gap-x-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="icon border-2 text-Green border-Green p-1 text-sm rounded-lg">
              <FaBars />
            </span>
          </div>
        </div>
      </div>
      <div className="flex relative h-full justify-between gap-x-3">
        {/* * Leftmost side: Intro modal/sidebar */}
        <div
          className={`w-64 h-screen left-0 lg:rounded-xl -top-10 lg:top-0 lg:left-0 lg:h-full overflow-hidden bg-DeepNightBlack shadow-2xl z-50 lg:flex flex-col  lg:relative ${
            intro ? "flex absolute" : "hidden"
          }`}
        >
          <Intro isOpen={intro} setIsOpen={setIntro} />
        </div>
        {/* * Overlay for intro modal */}
        {intro && (
          <div
            onClick={() => setIntro(false)}
            className="fixed top-0 left-0 w-full h-full bg-black/50 backdrop-blur-[2px] z-40"
          ></div>
        )}

        {/* * Middle of screen: Main content */}
        <div className="w-full h-auto lg:w-9/12 shadow-2xl bg-DeepNightBlack relative overflow-auto overflow-x-hidden no-scrollbar">
          {children}
        </div>

        {/* * Right side: Navbar and fun message */}
        <div
          className={`hidden lg:block absolute lg:w-20 lg:relative bg-DeepNightBlack shadow-2xl rounded-xl overflow-hidden`}
        >
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="bg-MidNightBlack text-Green hidden lg:flex items-center h-16 justify-center text-2xl "
          >
            <span className="icon border-2 border-Green p-2 rounded-xl">
              <FaBars />
            </span>
          </div>
          {/* * Fun message when NavBar is idle */}
          <div className="flex flex-col items-center justify-center h-full px-2">
            <span className="text-xl text-Green">
              <FaRegSmileWink />
            </span>
            <span className="text-sm text-LightGray font-semibold mt-2 text-center">
              {/* * Fun message when NavBar is idle */}
              Navbar is chilling
            </span>
          </div>
        </div>
        {/* * Navigation bar component */}
        <Nav isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </div>
  );
}
