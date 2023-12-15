import Image from "next/image";
import profile from "@/app/ui/img/profile.jpg";
import { FaGithubAlt } from "react-icons/fa6";
import { FiLinkedin } from "react-icons/fi";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdOutlineAlternateEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="h-[240px] bg-stone-950 text-offWhite w-full flex justify-center items-center shadow-lg shadow-black border-t-4 border-offWhite">
      <div className="m-10 text-center">
        <h1 className="text-xl sm:text-2xl">Gorgees Odisho</h1>
        <p className="text-gray-500">Web Developer</p>
        <div className="flex justify-around items-center my-5 text-lg sm:text-xl">
          <a href="https://github.com/gorgees04" target="_blank">
            <FaGithubAlt />
          </a>
          <a href="https://www.linkedin.com/in/gorgees/" target="_blank">
            <FiLinkedin />
          </a>
          <a href="mailto:gorgees041@gmail.com" target="_blank">
            <MdOutlineAlternateEmail />
          </a>
          <a
            href="https://www.google.com/maps/place/Amman,+Jordan"
            target="_blank"
          >
            <FaMapLocationDot />
          </a>
        </div>
      </div>
      <Image
        src={profile}
        alt="profile"
        width={100}
        height={0}
        className="rounded-full shadow-lg shadow-black m-5 sm:w-[140px]"
        priority={true}
      />
    </div>
  );
};

export default Footer;
