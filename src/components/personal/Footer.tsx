import {
  LucideGithub,
  LucideInstagram,
  LucideLinkedin,
  LucideTwitter,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { MdOutlineMail, MdOutlineFacebook } from "react-icons/md";
const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className=" flex flex-col sm:flex-row justify-around items-center gap-3 py-6 bg-gray-200 px-4 ">
      <div className="social-link flex text-lg text-primary  gap-2">
        <LucideGithub
          href="https://github.com/Emmanuel-Olawuni"
          target="_blank"
          size={24}
        />
        <LucideLinkedin
          href="https://www.linkedin.com/in/emmanuelolawuni/"
          target="_blank"
          size={24}
        />
        <LucideTwitter
          size={24}
          href="https://twitter.com/Dev_Emmanuel_"
          target="_blank"
        />
        <MdOutlineMail size={24} href="mailto:admin@techpad.com.ng" />
      </div>
      <div className="copyright"> &copy; {`${year}`}</div>
      <div className="footernote">
        <Link
          href="https://techpad.com.ng"
          target="_blank"
          className=" underline underline-offset-2 decoration-primary"
        >
          Developed by Emmanuel.
        </Link>
      </div>
    </div>
  );
};

export default Footer;
