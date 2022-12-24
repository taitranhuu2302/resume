import React from "react";
import { FaFacebookF, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="container-ct bg-[#f7f8f9]">
      <h3 className="text-color text-[36px] font-bold mb-[10px] text-center">Trần Hữu Tài</h3>
      <p className="mb-[40px] text-center text-color">
        {`Let's round of his life every job as if it were the last work - Marc Aurele`}
      </p>
      <div className="flex items-center justify-center gap-4">
        <a
          href="https://www.facebook.com/tai.tranhuu2002"
          target={"_blank"}
          rel="noreferrer"
          className="p-2 rounded-full bg-primary hover:bg-opacity-90"
        >
          <FaFacebookF size={22} className={"text-white"} />
        </a>
        <a
          href="https://github.com/taitranhuu1908"
          target={"_blank"}
          rel="noreferrer"
          className="p-2 rounded-full bg-primary hover:bg-opacity-90"
        >
          <FaGithub size={23} className={"text-white"} />
        </a>
      </div>
      <div className="flex items-center justify-center mt-10">
        <p className="text-[14px]">
          © Copyright <span className="font-bold">Tran Huu Tai</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
