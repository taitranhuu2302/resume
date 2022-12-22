import React from "react";
import "./styles.scss";
import { FaFacebookF, FaGithub, FaSkype } from "react-icons/fa";

const Home = () => {
  return (
    <div id={"Home"}>
      <div className="relative flex flex-col justify-center h-full container px-20 mx-auto">
        <h1 className="text-[64px] font-bold text-secondary">Trần Hữu Tài</h1>
        <p className="text-2xl font-semibold">
          <span>I'm</span>
          <span className="text-primary"> Web Developer</span>
        </p>
        <div className="flex mt-5 items-center gap-5">
          <a href="/" target={"_blank"}>
            <FaFacebookF size={22} className={"hover:text-primary text-secondary"} />
          </a>
          <a href="/" target={"_blank"}>
            <FaGithub size={23} className={"hover:text-primary text-secondary"} />
          </a>
          <a href="/" target={"_blank"}>
            <FaSkype size={23} className={"hover:text-primary text-secondary"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
