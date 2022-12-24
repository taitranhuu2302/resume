import React from "react";
import { BiBookContent, BiHome, BiUser } from "react-icons/bi";
import { AiOutlineFile, AiOutlineMail } from "react-icons/ai";
import { GiSkills } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className="fixed hidden md:flex z-[999] top-1/2 -translate-y-1/2 left-5 flex-col gap-2.5">
      <ButtonNav Icon={<BiHome className="min-w-[25px] min-h-[25px]" />} text={"Home"} />
      <ButtonNav Icon={<BiUser className="min-w-[25px] min-h-[25px]" />} text={"About"} />
      <ButtonNav Icon={<GiSkills className="min-w-[25px] min-h-[25px]" />} text={"Skills"} />
      <ButtonNav
        href="/CV-Tran-Huu-Tai.pdf"
        Icon={<AiOutlineFile className="min-w-[25px] min-h-[25px]" />}
        text={"Resume"}
      />
      <ButtonNav
        Icon={<BiBookContent className="min-w-[25px] min-h-[25px]" />}
        text={"Portfolio"}
      />
      <ButtonNav Icon={<AiOutlineMail className="min-w-[25px] min-h-[25px]" />} text={"Contact"} />
    </div>
  );
};

type ButtonNavType = {
  Icon: React.ReactNode;
  text: string;
  active?: boolean;
  href?: string;
};

const ButtonNav = ({ Icon, text, active, href }: ButtonNavType) => {
  return (
    <a
      href={href ? href : "/"}
      className={`${
        active ? "bg-primary" : "bg-light-100"
      } p-4 rounded-full flex items-center overflow-hidden gap-4
      w-[56px] hover:w-full h-[56px] justify-start text-secondary hover:bg-primary transition-all duration-300 hover:text-white font-semibold`}
    >
      {Icon} <span>{text}</span>
    </a>
  );
};

export default Navbar;
