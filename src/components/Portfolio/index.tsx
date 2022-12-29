import React, { useState } from 'react';
import './styles.scss';
import { AnimationOnScroll } from 'react-animation-on-scroll/dist/js/components';
import { useTranslation } from 'react-i18next';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { GALLERY_IMAGES, GalleryType } from '../../constants';
import { FiLink } from 'react-icons/fi';
import ModalPortfolio from '../ModalPortfolio';

const Portfolio = React.forwardRef<HTMLDivElement>((props, ref) => {
  const [open, setOpen] = useState(false);
  const {t} = useTranslation();
  const [dataModal, setDataModal] = useState<GalleryType | null>(null);
  return <div ref={ref} className={'container-ct'}>
    <div className="section-header">
      <AnimationOnScroll animateIn="animate__zoomIn">
        <h2 className="section-title">{t('portfolio')}</h2>
      </AnimationOnScroll>
    </div>
    <div>
      <ResponsiveMasonry>
        <Masonry columnsCount={3} gutter={'10px'}>
          {GALLERY_IMAGES.map((image , i) => (
            <div key={image.name} className={'gallery-item'}>
              <img
                src={image.bgCover}
                style={{width: '100%', display: 'block'}}
                alt={''}
                className={'rounded shadow-xl'}
              />
              <div className={'gallery-item-overlay'}>
                <p className={'font-semibold'}>{image.name}</p>
                <button onClick={() => {
                  setOpen(true)
                  setDataModal(image)
                }}>
                  <FiLink size={22}/>
                </button>
              </div>
            </div>
          ))}
        </Masonry>
      </ResponsiveMasonry>
      {dataModal && (<ModalPortfolio open={open} data={dataModal} onClose={() => setOpen(false)}/>)}
    </div>
  </div>;
});

export default Portfolio;