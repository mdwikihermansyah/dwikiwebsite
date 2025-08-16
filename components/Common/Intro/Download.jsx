import Link from "next/link";
/**
 * * Renders a download link for the resume with a hover effect on the icon.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.icon - The icon to display next to the text.
 * @returns {JSX.Element}
 */
const Download = ({ icon }) => {
  return (
    <>
      <Link
        href="/CV_Dwiki.pdf"
        target="_blank"
        className="flex flex-row text-LightGray items-center gap-x-4 pb-14 pt-4"
      >
        <span className="text-Snow">Download Resume</span>
        {/* * Adds a hover effect to the icon: scales up and changes color */}
        <span className="transition-transform transition-colors duration-300 ease-in-out hover:scale-125 hover:text-Lime-400">
          {icon}
        </span>
      </Link>
    </>
  );
};

export default Download;
