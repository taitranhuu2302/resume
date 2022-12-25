import React, { useState } from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { IoLocationOutline } from 'react-icons/io5';
import { HiOutlineMail } from 'react-icons/hi';
import { BsPhone } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';

const Contact = React.forwardRef<HTMLDivElement>((props, ref) => {
  const {t} = useTranslation();
  const [mailContent, setMailContent] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const onChangeInputContact = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setMailContent({
      ...mailContent,
      [e.target.name]: e.target.value,
    });
  };
  
  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const body = `The email was sent from ${mailContent.email} with the content: ${mailContent.message}`;
    window.location.href = `mailto:tai.tranhuu2002@gmail.com?subject=${mailContent.subject}&body=${body}`;
    setMailContent({
      name: '',
      email: '',
      subject: '',
      message: '',
    })
  };
  
  return (
    <div ref={ref} className="container-ct">
      <div className="section-header">
        <AnimationOnScroll animateIn="animate__zoomIn">
          <h2 className="section-title">{t('contact')}</h2>
        </AnimationOnScroll>
      </div>
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-12 order-last lg:order-none lg:col-span-4 flex flex-col gap-5">
          <IconContact
            Icon={<IoLocationOutline size={20} className={'text-primary'}/>}
            name={t('address')}
            value="Thành phố Huế, Việt Nam"
          />
          <IconContact
            Icon={<HiOutlineMail size={20} className={'text-primary'}/>}
            name="Email"
            value="tai.tranhuu2002@gmail.com"
          />
          <IconContact
            Icon={<BsPhone size={20} className={'text-primary'}/>}
            name={t('phone_number')}
            value="0931983495"
          />
        </div>
        <form onSubmit={onSubmit} className="col-span-12 lg:col-span-8 grid grid-cols-12 gap-5 h-fit">
          <div className="col-span-6">
            <input
              required
              name="name"
              onChange={onChangeInputContact}
              placeholder="Your Name"
              type="text"
              className="input-control w-full"
            />
          </div>
          <div className="col-span-6">
            <input
              required
              placeholder="Your Email"
              type="email"
              name="email"
              onChange={onChangeInputContact}
              className="input-control w-full"
            />
          </div>
          <div className="col-span-12">
            <input
              name="subject"
              onChange={onChangeInputContact}
              required
              placeholder="Subject"
              type="text"
              className="input-control w-full"
            />
          </div>
          <div className="col-span-12">
            <textarea
              name="message"
              onChange={onChangeInputContact}
              required
              placeholder="Message"
              rows={5}
              className="input-control w-full"
            />
          </div>
          <div className="col-span-12 flex items-center justify-center">
            <button
              type="submit"
              className="bg-primary py-[10px] px-[35px] text-center text-white rounded-[50px]"
            >
              {t('send_message')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
  
});

type IconContactType = {
  Icon: React.ReactNode;
  name: string;
  value: string;
};

const IconContact = ({Icon, name, value}: IconContactType) => {
  return (
    <div className="flex items-center gap-4">
      <div className="bg-[#eef7ff] w-fit p-3 rounded-full flex items-center justify-center min-w-[44px] min-h-[44px]">
        {Icon}
      </div>
      <div>
        <p className="text-color text-[22px] font-semibold font-relaweay">{name} :</p>
        <p className="text-[#728394] text-[14px]">{value}</p>
      </div>
    </div>
  );
};

export default Contact;
