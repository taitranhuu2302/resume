import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll/dist/js/components";

const Skill = () => {
  return (
    <div className="container-ct">
      <div className="section-header">
        <AnimationOnScroll animateIn="animate__zoomIn">
          <h2 className="section-title">Công nghệ và công cụ</h2>
        </AnimationOnScroll>
      </div>
      <div className="grid grid-cols-2 gap-2.5 lg:grid-cols-4">
        <div className="border-r">
          <h3 className="section-sub-title text-center">Ngôn ngữ lập trình</h3>
          <div className="grid grid-cols-2 justify-center px-2.5 gap-5 py-5">
            <Icon src="/programing-languague/csharp.svg" />
            <Icon src="/programing-languague/java.svg" />
            <Icon src="/programing-languague/js.svg" />
            <Icon src="/programing-languague/ts.svg" />
            <Icon src="/programing-languague/php.svg" />
          </div>
        </div>
        <div className="border-r">
          <h3 className="section-sub-title text-center">Font-End</h3>
          <div className="grid grid-cols-2 justify-center px-2.5 gap-5 py-5">
            <Icon src="/front-end/html.svg" />
            <Icon src="/front-end/css.svg" />
            <Icon src="/front-end/sass.svg" />
            <Icon src="/front-end/react.svg" />
            <Icon src="/front-end/redux.svg" />
            <Icon src="/front-end/tailwind.svg" />
            <Icon src="/front-end/nextjs.svg" />
          </div>
        </div>
        <div className="border-r">
          <h3 className="section-sub-title text-center">Backend</h3>
          <div className="grid grid-cols-2 justify-center px-2.5 gap-5 py-5">
            <Icon src="/backend/nodejs.svg" />
            <Icon src="/backend/express.svg" />
            <Icon src="/backend/laravel.svg" />
            <Icon src="/backend/dotnet.svg" />
            <Icon src="/backend/mongodb.svg" />
            <Icon src="/backend/sql-server.svg" />
            <Icon src="/backend/mysql.svg" />
          </div>
        </div>
        <div>
          <h3 className="section-sub-title text-center">Khác</h3>
          <div className="grid grid-cols-2 justify-center px-2.5 gap-5 py-5">
            <Icon src="/other/git.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

type IconType = {
  src: string;
};

const Icon = ({ src = "" }: IconType) => {
  return (
    <AnimationOnScroll animateIn="animate__flipInX">
      <div className="flex items-center justify-center">
        <img src={src} alt="" className="w-[50px] h-[50px]" />
      </div>
    </AnimationOnScroll>
  );
};

export default Skill;
