import { AiFillCopyrightCircle } from "react-icons/ai";
import { MdMail } from "react-icons/md";
import { AiOutlineWhatsApp } from "react-icons/ai";

/**
 * * Footer component for Dwiki's portfolio.
 * * Menampilkan copyright, kontak email, dan WhatsApp.
 */
const Footer = () => {
  return (
    <div id="intro" className="mt-4 mb-10 lg:mb-0">
      <div className="flex h-10 items-center justify-between text-xs font-normal text-LightGray py-4 px-2 md:px-4 w-full bg-MidNightBlack">
        <div className="flex items-center">
          <div className="mr-1 text-base">
            <AiFillCopyrightCircle />
          </div>
          <span>2025 All Rights Reserved.</span>
        </div>
        <div className="flex items-center">
          <span>
            Portofolio <span role="img" aria-label="love"></span> by{" "}
            <span className="font-bold">Muhamad Dwiki Hermansyah</span>
          </span>
        </div>
        <div className="hidden md:flex items-center gap-x-4">
          <a
            href="mailto:dwikihermansyah17@gmail.com"
            className="flex items-center hover:underline"
            aria-label="Email Dwiki"
          >
            <MdMail className="mr-1 text-base" />
            <span>dwikihermansyah17@gmail.com</span>
          </a>
          <a
            href="https://wa.me/6281324676652"
            target="_blank"
            rel="noreferrer"
            className="flex items-center hover:underline"
            aria-label="WhatsApp Dwiki"
          >
            <AiOutlineWhatsApp className="mr-1 text-base" />
            <span>+62 813-2467-6652</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
