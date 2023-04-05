import React, { useState } from 'react';
import './styles.scss';
import { AnimationOnScroll } from 'react-animation-on-scroll/dist/js/components';
import { useTranslation } from 'react-i18next';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { GALLERY_IMAGES, GalleryType, ProjectType } from '../../constants';
import { FiLink } from 'react-icons/fi';
import ModalPortfolio from '../ModalPortfolio';
import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion';

const Portfolio = React.forwardRef<HTMLDivElement>((props, ref) => {
  const [open, setOpen] = useState(false);
  const {t} = useTranslation();
  const [dataModal, setDataModal] = useState<GalleryType | null>(null);
  const [activeTabs, setActiveTabs] = useState<ProjectType>('OUTSTANDING');
  
  return <div ref={ref} className={'container-ct'}>
    <div className="section-header">
      <AnimationOnScroll animateIn="animate__zoomIn">
        <h2 className="section-title">{t('portfolio')}</h2>
      </AnimationOnScroll>
    </div>
    <ul className={'flex items-center rounded  justify-center gap-3 mb-5'}>
      <li
        onClick={() => setActiveTabs('NORMAL')}
        className={twMerge(`py-2 px-2 hover:border-primary border-transparent border-b-[3px] transition-all duration-200 font-semibold cursor-pointer`,
          activeTabs === 'NORMAL' && 'border-primary')}>{t('All')}
      </li>
      <li
        onClick={() => setActiveTabs('OUTSTANDING')}
        className={twMerge('py-2 px-2 hover:border-primary border-transparent border-b-[3px] transition-all duration-200 font-semibold cursor-pointer',
          activeTabs === 'OUTSTANDING' && 'border-primary')}>{t('Outstanding')}
      </li>
    </ul>
    <div>
      <ResponsiveMasonry>
        <Masonry columnsCount={3} gutter={'10px'}>
          {
            activeTabs === 'OUTSTANDING' ? (
              GALLERY_IMAGES.map((image, index) => {
                if (image.type === 'OUTSTANDING') {
                  const random = Math.floor(Math.random() * 5) % 2 === 0;
                  return (
                    <motion.div initial={random ? {x: '5vw'} : {y: '5vh'}} animate={random ? {x: 0} : {y: 0}}
                                transition={{duration: 0.5}} key={image.name} className={'gallery-item cursor-pointer'}
                                onClick={() => {
                                  setOpen(true);
                                  setDataModal(image);
                                }}>
                      <img
                        src={image.bgCover}
                        style={{width: '100%', display: 'block'}}
                        alt={''}
                        className={'rounded shadow-xl'}
                      />
                      <div className={'gallery-item-overlay'}>
                        <p className={'font-semibold'}>{image.name}</p>
                        <button>
                          <FiLink size={22}/>
                        </button>
                      </div>
                    </motion.div>
                  );
                }
                return null;
              })
            ) : (
              GALLERY_IMAGES.map((image, index) => {
                const random = Math.floor(Math.random() * 5) % 2 === 0;
                return (
                  <motion.div initial={random ? {x: '5vw'} : {y: '5vh'}} animate={random ? {x: 0} : {y: 0}}
                              transition={{duration: 0.5}} key={index}
                              className={'gallery-item cursor-pointer'}
                              onClick={() => {
                                setOpen(true);
                                setDataModal(image);
                              }}>
                    <img
                      src={image.bgCover}
                      style={{width: '100%', display: 'block'}}
                      alt={''}
                      className={'rounded shadow-xl'}
                    />
                    <div className={'gallery-item-overlay'}>
                      <p className={'font-semibold'}>{image.name}</p>
                      <button>
                        <FiLink size={22}/>
                      </button>
                    </div>
                  </motion.div>
                );
              })
            )
          }
        </Masonry>
      </ResponsiveMasonry>
      {dataModal && (<ModalPortfolio open={open} data={dataModal} onClose={() => setOpen(false)}/>)}
    </div>
  </div>;
});

export default Portfolio;