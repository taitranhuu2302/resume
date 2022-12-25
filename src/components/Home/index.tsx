import React from 'react';
import { FaFacebookF, FaGithub } from 'react-icons/fa';
import Typed from 'react-typed';
import './styles.scss';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Home = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div id={'Home'}
         ref={ref}
         style={{
           background: 'url("/bg.jfif") center no-repeat',
           backgroundSize: 'cover'
         }}
    >
      <div className="relative flex flex-col justify-center h-full container-ct">
        <AnimationOnScroll animateIn={'animate__zoomInRight'} initiallyVisible={true}>
          <h1 className="text-[64px] font-bold text-secondary">Trần Hữu Tài</h1>
          <p className="text-2xl font-semibold">
            <span>I'm </span>
            <Typed
              className="text-primary"
              strings={['Developer', 'Front End Developer', 'a passionate Web developer']}
              typeSpeed={70}
              loop={true}
            />
          </p>
          <div className="flex mt-5 items-center gap-5">
            <a href="https://www.facebook.com/tai.tranhuu2002" target={'_blank'} rel="noreferrer">
              <FaFacebookF size={22} className={'hover:text-primary text-secondary'}/>
            </a>
            <a href="https://github.com/taitranhuu1908" target={'_blank'} rel="noreferrer">
              <FaGithub size={23} className={'hover:text-primary text-secondary'}/>
            </a>
            {/* <a href="/" target={"_blank"} rel="noreferrer">
            <FaSkype size={23} className={"hover:text-primary text-secondary"} />
          </a> */}
          </div>
        </AnimationOnScroll>
      </div>
    </div>
  );
});

export default Home;
