import React, { useState } from 'react';
import { BiBookContent, BiHome, BiUser } from 'react-icons/bi';
import { AiOutlineFile, AiOutlineMail } from 'react-icons/ai';
import { GiSkills } from 'react-icons/gi';
import { MdLanguage } from 'react-icons/md';
import { useTranslation } from 'react-i18next';
import { LANGUAGES } from '../../constants';
import i18next from 'i18next';
import Cookies from 'js-cookie'
import { toast } from 'react-toastify';

interface IState {
  scrollTo: (type: NavigationType) => void;
  activeTab: NavigationType
}

const Navbar: React.FC<IState> = ({scrollTo, activeTab}) => {
  const {t} = useTranslation();
  const [openLanguage, setOpenLanguage] = useState(false);
  const currentLanguageCode = Cookies.get('i18next') || 'en';
  const currentLanguage = LANGUAGES.find(l => l.code === currentLanguageCode);
  
  const onShowToast = (msg: string) => {
    toast.success(msg, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
  
  return (
    <div className="fixed hidden md:flex z-[999] top-1/2 -translate-y-1/2 left-5 flex-col gap-2.5">
      <ButtonNav  onClick={() => scrollTo('Home')} Icon={<BiHome className="min-w-[25px] min-h-[25px]"/>} text={t('home')}/>
      <ButtonNav  onClick={() => scrollTo('About')} Icon={<BiUser className="min-w-[25px] min-h-[25px]"/>} text={t('about')}/>
      <ButtonNav  onClick={() => scrollTo('LanguageTools')} Icon={<GiSkills className="min-w-[25px] min-h-[25px]"/>} text={t('language_tools')}/>
      <ButtonNav
        onClick={() => window.location.href = '/CV_TRAN_HUU_TAI.pdf'}
        Icon={<AiOutlineFile className="min-w-[25px] min-h-[25px]"/>}
        text={`Resume ( ${t('download')} )`}
      />
      <ButtonNav
        Icon={<BiBookContent className="min-w-[25px] min-h-[25px]"/>}
        onClick={() => scrollTo('Portfolio')}
        text={t('portfolio')}
      />
      <ButtonNav
        Icon={<AiOutlineMail className="min-w-[25px] min-h-[25px]"/>}
        onClick={() => scrollTo('Contact')}
        text={t('contact')}
      />
      <div className={'relative'}>
        <button onClick={() => setOpenLanguage(e => !e)}
                className={`${openLanguage ? 'bg-primary text-white' : 'bg-light-100 text-secondary'} p-4 rounded-full flex items-center overflow-hidden gap-4
      w-[56px] h-[56px] justify-start hover:bg-primary transition-all duration-300 hover:text-white font-semibold`}>
          <MdLanguage className="min-w-[25px] min-h-[25px]"/>
        </button>
        <div className={`menu ${openLanguage ? 'active' : ''}`}>
          {
            LANGUAGES.map(({code, name, country_code}) => {
              return (
                <button onClick={async () => {
                  await i18next.changeLanguage(code);
                  onShowToast(t('notify_change_language'));
                  setOpenLanguage(false);
                }} key={country_code}
                        className={`${currentLanguage?.code === code ? 'bg-primary text-white' : ''} text-left flex items-center gap-2 p-2 hover:bg-primary hover:text-white rounded`}>
                  <span className={`fi fi-${country_code}`}></span>
                  {name}
                </button>
              );
            })
          }
        </div>
      </div>
    </div>
  );
};

type ButtonNavType = {
  Icon: React.ReactNode;
  text: string;
  active?: boolean;
  onClick?: () => void;
};

const ButtonNav = ({Icon, text, active, onClick}: ButtonNavType) => {
  return (
    <button
      onClick={onClick}
      className={`${
        active ? 'bg-primary text-white' : 'bg-light-100 text-secondary'
      } p-4 rounded-full flex items-center overflow-hidden gap-4
      w-[56px] hover:w-full h-[56px] justify-start hover:bg-primary transition-all duration-300 hover:text-white font-semibold`}
    >
      {Icon} <span className={'whitespace-nowrap'}>{text}</span>
    </button>
  );
};

export default Navbar;
