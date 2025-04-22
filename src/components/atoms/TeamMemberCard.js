import Image from "next/image";
import { FaTwitter, FaDribbble, FaFacebook, FaInstagram, FaGithub, FaSkype, FaGoogle } from "react-icons/fa";

const iconsMap = {
  twitter: <FaTwitter />,
  dribbble: <FaDribbble />,
  facebook: <FaFacebook />,
  instagram: <FaInstagram />,
  github: <FaGithub />,
  skype: <FaSkype />,
  google: <FaGoogle />,
};

const TeamMemberCard = ({ name, role, src, socials }) => {
  return (
    <div className="flex flex-col items-center text-center gap-2">
      <Image
        src={src}
        alt={name}
        width={75}
        height={75}
        className="rounded-full object-cover"
      />
      <h3 className="text-white font-medium text-md leading-7">{name}</h3>
      <p className="text-white/60 text-sm">{role}</p>
      <div className="flex gap-4  text-sm mt-1">
        {socials.map((platform, i) => (
          <span key={i} className="hover:text-white/80 cursor-pointer">
            {iconsMap[platform]}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TeamMemberCard;
