import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll/dist/js/components';
import { useTranslation } from 'react-i18next';

const Skill = React.forwardRef<HTMLDivElement>((props, ref) => {
  const {t} = useTranslation();
  
  return (
    <div ref={ref} className="container-ct">
      <div className="section-header">
        <AnimationOnScroll animateIn="animate__zoomIn">
          <h2 className="section-title">{t('language_tools')}</h2>
        </AnimationOnScroll>
      </div>
      <div className="grid grid-cols-2 gap-2.5 lg:grid-cols-4">
        <div className="border-r">
          <h3 className="section-sub-title text-center">{t('programing_language')}</h3>
          <div className="grid grid-cols-2 justify-center px-2.5 gap-5 py-5">
            <Icon src={`${process.env.PUBLIC_URL}/programing-language/csharp.svg`}/>
            <Icon src={`${process.env.PUBLIC_URL}/programing-language/java.svg`}/>
            <Icon src={`${process.env.PUBLIC_URL}/programing-language/js.svg`}/>
            <Icon src={`${process.env.PUBLIC_URL}/programing-language/ts.svg`}/>
            <Icon src={`${process.env.PUBLIC_URL}/programing-language/php.svg`}/>
          </div>
        </div>
        <div className="border-r">
          <h3 className="section-sub-title text-center">Font-End</h3>
          <div className="grid grid-cols-2 justify-center px-2.5 gap-5 py-5">
            <Icon src={`${process.env.PUBLIC_URL}/front-end/html.svg`}/>
            <Icon src={`${process.env.PUBLIC_URL}/front-end/css.svg`}/>
            <Icon src={`${process.env.PUBLIC_URL}/front-end/sass.svg`}/>
            <Icon src={`${process.env.PUBLIC_URL}/front-end/react.svg`}/>
            <Icon src={`${process.env.PUBLIC_URL}/front-end/redux.svg`}/>
            <Icon src={`${process.env.PUBLIC_URL}/front-end/tailwind.svg`}/>
            <Icon src={`${process.env.PUBLIC_URL}/front-end/nextjs.svg`}/>
          </div>
        </div>
        <div className="border-r">
          <h3 className="section-sub-title text-center">Backend</h3>
          <div className="grid grid-cols-2 justify-center px-2.5 gap-5 py-5">
            <Icon src={`${process.env.PUBLIC_URL}/backend/nodejs.svg`}/>
            <Icon src={`${process.env.PUBLIC_URL}/backend/express.svg`}/>
            <Icon src={`${process.env.PUBLIC_URL}/backend/laravel.svg`}/>
            <Icon src={`${process.env.PUBLIC_URL}/backend/dotnet.svg`}/>
            <Icon src={`${process.env.PUBLIC_URL}/backend/mongodb.svg`}/>
            <Icon src={`${process.env.PUBLIC_URL}/backend/sql-server.svg`}/>
            <Icon src={`${process.env.PUBLIC_URL}/backend/mysql.svg`}/>
          </div>
        </div>
        <div>
          <h3 className="section-sub-title text-center">{t('other')}</h3>
          <div className="grid grid-cols-2 justify-center px-2.5 gap-5 py-5">
            <Icon src={`${process.env.PUBLIC_URL}/other/git.svg`}/>
          </div>
        </div>
      </div>
    </div>
  );
  
});

type IconType = {
  src: string;
};

const Icon = ({src = ''}: IconType) => {
  return (
    <AnimationOnScroll animateIn="animate__flipInX">
      <div className="flex items-center justify-center">
        <img src={src} alt="" className="w-[50px] h-[50px]"/>
      </div>
    </AnimationOnScroll>
  );
};

export default Skill;
