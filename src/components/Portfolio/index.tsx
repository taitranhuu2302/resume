import React, { useState } from 'react';
import './styles.scss';
import { AnimationOnScroll } from 'react-animation-on-scroll/dist/js/components';
import { useTranslation } from 'react-i18next';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { GALLERY_IMAGES } from '../../constants';
import { FiLink } from 'react-icons/fi';
import ModalPortfolio from '../ModalPortfolio';

const Portfolio = React.forwardRef<HTMLDivElement>((props, ref) => {
  const [open, setOpen] = useState(false);
  const {t} = useTranslation();
  return <div ref={ref} className={'container-ct'}>
    <div className="section-header">
      <AnimationOnScroll animateIn="animate__zoomIn">
        <h2 className="section-title">{t('portfolio')}</h2>
      </AnimationOnScroll>
    </div>
    <div>
      <ResponsiveMasonry>
        <Masonry columnsCount={3} gutter={'10px'}>
          {GALLERY_IMAGES.map((image, i) => (
            <div className={'gallery-item'}>
              <img
                key={i}
                src={image.bgCover}
                style={{width: '100%', display: 'block'}}
                alt={''}
                className={'rounded shadow-xl'}
              />
              <div className={'gallery-item-overlay'}>
                <p className={'font-semibold'}>{image.name}</p>
                <button onClick={() => setOpen(true)}>
                  <FiLink size={22}/>
                </button>
              </div>
            </div>
          ))}
        </Masonry>
      </ResponsiveMasonry>
      <ModalPortfolio open={open} onClose={() => setOpen(false)}/>
    </div>
  </div>;
});

export default Portfolio;