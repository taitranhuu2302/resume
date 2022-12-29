import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper';
import { GalleryType } from '../../constants';
import Fancybox from '../Fancybox';
import { useTranslation } from 'react-i18next';
import { RiGitRepositoryPrivateLine } from 'react-icons/ri';

interface IModal {
  open: boolean;
  onClose: () => void;
  data: GalleryType;
}

const Modal: React.FC<IModal> = ({open, onClose, data}) => {
  const {t} = useTranslation();
  return <>
    <div className={`modal ${open ? 'active' : ''}`}>
      <div className="modal-content">
        <div className="modal-header">
          <h3 className="modal-title">{data.name}</h3>
          <button className="modal-close" onClick={onClose}>&times;</button>
        </div>
        <div className="modal-body overflow-y-auto">
          <div className={'grid grid-cols-12 gap-2.5 max-h-full'}>
            <div className="col-span-8 h-full">
              <Fancybox>
                <Swiper className={'h-full'} navigation={true} modules={[Navigation]}>
                  {
                    data.gallery.map((item, index) => {
                      return (
                        <SwiperSlide key={index}>
                          <button className={'w-full h-full'} data-fancybox={'Gallery'} data-src={item}>
                            <img src={item} alt="" className={'w-full h-[400px] object-contain'}/>
                          </button>
                        </SwiperSlide>
                      );
                    })
                  }
                
                </Swiper>
              </Fancybox>
            </div>
            <div className="col-span-4">
              <p className={'font-bold text-2xl'}>{t('project_info')}</p>
              <hr className={'my-2.5'}/>
              <ul className={'flex flex-col gap-2.5'}>
                <li><span className={'font-bold'}>Client</span>: {data.client}</li>
                <li><span className={'font-bold'}>Technology</span>: {data.technology}</li>
                <li><span className={'font-bold'}>Position</span>: {data.position}</li>
                <li><span className={'font-bold'}>Project URL</span>:
                  <a href={data.projectLink} target={'_blank'} className={'text-blue-500 hover:underline'}
                     rel="noreferrer">{data.projectLink}</a></li>
                <li className={'flex items-start gap-2.5'}><span className={'font-bold'}>Github:</span> {data.github ?
                  <a href={data.github} target={'_blank'} className={'text-blue-500 hover:underline'}
                     rel="noreferrer">{data.github}</a> :
                  <div className={'flex items-center gap-1'}>
                    <RiGitRepositoryPrivateLine/>
                    <span className={'font-semibold'}>
                      Private
                    </span>
                  </div>
                }</li>
              </ul>
              <hr className={'my-2.5'}/>
              <div>
                <p className={'font-bold text-xl'}>{t('description')}</p>
                <p className={'mt-2.5'}>{data.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>;
};

export default Modal;