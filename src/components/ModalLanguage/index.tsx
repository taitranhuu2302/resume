import React, { useState } from 'react';
import Select from 'react-select';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import { toast } from 'react-toastify';
import { IS_CHOOSE_LANGUAGE } from '../../constants';

interface IModalLanguage {
  open: boolean;
  onClose: () => void;
}

const options = [
  {value: 'vn', label: 'Vietnamese'},
  {value: 'en', label: 'English'},
];

const ModalLanguage: React.FC<IModalLanguage> = ({open, onClose}) => {
  const {t} = useTranslation();
  const [language, setLanguage] = useState('');
  
  const handleChooseLanguage = async () => {
    if (!language) {
      onShowToast(t('select_language'), 'error');
      return;
    }
    
    await i18next.changeLanguage(language);
    onShowToast(t('notify_change_language'), 'success');
    localStorage.setItem(IS_CHOOSE_LANGUAGE, "true");
    onClose();
  };
  
  const onShowToast = (msg: string, type: "success" | "error") => {
    if (type === 'success') {
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
      return;
    }
    
    if (type === 'error') {
      toast.error(msg, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
  }
  
  return <>
    <div className={`modal ${open ? 'active' : ''}`}>
      <div className="modal-content" style={{maxWidth: '500px', minHeight: '220px', height: 'fit-content'}}>
        <div className="modal-header">
          <h3 className="modal-title">{t('choose_language')}</h3>
          <button className="modal-close" onClick={onClose}>&times;</button>
        </div>
        <div className="modal-body overflow-y-auto">
          <Select options={options} onChange={(item) => item && setLanguage(item.value)}/>
          <div className={'flex justify-end mt-5'}>
            <button onClick={handleChooseLanguage}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              {t('submit')}
            </button>
          </div>
        </div>
      </div>
    </div>
  </>;
};

export default ModalLanguage;