import React  from 'react';

// @ts-ignore
import { Fancybox as NativeFancybox } from '@fancyapps/ui/dist/fancybox.umd';
import '@fancyapps/ui/dist/fancybox.css';
import { useEffectOnce } from 'usehooks-ts';

const Fancybox = (props: any) => {
  const delegate = props.delegate || '[data-fancybox]';
  
  useEffectOnce(() => {
    const opts = props.options || {};
    
    NativeFancybox.bind(delegate, opts);
    
    return () => {
      NativeFancybox.destroy();
    };
  });
  
  return <>{props.children}</>;
};

export default Fancybox;
