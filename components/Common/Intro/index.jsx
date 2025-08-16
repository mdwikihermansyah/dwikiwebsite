import Link from "next/link";
import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import GlintsIcon from "../Icons/GlintsIcon";
import JobstreetIcon from "../Icons/JobstreetIcon";
import Contact from "./Contact";
import Download from "./Download";
import Languages from "./Languages";
import Location from "./Location";
import Tools from "./Tools";
import Skills from "./Skills";
import Image from "next/image";
import { NAME, DESIGNATION, SOCIAL_LINKS } from "../../../constants/constants";
import Dwiki from "../../../public/images/dwiki.png";

/**
 * * Helper function to validate social link URLs.
 * Returns a valid string URL or null if not valid.
 * @param {string|undefined|null} url
 * @returns {string|null}
 */
function getValidUrl(url) {
  // * Checks if url is a non-empty string
  return typeof url === "string" && url.trim().length > 0 ? url : null;
}

const Intro = () => {
  return (
    <>
      {/* * Fixed at top: Profile section */}
      <div className="headerr z-50 absolute bg-MidNightBlack backdrop-blur-sm inset-y-0 h-48 top-0 flex items-center justify-center w-full flex-col px-4 gap-y-4">
        <Image
          className="w-20 h-20 rounded-full"
          src={Dwiki}
          alt="profile picture"
        />
        <div className="flex flex-col items-center justify-center">
          <span className="text-gray-300 text-base font-bold break-normal">
            {NAME}
          </span>
          <span className="text-sm text-LightGray text-center mt-2">
            {DESIGNATION}
          </span>
        </div>
      </div>

      {/* * Middle components */}
      <div className="beech z-20 flex flex-col overflow-y-scroll pt-48 top-48 space-y-6 divide-y divide-white overflow-x-hidden no-scrollbar px-4">
        <Location />
        <Languages />
        <Skills />
        <Tools />
        <Contact />
        <Download icon={<FaDownload />} />
      </div>

      {/* * Fixed at bottom: Social links */}
      <div className="footer absolute flex justify-center space-x-6 text-xl items-center bottom-0 z-50 h-10 w-full bg-MidNightBlack text-Snow">
        {/* * Only render Link if the URL is valid */}
        {getValidUrl(SOCIAL_LINKS.GITHUB) && (
          <Link
            href={SOCIAL_LINKS.GITHUB}
            target="_blank"
            rel="noreferrer"
            className=""
          >
            <FaGithub />
          </Link>
        )}
        {getValidUrl(SOCIAL_LINKS.LINKEDIN) && (
          <Link href={SOCIAL_LINKS.LINKEDIN} target="_blank" rel="noreferrer">
            <FaLinkedin />
          </Link>
        )}
        {/* {getValidUrl(SOCIAL_LINKS.GLINTS) && (
          <Link href={SOCIAL_LINKS.GLINTS} target="_blank" rel="noreferrer">
            <GlintsIcon />
          </Link>
        )}
        {getValidUrl(SOCIAL_LINKS.JOBSTREET) && (
          <Link href={SOCIAL_LINKS.JOBSTREET} target="_blank" rel="noreferrer">
            <JobstreetIcon />
          </Link>
        )} */}
        {/* 
        {getValidUrl(SOCIAL_LINKS.TWITTER) && (
          <Link href={SOCIAL_LINKS.TWITTER} target='_blank' rel='noreferrer' className=''>
            <FaTwitter />
          </Link>
        )} 
        */}
        {/* 
        {getValidUrl(SOCIAL_LINKS.FACEBOOK) && (
          <Link href={SOCIAL_LINKS.FACEBOOK} target='_blank' rel='noreferrer' className=''>
            <FaFacebook />
          </Link>
        )} 
        */}

        {/* * Glints dan Jobstreet disesuaikan tampilannya */}
      </div>
    </>
  );
};

export default Intro;
