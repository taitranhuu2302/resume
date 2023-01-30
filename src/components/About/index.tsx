import { MdOutlineArrowRight } from "react-icons/md";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { useTranslation } from "react-i18next";
import React from "react";

const About = React.forwardRef<HTMLDivElement>((props, ref) => {
  const { t } = useTranslation();

  return (
    <div ref={ref} id="about" className="container-ct">
      <div className="section-header">
        <AnimationOnScroll animateIn="animate__zoomIn">
          <h2 className="section-title">{t("about")}</h2>
          <p className="text-center paragraph px-5">{t("michael_dell")}</p>
        </AnimationOnScroll>
      </div>
      <div className="flex flex-col lg:flex-row gap-10">
        <AnimationOnScroll animateIn="animate__slideInLeft">
          <div className="flex lg:justify-start justify-center">
            <img
              src="/avatar.png"
              alt=""
              className="max-w-[416px] max-h-[416px] min-w-[416px] min-h-[416px] rounded"
            />
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__slideInRight">
          <div className="flex-grow">
            <h3 className="section-sub-title">Web Developer ( Front-end ) </h3>
            <div className="grid grid-cols-2 gap-5 my-5">
              <Info name={t("full_name")} value={"Trần Hữu Tài"} />
              <Info name={t("dob")} value={"23/02/2002"} />
              <Info name={t("phone_number")} value={"0931983495"} />
              <Info name={t("email")} value={"tai.tranhuu2002@gmail.com"} />
              <Info name={t("city")} value={"Thành phố Huế"} />
              <Info name={t("nation")} value={"Việt Nam"} />
            </div>
            <p className="text-justify paragraph">{t("about_description")}</p>
          </div>
        </AnimationOnScroll>
      </div>
    </div>
  );
});

type InfoType = {
  name: string;
  value: string;
};

const Info = ({ name, value }: InfoType) => {
  return (
    <div className="flex items-center flex-nowrap gap-1">
      <MdOutlineArrowRight className="text-primary min-w-[15px] min-h-[15px]" />
      <p className="break-all">
        <span className="font-bold text-color">{name}</span>: <span>{value}</span>
      </p>
    </div>
  );
};

export default About;
